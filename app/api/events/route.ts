import { google } from "googleapis";
import { NextResponse } from "next/server";

interface Event {
  name: string;
  image: string;
  pdf: string;
  created_at: string;
}

interface EventsResponse {
  past_events: Event[];
  upcoming_events: Event[];
  all_events: Event[];
  last_updated: string;
}

// In-memory cache
let eventsCache: EventsResponse | null = null;
let lastCacheTime = 0;
const CACHE_DURATION = Number.parseInt(
  process.env.EVENTS_CACHE_DURATION || "120000"
); // 2 minutes

// Create JWT client from environment variables
function createJWTClient() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

  if (!privateKey || !clientEmail) {
    throw new Error("Missing Google service account credentials");
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });
}

// Get access token
async function getAccessToken() {
  const jwtClient = createJWTClient();
  const tokens = await jwtClient.authorize();
  return tokens.access_token;
}

// List files in a folder
async function listFiles(folderId: string, accessToken: string) {
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&fields=files(id,name,mimeType,webViewLink,createdTime)&supportsAllDrives=true&includeItemsFromAllDrives=true&pageSize=1000`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const data = await res.json();
  return data.files || [];
}

// Build structured events
async function buildEventData(
  parentFolderId: string,
  accessToken: string,
  folderType: string
): Promise<Event[]> {
  const subFolders = await listFiles(parentFolderId, accessToken);
  const pdfs: any[] = [];

  // Fetch all pdf files from subfolders
  for (const folder of subFolders) {
    if (folder.mimeType !== "application/vnd.google-apps.folder") continue;
    const name = folder.name.toLowerCase();
    const files = await listFiles(folder.id, accessToken);

    if (name.includes("pdf")) pdfs.push(...files);
  }

  const eventsMap: { [key: string]: Event } = {};

  for (const pdf of pdfs) {
    const base = pdf.name.split(".")[0];
    if (!eventsMap[base]) {
      eventsMap[base] = {
        name: base,
        image: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${base}`,
        pdf: pdf.webViewLink,
        created_at: pdf.createdTime,
      };
    }
  }
  return Object.values(eventsMap);
}

// Sort events descending by date
function sortEvents(events: Event[]): Event[] {
  return events.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

// Fetch fresh events data
async function fetchEventsData(): Promise<EventsResponse> {
  try {
    const accessToken = await getAccessToken();
    const parentFolderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!parentFolderId) {
      throw new Error("Missing Google Drive folder ID");
    }
    if (!accessToken) {
      throw new Error("Failed to get Google access token");
    }

    const mainFolders = await listFiles(parentFolderId, accessToken);

    let pastId: string | null = null;
    let upcomingId: string | null = null;

    for (const f of mainFolders) {
      if (f.name.toLowerCase() === process.env.PAST_FOLDER_NAME?.toLowerCase())
        pastId = f.id;
      if (
        f.name.toLowerCase() === process.env.UPCOMING_FOLDER_NAME?.toLowerCase()
      )
        upcomingId = f.id;
    }

    const pastEvents = pastId
      ? sortEvents(await buildEventData(pastId, accessToken, "past"))
      : [];
    const upcomingEvents = upcomingId
      ? sortEvents(await buildEventData(upcomingId, accessToken, "upcoming"))
      : [];
    const allEvents = [...upcomingEvents, ...pastEvents];

    return {
      past_events: pastEvents,
      upcoming_events: upcomingEvents,
      all_events: allEvents,
      last_updated: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}

// Check if cache needs update (compare with actual data)
async function shouldUpdateCache(): Promise<boolean> {
  if (!eventsCache) return true;

  try {
    const freshData = await fetchEventsData();

    // Compare the number of events and last created dates
    const cacheAllCount = eventsCache.all_events.length;
    const freshAllCount = freshData.all_events.length;

    if (cacheAllCount !== freshAllCount) return true;

    // Compare latest event timestamps
    if (eventsCache.all_events.length > 0 && freshData.all_events.length > 0) {
      const cacheLatest = eventsCache.all_events[0]?.created_at;
      const freshLatest = freshData.all_events[0]?.created_at;

      if (cacheLatest !== freshLatest) return true;
    }

    return false;
  } catch (error) {
    console.error("Error checking cache validity:", error);
    return true; // Update cache on error
  }
}

export async function GET() {
  try {
    const now = Date.now();
    const cacheAge = now - lastCacheTime;

    // Check if we need to update cache
    if (cacheAge > CACHE_DURATION || !eventsCache) {
      const needsUpdate = await shouldUpdateCache();

      if (needsUpdate || !eventsCache) {
        console.log("Updating events cache...");
        eventsCache = await fetchEventsData();
        lastCacheTime = now;
      } else {
        console.log("Cache is up to date, no update needed");
      }
    }

    return NextResponse.json(eventsCache);
  } catch (error) {
    console.error("Events API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

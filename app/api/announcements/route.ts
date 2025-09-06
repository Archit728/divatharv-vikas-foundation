import { google } from "googleapis";
import { NextResponse } from "next/server";

interface Announcement {
  order: number;
  heading: string;
  url?: string;
}

interface AnnouncementsResponse {
  announcements: Announcement[];
  last_updated: string;
}

// In-memory cache
let announcementsCache: AnnouncementsResponse | null = null;
let lastCacheTime = 0;
const CACHE_DURATION = Number.parseInt(
  process.env.ANNOUNCEMENTS_CACHE_DURATION || "30000"
); // 30 seconds

// Create Google Auth client
function createGoogleAuth() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

  if (!privateKey || !clientEmail) {
    throw new Error("Missing Google service account credentials");
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
}

// Fetch data from Google Sheets
async function fetchSheetData(): Promise<Announcement[]> {
  try {
    const auth = createGoogleAuth();
    // const client = await auth.getClient();
    // const sheets = google.sheets({ version: "v4", auth: client });
    const sheets = google.sheets({ version: "v4", auth });

    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) {
      throw new Error("Missing Google Sheet ID");
    }

    // Get sheet metadata to find the first sheet name
    const meta = await sheets.spreadsheets.get({ spreadsheetId: sheetId });
    const sheetName = meta.data.sheets?.[0]?.properties?.title;

    if (!sheetName) {
      throw new Error("No sheets found in the spreadsheet");
    }

    // Fetch data from the sheet
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: sheetName,
    });

    const rows = res.data.values || [];
    if (!rows.length) return [];

    const headers = rows[0];
    const dataRows = rows.slice(1);

    // Process the data
    const announcements = dataRows
      .map((row) => {
        const obj: { [key: string]: string } = {};
        headers.forEach((header, i) => {
          obj[header] = row[i] || "";
        });

        let order = Number.parseInt(obj["Order"], 10);
        // Only accept natural numbers (1, 2, 3, …)
        if (Number.isNaN(order) || order < 1) {
          order = Number.POSITIVE_INFINITY; // invalid orders go last
        }

        return {
          order,
          heading:
            obj["Heading"]?.trim() || "Important Announcement on the way!!",
          url: obj["External URL"]?.trim() || undefined,
        };
      })
      .sort((a, b) => a.order - b.order);

    return announcements;
  } catch (error) {
    console.error("Error fetching sheet data:", error);
    throw error;
  }
}

// Check if cache needs update
async function shouldUpdateCache(): Promise<boolean> {
  if (!announcementsCache) return true;

  try {
    const freshData = await fetchSheetData();
    const freshDataStr = JSON.stringify(freshData);
    const cachedDataStr = JSON.stringify(announcementsCache.announcements);

    return freshDataStr !== cachedDataStr;
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
    if (cacheAge > CACHE_DURATION || !announcementsCache) {
      const needsUpdate = await shouldUpdateCache();

      if (needsUpdate || !announcementsCache) {
        // console.log("Updating announcements cache...");
        const announcements = await fetchSheetData();
        announcementsCache = {
          announcements,
          last_updated: new Date().toISOString(),
        };
        lastCacheTime = now;
      } else {
        // console.log("Announcements cache is up to date, no update needed");
      }
    }

    return NextResponse.json(announcementsCache);
  } catch (error) {
    console.error("Announcements API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch announcements" },
      { status: 500 }
    );
  }
}

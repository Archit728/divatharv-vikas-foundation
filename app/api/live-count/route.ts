import { google } from "googleapis";
import { NextResponse } from "next/server";

interface LiveCountResponse {
  count: number;
  last_updated: string;
}

// In-memory cache
let liveCountCache: LiveCountResponse | null = null;
let lastCacheTime = 0;
const CACHE_DURATION = 60000; // 1 minute

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

// Fetch live count from Google Sheets(old)
// async function fetchLiveCount(): Promise<number> {
//   try {
//     const auth = createGoogleAuth()
//     // const client = await auth.getClient()
//     const sheets = google.sheets({ version: "v4", auth });

//     const sheetId = process.env.GOOGLE_LIVE_COUNT_SHEET_ID
//     if (!sheetId) {
//       throw new Error("Missing Google Live Count Sheet ID")
//     }

//     // Get sheet metadata to find the first sheet name
//     const meta = await sheets.spreadsheets.get({ spreadsheetId: sheetId })
//     const sheetName = meta.data.sheets?.[0]?.properties?.title

//     if (!sheetName) {
//       throw new Error("No sheets found in the spreadsheet")
//     }

//     // Fetch data from the sheet - assuming the count is in cell A1 or first cell
//     const res = await sheets.spreadsheets.values.get({
//       spreadsheetId: sheetId,
//       range: `${sheetName}!A1:A1`,
//     })

//     const rows = res.data.values || []
//     if (!rows.length || !rows[0].length) {
//       return 0 // Default to 0 if no data
//     }

//     const count = Number.parseInt(rows[0][0], 10)
//     return Number.isNaN(count) ? 0 : Math.max(0, Math.min(count, 1000000)) // Clamp between 0 and 1M
//   } catch (error) {
//     console.error("Error fetching live count:", error)
//     throw error
//   }
// }
// Fetch and validate live count from Google Sheets
async function fetchLiveCount(): Promise<number> {
  try {
    const auth = createGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const sheetId = process.env.GOOGLE_LIVE_COUNT_SHEET_ID;
    if (!sheetId) throw new Error("Missing Google Live Count Sheet ID");

    const meta = await sheets.spreadsheets.get({ spreadsheetId: sheetId });
    const sheetName = meta.data.sheets?.[0]?.properties?.title;
    if (!sheetName) throw new Error("No sheets found in the spreadsheet");

    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `${sheetName}!A1:A1`,
    });

    const rows = res.data.values || [];
    if (!rows.length || !rows[0].length) {
      throw new Error("No value found in sheet");
    }

    const rawValue = rows[0][0];
    const parsed = Number(rawValue);

    // Validation 1: must be a number
    if (Number.isNaN(parsed)) {
      throw new Error(`Invalid value: "${rawValue}"`);
    }

    // Validation 2: must be finite
    if (!Number.isFinite(parsed)) {
      throw new Error(`Non-finite value: "${rawValue}"`);
    }

    // Validation 3: must be in range 0–1M
    const count = Math.floor(parsed);
    if (count < 0 || count > 1000000) {
      throw new Error(`Out-of-range value: "${rawValue}"`);
    }

    return count;
  } catch (error) {
    console.error("Error fetching/validating live count:", error);

    // Fallback: if cache exists, return last known valid value
    if (liveCountCache) {
      console.warn("Using last known valid live count:", liveCountCache.count);
      return liveCountCache.count;
    }

    // If no cache exists yet, return safe default
    return 0;
  }
}

// Check if cache needs update
async function shouldUpdateCache(): Promise<boolean> {
  if (!liveCountCache) return true;

  try {
    const freshCount = await fetchLiveCount();
    return freshCount !== liveCountCache.count;
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
    if (cacheAge > CACHE_DURATION || !liveCountCache) {
      const needsUpdate = await shouldUpdateCache();

      if (needsUpdate || !liveCountCache) {
        console.log("Updating live count cache...");
        const count = await fetchLiveCount();
        liveCountCache = {
          count,
          last_updated: new Date().toISOString(),
        };
        lastCacheTime = now;
      } else {
        console.log("Live count cache is up to date, no update needed");
      }
    }

    return NextResponse.json(liveCountCache);
  } catch (error) {
    console.error("Live count API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch live count" },
      { status: 500 }
    );
  }
}

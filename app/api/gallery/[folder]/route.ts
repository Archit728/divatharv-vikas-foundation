import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: { folder: string } }
) {
  try {
    const { folder } = params;
    const decodedFolder = decodeURIComponent(folder);
    const folderPath = path.join(
      process.cwd(),
      "public",
      "our-gallery",
      decodedFolder
    );

    // Check if folder exists
    if (!fs.existsSync(folderPath)) {
      return NextResponse.json({ error: "Folder not found" }, { status: 404 });
    }

    const files = fs
      .readdirSync(folderPath)
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
      })
      .map(
        (file) => `/our-gallery/${encodeURIComponent(decodedFolder)}/${file}`
      );

    return NextResponse.json({
      folder: decodedFolder,
      images: files,
    });
  } catch (error) {
    console.error("Error reading folder:", error);
    return NextResponse.json(
      { error: "Failed to read folder" },
      { status: 500 }
    );
  }
}

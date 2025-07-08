import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), "public", "our-gallery");

    // Check if gallery directory exists
    if (!fs.existsSync(galleryPath)) {
      return NextResponse.json({ folders: [] });
    }

    const folders = fs
      .readdirSync(galleryPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    const galleryData = folders.map((folder) => {
      const folderPath = path.join(galleryPath, folder);
      const files = fs
        .readdirSync(folderPath)
        .filter((file) => {
          const ext = path.extname(file).toLowerCase();
          return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
        })
        .map((file) => `/our-gallery/${folder}/${file}`);

      return {
        folder,
        images: files,
      };
    });

    return NextResponse.json({ folders: galleryData });
  } catch (error) {
    console.error("Error reading gallery:", error);
    return NextResponse.json(
      { error: "Failed to read gallery" },
      { status: 500 }
    );
  }
}

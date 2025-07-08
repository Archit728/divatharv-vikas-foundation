"use client";

import MasonryGallery from "@/components/MasonryGallery";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface FolderData {
  folder: string;
  images: string[];
}

interface GalleryImage {
  src: string;
  folder: string;
  alt: string;
}

export default function FolderGalleryPage() {
  const params = useParams();
  const folder = params.folder as string;
  const [folderData, setFolderData] = useState<FolderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Decode the folder name for display
  const decodedFolderName = decodeURIComponent(folder || "").replace(/-/g, " ");

  useEffect(() => {
    if (folder) {
      fetchFolderData();
    }
  }, [folder]);

  const fetchFolderData = async () => {
    try {
      const response = await fetch(
        `/api/gallery/${encodeURIComponent(folder)}`
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setFolderData(data);
      }
    } catch (err) {
      setError("Failed to load folder images");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen pt-20 bg-gradient-to-br from-[#fef6e4] to-[#fbecca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#b86e33] mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Loading images...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !folderData) {
    return (
      <main className="min-h-screen pt-20 bg-gradient-to-br from-[#fef6e4] to-[#fbecca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Collection Not Found
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              {error || "This collection does not exist."}
            </p>
            <Link
              href="/our-gallery"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#b86e33] to-[#d9a76c] text-white rounded-full font-semibold hover:from-[#a05e2b] hover:to-[#c9925a] transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Gallery
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const images: GalleryImage[] = folderData.images.map((imageSrc) => ({
    src: imageSrc,
    folder: folderData.folder,
    alt: `${decodedFolderName} image`,
  }));

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-[#fef6e4] to-[#fbecca]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Link
            href="/our-gallery"
            className="inline-flex items-center text-[#b86e33] hover:text-[#a05e2b] font-medium mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Gallery
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            <span className="gradient-text capitalize">
              {decodedFolderName} Collection
            </span>{" "}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {images.length} images from our {decodedFolderName.toLowerCase()}{" "}
            initiative
          </p>
        </div>

        {/* Collection Stats */}
        <div className="bg-white rounded-xl p-6 shadow-lg text-center mb-12 max-w-md mx-auto">
          <div className="text-3xl font-bold text-[#b86e33] mb-2">
            {images.length}
          </div>
          <div className="text-gray-600">Images in this collection</div>
        </div>

        {/* Masonry Gallery - No hover effects for specific folder view */}
        {images.length > 0 ? (
          <MasonryGallery images={images} showHover={false} />
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              No images found in this collection.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

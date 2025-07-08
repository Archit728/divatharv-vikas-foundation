"use client";

import MasonryGallery from "@/components/MasonryGallery";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface GalleryData {
  folder: string;
  images: string[];
}

interface GalleryImage {
  src: string;
  folder: string;
  alt: string;
}

export default function GalleryPage() {
  const [galleryData, setGalleryData] = useState<GalleryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      const response = await fetch("/api/gallery");
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setGalleryData(data.folders);
      }
    } catch (err) {
      setError("Failed to load gallery");
    } finally {
      setLoading(false);
    }
  };

  // Flatten all images from all folders
  const allImages: GalleryImage[] = galleryData.flatMap((folderData) =>
    folderData.images.map((imageSrc) => ({
      src: imageSrc,
      folder: folderData.folder,
      alt: `${folderData.folder} gallery image`,
    }))
  );

  if (loading) {
    return (
      <main className="min-h-screen pt-20 bg-gradient-to-br from-[#fef6e4] to-[#fbecca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#b86e33] mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Loading gallery...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen pt-20 bg-gradient-to-br from-[#fef6e4] to-[#fbecca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Gallery Error
            </h1>
            <p className="text-gray-600 text-lg mb-8">{error}</p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#b86e33] to-[#d9a76c] text-white rounded-full font-semibold hover:from-[#a05e2b] hover:to-[#c9925a] transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-[#fef6e4] to-[#fbecca]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Link
            href="/"
            className="inline-flex items-center text-[#b86e33] hover:text-[#a05e2b] font-medium mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            <span className="gradient-text">Our Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our journey through images - moments of impact,
            transformation, and hope from our various initiatives
          </p>
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#b86e33] mb-2">
              {galleryData.length}
            </div>
            <div className="text-gray-600 text-sm">Collections</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#b86e33] mb-2">
              {allImages.length}
            </div>
            <div className="text-gray-600 text-sm">Total Images</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#b86e33] mb-2">2024</div>
            <div className="text-gray-600 text-sm">Since</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#b86e33] mb-2">∞</div>
            <div className="text-gray-600 text-sm">Memories</div>
          </div>
        </div>

        {/* Masonry Gallery */}
        {allImages.length > 0 ? (
          <MasonryGallery images={allImages} showHover={true} />
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              No images found in the gallery.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Add images to the /public/our-gallery/ folder to see them here.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

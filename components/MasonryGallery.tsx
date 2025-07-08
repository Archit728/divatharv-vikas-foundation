"use client";

import { useImageDimensions } from "@/hooks/use-image-dimensions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface GalleryImage {
  src: string;
  folder: string;
  alt: string;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
  showHover?: boolean;
  columns?: number;
}

function MasonryItem({
  image,
  showHover = true,
  onClick,
}: {
  image: GalleryImage;
  showHover?: boolean;
  onClick?: () => void;
}) {
  const dimensions = useImageDimensions(image.src);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Calculate height based on aspect ratio for consistent masonry layout
  const getImageHeight = () => {
    if (!dimensions) return 300; // default height while loading

    const baseWidth = 300; // base width for masonry items
    return Math.round(baseWidth / dimensions.aspectRatio);
  };

  return (
    <div
      className={`relative group break-inside-avoid mb-4 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl ${
        showHover && onClick ? "cursor-pointer hover:scale-[1.02]" : ""
      }`}
      onClick={onClick}
      style={{ height: imageLoaded ? getImageHeight() : 300 }}
    >
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        fill
        className="object-cover transition-all duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onLoad={() => setImageLoaded(true)}
      />

      {showHover && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-semibold text-lg font-playfair capitalize">
              {image.folder.replace(/-/g, " ")}
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Click to view all images from this collection
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MasonryGallery({
  images,
  showHover = true,
  columns = 3,
}: MasonryGalleryProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageClick = (folder: string) => {
    if (showHover) {
      // Properly encode the folder name for the URL
      const encodedFolder = encodeURIComponent(folder);
      router.push(`/our-gallery/${encodedFolder}`);
    }
  };

  if (!mounted) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b86e33]"></div>
      </div>
    );
  }

  return (
    <div
      className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
      style={{ columnCount: columns }}
    >
      {images.map((image, index) => (
        <MasonryItem
          key={`${image.folder}-${index}`}
          image={image}
          showHover={showHover}
          onClick={() => handleImageClick(image.folder)}
        />
      ))}
    </div>
  );
}

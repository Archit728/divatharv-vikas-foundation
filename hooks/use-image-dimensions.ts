"use client";

import { useEffect, useState } from "react";

interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export function useImageDimensions(src: string): ImageDimensions | null {
  const [dimensions, setDimensions] = useState<ImageDimensions | null>(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      const aspectRatio = width / height;

      setDimensions({ width, height, aspectRatio });
    };

    img.src = src;

    return () => {
      img.onload = null;
    };
  }, [src]);

  return dimensions;
}

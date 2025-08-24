"use client";

import { useEffect, useState } from "react";

interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export function useImageOptimization(src: string): {
  isLoading: boolean;
  dimensions: ImageDimensions | null;
  error: Error | null;
} {
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState<ImageDimensions | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!src) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      const aspectRatio = width / height;

      setDimensions({ width, height, aspectRatio });
      setIsLoading(false);
    };

    img.onerror = (e) => {
      setError(new Error("Failed to load image"));
      setIsLoading(false);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { isLoading, dimensions, error };
}

"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface InitiativeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initiative: {
    title: string;
    content: string;
    images: string[];
    tags: string[];
    color: string;
  } | null;
}

export default function InitiativeModal({
  isOpen,
  onClose,
  initiative,
}: InitiativeModalProps) {
  // useEffect(() => {
  //   if (isOpen && initiative?.images) {
  //     const interval = setInterval(() => {
  //       setCurrentImageIndex((prev) => (prev + 1) % initiative.images.length);
  //     }, 3000);
  //     return () => clearInterval(interval);
  //   }
  // }, [isOpen, initiative?.images]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    if (isOpen && initiative?.images) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => {
          if (prev === initiative.images.length - 1) {
            setShouldAnimate(false); // disable animation when resetting to first
            return 0;
          } else {
            setShouldAnimate(true); // enable animation
            return prev + 1;
          }
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isOpen, initiative?.images]);

  // Optional: Re-enable animation after render (so it doesn't stay disabled on manual switch)
  useEffect(() => {
    if (!shouldAnimate) {
      const timeout = setTimeout(() => setShouldAnimate(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [shouldAnimate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !initiative) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Image Carousel Section */}
        <div className="relative h-1/2 overflow-hidden">
          {/* Continuous moving images */}
          <div className="absolute inset-0 flex">
            <div
              className={`flex ${
                shouldAnimate
                  ? "transition-transform duration-1000 ease-linear"
                  : ""
              }`}
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
                width: `${initiative.images.length * 100}%`,
              }}
            >
              {initiative.images.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-full h-full"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${initiative.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${initiative.color} opacity-60`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Train-like connection effect */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#941B0C] via-[#BC3908] to-[#F6AA1C]" />

          {/* Image indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {initiative.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-16 left-8 right-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-playfair drop-shadow-lg">
              {initiative.title}
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="h-1/2 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {initiative.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-[#FFF5E6] to-[#FFEBCC] text-[#941B0C] px-4 py-2 rounded-full text-sm font-medium border border-[#FFEBCC]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {initiative.content}
              </p>
            </div>

            {/* Action Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-gradient-to-r from-[#941B0C] to-[#BC3908] hover:from-[#BC3908] hover:to-[#F6AA1C] text-white px-8 py-3 rounded-full font-semibold">
                Get Involved in This Initiative
              </Button>
              <Button
                variant="outline"
                className="border-[#BC3908] text-[#BC3908] hover:bg-[#FFF5E6] px-8 py-3 rounded-full font-semibold"
              >
                Download Impact Report
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

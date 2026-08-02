"use client";
import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  name: string;
  images: string[];
};

export default function ProductGallery({ name, images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      {/* Main Image — always first/on top, so it's visible without scrolling */}
      <div className="order-1 flex-1 rounded-[32px] bg-slate-100 p-6 dark:bg-white/[0.03] md:order-2 md:p-12">
        <div className="relative aspect-square">
          <Image
            src={selectedImage}
            alt={name}
            fill
            priority
            loading="eager"
            sizes="(max-width:768px)100vw,50vw"
            className="object-contain opacity-0 transition-opacity duration-500 [&.loaded]:opacity-100"
            onLoad={(e) => e.currentTarget.classList.add("loaded")}
          />
        </div>
      </div>

      {/* Thumbnails — horizontal scroll on mobile, vertical column on desktop */}
      <div className="order-2 flex gap-3 overflow-x-auto pb-1 md:order-1 md:flex-col md:overflow-visible md:pb-0">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`
              relative h-20 w-20 shrink-0 cursor-pointer overflow-hidden rounded-2xl border-2
              transition-all duration-300 hover:scale-105 hover:border-indigo-500
              bg-slate-50 dark:bg-white/5 md:h-24 md:w-24
              ${
                selectedImage === image
                  ? "border-indigo-500 dark:border-indigo-400"
                  : "border-transparent dark:border-white/10"
              }
            `}
          >
            <Image
              src={image}
              alt={`${name} ${index + 1}`}
              fill
              sizes="96px"
              className="object-contain p-2 opacity-0 transition-opacity duration-500 [&.loaded]:opacity-100"
              onLoad={(e) => e.currentTarget.classList.add("loaded")}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
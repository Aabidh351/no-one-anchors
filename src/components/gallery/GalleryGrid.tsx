"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryImage } from "@/lib/api/data";
import Lightbox from "./LightBox";

function spanFor(i: number) {
  const pos = i % 5;
  if (pos === 0) return "col-span-2 row-span-2";
  if (pos === 1) return "col-span-1 row-span-2";
  return "col-span-1 row-span-1";
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 auto-rows-35 sm:auto-rows-42.5 gap-4 sm:gap-5">
        {images.map((img, i) => (
          <motion.button
            key={img.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`group relative overflow-hidden rounded-2xl border border-line bg-paper shadow-sm text-left cursor-zoom-in ${spanFor(i)}`}
          >
            <Image
              src={img.url}
              alt={img.caption}
              fill loading="eager"
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-harbor-dark/90 via-harbor-dark/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

            <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 text-harbor-dark backdrop-blur-sm">
              {img.category}
            </span>

            <span className="absolute bottom-0 left-0 right-0 p-4 text-sm text-white font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              {img.caption}
            </span>
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </>
  );
}
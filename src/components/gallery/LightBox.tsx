"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import type { GalleryImage } from "@/lib/api/data";

const MIN_SCALE = 1;
const MAX_SCALE = 3;
const ZOOM_STEP = 0.5;

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const isOpen = index !== null;
  const current = index !== null ? images[index] : null;
  const [scale, setScale] = useState(1);
  const frameRef = useRef<HTMLDivElement>(null);

  // Reset zoom whenever the open image changes (or the lightbox opens)
  useEffect(() => {
    setScale(1);
  }, [index]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const zoomIn = useCallback(() => {
    setScale((s) => Math.min(MAX_SCALE, +(s + ZOOM_STEP).toFixed(2)));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((s) => Math.max(MIN_SCALE, +(s - ZOOM_STEP).toFixed(2)));
  }, []);

  const toggleZoom = useCallback(() => {
    setScale((s) => (s > 1 ? 1 : 2));
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && scale === 1) goPrev();
      if (e.key === "ArrowRight" && scale === 1) goNext();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
    }
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goPrev, goNext, zoomIn, zoomOut, scale]);

  function onWheel(e: React.WheelEvent) {
    e.preventDefault();
    setScale((s) => {
      const next = s + (e.deltaY < 0 ? 0.15 : -0.15);
      return Math.min(MAX_SCALE, Math.max(MIN_SCALE, +next.toFixed(2)));
    });
  }

  const isZoomed = scale > 1;

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-harbor-dark/95 backdrop-blur-sm p-4 sm:p-8"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>

          {/* Zoom controls */}
          <div
            className="absolute top-5 left-5 flex items-center gap-2 bg-white/10 rounded-full p-1"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={zoomOut}
              disabled={scale <= MIN_SCALE}
              aria-label="Zoom out"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/15 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ZoomOut size={17} />
            </button>
            <span className="text-white/70 text-xs w-10 text-center select-none">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              disabled={scale >= MAX_SCALE}
              aria-label="Zoom in"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/15 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ZoomIn size={17} />
            </button>
          </div>

          {!isZoomed && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous image"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next image"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div
            ref={frameRef}
            className="relative w-full max-w-4xl max-h-[80vh] aspect-[4/3] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onWheel={onWheel}
          >
            <motion.div
              key={current.id}
              drag={isZoomed}
              dragConstraints={frameRef}
              dragElastic={0.05}
              onDoubleClick={toggleZoom}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`relative w-full h-full ${isZoomed ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"}`}
            >
              <Image
                src={current.url}
                alt={current.caption}
                fill
                sizes="90vw"
                className="object-contain pointer-events-none"
                priority
                draggable={false}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute bottom-6 left-0 right-0 text-center px-6 pointer-events-none"
          >
            <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-white/15 text-white mb-2">
              {current.category}
            </span>
            <p className="text-white text-sm sm:text-base">{current.caption}</p>
            <p className="text-white/50 text-xs mt-1">
              {index !== null ? index + 1 : 0} / {images.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
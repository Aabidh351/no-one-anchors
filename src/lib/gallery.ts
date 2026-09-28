import { galleryImages } from "@/lib/api/data";

export function getGalleryPage(page = 1, limit = 10) {
  const safePage = Math.max(1, page);
  const safeLimit = Math.max(1, limit);

  const total = galleryImages.length;
  const totalPages = Math.max(1, Math.ceil(total / safeLimit));
  const start = (safePage - 1) * safeLimit;
  const images = galleryImages.slice(start, start + safeLimit);

  return { images, total, page: safePage, totalPages, limit: safeLimit };
}
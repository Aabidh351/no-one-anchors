import type { GalleryImage } from "@/lib/api/data";
import type { Service } from "@/lib/api/data";

export function getServices() {
  return apiGet<Service[]>("/api/services");
}

export async function getService(slug: string) {
  const all = await getServices();
  return all.find((s) => s.slug === slug);
}

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${getBaseUrl()}${path}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`API request failed: ${path} (${res.status})`);
  }
  return res.json();
}

export type GalleryResponse = {
  images: GalleryImage[];
  total: number;
  page: number;
  totalPages: number;
  limit: number;
};

export async function getGallery(page = 1, limit = 6) {
  return apiGet<GalleryResponse>(`/api/gallery?page=${page}&limit=${limit}`);
}
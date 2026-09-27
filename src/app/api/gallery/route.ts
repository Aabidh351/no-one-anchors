import { NextResponse } from "next/server";
import { galleryImages } from "@/lib/api/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const limit = Math.max(1, Number(searchParams.get("limit")) || 6);

  const total = galleryImages.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const start = (page - 1) * limit;
  const images = galleryImages.slice(start, start + limit);

  return NextResponse.json({ images, total, page, totalPages, limit });
}
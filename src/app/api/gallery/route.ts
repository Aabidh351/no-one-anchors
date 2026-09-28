import { NextResponse } from "next/server";
import { getGalleryPage } from "@/lib/gallery";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  return NextResponse.json(getGalleryPage(page, limit));
}
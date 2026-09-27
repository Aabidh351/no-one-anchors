import { NextResponse } from "next/server";
import { testimonials } from "@/lib/api/data";

export async function GET() {
  return NextResponse.json(testimonials);
}
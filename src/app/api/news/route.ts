import { NextResponse } from "next/server";
import { newsPosts } from "@/lib/api/data";

export async function GET() {
  return NextResponse.json(newsPosts);
}
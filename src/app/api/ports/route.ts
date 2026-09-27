import { NextResponse } from "next/server";
import { ports } from "@/lib/api/data";

export async function GET() {
  return NextResponse.json(ports);
}
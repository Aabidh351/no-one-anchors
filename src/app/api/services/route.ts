import { NextResponse } from "next/server";
import { services } from "@/lib/api/data";

export async function GET() {
  return NextResponse.json(services);
}
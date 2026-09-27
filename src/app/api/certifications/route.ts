import { NextResponse } from "next/server";
import { certifications } from "@/lib/api/data";

export async function GET() {
  return NextResponse.json(certifications);
}
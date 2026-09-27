import { NextResponse } from "next/server";
import { productCategories } from "@/lib/api/data";

export async function GET() {
  return NextResponse.json(productCategories);
}
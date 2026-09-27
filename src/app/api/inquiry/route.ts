import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // Fake API — just logs for now. Once Postgres/Prisma is wired up:
  //   await prisma.inquiry.create({ data: parsed.data })
  console.log("[inquiry] received:", parsed.data);

  return NextResponse.json({ ok: true });
}
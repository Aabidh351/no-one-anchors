import { NextResponse } from "next/server";

type InquiryPayload = {
  vesselName: string;
  imoNumber?: string;
  port: string;
  eta: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  itemsNeeded: string;
  urgency: "standard" | "urgent" | "critical";
};

function isValid(body: unknown): body is InquiryPayload {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.vesselName === "string" && b.vesselName.length > 1 &&
    typeof b.port === "string" && b.port.length > 0 &&
    typeof b.eta === "string" && b.eta.length > 0 &&
    typeof b.contactName === "string" && b.contactName.length > 1 &&
    typeof b.contactEmail === "string" && b.contactEmail.includes("@") &&
    typeof b.contactPhone === "string" && b.contactPhone.length > 3 &&
    typeof b.itemsNeeded === "string" && b.itemsNeeded.length > 5 &&
    (b.urgency === "standard" || b.urgency === "urgent" || b.urgency === "critical")
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!isValid(body)) {
    return NextResponse.json({ error: "Validation failed" }, { status: 422 });
  }

  // Fake API — just logs for now. Once Prisma/Postgres is wired up,
  // this is where you'd do: await prisma.inquiry.create({ data: body })
  console.log("[inquiry] received:", body);

  return NextResponse.json({ ok: true });
}
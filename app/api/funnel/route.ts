import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const event = await request.json().catch(() => null);

  if (event) {
    // Lightweight logging sink; wire this to your analytics backend later.
    console.info("[funnel-event]", JSON.stringify(event));
  }

  return NextResponse.json({ ok: true }, { status: 202 });
}

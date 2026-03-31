import { NextResponse } from "next/server";
import { getBlockedDates } from "@/src/lib/blocked-dates";

export const dynamic = "force-dynamic";

export async function GET() {
  const dates = await getBlockedDates();
  return NextResponse.json({ dates });
}

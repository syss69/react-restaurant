import { NextResponse } from "next/server";
import {
  getBlockedDates,
  getReservationsGloballyDisabled,
} from "@/src/lib/blocked-dates";

export const dynamic = "force-dynamic";

export async function GET() {
  const [dates, reservationsGloballyDisabled] = await Promise.all([
    getBlockedDates(),
    getReservationsGloballyDisabled(),
  ]);
  return NextResponse.json({ dates, reservationsGloballyDisabled });
}

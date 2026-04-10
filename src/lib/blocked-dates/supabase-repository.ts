import "server-only";

import { getSupabaseAdmin } from "@/src/lib/supabase/admin";
import type { BlockedDatesRepository } from "./repository";

const TABLE = "reservation_settings" as const;
const ROW_ID = 1;

type Stored = { dates: string[]; reservationsGloballyDisabled: boolean };

function normalizeDates(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter((d): d is string => typeof d === "string");
}

function rowToStored(row: {
  blocked_dates: unknown;
  reservations_globally_disabled: unknown;
}): Stored {
  return {
    dates: normalizeDates(row.blocked_dates),
    reservationsGloballyDisabled: row.reservations_globally_disabled === true,
  };
}

export class SupabaseBlockedDatesRepository implements BlockedDatesRepository {
  private async readStored(): Promise<Stored> {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from(TABLE)
      .select("blocked_dates, reservations_globally_disabled")
      .eq("id", ROW_ID)
      .maybeSingle();

    if (error) throw error;
    if (!data) {
      return { dates: [], reservationsGloballyDisabled: false };
    }
    return rowToStored(data);
  }

  private async writeStored(data: Stored): Promise<void> {
    const supabase = getSupabaseAdmin();
    const unique = [...new Set(data.dates)].sort();
    const { error } = await supabase.from(TABLE).upsert(
      {
        id: ROW_ID,
        blocked_dates: unique,
        reservations_globally_disabled: data.reservationsGloballyDisabled,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" }
    );
    if (error) throw error;
  }

  async getBlockedDates(): Promise<string[]> {
    const s = await this.readStored();
    return s.dates;
  }

  async setBlockedDates(dates: string[]): Promise<void> {
    const unique = [...new Set(dates)].sort();
    const s = await this.readStored();
    await this.writeStored({ ...s, dates: unique });
  }

  async getReservationsGloballyDisabled(): Promise<boolean> {
    const s = await this.readStored();
    return s.reservationsGloballyDisabled;
  }

  async setReservationsGloballyDisabled(disabled: boolean): Promise<void> {
    const s = await this.readStored();
    await this.writeStored({ ...s, reservationsGloballyDisabled: disabled });
  }
}

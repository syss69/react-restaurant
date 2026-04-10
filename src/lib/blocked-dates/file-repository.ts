import fs from "fs/promises";
import path from "path";
import type { BlockedDatesRepository } from "./repository";

const DATA_FILE = path.join(process.cwd(), "data", "blocked-dates.json");

type Stored = { dates: string[]; reservationsGloballyDisabled: boolean };

function normalizeDates(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter((d): d is string => typeof d === "string");
}

async function readStored(): Promise<Stored> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return {
        dates: normalizeDates(parsed),
        reservationsGloballyDisabled: false,
      };
    }
    if (parsed && typeof parsed === "object" && "dates" in parsed) {
      const o = parsed as {
        dates?: unknown;
        reservationsGloballyDisabled?: unknown;
        /** @deprecated ancien nom */
        reservationsDisabled?: unknown;
      };
      const disabled =
        o.reservationsGloballyDisabled === true || o.reservationsDisabled === true;
      return {
        dates: normalizeDates(o.dates),
        reservationsGloballyDisabled: disabled,
      };
    }
    return { dates: [], reservationsGloballyDisabled: false };
  } catch {
    return { dates: [], reservationsGloballyDisabled: false };
  }
}

async function writeStored(data: Stored): Promise<void> {
  const unique = [...new Set(data.dates)].sort();
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(
    DATA_FILE,
    JSON.stringify(
      {
        dates: unique,
        reservationsGloballyDisabled: data.reservationsGloballyDisabled,
      },
      null,
      2
    ),
    "utf-8"
  );
}

/** Stockage local (dev / serveur avec disque persistant). Sur Vercel sans volume, prévoir Supabase. */
export class FileBlockedDatesRepository implements BlockedDatesRepository {
  async getBlockedDates(): Promise<string[]> {
    const s = await readStored();
    return s.dates;
  }

  async setBlockedDates(dates: string[]): Promise<void> {
    const unique = [...new Set(dates)].sort();
    const s = await readStored();
    await writeStored({ ...s, dates: unique });
  }

  async getReservationsGloballyDisabled(): Promise<boolean> {
    const s = await readStored();
    return s.reservationsGloballyDisabled;
  }

  async setReservationsGloballyDisabled(disabled: boolean): Promise<void> {
    const s = await readStored();
    await writeStored({ ...s, reservationsGloballyDisabled: disabled });
  }
}

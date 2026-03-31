import fs from "fs/promises";
import path from "path";
import type { BlockedDatesRepository } from "./repository";

const DATA_FILE = path.join(process.cwd(), "data", "blocked-dates.json");

/** Stockage local (dev / serveur avec disque persistant). Sur Vercel sans volume, prévoir Supabase. */
export class FileBlockedDatesRepository implements BlockedDatesRepository {
  async getBlockedDates(): Promise<string[]> {
    try {
      const raw = await fs.readFile(DATA_FILE, "utf-8");
      const parsed: unknown = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((d): d is string => typeof d === "string");
    } catch {
      return [];
    }
  }

  async setBlockedDates(dates: string[]): Promise<void> {
    const unique = [...new Set(dates)].sort();
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(unique, null, 2), "utf-8");
  }
}

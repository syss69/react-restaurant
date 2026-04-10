import { FileBlockedDatesRepository } from "./file-repository";
import type { BlockedDatesRepository } from "./repository";

function getRepository(): BlockedDatesRepository {
  // Quand Supabase sera branché : if (process.env.BLOCKED_DATES_BACKEND === 'supabase') return new SupabaseBlockedDatesRepository();
  return new FileBlockedDatesRepository();
}

const repo = getRepository();

export async function getBlockedDates(): Promise<string[]> {
  return repo.getBlockedDates();
}

export async function setBlockedDates(dates: string[]): Promise<void> {
  return repo.setBlockedDates(dates);
}

export async function getReservationsGloballyDisabled(): Promise<boolean> {
  return repo.getReservationsGloballyDisabled();
}

export async function setReservationsGloballyDisabled(
  disabled: boolean
): Promise<void> {
  return repo.setReservationsGloballyDisabled(disabled);
}

export type { BlockedDatesRepository };

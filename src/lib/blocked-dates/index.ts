import { FileBlockedDatesRepository } from "./file-repository";
import type { BlockedDatesRepository } from "./repository";
import { SupabaseBlockedDatesRepository } from "./supabase-repository";

function getRepository(): BlockedDatesRepository {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (url && serviceKey) {
    return new SupabaseBlockedDatesRepository();
  }
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

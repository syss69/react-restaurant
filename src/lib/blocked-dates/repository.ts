/**
 * Abstraction pour brancher Supabase plus tard : implémenter cette interface
 * avec une table (ex. blocked_dates) et remplacer l’export dans `index.ts`.
 */
export interface BlockedDatesRepository {
  getBlockedDates(): Promise<string[]>;
  setBlockedDates(dates: string[]): Promise<void>;
}

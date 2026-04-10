"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  COOKIE_NAME,
  signAdminSession,
  verifyAdminSession,
} from "@/src/lib/admin/session";
import {
  getBlockedDates,
  setBlockedDates,
  setReservationsGloballyDisabled,
} from "@/src/lib/blocked-dates";

async function requireAdminSession() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!verifyAdminSession(token)) redirect("/admin/login");
}

export type LoginState = { message: string } | null;

export async function loginAction(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD?.trim();
  if (!expected) {
    return { message: "ADMIN_PASSWORD manquant dans .env.local." };
  }
  if (password !== expected) {
    return { message: "Mot de passe incorrect." };
  }
  const store = await cookies();
  store.set(COOKIE_NAME, signAdminSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: 60 * 60 * 24 * 7,
  });
  revalidatePath("/admin");
  redirect("/admin");
}

export async function logoutAction() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
  redirect("/admin/login");
}

export async function addBlockedDateAction(formData: FormData): Promise<void> {
  await requireAdminSession();
  const date = String(formData.get("date") ?? "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return;
  const current = await getBlockedDates();
  if (!current.includes(date)) {
    await setBlockedDates([...current, date].sort());
  }
  revalidatePath("/admin/reservations");
  revalidatePath("/reservation");
}

export async function removeBlockedDateAction(
  formData: FormData
): Promise<void> {
  await requireAdminSession();
  const date = String(formData.get("date") ?? "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return;
  const current = await getBlockedDates();
  await setBlockedDates(current.filter((d) => d !== date));
  revalidatePath("/admin/reservations");
  revalidatePath("/reservation");
}

export async function setReservationsGloballyDisabledAction(
  formData: FormData
): Promise<void> {
  await requireAdminSession();
  const raw = String(formData.get("disabled") ?? "").trim().toLowerCase();
  const disabled = raw === "true" || raw === "1" || raw === "on";
  await setReservationsGloballyDisabled(disabled);
  revalidatePath("/admin/reservations");
  revalidatePath("/reservation");
}

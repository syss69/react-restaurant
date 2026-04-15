import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, verifyAdminSession } from "@/src/lib/admin/session";
import { logoutAction } from "../actions";
import AdminMobileMenu from "./AdminMobileMenu";

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!verifyAdminSession(token)) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Mobile header */}
      <header className="border-b border-zinc-200 bg-white px-4 py-3 md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate font-serif text-base font-bold text-zinc-900">
              Mitaka
            </p>
            <p className="text-xs text-zinc-500">Administration</p>
          </div>
          <div className="relative">
            <AdminMobileMenu logoutAction={logoutAction} />
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-52px)] md:min-h-screen">
        {/* Desktop sidebar */}
        <aside className="hidden w-56 shrink-0 flex-col border-r border-zinc-200 bg-white px-5 py-8 md:flex">
          <p className="font-serif text-lg font-bold text-zinc-900">Mitaka</p>
          <p className="text-xs text-zinc-500">Administration</p>
          <nav className="mt-10 flex flex-col gap-1 text-sm">
            <Link
              href="/admin"
              className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100"
            >
              Tableau de bord
            </Link>
            <Link
              href="/admin/reservations/dates"
              className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100"
            >
              Réservations — dates bloquées
            </Link>
            <Link
              href="/admin/reservations/global"
              className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100"
            >
              Réservations — fermeture totale
            </Link>
          </nav>
          <form action={logoutAction} className="mt-auto pt-10">
            <button
              type="submit"
              className="text-sm text-red-700 hover:text-red-900"
            >
              Déconnexion
            </button>
          </form>
        </aside>

        <div className="min-w-0 flex-1 p-4 md:p-10">{children}</div>
      </div>
    </div>
  );
}

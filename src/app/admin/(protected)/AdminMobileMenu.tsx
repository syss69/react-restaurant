"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function AdminMobileMenu({
  logoutAction,
}: {
  logoutAction: () => Promise<void>;
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    function onPointerDown(e: PointerEvent) {
      const el = panelRef.current;
      if (!el) return;
      if (el.contains(e.target as Node)) return;
      setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
        aria-expanded={open}
        aria-controls="admin-mobile-menu"
      >
        Menu
      </button>

      {open && (
        <div
          className="fixed inset-0 z-30"
          aria-hidden="true"
          // Clicking the overlay closes the menu
          onClick={() => setOpen(false)}
        />
      )}

      <div
        id="admin-mobile-menu"
        ref={panelRef}
        className={[
          "absolute right-0 z-40 mt-2 w-72 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg",
          open ? "block" : "hidden",
        ].join(" ")}
        role="menu"
      >
        <nav className="p-2 text-sm">
          <Link
            href="/admin"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100"
          >
            Tableau de bord
          </Link>
          <Link
            href="/admin/reservations/dates"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100"
          >
            Réservations — dates bloquées
          </Link>
          <Link
            href="/admin/reservations/global"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100"
          >
            Réservations — fermeture totale
          </Link>
        </nav>
        <form action={logoutAction} className="border-t border-zinc-200 p-2">
          <button
            type="submit"
            onClick={() => setOpen(false)}
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-700 hover:bg-red-50 hover:text-red-900"
          >
            Déconnexion
          </button>
        </form>
      </div>
    </>
  );
}


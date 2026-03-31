import Link from "next/link";

export const metadata = {
  title: "Admin | Mitaka",
};

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-zinc-900">
        Tableau de bord
      </h1>
      <p className="mt-2 max-w-xl text-zinc-600">
        Paramètres internes. La base des dates bloquées est prête pour être
        remplacée par Supabase (voir{" "}
        <code className="rounded bg-zinc-200/80 px-1 text-sm">
          src/lib/blocked-dates
        </code>
        ).
      </p>
      <ul className="mt-10 space-y-3">
        <li>
          <Link
            href="/admin/reservations"
            className="inline-flex rounded-xl border border-zinc-200 bg-white px-5 py-4 text-zinc-900 shadow-sm transition hover:border-zinc-300"
          >
            <span>
              <span className="block font-medium">Dates bloquées</span>
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Jours où les réservations en ligne sont désactivées
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

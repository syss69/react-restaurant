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
      <ul className="mt-10 space-y-3">
        <li>
          <Link
            href="/admin/reservations/dates"
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
        <li>
          <Link
            href="/admin/reservations/global"
            className="inline-flex rounded-xl border border-zinc-200 bg-white px-5 py-4 text-zinc-900 shadow-sm transition hover:border-zinc-300"
          >
            <span>
              <span className="block font-medium">
                Fermeture totale des réservations
              </span>
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Désactiver les réservations en ligne pour tous les jours
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

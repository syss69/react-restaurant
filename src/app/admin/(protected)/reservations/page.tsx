import {
  getBlockedDates,
  getReservationsGloballyDisabled,
} from "@/src/lib/blocked-dates";
import {
  addBlockedDateAction,
  removeBlockedDateAction,
  setReservationsGloballyDisabledAction,
} from "../../actions";

export const metadata = {
  title: "Admin — Réservations | Mitaka",
};

function formatFr(iso: string) {
  const d = new Date(iso + "T12:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export default async function AdminReservationsPage() {
  const [dates, reservationsGloballyDisabled] = await Promise.all([
    getBlockedDates(),
    getReservationsGloballyDisabled(),
  ]);

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-zinc-900">
        Dates indisponibles
      </h1>
      <p className="mt-2 max-w-2xl text-zinc-600">
        Les visiteurs ne pourront pas choisir ces jours dans le formulaire de
        réservation (le créneau horaire reste vide et l’envoi est bloqué).
      </p>

      <section className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-zinc-900">
          Réservations en ligne (tous les jours)
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600">
          Lorsque cette option est désactivée, le formulaire public refuse toute
          réservation, quel que soit le jour — sans modifier la liste des dates
          bloquées ci-dessous.
        </p>
        <p className="mt-4 text-sm font-medium text-zinc-800">
          État actuel :{" "}
          {reservationsGloballyDisabled ? (
            <span className="text-amber-800">
              réservations en ligne fermées
            </span>
          ) : (
            <span className="text-emerald-800">réservations ouvertes</span>
          )}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {reservationsGloballyDisabled ? (
            <form action={setReservationsGloballyDisabledAction}>
              <input type="hidden" name="disabled" value="false" />
              <button
                type="submit"
                className="rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-800"
              >
                Rouvrir les réservations en ligne
              </button>
            </form>
          ) : (
            <form action={setReservationsGloballyDisabledAction}>
              <input type="hidden" name="disabled" value="true" />
              <button
                type="submit"
                className="rounded-lg border border-amber-300 bg-amber-50 px-5 py-2.5 text-sm font-medium text-amber-900 hover:bg-amber-100"
              >
                Fermer toutes les réservations en ligne
              </button>
            </form>
          )}
        </div>
      </section>

      <form
        action={addBlockedDateAction}
        className="mt-10 flex flex-wrap items-end gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label
            htmlFor="block-date"
            className="block text-sm font-medium text-zinc-700"
          >
            Jour à bloquer
          </label>
          <input
            id="block-date"
            type="date"
            name="date"
            required
            className="mt-1 rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Bloquer cette date
        </button>
      </form>

      <h2 className="mt-12 text-sm font-semibold uppercase tracking-wide text-zinc-500">
        Dates actuellement bloquées
      </h2>
      {dates.length === 0 ? (
        <p className="mt-4 text-zinc-500">Aucune date bloquée.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {dates.map((d) => (
            <li
              key={d}
              className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm"
            >
              <span className="text-zinc-900">
                <span className="font-mono text-sm text-zinc-500">{d}</span>
                <span className="ml-3 capitalize">{formatFr(d)}</span>
              </span>
              <form action={removeBlockedDateAction}>
                <input type="hidden" name="date" value={d} />
                <button
                  type="submit"
                  className="text-sm font-medium text-red-700 hover:text-red-900"
                >
                  Débloquer
                </button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

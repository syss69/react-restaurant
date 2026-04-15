import { getReservationsGloballyDisabled } from "@/src/lib/blocked-dates";
import { setReservationsGloballyDisabledAction } from "@/src/app/admin/actions";

export const metadata = {
  title: "Admin — Réservations — Fermeture totale | Mitaka",
};

export default async function AdminReservationsGlobalPage() {
  const reservationsGloballyDisabled = await getReservationsGloballyDisabled();

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-zinc-900">
        Réservations en ligne (tous les jours)
      </h1>
      <p className="mt-2 max-w-2xl text-zinc-600">
        Lorsque cette option est désactivée, le formulaire public refuse toute
        réservation, quel que soit le jour.
      </p>

      <p className="mt-6 text-sm font-medium text-zinc-800">
        État actuel :{" "}
        {reservationsGloballyDisabled ? (
          <span className="text-amber-800">réservations en ligne fermées</span>
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
              Ouvrir les réservations en ligne
            </button>
          </form>
        ) : (
          <form action={setReservationsGloballyDisabledAction}>
            <input type="hidden" name="disabled" value="true" />
            <button
              type="submit"
              className="rounded-lg border border-amber-300 bg-amber-50 px-5 py-2.5 text-sm font-medium text-amber-900 hover:bg-amber-100"
            >
              Fermer les réservations en ligne
            </button>
          </form>
        )}
      </div>
    </div>
  );
}


'use client'

import useReveal from "@/src/hooks/useReveal"

export default function ActualitesPage() {
    useReveal('.reveal')

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">

        {/* Header */}
        <div className="max-w-3xl reveal">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Actualités
          </h1>

          <p className="text-gray-600 mb-10">
            Ici apparaîtront les nouvelles et événements de notre restaurant.
          </p>
        </div>

        {/* Placeholder block */}
        <div className="reveal">
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">

            <div className="mx-auto w-16 h-16 rounded-xl bg-brandPink mb-6" />

            <h2 className="text-xl font-semibold mb-3">
              Section en préparation
            </h2>

            <p className="text-gray-500 max-w-xl mx-auto">
              Cette page accueillera bientôt nos actualités, nouveaux menus,
              événements spéciaux et annonces du restaurant.
            </p>

          </div>
        </div>

      </div>
    </main>
  );
}

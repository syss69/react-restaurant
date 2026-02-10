'use client'

import useReveal from "@/src/hooks/useReveal"
import ReservationForm from "@/src/components/reservationForm";

export default function ReservationPage() {
    useReveal('.reveal')
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 reveal">
        <div className="max-w-2xl mx-auto reveal">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Réservation
          </h1>
          <p className="text-gray-600 mb-8">
            Réservez votre table en quelques secondes. Nous vous confirmerons
            rapidement la disponibilité.
          </p>

          <ReservationForm />
        </div>
      </div>
    </main>
  );
}

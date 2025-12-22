const Price = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="reveal">
        <h2 className="text-2xl font-bold mb-4 font-serif">
          Formules
        </h2>

        <p className="text-gray-600 mb-8 max-w-xl">
          Découvrez nos différentes formules adaptées à chaque moment de la journée.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white shadow-sm p-6 text-center flex flex-col gap-5">
            <h3 className="font-semibold">
              Formule midi
            </h3>
            <p className="text-sm text-gray-500">
              Du lundi au vendredi
            </p>
            <div className="text-3xl font-bold text-gray-900">
              17,90€
            </div>
            <h4>Tarif enfant (Entre 4 et 9 ans)</h4>
            <p className="text-xl font-bold text-gray-900">10,90€</p>
          </div>

          <div className="rounded-xl bg-white shadow-sm p-6 text-center flex flex-col gap-5">
            <h3 className="font-semibold">
              Formule midi
            </h3>
            <p className="text-sm text-gray-500">
              Week-end et jours fériés
            </p>
            <div className="text-3xl font-bold text-gray-900">
              23,90€
            </div>
            <h4>Tarif enfant (Entre 4 et 9 ans)</h4>
            <p className="text-xl font-bold text-gray-900">10,90€</p>
          </div>

          <div className="rounded-xl bg-white shadow-sm p-6 text-center flex flex-col gap-5">
            <h3 className="font-semibold">
              Formule soir
            </h3>
            <p className="text-sm text-gray-500">
              Tous les soirs
            </p>
            <div className="text-3xl font-bold text-gray-900">
              29,90€
            </div>
            <h4>Tarif enfant (Entre 4 et 9 ans)</h4>
            <p className="text-xl font-bold text-gray-900">15,90€</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Price

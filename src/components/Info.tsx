
const Contact = () => {

    const days = ["Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    const daysElements = days.map(day => 
        <li key={day}>
            <div className="flex flex-row justify-between items-center">
                <p className="text-lg text-gray-500">{day}</p>
                <div>
                    <p className="text-lg text-gray-900">12:00 - 14:30</p>
                    <p className="text-lg text-gray-900">19:00 - 22:30</p>
                </div>
            </div>
        </li>
    );  

    return (
        <section id="contact" className="container mx-auto px-4 py-12">
            <div className=""> {/*reveal */}
                <h2 className="text-2xl font-bold mb-4">Nous vous attendons !</h2>
                <p className="text-gray-600 mb-6">1234 Adresse Ville 99999</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <form className="p-6 bg-white rounded-lg shadow-sm">
                        <div className="flex flex-col gap-3">
                            
                        </div>
                    </form>
                    <div className="p-6 bg-white rounded-lg shadow-sm">
                        <h3 className="font-semibold mb-2">Horaire</h3>
                        <ul className="list-disc">
                            <li>
                                <div className="flex flex-row justify-between items-center my-3">
                                    <p className="text-lg text-gray-500">Lundi</p>
                                    <p className="text-lg text-gray-900">Ferme</p>
                                </div>
                            </li>
                            {daysElements}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;
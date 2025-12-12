const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className=""> {/* reveal */}
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Bienvenue chez Mitaka</h1>
                        <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                    <div className="flex gap-3">
                        <button className="px-5 py-3 bg-black text-white rounded-md">Reserver une table</button>
                        <a className="px-5 py-3 border border-gray-300 rounded-md" href="#menu">Menu</a>
                    </div>
                    </div>
                    <div className=""> {/* reveal */}
                    <div className="w-full h-64 md:h-80 rounded-2xl bg-brandPink" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;
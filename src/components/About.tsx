const About = () => {
    return (
        <section id="about" className="container mx-auto px-4 py-12">
            <div className=""> {/* reveal */}
                <h2 className="text-2xl font-bold mb-4">Notre cuisine</h2>
                <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-xl p-6 bg-white shadow-sm">
                <div className="h-36 bg-red-200 rounded-md mb-4" />
                <h3 className="font-semibold mb-2">Sushi</h3>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="rounded-xl p-6 bg-white shadow-sm">
            <div className="h-36 bg-red-200 rounded-md mb-4" />
            <h3 className="font-semibold mb-2">Maki</h3>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="rounded-xl p-6 bg-white shadow-sm">
            <div className="h-36 bg-red-200 rounded-md mb-4" />
            <h3 className="font-semibold mb-2">Plats chaudes</h3>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
            </div>
            </div>
        </section>
        )
};

export default About;
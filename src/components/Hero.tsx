import mitaka from "../assets/mitaka.png";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="reveal"> {/* reveal */}
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-serif">Bienvenue chez Mitaka</h1>
                        <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                    <div className="flex gap-3">
                        <a className="px-5 py-3 bg-black text-white rounded-md" href="#info">Reserver une table</a>
                        <a className="px-5 py-3 border border-gray-300 rounded-md" href="#menu">Menu</a>
                    </div>
                    </div>
                    <div className="reveal"> {/* reveal */}
                        <div className="relative w-full h-64 md:h-100 rounded-2xl border overflow-hidden">
                            <Image
                                src={mitaka}
                                alt="Mitaka Restaurant"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;
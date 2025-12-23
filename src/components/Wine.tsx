import winesMitaka from "../assets/wines-mitaka.jpg"
import Image from "next/image";

const Wine = () => {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="reveal">
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-serif">Notre cave</h1>
                        <p className="text-gray-600">Explorez notre collection de vins : de l’Amérique du Sud à l’Asie</p>
                    </div>
                    <div className="reveal">
                        <div className="relative w-full h-64 md:h-96 rounded-2xl border overflow-hidden">
                            <Image
                                src={winesMitaka}
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

export default Wine;
import Image from 'next/image'
import maki from "../assets/maki.jpg"
import dish from "../assets/hotdish.jpg"
import sushi from "../assets/exampleImage.png"

const Menu = () => {
    return (
        <section id="menu" className="container mx-auto px-4 py-12">
            <div className="reveal"> {/* reveal */}
                <h2 className="text-2xl font-bold mb-4 font-serif">Notre cuisine</h2>
                <p className="text-gray-600 mb-6">Explorez le monde de la cuisine asiatique : sushis, makis, sashimis, plats chauds</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <a href="#sushi">    
                            <div className="rounded-xl p-6 bg-white shadow-sm">
                                <div className="h-36 rounded-md mb-4 relative overflow-hidden">
                                    <Image 
                                        src={sushi}
                                        alt="Sushi"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-semibold mb-2">Sushi</h3>
                                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </a>
                        <a href="#maki">
                            <div className="rounded-xl p-6 bg-white shadow-sm">
                                <div className="h-36 rounded-md mb-4 relative overflow-hidden">
                                    <Image 
                                        src={maki}
                                        alt="Maki"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-semibold mb-2">Maki</h3>
                                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </a>
                        <a href="#dishes">
                            <div className="rounded-xl p-6 bg-white shadow-sm">
                                <div className="h-36 rounded-md mb-4 relative overflow-hidden">
                                    <Image 
                                        src={dish}
                                        alt="Plats chaudes"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-semibold mb-2">Plats chaudes</h3>
                                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </a>
                    </div>
            </div>
        </section>
        )
};

export default Menu;
import Carousel from './Carousel'
import { StaticImageData } from "next/image";
import Image from 'next/image'

type GalleryItem = {id: number; name: string; photo: string|StaticImageData}

type GalleryProps = {
    title: string
    description?: string
    items: GalleryItem[]
}

const Gallery = ({title, description, items} : GalleryProps) => {
    
    const slides = items.map((item) => (
        <div
            key={item.id}
            className="relative rounded-lg h-40 md:h-48 bg-red-200 overflow-hidden">
                <Image
                src={item.photo}
                alt={item.name}
                fill
                className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                    <span className="text-white text-sm">{item.name}</span>
                </div>
        </div>
    ))


    return (
        <section className="container mx-auto px-4 py-12">
            <div className="reveal">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>

                {description && (
                <p className="text-gray-600 mb-6">{description}</p>
                )}

                <Carousel items={slides} />
            </div>
        </section>
    )
};

export default Gallery;
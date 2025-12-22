import Image, { StaticImageData } from 'next/image';


type InteriorProps = {
    description: string
    image: StaticImageData
    imageAlt: string
    imagePosition: string
}
    
    const ImageTextSection = ({description, image, imageAlt, imagePosition}: InteriorProps) => {
          return (
            <section className="bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 py-12 md:py-20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text */}
                <div className={`reveal ${imagePosition === 'left' ? 'md:order-2' : ''}`}>
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-serif">
                    {description}
                  </h2>
                </div>

                {/* Image */}
                <div className={`reveal ${imagePosition === 'left' ? 'md:order-1' : ''}`}>
                  <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
};

export default ImageTextSection;
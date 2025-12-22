import Image from "next/image";
import mitakaEntr from "../assets/mitaka2.jpg"

const Hero2 = () => {
    return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={mitakaEntr}
        alt="Restaurant ambiance"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Mitaka
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="flex gap-3">
            <a
              href="#menu"
              className="px-6 py-3 bg-white text-black rounded-md"
            >
              Voir le menu
            </a>
            <a
              href="#info"
              className="px-6 py-3 border border-white/80 rounded-md"
            >
              Reserver
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero2;
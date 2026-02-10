'use client'

import Image from "next/image";
import { useEffect, useState } from 'react'
import mitakaEntr from "../assets/mitaka2.jpg"
import mitakaCabane from "../assets/mitaka-cabane.jpg"
import mitakaTable from "../assets/mitaka-table.jpg"
import mitaka3 from "../assets/mitaka3.jpg"

const Hero2 = () => {
    const [current, setCurrent] = useState(0);

    const images = [mitakaEntr, mitakaCabane, mitakaTable, mitaka3]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % 4)
        }, 5000)

        return () => clearInterval(timer)
    }, [4, 5000])

    return (
    <section id="hero" className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden reveal">
      {/* Background image */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt={`Hero image ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

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
              Voir les plats
            </a>
            <a
              href="#call"
              className="px-6 py-3 border border-white/80 rounded-md"
            >
              Reserver
            </a>
          </div>
        </div>
      </div>
      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === current ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
};

export default Hero2;
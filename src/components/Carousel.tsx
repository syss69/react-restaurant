'use client'
import React, { useRef } from 'react'


interface CarouselProps {
    items: React.ReactNode[]
}


const Carousel = ({ items }: CarouselProps) => {
    const ref = useRef<HTMLDivElement | null>(null)

    const scroll = (dir: number) => {
        if (!ref.current) return
            const w = ref.current.clientWidth
            ref.current.scrollBy({ left: dir * w, behavior: 'smooth' })
    }


    return (
    <div className="relative border">
        <div className="flex gap-4 items-center my-4">
            <button onClick={() => scroll(-1)} className="p-2 rounded-md bg-white shadow">◀</button>
                <div ref={ref} className="carousel-scroll flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full" style={{scrollSnapType: 'x mandatory'}}>
                    {items.map((it, i) => (
                    <div key={i} className="snap-start flex-shrink-0 w-[80%] sm:w-[48%] md:w-[32%]">
                        {it}
                    </div>
                    ))}
                </div>
            <button onClick={() => scroll(1)} className="p-2 rounded-md bg-white shadow">▶</button>
        </div>
    </div>
    )
};

export default Carousel;
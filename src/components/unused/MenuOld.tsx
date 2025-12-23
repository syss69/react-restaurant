'use client'

import { StaticImageData } from "next/image";
import exampleImage from "../assets/exampleImage.png";
import Image  from "next/image";

type Meal = { title: string; description: string; photo: string|StaticImageData }


const Menu =() => {
    const meals: Meal[] = new Array(6).fill(0).map((_,i)=>({
        title: `Plat ${i+1}`,
        description: `Lorem ipsum dolor sit amet.`,
        photo: exampleImage
    }))


    return (
        <section id="menu" className="container mx-auto px-4 py-12">
            <div className="reveal"> {/* reveal */}
                <h2 className="text-2xl font-bold mb-4 font-serif">Nos specialites</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {meals.map((m,idx)=> (
                    <div key={idx} className="rounded-xl p-6 bg-white shadow-sm">
                        <div className="relative h-36 rounded-md overflow-hidden mb-4">
                            <Image
                                src={m.photo}
                                alt={m.description}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{m.title}</h3>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">{m.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Menu;
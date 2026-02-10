'use client'

import Wine from '@/src/components/Wine';
import Menu from '@/src/components/Menu';
import Gallery from '@/src/components/Gallery';
import useReveal from "@/src/hooks/useReveal"
import menu from "@/src/data/menu.json";

export default function Carte () {
    useReveal('.reveal')

    return(
        <>
        <Wine/>
        <Menu/>
        <Gallery id="sushi" title="Sushis" description="Decouvrez nos sushis" items={menu.sushi}/>
        <Gallery id="maki" title="Maki" description="Decouvrez nos maki" items={menu.maki}/>
        <Gallery id="dishes" title="Plats chauds" description="Decouvrez nos plats chauds" items={menu.dishes}/>
        <Gallery id="cocktails" title="Cocktailes" description="Decouvrez nos cocktailes" items={menu.drinks}/>
        </>
    )
}
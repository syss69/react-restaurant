import hotdish from "../assets/hotdish.jpg"
import cocktail from "../assets/cocktail-example.jpg"
import sushi from "../assets/exampleImage.png"

import { StaticImageData } from "next/image"

export const images: Record<string, StaticImageData> = {
    'hotdish.jpg': hotdish,
    'cocktail.jpg': cocktail,
    'sushi.png': sushi
}
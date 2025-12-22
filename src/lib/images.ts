import hotdish from "../assets/hotdish.jpg"
import cocktail from "../assets/cocktail-example.jpg"
import sushi from "../assets/exampleImage.png"
import maki from "../assets/maki.jpg"
import twoPers from "../assets/2pers.jpg"
import sixPers from "../assets/6pers.jpg"
import twelvePers from "../assets/grand-table.jpg"

import { StaticImageData } from "next/image"

export const images: Record<string, StaticImageData> = {
    'hotdish.jpg': hotdish,
    'cocktail.jpg': cocktail,
    'sushi.png': sushi,
    'maki.png': maki,
    '2pers.jpg': twoPers,
    '6pers.jpg': sixPers,
    '12pers.jpg': twelvePers
}
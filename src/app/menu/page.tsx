'use client'

import ImageTextSection from "@/src/components/ImageTextSection"
import useReveal from "@/src/hooks/useReveal"
import orderTab from "@/src/assets/order-tab.jpg"

export default function Concept () {
    useReveal('.reveal')

    return(
        <ImageTextSection 
            title = "Notre Concept"
            description="Chez Mitaka, nous avons repensé l’expérience du buffet asiatique.
Ici, il ne s’agit pas simplement de se lever et de se servir —
nous vous invitons à vivre une expérience conviviale et moderne, directement à table.

Grâce à nos tablettes, vous pouvez passer vos commandes sans quitter votre place.
Les saveurs d’Asie viennent à vous, préparées à la demande et servies directement à votre table.

Ce concept « à volonté » nous permet de vous offrir :

une cuisine fraîche et variée,

un service fluide et confortable,

et un moment de partage, sans attente ni déplacements inutiles.

Chez Mitaka, l’Asie s’invite à votre table."
            image = {orderTab}
            imageAlt="Tablette pour faire vos commandes"
            imagePosition="left"
        />
    )
}
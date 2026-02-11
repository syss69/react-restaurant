'use client'

import Info from "@/src/components/Info"
import useReveal from "@/src/hooks/useReveal"


export default function Contact () {
    useReveal('.reveal')

    return(
        <div className="min-h-[85vh]">
            <Info/>
        </div>

    )
}
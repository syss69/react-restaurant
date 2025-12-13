'use client'

import { useEffect } from 'react'


const useReveal = (selector = '.reveal') => {
    useEffect(() => {
        const items = document.querySelectorAll<HTMLElement>(selector)
        if (!items.length) return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed')
                    observer.unobserve(entry.target)
                }
        })
        }, { threshold: 0.12 })

        items.forEach(item => observer.observe(item))
        return () => observer.disconnect()
    }, [selector])
};

export default useReveal;
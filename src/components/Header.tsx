'use client'

import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false)
    };

    return (
        <>
        <header className="bg-white shadow-sm sticky top-0 z-30 w-full" >
            <div className="container mx-auto px-4 py-3 flex justify-between">
                <div className="text-xl font-semibold font-serif">Mitaka</div>
                <nav className="hidden md:flex gap-6 text-sm">
                    <a href="#hero" className="hover:text-red-700">Mitaka</a>
                    <a href="#tables" className="hover:text-red-700">Nos tables</a>
                    <a href="#menu" className="hover:text-red-700">Menu</a>
                    <a href="#price" className="hover:text-red-700">Prix</a>
                    <a href="#info" className="hover:text-red-700">Contact</a>
                </nav>
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden hover:text-red-700 p-2 rounded font-serif"
                >
                    Menu
                </button>
            </div>
        </header>
        {open && (
            <div className="fixed inset-0 z-40 md:hidden">

            <div
                className="absolute inset-0 bg-black/40"
                onClick={closeMenu}
            />

            <div className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-6 animate-slide-in">
                <button
                onClick={closeMenu}
                className="self-end text-sm text-gray-500"
                >
                ✕
                </button>

                <nav className="flex flex-col gap-4 text-lg">
                <a href="#hero" onClick={closeMenu} className="hover:text-red-700">Mitaka</a>
                <a href="#tables" onClick={closeMenu} className="hover:text-red-700">Nos tables</a>
                <a href="#menu" onClick={closeMenu} className="hover:text-red-700">Menu</a>
                <a href="#price" onClick={closeMenu} className="hover:text-red-700">Prix</a>
                <a href="#info" onClick={closeMenu} className="hover:text-red-700">Contact</a>
                </nav>
            </div>
            </div>
        )}
        </>
    )
}
export default Header;
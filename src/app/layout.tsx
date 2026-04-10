import "./globals.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import SiteChrome from "@/src/components/SiteChrome";
import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
title: 'Mitaka',
description: 'Demo site built with Next.js + TypeScript + Tailwind'
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});


export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}

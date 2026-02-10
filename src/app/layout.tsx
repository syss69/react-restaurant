import './globals.css'
import 'leaflet/dist/leaflet.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'
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
          <div className="min-h-screen bg-gray-50 text-gray-800">
            <Header />
            {children}
            <Footer />
          </div>
      </body>
    </html>
  )
}

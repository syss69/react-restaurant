import './globals.css'
import 'leaflet/dist/leaflet.css'
import React from 'react'


export const metadata = {
title: 'Mitaka',
description: 'Demo site built with Next.js + TypeScript + Tailwind'
}


export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  )
}

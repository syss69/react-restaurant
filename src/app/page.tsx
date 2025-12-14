'use client'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Menu from '../components/Menu';
import Info from '../components/Info';
import useReveal from '../hooks/useReveal';

import cocktailExample from "../assets/cocktail-example.jpg"

export default function Home() {
  useReveal('.reveal')

  const exDrinksGallery = [
    {id: 1, name: "Cocktail 1", photo: cocktailExample},
    {id: 2, name: "Cocktail 2", photo: cocktailExample},
    {id: 3, name: "Cocktail 3", photo: cocktailExample},
    {id: 4, name: "Cocktail 4", photo: cocktailExample},
    {id: 5, name: "Cocktail 5", photo: cocktailExample},
    {id: 6, name: "Cocktail 6", photo: cocktailExample},
    {id: 7, name: "Cocktail 7", photo: cocktailExample},
    {id: 8, name: "Cocktail 8", photo: cocktailExample},
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero/>
        <About/>
        <Menu/>
        <Gallery title="Cocktailes" description="Decouvrez nos cocktailes" items={exDrinksGallery}/>
        <Info/>
      </main>
      <Footer/>
    </div>
  );
}

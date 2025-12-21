'use client'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Menu from '../components/Menu';
import Info from '../components/Info';
import useReveal from '../hooks/useReveal';

import menu from "../data/menu.json";

export default function Home() {
  useReveal('.reveal')


  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero/>
        <About/>
        <Menu/>
        <Gallery id="sushi" title="Sushis" description="Decouvrez nos sushis" items={menu.sushi}/>
        <Gallery id="dishes" title="Plats chauds" description="Decouvrez nos plats chauds" items={menu.dishes}/>
        <Gallery id="cocktails" title="Cocktailes" description="Decouvrez nos cocktailes" items={menu.drinks}/>
        <Info/>
      </main>
      <Footer/>
    </div>
  );
}

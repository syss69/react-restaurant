'use client'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Info from '../components/Info';
import Price from '../components/Price';
import Wine from '../components/Wine';
import Interior from '../components/Interior';

import useReveal from '../hooks/useReveal';

import Hero2 from '../components/Herov2';

import menu from "../data/menu.json";

export default function Home() {
  useReveal('.reveal')


  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero2/>
        <Interior/>
        <Wine/>
        <Menu/>
        <Gallery id="sushi" title="Sushis" description="Decouvrez nos sushis" items={menu.sushi}/>
        <Gallery id="maki" title="Maki" description="Decouvrez nos maki" items={menu.maki}/>
        <Gallery id="dishes" title="Plats chauds" description="Decouvrez nos plats chauds" items={menu.dishes}/>
        <Gallery id="cocktails" title="Cocktailes" description="Decouvrez nos cocktailes" items={menu.drinks}/>
        <Price/>
        <Info/>
      </main>
      <Footer/>
    </div>
  );
}

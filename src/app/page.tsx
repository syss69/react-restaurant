'use client'

import Price from '../components/Price';
import Interior from '../components/Interior';

import useReveal from '../hooks/useReveal';

import Hero2 from '../components/Herov2';


export default function Home() {
  useReveal('.reveal')


  return (
      <main>
        <Hero2/>
        <Interior/>
        <Price/>
      </main>
  );
}

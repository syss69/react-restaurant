
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Menu from '../components/Menu';
import Info from '../components/Info';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero/>
        <About/>
        <Gallery/>
        <Menu/>
        <Info/>
      </main>
      <Footer/>
    </div>
  );
}

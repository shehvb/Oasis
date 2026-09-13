import { useEffect } from 'react';
import { useAnimateOnScroll } from './hooks/useAnimateOnScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Contact from './components/Contact';
import BrandsBar from './components/BrandsBar';
import Footer from './components/Footer';

function App() {
  useAnimateOnScroll();
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Team />
      <Contact />
      <BrandsBar />
      <Footer />
    </>
  );
}

export default App;

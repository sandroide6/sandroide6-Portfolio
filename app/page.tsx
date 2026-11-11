import Header from '@/components/layout/Header';
import FloatingNav from '@/components/layout/FloatingNav';
import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/providers/LenisProvider';
import Hero from '@/components/sections/Hero';
import Manifesto from '@/components/sections/Manifesto';
import FeaturedCase from '@/components/sections/FeaturedCase';
import Bridge from '@/components/sections/Bridge';
import ProjectsCarousel from '@/components/sections/ProjectsCarousel';
import AboutBento from '@/components/sections/AboutBento';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <LenisProvider>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <FeaturedCase />
        <Bridge />
        <ProjectsCarousel />
        <AboutBento />
        <Contact />
      </main>
      <Footer />
      <FloatingNav />
    </LenisProvider>
  );
}

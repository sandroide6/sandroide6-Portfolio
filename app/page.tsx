import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TechStackSection from '@/components/sections/TechStackSection';
import ContactSection from '@/components/sections/ContactSection';
import ClientProviders from '@/components/ClientProviders';

export default function Home() {
  return (
    <ClientProviders>
      <div className="relative overflow-hidden">
        {/* Film grain noise overlay */}
        <div className="noise" aria-hidden="true" />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <TechStackSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ClientProviders>
  );
}

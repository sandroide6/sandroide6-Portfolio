'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Update active section
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 ${
          scrolled
            ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-red-dark/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#hero')}
              className="font-heading font-black text-2xl tracking-tight"
            >
              <span className="text-white">S</span>
              <span className="text-red-neon" style={{ textShadow: '0 0 15px rgba(193,18,31,0.6)' }}>.</span>
              <span className="text-white">E</span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ label, href }) => {
                const id = href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className={`font-mono text-xs tracking-widest uppercase transition-all duration-300 relative ${
                      isActive ? 'text-red-neon' : 'text-white/40 hover:text-white/80'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-red-neon"
                        style={{ boxShadow: '0 0 6px rgba(193,18,31,0.8)' }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Social links + mobile toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-red-neon transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white/60 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-[899] bg-[#050505]/95 backdrop-blur-xl border-b border-red-dark/20"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="font-mono text-sm tracking-widest uppercase text-white/60 hover:text-white text-left py-2 border-b border-white/5 transition-colors"
                >
                  {label}
                </button>
              ))}
              <div className="flex gap-4 pt-2">
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white">
                  <Github size={18} />
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-red-neon">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

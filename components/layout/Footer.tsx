'use client';

import { Github, Linkedin, Mail, ArrowUpCircle } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-red-dark/15 py-12 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(193,18,31,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(193,18,31,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <p className="font-heading font-black text-2xl">
              <span className="text-white">S</span>
              <span className="text-red-neon">.</span>
              <span className="text-white">E</span>
            </p>
            <p className="font-mono text-[10px] text-white/20 tracking-[0.25em] uppercase mt-1">
              Santiago Echeverri
            </p>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="font-mono text-[11px] text-white/20 tracking-widest">
              CRAFTED WITH PRECISION — MEDELLÍN, COLOMBIA
            </p>
            <p className="font-mono text-[10px] text-white/15 mt-1">
              © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
            </p>
          </div>

          {/* Social + scroll top */}
          <div className="flex items-center gap-5">
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
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white/30 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollTop}
              className="text-white/20 hover:text-red-neon transition-colors duration-300"
              aria-label="Back to top"
            >
              <ArrowUpCircle size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

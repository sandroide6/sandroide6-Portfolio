'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Terminal, Github } from 'lucide-react';
import { siteConfig } from '@/lib/config';

const TechScene = dynamic(() => import('@/components/three/TechScene'), { ssr: false });

const TEXT_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Grid overlay — the site's one ambient background layer */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16, 185, 129, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.06) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
        }}
      />

      {/* Vignette edges */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.8) 100%)' }} />

      {/* Three.js scene — right half */}
      <div className="absolute inset-0 lg:left-1/2 pointer-events-none">
        <TechScene />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={TEXT_VARIANTS}
            className="section-label mb-6"
          >
            <Terminal size={11} className="text-green-neon" />
            {siteConfig.handle} / {siteConfig.role.toLowerCase()}
          </motion.div>

          {/* Main headline */}
          <motion.h1
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={TEXT_VARIANTS}
            className="font-heading font-black leading-none mb-6"
            style={{ fontSize: 'clamp(1.5rem, 5.5vw, 4.5rem)' }}
          >
            <span className="block text-white">CONSTRUYO</span>
            <span className="block gradient-text">EL FUTURO</span>
            <span className="block text-white/35">DIGITAL.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={0.8}
            initial="hidden"
            animate="visible"
            variants={TEXT_VARIANTS}
            className="text-sm lg:text-base text-white/60 leading-relaxed mb-10 max-w-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={1.0}
            initial="hidden"
            animate="visible"
            variants={TEXT_VARIANTS}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-green !text-xs !py-2.5 !px-5">
              Ver proyectos <ArrowRight size={13} />
            </a>
            <a href="#contact" className="btn-ghost !text-xs !py-2.5 !px-5">
              <Zap size={13} /> Trabajemos juntos
            </a>
          </motion.div>
        </div>
      </div>

      {/* GitHub pill */}
      <motion.a
        href={siteConfig.social.github}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 text-white/45 hover:text-white transition-colors"
      >
        <Github size={16} />
        <div className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="font-mono text-[9px] tracking-[0.3em] rotate-90 origin-center">GITHUB</span>
      </motion.a>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
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

const floatingCode = [
  { text: 'const ai = new OpenAI();', x: '72%', y: '15%', delay: 1.2 },
  { text: 'await automate(flow)', x: '68%', y: '78%', delay: 1.5 },
  { text: 'docker run --scale 10', x: '75%', y: '55%', delay: 1.8 },
  { text: 'model.train(data)', x: '62%', y: '35%', delay: 2.1 },
];

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      bgRef.current.style.background = `radial-gradient(ellipse at ${55 + x * 15}% ${30 + y * 20}%, rgba(122,0,0,0.18) 0%, transparent 60%)`;
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Reactive ambient glow */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none transition-all duration-700" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(193,18,31,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(193,18,31,0.06) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
        }}
      />

      {/* Vignette edges */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.8) 100%)' }} />

      {/* Three.js scene — right half */}
      <div className="absolute inset-0 lg:left-1/2 pointer-events-none">
        <TechScene />
      </div>

      {/* Floating code lines */}
      {floatingCode.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ duration: 0.6, delay: line.delay, y: { repeat: Infinity, duration: 4 + i, ease: 'easeInOut' } }}
          className="absolute hidden lg:block font-mono text-[10px] text-red-neon/25 whitespace-nowrap select-none"
          style={{ left: line.x, top: line.y }}
        >
          {line.text}
        </motion.div>
      ))}

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
            <Terminal size={11} className="text-red-neon" />
            {siteConfig.handle} / {siteConfig.role.toLowerCase()}
          </motion.div>

          {/* Main headline */}
          <motion.h1
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={TEXT_VARIANTS}
            className="font-heading font-black leading-none mb-6"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
          >
            <span className="block text-white">CONSTRUYO</span>
            <span className="block gradient-text">EL FUTURO</span>
            <span className="block text-white/15">DIGITAL.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={0.8}
            initial="hidden"
            animate="visible"
            variants={TEXT_VARIANTS}
            className="text-base lg:text-lg text-white/45 leading-relaxed mb-10 max-w-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={1.0}
            initial="hidden"
            animate="visible"
            variants={TEXT_VARIANTS}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a href="#projects" className="btn-red">
              Ver proyectos <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn-ghost">
              <Zap size={15} /> Trabajemos juntos
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={1.3}
            initial="hidden"
            animate="visible"
            variants={TEXT_VARIANTS}
            className="flex gap-10 border-t border-white/5 pt-8"
          >
            {[
              { value: '5+', label: 'Proyectos' },
              { value: 'IA', label: 'Integrada' },
              { value: '∞', label: 'Escalable' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-heading font-black text-2xl text-white">{value}</p>
                <p className="font-mono text-[10px] text-white/25 uppercase tracking-[0.2em] mt-0.5">{label}</p>
              </div>
            ))}
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
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 text-white/20 hover:text-white/60 transition-colors"
      >
        <Github size={16} />
        <div className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="font-mono text-[9px] tracking-[0.3em] rotate-90 origin-center">GITHUB</span>
      </motion.a>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-red-neon to-transparent" style={{ boxShadow: '0 0 4px rgba(193,18,31,0.6)' }} />
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap, Code2, Zap, Cpu, GitBranch, Heart,
} from 'lucide-react';
import { aboutHighlights, siteConfig } from '@/lib/config';

const ICON_MAP: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={20} />,
  Code2: <Code2 size={20} />,
  Zap: <Zap size={20} />,
  Cpu: <Cpu size={20} />,
  GitBranch: <GitBranch size={20} />,
  Heart: <Heart size={20} />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 lg:mb-16 max-w-2xl"
        >
          <p className="section-label mb-4">Sobre mí</p>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-white leading-tight mb-6">
            Construyo soluciones<br />
            <span className="gradient-text">con propósito real.</span>
          </h2>
          <p className="text-white/60 leading-relaxed">
            Soy {siteConfig.fullName}, {siteConfig.role.toLowerCase()}. Priorizo calidad técnica
            y resultados medibles en cada proyecto.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {aboutHighlights.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card rounded-xl p-6 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-green-neon transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                  }}
                >
                  {ICON_MAP[item.icon]}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-white mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(6, 95, 70, 0.06), rgba(16, 185, 129, 0.03))',
            border: '1px solid rgba(16, 185, 129, 0.1)',
          }}
        >
          <div>
            <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-1">Disponibilidad</p>
            <p className="font-heading font-bold text-white">
              Abierto a proyectos freelance y colaboraciones
            </p>
          </div>
          <a href="#contact" className="btn-green flex-shrink-0">
            Conversemos
          </a>
        </motion.div>
      </div>
    </section>
  );
}

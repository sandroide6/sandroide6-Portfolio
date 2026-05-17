'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Bot, Globe, Plug, MessageSquare, Settings2, BarChart3,
} from 'lucide-react';
import { services } from '@/lib/config';

const ICON_MAP: Record<string, React.ReactNode> = {
  Bot: <Bot size={22} />,
  Globe: <Globe size={22} />,
  Plug: <Plug size={22} />,
  MessageSquare: <MessageSquare size={22} />,
  Settings2: <Settings2 size={22} />,
  BarChart3: <BarChart3 size={22} />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="services" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(122,0,0,0.08) 0%, transparent 60%)' }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(193,18,31,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(193,18,31,0.04) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-4 justify-center">Servicios</p>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-white leading-tight">
            Lo que puedo<br />
            <span className="gradient-text">construir para ti.</span>
          </h2>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="glass-card rounded-xl p-7 group relative overflow-hidden"
            >
              {/* Hover glow corner */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top right, rgba(193,18,31,0.12), transparent 70%)' }}
              />

              {/* Number */}
              <div className="absolute top-5 right-6 font-mono text-[10px] text-white/10">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-red-neon mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-sm"
                style={{
                  background: 'rgba(193,18,31,0.08)',
                  border: '1px solid rgba(193,18,31,0.2)',
                }}
              >
                {ICON_MAP[service.icon]}
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-lg text-white mb-3">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-5">{service.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

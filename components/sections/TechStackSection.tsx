'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { techStack } from '@/lib/config';

const CATEGORY_COLORS: Record<string, string> = {
  Languages: '#c1121f',
  Frontend: '#c1121f',
  Backend: '#9b0d18',
  'AI/ML': '#c1121f',
  DevOps: '#7a0000',
  Database: '#7a0000',
  IoT: '#9b0d18',
  Tools: '#7a0000',
};

const categories = [...new Set(techStack.map((t) => t.category))];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

export default function TechStackSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="stack" className="relative py-32 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'linear-gradient(rgba(193,18,31,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(193,18,31,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(122,0,0,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-4 justify-center">Stack tecnológico</p>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-white leading-tight">
            Herramientas con las que<br />
            <span className="gradient-text">opero a diario.</span>
          </h2>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="glass-card rounded-xl p-5 group relative overflow-hidden"
            >
              {/* Category dot */}
              <div
                className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full"
                style={{ background: CATEGORY_COLORS[tech.category] ?? '#c1121f', boxShadow: `0 0 6px ${CATEGORY_COLORS[tech.category] ?? '#c1121f'}` }}
              />

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 h-px overflow-hidden w-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${tech.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="h-full"
                  style={{ background: 'linear-gradient(90deg, #7a0000, #c1121f)' }}
                />
              </div>

              {/* Name */}
              <p className="font-heading font-bold text-sm text-white group-hover:text-red-neon transition-colors duration-300 leading-tight">
                {tech.name}
              </p>
              <p className="font-mono text-[10px] text-white/25 mt-1 uppercase tracking-widest">
                {tech.category}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: CATEGORY_COLORS[cat] ?? '#c1121f' }}
              />
              <span className="font-mono text-[10px] text-white/25 uppercase tracking-widest">{cat}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

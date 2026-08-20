'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { techStack } from '@/lib/config';

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
    <section ref={ref} id="stack" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 lg:mb-16 max-w-3xl mx-auto text-center"
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
              className="glass-card rounded-xl p-5 relative overflow-hidden"
            >
              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 h-px overflow-hidden w-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${tech.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="h-full"
                  style={{ background: 'linear-gradient(90deg, #065f46, #10b981)' }}
                />
              </div>

              {/* Name */}
              <p className="font-heading font-bold text-sm text-white leading-tight">
                {tech.name}
              </p>
              <p className="font-mono text-[10px] text-white/45 mt-1 uppercase tracking-widest">
                {tech.category}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

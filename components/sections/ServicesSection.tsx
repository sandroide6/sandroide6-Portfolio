'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '@/lib/config';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="services" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 lg:mb-16 max-w-3xl mx-auto text-center"
        >
          <p className="section-label mb-4 justify-center">Servicios</p>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-white leading-tight">
            Soluciones<br />
            <span className="gradient-text">a tu medida.</span>
          </h2>
        </motion.div>

        {/* Services list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto divide-y divide-white/10"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={rowVariants}
              className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-6"
            >
              <span className="font-mono text-xs text-green-neon/60 sm:w-8 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-green-neon transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mt-1">{service.description}</p>
                <p className="font-mono text-xs text-white/35 mt-2 tracking-wide">
                  {service.tags.join('  /  ')}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

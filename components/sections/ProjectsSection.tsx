'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Zap } from 'lucide-react';
import { projects } from '@/lib/config';
import ProjectCover from '@/components/ui/ProjectCover';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

function ProjectCard({
  project,
  featured = false,
  index,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`glass-card rounded-xl overflow-hidden group relative ${featured ? 'md:col-span-2' : ''}`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div
          className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-sm font-mono text-[10px] uppercase tracking-widest"
          style={{
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: '#10b981',
          }}
        >
          <Zap size={9} /> Featured
        </div>
      )}

      {/* Cover */}
      <div className={`relative overflow-hidden ${featured ? 'h-52 sm:h-64' : 'h-44'}`}>
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <ProjectCover seed={index} />
        </div>
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(to bottom, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.7) 100%)',
          }}
        />
        {/* Hover overlay with links */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center gap-4"
              style={{ background: 'rgba(5,5,5,0.7)', backdropFilter: 'blur(4px)' }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'white' }}
              >
                <Github size={14} /> GitHub
              </a>
              {project.featured && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-medium"
                  style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#10b981' }}
                >
                  <ExternalLink size={14} /> Ver
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-base text-white mb-2">{project.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="projects" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <p className="section-label mb-4">Proyectos</p>
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-white leading-tight">
              Trabajo real,<br />
              <span className="gradient-text">resultados reales.</span>
            </h2>
          </div>
          <a
            href={`https://github.com/sandroide6`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-shrink-0"
          >
            <Github size={14} /> Ver todo en GitHub
          </a>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              featured={project.featured}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

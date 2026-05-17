'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const codeLines = [
  '> INITIALIZING SYSTEM...',
  '> LOADING AI MODULES...',
  '> COMPILING PORTFOLIO...',
  '> READY.',
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const duration = 2400;
    const interval = 20;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const p = Math.min(100, Math.round((step / steps) * 100));
      setProgress(p);
      setLineIndex(Math.floor((p / 100) * (codeLines.length - 1)));

      if (p >= 100) {
        clearInterval(timer);
        setTimeout(() => setVisible(false), 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[9998] bg-[#050505] flex flex-col items-center justify-center"
        >
          {/* Scanline effect */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(193,18,31,0.02) 2px, rgba(193,18,31,0.02) 4px)',
            }}
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(193,18,31,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(193,18,31,0.08) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Corner decorations */}
          {['top-6 left-6', 'top-6 right-6', 'bottom-6 left-6', 'bottom-6 right-6'].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-8 h-8`}>
              <div className="absolute top-0 left-0 w-full h-px bg-red-neon opacity-50" />
              <div className="absolute top-0 left-0 w-px h-full bg-red-neon opacity-50" />
            </div>
          ))}

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 text-center"
          >
            <h1 className="font-heading font-black text-7xl tracking-tight">
              <span className="text-white">S</span>
              <span className="text-red-neon" style={{ textShadow: '0 0 30px rgba(193,18,31,0.8)' }}>.</span>
              <span className="text-white">E</span>
            </h1>
            <p className="font-mono text-xs text-white/20 tracking-[0.3em] mt-2 uppercase">
              Portfolio System
            </p>
          </motion.div>

          {/* Terminal lines */}
          <div className="mb-10 font-mono text-xs space-y-1.5 text-center">
            {codeLines.slice(0, lineIndex + 1).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={i === lineIndex ? 'text-red-neon' : 'text-white/25'}
              >
                {line}
                {i === lineIndex && progress < 100 && (
                  <span className="ml-1 inline-block w-2 h-3 bg-red-neon animate-pulse align-middle" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="relative w-64">
            <div className="w-full h-px bg-white/5 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-dark via-red-neon to-red-bright"
                style={{ width: `${progress}%`, boxShadow: '0 0 10px rgba(193,18,31,0.8)' }}
              />
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="font-mono text-[10px] text-white/20">LOADING</span>
              <span className="font-mono text-[10px] text-red-neon">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

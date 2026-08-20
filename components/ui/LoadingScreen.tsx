'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 900;
    const interval = 20;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const p = Math.min(100, Math.round((step / steps) * 100));
      setProgress(p);

      if (p >= 100) {
        clearInterval(timer);
        setTimeout(() => setVisible(false), 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[9998] bg-[#050505] flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 text-center"
          >
            <h1 className="font-heading font-black text-6xl tracking-tight">
              <span className="text-white">S</span>
              <span className="text-green-neon">.</span>
              <span className="text-white">E</span>
            </h1>
          </motion.div>

          {/* Progress bar */}
          <div className="relative w-56">
            <div className="w-full h-px bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-green-neon"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

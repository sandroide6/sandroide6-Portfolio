'use client';

import { useEffect, useRef } from 'react';

const CHARS = '01アイウエオカキクケコサシスセソタチツテト0123456789$+-*/=<>{}[]';
const FONT_SIZE = 16;
const FRAME_INTERVAL = 55; // ~18fps — the effect doesn't need 60fps to read as "falling code"
const MOBILE_BREAKPOINT = 640;

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;
    if (window.innerWidth < MOBILE_BREAKPOINT) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let columns = 0;
    let drops: number[] = [];

    const setup = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(window.innerWidth / FONT_SIZE);
      drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * -50));
    };
    setup();

    let rafId = 0;
    let lastFrame = 0;
    let paused = document.hidden;

    const draw = (time: number) => {
      rafId = requestAnimationFrame(draw);
      if (paused) return;
      if (time - lastFrame < FRAME_INTERVAL) return;
      lastFrame = time;

      ctx.fillStyle = 'rgba(5, 5, 5, 0.08)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${FONT_SIZE}px var(--font-mono), monospace`;

      for (let i = 0; i < columns; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        ctx.fillStyle = 'rgba(167, 243, 208, 0.5)';
        ctx.fillText(char, x, y);
        ctx.fillStyle = 'rgba(16, 185, 129, 0.28)';
        ctx.fillText(char, x, y - FONT_SIZE);

        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    rafId = requestAnimationFrame(draw);

    const onVisibility = () => { paused = document.hidden; };
    document.addEventListener('visibilitychange', onVisibility);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setup, 200);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-rain fixed inset-0 z-0 pointer-events-none opacity-[0.16]"
      aria-hidden="true"
    />
  );
}

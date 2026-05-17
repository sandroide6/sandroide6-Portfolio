'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.12);
      cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.12);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x - 20}px, ${cursorPos.current.y - 20}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mousePos.current.x - 3}px, ${mousePos.current.y - 3}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    const interactiveEls = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    window.addEventListener('mousemove', onMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
      cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  return (
    <>
      {/* Large ring - follows with lag */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[10000] pointer-events-none will-change-transform"
        style={{
          width: isHovering ? '50px' : '40px',
          height: isHovering ? '50px' : '40px',
          border: `1px solid ${isHovering ? '#c1121f' : 'rgba(193,18,31,0.5)'}`,
          borderRadius: '50%',
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.3s ease',
          opacity: isVisible ? (isHovering ? 0.9 : 0.5) : 0,
          mixBlendMode: 'difference',
        }}
      />
      {/* Dot - snaps to position */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[10000] pointer-events-none will-change-transform"
        style={{
          width: '6px',
          height: '6px',
          background: '#c1121f',
          borderRadius: '50%',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          boxShadow: '0 0 8px rgba(193,18,31,0.8)',
        }}
      />
    </>
  );
}

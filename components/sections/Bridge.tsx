'use client';

import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('@/components/three/ParticleField'), { ssr: false });

export default function Bridge() {
  return (
    <section className="bridge" aria-label="Software a la medida, seguro desde el diseño">
      <ParticleField shape="dust" count={1800} scale={2.6} className="hero-canvas" />
      <div className="wrap">
        <p>
          Software a la medida,{' '}
          <svg className="lock" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="3.5" y="9" width="13" height="9" rx="2" stroke="#F0577D" />
            <path d="M6.5 9V6.5a3.5 3.5 0 017 0V9" stroke="#F0577D" />
            <circle cx="10" cy="13.5" r="1.4" fill="#D11F4B" />
          </svg>{' '}
          seguro desde el diseño.
        </p>
      </div>
    </section>
  );
}

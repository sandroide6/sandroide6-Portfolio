'use client';

import { useEffect, useState } from 'react';

const base = process.env.NODE_ENV === 'production' ? '/sandroide6-Portfolio' : '';

/** Imagen de /public/media. Muestra el respaldo hasta confirmar que el archivo existe. */
export default function MediaImage({ file, alt, fallback }: { file?: string; alt: string; fallback?: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const src = file ? `${base}/media/${file}` : '';

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.onload = () => setReady(true);
    img.src = src;
    return () => {
      img.onload = null;
    };
  }, [src]);

  if (!ready) return <>{fallback}</>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} decoding="async" />;
}

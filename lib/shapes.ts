// Generadores de nubes de puntos. Todas devuelven Float32Array [x,y,z,...] en un radio ~1.

function rand(seed: number) {
  // PRNG determinista para que el servidor y el cliente coincidan
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export function coreShape(count: number): Float32Array {
  const out = new Float32Array(count * 3);
  const r = rand(7);
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const th = i * 2.39996323;
    const inner = r() < 0.18 ? 0.55 + r() * 0.35 : 1;
    const n = (1 + 0.18 * Math.sin(th * 3 + y * 5) + 0.1 * Math.cos(y * 9)) * inner;
    out[i * 3] = Math.cos(th) * rad * n;
    out[i * 3 + 1] = y * n * 0.86;
    out[i * 3 + 2] = Math.sin(th) * rad * n;
  }
  return out;
}

export function fingerprintShape(count: number): Float32Array {
  // Dos huellas: anillos elípticos concéntricos con ondulación
  const out = new Float32Array(count * 3);
  const r = rand(11);
  for (let i = 0; i < count; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const ring = Math.floor(r() * 9) + 1;
    const t = r() * Math.PI * 2;
    const rr = ring / 9;
    const wob = 0.025 * Math.sin(t * 7 + ring);
    let x = Math.cos(t) * (rr * 0.42 + wob);
    let y = Math.sin(t) * (rr * 0.6 + wob);
    const tilt = side * 0.35;
    const cx = x * Math.cos(tilt) - y * Math.sin(tilt);
    const cy = x * Math.sin(tilt) + y * Math.cos(tilt);
    x = cx + side * 0.55;
    y = cy + (side > 0 ? -0.08 : 0.08);
    out[i * 3] = x;
    out[i * 3 + 1] = y;
    out[i * 3 + 2] = (r() - 0.5) * 0.12;
  }
  return out;
}

export function lockShape(count: number): Float32Array {
  const out = new Float32Array(count * 3);
  const r = rand(23);
  for (let i = 0; i < count; i++) {
    let x: number, y: number;
    if (r() < 0.62) {
      // cuerpo: rectángulo relleno con un ojo de cerradura vacío
      do {
        x = (r() - 0.5) * 1.1;
        y = -0.15 - r() * 0.75;
      } while (Math.hypot(x, y + 0.5) < 0.09 || (Math.abs(x) < 0.04 && y < -0.5 && y > -0.72));
    } else {
      // arco
      const t = r() * Math.PI;
      const rad = 0.34 + (r() - 0.5) * 0.08;
      x = Math.cos(t) * rad;
      y = -0.15 + Math.sin(t) * rad * 1.15 + (t > 0 ? 0 : 0);
      if (r() < 0.3) y -= r() * 0.12;
    }
    out[i * 3] = x;
    out[i * 3 + 1] = y + 0.35;
    out[i * 3 + 2] = (r() - 0.5) * 0.15;
  }
  return out;
}

export function dustShape(count: number, spread = 3): Float32Array {
  const out = new Float32Array(count * 3);
  const r = rand(31);
  for (let i = 0; i < count; i++) {
    out[i * 3] = (r() - 0.5) * spread * 1.8;
    out[i * 3 + 1] = (r() - 0.5) * spread;
    out[i * 3 + 2] = (r() - 0.5) * spread * 0.6;
  }
  return out;
}

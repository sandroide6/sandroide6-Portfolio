'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { coreShape, dustShape, fingerprintShape, lockShape } from '@/lib/shapes';

export type Shape = 'core' | 'fingerprint' | 'lock' | 'dust';

export type ParticleControls = {
  /** 0 = forma completa, 1 = dispersa en polvo */
  disperse: number;
};

type Props = {
  shape: Shape;
  /** segunda forma: las partículas alternan entre shape y morphTo */
  morphTo?: Shape;
  count?: number;
  scale?: number;
  offsetX?: number;
  offsetXMobile?: number;
  controls?: React.RefObject<ParticleControls>;
  className?: string;
  /** elemento que recibe el puntero (por defecto el contenedor) */
  eventSource?: React.RefObject<HTMLElement | null>;
};

const build = (s: Shape, n: number) =>
  s === 'core' ? coreShape(n) : s === 'fingerprint' ? fingerprintShape(n) : s === 'lock' ? lockShape(n) : dustShape(n);

const vertex = /* glsl */ `
  attribute vec3 aTarget;
  attribute float aRand;
  uniform float uTime;
  uniform float uDisperse;
  uniform float uMorph;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uSpin;
  uniform vec2 uMouse;
  uniform float uMouseOn;
  varying float vRand;
  varying float vAlpha;

  void main() {
    vec3 p = mix(position, aTarget, uMorph);
    float a = uTime * uSpin;
    float c = cos(a), s = sin(a);
    p = vec3(p.x * c - p.z * s, p.y, p.x * s + p.z * c);
    p += normalize(p + 0.0001) * sin(uTime * 0.8 + aRand * 6.2831) * 0.025;
    float spread = uDisperse * (1.5 + aRand * 2.5);
    p *= 1.0 + spread;
    p.x += uDisperse * (aRand - 0.3) * 1.6;
    vec4 world = modelMatrix * vec4(p, 1.0);
    vec2 d = world.xy - uMouse;
    float dist = length(d);
    world.xy += normalize(d + 0.0001) * smoothstep(0.7, 0.0, dist) * 0.32 * uMouseOn;
    vec4 mv = viewMatrix * world;
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (0.55 + aRand * 0.9) * uPixelRatio / -mv.z;
    vRand = aRand;
    float depth = clamp((p.z + 1.2) / 2.4, 0.0, 1.0);
    vAlpha = (0.35 + 0.65 * depth) * (1.0 - uDisperse * 0.85);
  }
`;

const fragment = /* glsl */ `
  uniform vec3 uBase;
  uniform vec3 uGlow;
  uniform vec3 uLight;
  varying float vRand;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float soft = smoothstep(0.5, 0.0, d);
    vec3 col = vRand > 0.8 ? uLight : (vRand > 0.4 ? uGlow : uBase);
    gl_FragColor = vec4(col, soft * vAlpha);
  }
`;

function Points({ shape, morphTo, count, scale, offsetX, controls }: Required<Pick<Props, 'shape' | 'count' | 'scale' | 'offsetX'>> & Pick<Props, 'morphTo' | 'controls'>) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { viewport, gl } = useThree();
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const a = build(shape, count);
    const b = morphTo ? build(morphTo, count) : a;
    const rnd = new Float32Array(count);
    for (let i = 0; i < count; i++) rnd[i] = ((i * 9301 + 49297) % 233280) / 233280;
    g.setAttribute('position', new THREE.BufferAttribute(a, 3));
    g.setAttribute('aTarget', new THREE.BufferAttribute(b, 3));
    g.setAttribute('aRand', new THREE.BufferAttribute(rnd, 1));
    return g;
  }, [shape, morphTo, count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uDisperse: { value: 0 },
      uMorph: { value: 0 },
      uSize: { value: shape === 'dust' ? 26 : 34 },
      uPixelRatio: { value: Math.min(gl.getPixelRatio(), 1.5) },
      uSpin: { value: shape === 'core' ? 0.12 : shape === 'dust' ? 0.02 : 0.05 },
      uMouse: { value: new THREE.Vector2(99, 99) },
      uMouseOn: { value: shape === 'dust' ? 0 : 1 },
      uBase: { value: new THREE.Color('#93032E') },
      uGlow: { value: new THREE.Color('#D11F4B') },
      uLight: { value: new THREE.Color('#F0577D') },
    }),
    [shape, gl],
  );

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((state, delta) => {
    const u = mat.current?.uniforms;
    if (!u) return;
    u.uTime.value += Math.min(delta, 0.05);
    const target = controls?.current.disperse ?? 0;
    u.uDisperse.value += (target - u.uDisperse.value) * 0.12;
    if (morphTo) u.uMorph.value = 0.5 - 0.5 * Math.cos(u.uTime.value * 0.55);
    const mx = (state.pointer.x * viewport.width) / 2;
    const my = (state.pointer.y * viewport.height) / 2;
    u.uMouse.value.x += (mx - u.uMouse.value.x) * 0.15;
    u.uMouse.value.y += (my - u.uMouse.value.y) * 0.15;
  });

  const s = Math.min(viewport.width, viewport.height) * 0.36 * scale;
  return (
    <points geometry={geometry} scale={[s, s, s]} position={[viewport.width * offsetX, 0, 0]}>
      <shaderMaterial
        ref={mat}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

export default function ParticleField({ shape, morphTo, count, scale = 1, offsetX = 0, offsetXMobile, controls, className, eventSource }: Props) {
  const [ox, setOx] = useState(offsetX);
  const wrap = useRef<HTMLDivElement>(null);
  const [ok, setOk] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [n, setN] = useState(count ?? 6000);

  useEffect(() => {
    setOk(hasWebGL());
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (!count) setN(window.innerWidth < 700 ? 2500 : 7000);
    if (offsetXMobile !== undefined && window.innerWidth < 900) setOx(offsetXMobile);
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: '100px' });
    io.observe(el);
    return () => io.disconnect();
  }, [count, offsetXMobile]);

  return (
    <div ref={wrap} className={className} aria-hidden="true">
      {ok && (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
          frameloop={reduced ? 'demand' : visible ? 'always' : 'never'}
          eventSource={(eventSource?.current ?? wrap.current) as HTMLElement | undefined}
          eventPrefix="client"
          style={{ position: 'absolute', inset: 0 }}
        >
          <Points shape={shape} morphTo={morphTo} count={n} scale={scale} offsetX={ox} controls={controls} />
        </Canvas>
      )}
    </div>
  );
}

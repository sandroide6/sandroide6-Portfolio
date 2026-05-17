'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleSphere() {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const geometry = useMemo(() => {
    const count = 2500;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.4 + Math.random() * 0.4;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const intensity = 0.4 + Math.random() * 0.6;
      colors[i * 3] = intensity;
      colors[i * 3 + 1] = 0;
      colors[i * 3 + 2] = 0;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.06;
    ref.current.rotation.x += (mouse.y * 0.15 - ref.current.rotation.x) * 0.04;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.012} vertexColors transparent opacity={0.85} sizeAttenuation />
    </points>
  );
}

function WireframeSphere() {
  const ref = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.09;
    ref.current.rotation.z = t * 0.05;
    ref.current.rotation.x += (mouse.y * 0.25 - ref.current.rotation.x) * 0.03;
    ref.current.rotation.y += (mouse.x * 0.15) * 0.02;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2.2, 4]} />
      <meshStandardMaterial
        color="#c1121f"
        wireframe
        transparent
        opacity={0.12}
        emissive="#7a0000"
        emissiveIntensity={0.8}
      />
    </mesh>
  );
}

function OuterRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.1;
    ref.current.rotation.z = state.clock.elapsedTime * 0.07;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.8, 0.006, 8, 120]} />
      <meshStandardMaterial
        color="#c1121f"
        transparent
        opacity={0.3}
        emissive="#c1121f"
        emissiveIntensity={1.5}
      />
    </mesh>
  );
}

function OuterRing2() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    ref.current.rotation.x = Math.PI / 3;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.1, 0.004, 8, 120]} />
      <meshStandardMaterial
        color="#7a0000"
        transparent
        opacity={0.2}
        emissive="#7a0000"
        emissiveIntensity={1}
      />
    </mesh>
  );
}

function CoreGlow() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.04;
    ref.current.scale.setScalar(s);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.6, 32, 32]} />
      <meshStandardMaterial
        color="#050505"
        transparent
        opacity={0.9}
        emissive="#c1121f"
        emissiveIntensity={0.08}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const count = 400;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 4;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.018} color="#7a0000" transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.05} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#c1121f" />
      <pointLight position={[-4, -4, 4]} intensity={1} color="#7a0000" />
      <pointLight position={[0, 0, 6]} intensity={0.5} color="#ff2d3f" />
      <FloatingParticles />
      <CoreGlow />
      <WireframeSphere />
      <ParticleSphere />
      <OuterRing />
      <OuterRing2 />
    </>
  );
}

export default function TechScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
    >
      <Scene />
    </Canvas>
  );
}

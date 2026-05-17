'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TechScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Scene + Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 7;

    // Lights
    scene.add(new THREE.AmbientLight(0x050505, 1));
    const light1 = new THREE.PointLight(0xc1121f, 3, 15);
    light1.position.set(5, 5, 5);
    scene.add(light1);
    const light2 = new THREE.PointLight(0x7a0000, 1.5, 15);
    light2.position.set(-4, -4, 4);
    scene.add(light2);

    // Core sphere (dark with slight red emissive)
    const coreMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0x050505,
        transparent: true,
        opacity: 0.9,
        emissive: 0xc1121f,
        emissiveIntensity: 0.08,
      })
    );
    scene.add(coreMesh);

    // Wireframe icosahedron
    const icosahedron = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.2, 4),
      new THREE.MeshStandardMaterial({
        color: 0xc1121f,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
        emissive: 0x7a0000,
        emissiveIntensity: 0.8,
      })
    );
    scene.add(icosahedron);

    // Particle sphere (2500 points distributed on sphere surface)
    const pCount = 2500;
    const pPositions = new Float32Array(pCount * 3);
    const pColors = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.4 + Math.random() * 0.4;
      pPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPositions[i * 3 + 2] = r * Math.cos(phi);
      const v = 0.4 + Math.random() * 0.6;
      pColors[i * 3] = v;
      pColors[i * 3 + 1] = 0;
      pColors[i * 3 + 2] = 0;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({ size: 0.012, vertexColors: true, transparent: true, opacity: 0.85, sizeAttenuation: true })
    );
    scene.add(particles);

    // Torus ring 1
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.8, 0.006, 8, 120),
      new THREE.MeshStandardMaterial({ color: 0xc1121f, transparent: true, opacity: 0.3, emissive: 0xc1121f, emissiveIntensity: 1.5 })
    );
    scene.add(ring1);

    // Torus ring 2
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.1, 0.004, 8, 120),
      new THREE.MeshStandardMaterial({ color: 0x7a0000, transparent: true, opacity: 0.2, emissive: 0x7a0000, emissiveIntensity: 1 })
    );
    ring2.rotation.x = Math.PI / 3;
    scene.add(ring2);

    // Background floating particles
    const bgCount = 400;
    const bgPos = new Float32Array(bgCount * 3);
    for (let i = 0; i < bgCount; i++) {
      bgPos[i * 3] = (Math.random() - 0.5) * 18;
      bgPos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      bgPos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 4;
    }
    const bgGeo = new THREE.BufferGeometry();
    bgGeo.setAttribute('position', new THREE.BufferAttribute(bgPos, 3));
    const bgParticles = new THREE.Points(
      bgGeo,
      new THREE.PointsMaterial({ size: 0.018, color: 0x7a0000, transparent: true, opacity: 0.35, sizeAttenuation: true })
    );
    scene.add(bgParticles);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize handler
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    const clock = new THREE.Clock();
    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Particles: rotate + follow mouse Y
      particles.rotation.y = t * 0.06;
      particles.rotation.x += (mouseY * 0.15 - particles.rotation.x) * 0.04;

      // Icosahedron: multi-axis rotation + mouse
      icosahedron.rotation.y = t * 0.09;
      icosahedron.rotation.z = t * 0.05;
      icosahedron.rotation.x += (mouseY * 0.25 - icosahedron.rotation.x) * 0.03;

      // Core: breathing pulse
      const s = 1 + Math.sin(t * 1.5) * 0.04;
      coreMesh.scale.setScalar(s);

      // Rings: independent rotation axes
      ring1.rotation.x = t * 0.1;
      ring1.rotation.z = t * 0.07;
      ring2.rotation.y = t * 0.08;

      // Background particles: slow drift
      bgParticles.rotation.y = t * 0.008;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}

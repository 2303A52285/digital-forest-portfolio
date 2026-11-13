import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeForestBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x071b13, 0.04);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3, 15);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // AMBIENT & DIRECTIONAL LIGHTS
    const ambientLight = new THREE.AmbientLight(0x071b13, 2.5);
    scene.add(ambientLight);

    const moonLight = new THREE.DirectionalLight(0x00c878, 1.8);
    moonLight.position.set(10, 20, 10);
    scene.add(moonLight);

    const bioGlowLight = new THREE.PointLight(0x00c878, 3, 30);
    bioGlowLight.position.set(0, 2, 5);
    scene.add(bioGlowLight);

    // GROUND GRID / TERRAIN MESH
    const groundGeo = new THREE.PlaneGeometry(80, 80, 40, 40);
    // Add subtle displacement to vertices for terrain hills
    const pos = groundGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vy = pos.getY(i);
      // subtle rolling forest hills
      const zVal = Math.sin(vx * 0.15) * Math.cos(vy * 0.15) * 1.2;
      pos.setZ(i, zVal);
    }
    groundGeo.computeVertexNormals();

    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x05130d,
      roughness: 0.85,
      metalness: 0.15,
      wireframe: false,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    scene.add(ground);

    // DIGITAL FOREST WIREFRAME GRID OVERLAY
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x00c878,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const gridMesh = new THREE.Mesh(groundGeo, gridMat);
    gridMesh.rotation.x = -Math.PI / 2;
    gridMesh.position.y = -1.98;
    scene.add(gridMesh);

    // PROCEDURAL TREES GROUP
    const treesGroup = new THREE.Group();
    scene.add(treesGroup);

    // Materials for stylized low-poly trees
    const trunkMat = new THREE.MeshStandardMaterial({
      color: 0x0b2418,
      roughness: 0.9,
    });

    const foliageMat = new THREE.MeshStandardMaterial({
      color: 0x123524,
      emissive: 0x003d22,
      emissiveIntensity: 0.4,
      roughness: 0.6,
      flatShading: true,
    });

    const bioFoliageMat = new THREE.MeshStandardMaterial({
      color: 0x00c878,
      emissive: 0x00c878,
      emissiveIntensity: 0.7,
      roughness: 0.4,
      flatShading: true,
    });

    // Helper to build a pine / digital cedar tree
    const createTree = (x, z, scale = 1, isGlowing = false) => {
      const tree = new THREE.Group();

      // Trunk
      const trunkGeo = new THREE.CylinderGeometry(0.15 * scale, 0.28 * scale, 2.5 * scale, 5);
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 1.25 * scale - 2;
      tree.add(trunk);

      // Cones (3 layers)
      const mat = isGlowing ? bioFoliageMat : foliageMat;
      for (let i = 0; i < 3; i++) {
        const radius = (1.5 - i * 0.35) * scale;
        const height = 1.6 * scale;
        const coneGeo = new THREE.ConeGeometry(radius, height, 5);
        const cone = new THREE.Mesh(coneGeo, mat);
        cone.position.y = (2.2 + i * 1.0) * scale - 2;
        tree.add(cone);
      }

      tree.position.set(x, 0, z);
      return tree;
    };

    // Plant trees in a mystic glade arrangement
    const treePositions = [
      // Left side forest
      { x: -9, z: -4, s: 1.5, glow: false },
      { x: -14, z: -10, s: 2.2, glow: false },
      { x: -7, z: 2, s: 1.2, glow: true },
      { x: -11, z: 5, s: 1.7, glow: false },
      { x: -5, z: -8, s: 1.4, glow: false },
      { x: -12, z: -18, s: 2.4, glow: false },
      { x: -8, z: 9, s: 1.1, glow: false },

      // Right side forest
      { x: 9, z: -3, s: 1.6, glow: false },
      { x: 13, z: -8, s: 2.1, glow: false },
      { x: 6, z: 3, s: 1.3, glow: true },
      { x: 10, z: 6, s: 1.8, glow: false },
      { x: 6, z: -10, s: 1.5, glow: false },
      { x: 14, z: -17, s: 2.3, glow: false },
      { x: 8, z: 8, s: 1.1, glow: false },

      // Distant backdrop trees
      { x: -3, z: -20, s: 2.6, glow: false },
      { x: 2, z: -22, s: 2.8, glow: false },
      { x: -8, z: -25, s: 3.0, glow: false },
      { x: 7, z: -26, s: 2.9, glow: false },
    ];

    treePositions.forEach((tp) => {
      treesGroup.add(createTree(tp.x, tp.z, tp.s, tp.glow));
    });

    // FIREFLIES / BIOLUMINESCENT SPORES
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 36;
      particlePositions[i * 3 + 1] = Math.random() * 12 - 1.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 36;

      particleSpeeds[i * 3] = (Math.random() - 0.5) * 0.008;
      particleSpeeds[i * 3 + 1] = Math.random() * 0.012 + 0.004;
      particleSpeeds[i * 3 + 2] = (Math.random() - 0.5) * 0.008;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle Material with Soft Glow
    const particleMat = new THREE.PointsMaterial({
      color: 0x10f796,
      size: 0.16,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const fireflyParticles = new THREE.Points(particleGeo, particleMat);
    scene.add(fireflyParticles);

    // MOUSE PARALLAX & TARGET
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // SCROLL PARALLAX
    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY || window.pageYOffset;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // RESIZE HANDLER
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // ANIMATION LOOP
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation
      targetX += (mouseX * 2.5 - targetX) * 0.04;
      targetY += (-mouseY * 1.5 - targetY) * 0.04;

      const scrollFactor = scrollY * 0.003;
      camera.position.x = targetX;
      camera.position.y = 3 + targetY - scrollFactor * 0.8;
      camera.position.z = 15 - Math.min(scrollFactor * 2.5, 6);
      camera.lookAt(0, 1.5, 0);

      // Animate fireflies
      const positions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        // Upward floating with subtle sine-wave drift
        positions[i * 3 + 1] += particleSpeeds[i * 3 + 1];
        positions[i * 3] += Math.sin(elapsedTime * 1.5 + i) * 0.006;
        positions[i * 3 + 2] += Math.cos(elapsedTime * 1.2 + i) * 0.006;

        // Reset if drifted too high or wide
        if (positions[i * 3 + 1] > 10) {
          positions[i * 3 + 1] = -1.5;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Pulse glow light
      bioGlowLight.intensity = 2.2 + Math.sin(elapsedTime * 2) * 0.8;
      bioGlowLight.position.x = Math.sin(elapsedTime * 0.8) * 3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      groundGeo.dispose();
      groundMat.dispose();
      gridMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default ThreeForestBackground;

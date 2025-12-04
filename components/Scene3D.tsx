import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Animated rotating torus
function AnimatedTorus() {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={torusRef} position={[-2, 0, 0]}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial
        color="#06B6D4"
        metalness={0.8}
        roughness={0.2}
        emissive="#06B6D4"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

// Animated box
function AnimatedBox() {
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (boxRef.current) {
      boxRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      boxRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      boxRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <mesh ref={boxRef} position={[2, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#9333EA"
        metalness={0.7}
        roughness={0.3}
        emissive="#9333EA"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

// Floating sphere with distortion
function DistortedSphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} position={[0, 1.5, -1]}>
        <MeshDistortMaterial
          color="#10B981"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

// Particle system
function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 100;

  const positions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Scene component
const Scene3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06B6D4" />
        <pointLight position={[10, 10, 5]} intensity={0.5} color="#9333EA" />

        {/* 3D Objects */}
        {/* <AnimatedTorus /> */}
        {/* <AnimatedBox /> */}
        {/* <DistortedSphere /> */}
        <Particles />

        {/* Controls - allows user to rotate the scene */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;

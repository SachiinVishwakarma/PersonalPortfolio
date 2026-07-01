import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 80 }) {
  const mesh = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#3b82f6" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function FloatingSphere({ position, color, speed = 1, size = 0.4 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  size?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={mesh} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={0.3}
          speed={2}
          roughness={0.5}
        />
      </mesh>
    </Float>
  );
}

function GlowRing({ radius, color, position }: {
  radius: number;
  color: string;
  position: [number, number, number];
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.2;
  });

  return (
    <mesh ref={mesh} position={position}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#06b6d4" />

        <Particles />
        <FloatingSphere position={[-3, 1.5, -2]} color="#3b82f6" speed={0.8} size={0.6} />
        <FloatingSphere position={[3.5, -1, -1]} color="#06b6d4" speed={0.6} size={0.4} />
        <FloatingSphere position={[-1, -2, -3]} color="#8b5cf6" speed={0.5} size={0.3} />

        <GlowRing radius={2} color="#3b82f6" position={[0, 0, -1]} />
        <GlowRing radius={2.8} color="#06b6d4" position={[0, 0, -2]} />
        <GlowRing radius={3.5} color="#8b5cf6" position={[0, 0, -3]} />
      </Canvas>
    </div>
  );
}

"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

const ACCENT = "#c8ff3d";
const PCB_GREEN = "#173318";
const METAL = "#9aa192";
const DARK = "#0e0f0d";

function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function PCB() {
  return (
    <group position={[0, -0.15, 0]}>
      <mesh receiveShadow castShadow rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[3.4, 2.2, 0.06]} />
        <meshStandardMaterial color={PCB_GREEN} roughness={0.55} metalness={0.15} />
      </mesh>
      {/* trace lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh
          key={i}
          position={[-1.4 + i * 0.5, 0.035, -0.7 + (i % 3) * 0.5]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[0.02, 1.1]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={0.35}
            roughness={0.4}
          />
        </mesh>
      ))}
      {/* mounting pads */}
      {[
        [-1.5, -0.9],
        [1.5, -0.9],
        [-1.5, 0.9],
        [1.5, 0.9],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.04, z]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.05, 0.09, 24]} />
          <meshStandardMaterial color={METAL} metalness={0.8} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function Microcontroller() {
  return (
    <group position={[-0.9, 0.15, 0.3]}>
      <mesh castShadow>
        <boxGeometry args={[0.7, 0.12, 0.7]} />
        <meshStandardMaterial color={DARK} roughness={0.4} metalness={0.3} />
      </mesh>
      {/* pin rows */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={`a${i}`} position={[-0.42 + i * 0.12, -0.02, 0.4]}>
          <boxGeometry args={[0.04, 0.05, 0.15]} />
          <meshStandardMaterial color={METAL} metalness={0.9} roughness={0.25} />
        </mesh>
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={`b${i}`} position={[-0.42 + i * 0.12, -0.02, -0.4]}>
          <boxGeometry args={[0.04, 0.05, 0.15]} />
          <meshStandardMaterial color={METAL} metalness={0.9} roughness={0.25} />
        </mesh>
      ))}
      <mesh position={[0, 0.09, 0]}>
        <boxGeometry args={[0.08, 0.02, 0.08]} />
        <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
}

function OLEDModule() {
  return (
    <group position={[0.85, 0.18, -0.4]} rotation={[0, 0.15, 0]}>
      <mesh castShadow>
        <boxGeometry args={[0.9, 0.08, 0.55]} />
        <meshStandardMaterial color={"#111311"} roughness={0.5} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.045, 0]}>
        <boxGeometry args={[0.7, 0.01, 0.38]} />
        <meshStandardMaterial
          color={"#0a1a0f"}
          emissive={ACCENT}
          emissiveIntensity={0.5}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

function BLDCMotor() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.15;
  });
  return (
    <group position={[0.1, 0.55, 0.75]} rotation={[0, 0, 0]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.32, 0.32, 0.4, 32]} />
        <meshStandardMaterial color={METAL} metalness={0.85} roughness={0.25} />
      </mesh>
      <group ref={ref}>
        <mesh position={[0, 0.22, 0]}>
          <torusGeometry args={[0.28, 0.03, 16, 48]} />
          <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.3} metalness={0.4} roughness={0.3} />
        </mesh>
      </group>
      <mesh position={[0, 0.42, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.2, 12]} />
        <meshStandardMaterial color={DARK} metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
}

function Rig() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    const floatY = reducedMotion ? 0 : Math.sin(t * 0.5) * 0.04;
    const targetRotY = reducedMotion ? 0.35 : 0.35 + pointer.x * 0.35;
    const targetRotX = reducedMotion ? 0 : pointer.y * -0.12;
    group.current.position.y = floatY;
    group.current.rotation.y += (targetRotY - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (targetRotX - group.current.rotation.x) * 0.04;
  });

  return (
    <group ref={group} rotation={[0, 0.35, 0]}>
      <PCB />
      <Microcontroller />
      <OLEDModule />
      <BLDCMotor />
    </group>
  );
}

export default function Scene() {
  const dpr = useMemo<[number, number]>(() => {
    if (typeof window === "undefined") return [1, 1.5];
    const isMobile = window.innerWidth < 768;
    return isMobile ? [1, 1] : [1, 1.8];
  }, []);

  return (
    <Canvas
      shadows
      dpr={dpr}
      camera={{ position: [2.6, 1.9, 3.4], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#0a0b09"]} />
      <fog attach="fog" args={["#0a0b09", 6, 12]} />
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[3, 5, 2]}
        intensity={1.1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-3, 1.5, -2]} intensity={6} color={ACCENT} distance={8} />
      <Rig />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.75, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.35} />
      </mesh>
      <Environment preset="city" environmentIntensity={0.25} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.9}
        rotateSpeed={0.35}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}

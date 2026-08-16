'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function PCB() {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!g.current) return;
    g.current.rotation.y = s.clock.elapsedTime * .16 + s.pointer.x * .25;
    g.current.rotation.x = -.22 + s.pointer.y * .12;
  });
  return <group ref={g}>
    <mesh><boxGeometry args={[3.7,.14,2.45]}/><meshStandardMaterial color="#17201b" metalness={.65} roughness={.28}/></mesh>
    <mesh position={[0,.15,0]}><boxGeometry args={[1.15,.18,.72]}/><meshStandardMaterial color="#252c2f" metalness={.65}/></mesh>
    {[-1.25,-.42,.42,1.25].map((x,i)=><mesh key={i} position={[x,.15,.82]}><boxGeometry args={[.38,.07,.18]}/><meshStandardMaterial color="#b8ff5a" emissive="#5f8f22" emissiveIntensity={1.6}/></mesh>)}
    {[[-1.25,-.65],[1.1,-.55],[1.4,.45],[-.9,.55]].map((p,i)=><mesh key={i} position={[p[0],.16,p[1]]}><cylinderGeometry args={[.13,.13,.08,24]}/><meshStandardMaterial color="#b8ff5a" emissive="#5f8f22" emissiveIntensity={1.5}/></mesh>)}
  </group>;
}

function Chip() {
  const ref = useRef<THREE.Group>(null);
  useFrame((s)=>{ if(ref.current){ref.current.rotation.x=s.pointer.y*.15;ref.current.rotation.y=s.pointer.x*.2;}});
  return <group ref={ref} position={[0,-.4,0.3]}>
    <mesh><boxGeometry args={[1.7,.28,1.1]}/><meshStandardMaterial color="#24292d" metalness={.7} roughness={.25}/></mesh>
    {Array.from({length:8}).map((_,i)=><mesh key={i} position={[(i-3.5)*.19,-.16,.58]}><boxGeometry args={[.055,.06,.22]}/><meshStandardMaterial color="#c6c9ca" metalness={.8}/></mesh>)}
  </group>;
}

function Motor() {
  const ref = useRef<THREE.Group>(null);
  useFrame((s)=>{if(ref.current) ref.current.rotation.y=s.clock.elapsedTime*.55});
  return <group ref={ref} position={[2.15,-.3,.2]}>
    <mesh rotation={[0,0,Math.PI/2]}><cylinderGeometry args={[.55,.55,.7,48]}/><meshStandardMaterial color="#596269" metalness={.85} roughness={.2}/></mesh>
    <mesh rotation={[0,0,Math.PI/2]} position={[.4,0,0]}><cylinderGeometry args={[.23,.23,.18,32]}/><meshStandardMaterial color="#b8ff5a" emissive="#5f8f22" emissiveIntensity={1}/></mesh>
  </group>;
}

function OLED() {
  const ref=useRef<THREE.Mesh>(null);
  useFrame((s)=>{if(ref.current) ref.current.rotation.z=Math.sin(s.clock.elapsedTime*.8)*.025});
  return <mesh ref={ref} position={[-2,-.3,.2]}>
    <boxGeometry args={[1.15,.12,.8]}/><meshStandardMaterial color="#111516" metalness={.5}/>
    <mesh position={[0,.08,0]}><boxGeometry args={[.9,.025,.55]}/><meshStandardMaterial color="#101714" emissive="#547d28" emissiveIntensity={.8}/></mesh>
  </mesh>;
}

function Scene() {
  return <group>
    <Float speed={1.1} rotationIntensity={.12} floatIntensity={.3}>
      <PCB/><Chip/><Motor/><OLED/>
    </Float>
  </group>;
}

export default function CircuitScene(){
  return <Canvas camera={{position:[0,1.5,6.5],fov:35}} dpr={[1,1.7]} gl={{antialias:true,alpha:true}}>
    <ambientLight intensity={.55}/>
    <directionalLight position={[4,5,4]} intensity={3.2}/>
    <pointLight position={[-3,2,2]} color="#b8ff5a" intensity={15}/>
    <pointLight position={[3,0,-2]} color="#8aa0ad" intensity={7}/>
    <Scene/>
    <Environment preset="city"/>
    <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} rotateSpeed={.45} />
  </Canvas>;
}

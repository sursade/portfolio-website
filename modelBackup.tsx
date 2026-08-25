"use client";

import { Canvas } from "@react-three/fiber";
// 1. Import Clone and useGLTF from drei
import { useGLTF, OrbitControls, Float, Clone } from "@react-three/drei";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { Vector3 } from "three";
import { PI } from "three/tsl";

const FOCUS_OBJECT_POSITION = [0, 0, 0];

const monitorData = [
  { id: "mon-1", position: [30, 2.6, 3.5], rotation: [-Math.PI/10, Math.PI, 0], route: "/case-studies/mobile-banking" },
  { id: "mon-2", position: [29.308 , 5.1, -3.2], rotation: [Math.PI/15, Math.PI*0.95, 0], route: "/case-studies/data-visualization" },
  { id: "mon-3", position: [24, 2.9, 1], rotation: [Math.PI/12, Math.PI, Math.PI/16], route: "/projects" },
  { id: "mon-4", position: [29, -12, -20], rotation: [-Math.PI/10, Math.PI, 0], route: "/about" },
  { id: "mon-5", position: [32, -12, -20], rotation: [-Math.PI/10, Math.PI, 0], route: "/contact" },
];

interface MonitorProps {
  position: [number, number, number];
  rotation: [number, number, number];
  route: string;
}

// 2. Update the Monitor component to load and clone the GLB
function Monitor({ position, rotation, route }: MonitorProps) {
  const router = useRouter();
  // Load the model. useGLTF automatically caches it, so it only downloads once.
  const { scene } = useGLTF("/models/monitor_active1.glb");

  return (
    // Changed <mesh> to <group> because the GLTF is likely a group of meshes
    <group 
      position={position}
      rotation={rotation}
      onClick={(e) => {
        e.stopPropagation();
        router.push(route);
      }}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    >
      {/* Safely inject copies of the loaded scene */}
      <Clone object={scene} />
    </group>
  );
}

// 3. Preload the monitor model so it loads instantly
useGLTF.preload("/models/monitor_active1.glb");

function Model() {
  const { scene } = useGLTF("/models/portfolio-model_003v4.glb");

  return (
    <primitive 
      object={scene}
      rotation={[0, Math.PI, 0]}
    />
  );
}
// Preload the main model as well
useGLTF.preload("/models/portfolio-model_003v3.glb");

function SecondaryObject() {
  const router = useRouter();

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh 
        position={[2, 0, 0]}
        onClick={() => router.push("/case-studies")}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "auto")}
      >
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
    </Float>
  );
}

export default function My3DScene() {
  return (
    <Canvas 
      dpr={[1, 2]} 
      shadows 
      camera={{ fov: 50, position: [28, 20, 15] }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[35, 14, 15]} intensity={1} />
      
      <Suspense fallback={null}>
        <Model />
        <SecondaryObject />
        
        {monitorData.map((data) => (
          <Monitor 
            key={data.id} 
            position={data.position as [number, number, number]} 
            rotation={data.rotation as [number, number, number]} 
            route={data.route} 
          />
        ))}
      </Suspense>
      
      <OrbitControls 
        makeDefault 
        enablePan={false}
        target={new Vector3(26, -12, -20)} 
        maxPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}
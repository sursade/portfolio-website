"use client";

import { Canvas } from "@react-three/fiber";
// 1. Import Clone and useGLTF from drei
import { useGLTF, OrbitControls, Float, Clone, useTexture, Sky } from "@react-three/drei";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { Vector3 } from "three";
import { Environment, ContactShadows } from "@react-three/drei";


const monitorData = [
  { id: "mon-1", 
    position: [28.4, 3.7, 2],
    rotation: [-Math.PI/10, Math.PI, 0], 
    route: "/case-studies/mobile-banking" ,
    textureUrl: "portfolio-pieces/portfolio1.webp"
  },
  
  { id: "mon-2", 
    position: [27.8 , 6.7, -3.5], 
    rotation: [Math.PI/15, Math.PI*0.9, 0], 
    route: "/case-studies/data-visualization" ,
    textureUrl: "portfolio3.png"
  },

  { id: "mon-3", 
    position: [23, 4.9, 1], 
    rotation: [Math.PI/12, Math.PI, Math.PI/16], 
    route: "/projects" ,
    textureUrl: "Free iPhone Air.png"
  },
  
];

interface MonitorProps {
  position: [number, number, number];
  rotation: [number, number, number];
  route: string;
  textureUrl: string; 
}

function Monitor({ position, rotation, route, textureUrl }: MonitorProps) {
  const router = useRouter();
  
  // Safely load the GLTF data
  const gltf = useGLTF("/models/monitor_active1v3.glb") as any;
  const nodes = gltf?.nodes;
  const materials = gltf?.materials;

  // Safety guard: If the model hasn't loaded or path is wrong, render nothing instead of crashing
  if (!nodes || !nodes.Cube071 || !nodes.Display) {
    return null;
  }

  const safeTextureUrl = textureUrl || "/textures/blank-screen.jpg";
  const screenTexture = useTexture(safeTextureUrl);
  screenTexture.flipY = false; 

  return (
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
      {/* 1. The Monitor Body / Frame */}
      <mesh geometry={nodes.Cube071.geometry} material={materials.old_plastic} />
      
      {/* 2. The Screen / Display (Overriding the default material with your texture) */}
      <mesh geometry={nodes.Display.geometry}>
        <meshStandardMaterial map={screenTexture} emissiveMap={screenTexture}
          emissive="#ffffff" 
          emissiveIntensity={.05} /> 
      </mesh>
    </group>
  );
}

// Preload the textures so they don't pop in late
monitorData.forEach((data) => useTexture.preload(data.textureUrl));
// 3. Preload the monitor model so it loads instantly
useGLTF.preload("/models/monitor_active1.glb");

function Model() {
  const { scene } = useGLTF("/models/portfolio-model_003optimizedv1.glb");

  return (
    <primitive 
      object={scene}
      rotation={[0, Math.PI, 0]}
    />
  );
}
// Preload the main model as well
useGLTF.preload("/models/portfolio-model_003.glb");


export default function My3DScene() {
  return (
    <Canvas 
      dpr={1} 
      
      shadows 
      camera={{ fov: 50, position: [28, 15, 15] }}
    >
      <Sky 
        sunPosition={[100, 20, 50]} 
        turbidity={8} 
        rayleigh={.1} 
        mieCoefficient={0.005} 
        mieDirectionalG={0.8} 
      />

      <Environment preset="city" environmentIntensity={0.7} />

      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[35, 14, 15]} 
        intensity={.8} 
        castShadow 
        shadow-mapSize={[1024, 1024]}
      />
      
      <Suspense fallback={null}>
        <Model />
        
        {monitorData.map((data) => (
          <Monitor 
            key={data.id} 
            position={data.position as [number, number, number]} 
            rotation={data.rotation as [number, number, number]} 
            route={data.route}
            textureUrl={data.textureUrl} 
            
          />
        ))}
      </Suspense>
      
      <OrbitControls 
        makeDefault 
        enablePan={true}
        target={new Vector3(26, -12, -20)} 
        maxPolarAngle={Math.PI / 3}
       
        zoomSpeed={0.1}
      />
    </Canvas>
  );
}
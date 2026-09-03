"use client";

import { Canvas } from "@react-three/fiber";
import { 
  useGLTF, 
  OrbitControls, 
  useTexture, 
  Sky, 
  Environment, 
  useProgress 
} from "@react-three/drei";
import { useRouter } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { Vector3 } from "three";

const monitorData = [
  { 
    id: "mon-1", 
    position: [28.4, 3.7, 2],
    rotation: [-Math.PI / 10, Math.PI, 0], 
    route: "/projects/wellness-app",
    textureUrl: "/portfolio-pieces/portfolio1.webp"
  },
  { 
    id: "mon-2", 
    position: [27.8, 6.7, -3.5], 
    rotation: [Math.PI / 15, Math.PI * 0.9, 0], 
    route: "/projects/mobile-saving-app",
    textureUrl: "/portfolio-pieces/portfolio2.webp"
  },
  { 
    id: "mon-3", 
    position: [23, 4.9, 1], 
    rotation: [Math.PI / 12, Math.PI, Math.PI / 16], 
    route: "/projects/banking-dashboard",
    textureUrl: "/portfolio-pieces/portfolio3.webp"
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
  
  const gltf = useGLTF("/models/monitor_active1v3.glb") as any;
  const nodes = gltf?.nodes;
  const materials = gltf?.materials;

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
      <mesh geometry={nodes.Cube071.geometry} material={materials.old_plastic} />
      
      <mesh geometry={nodes.Display.geometry}>
        <meshStandardMaterial 
          map={screenTexture} 
          emissiveMap={screenTexture}
          emissive="#ffffff" 
          emissiveIntensity={0.05} 
        /> 
      </mesh>
    </group>
  );
}

monitorData.forEach((data) => useTexture.preload(data.textureUrl));
useGLTF.preload("/models/monitor_active1v3.glb");

function Model() {
  const { scene } = useGLTF("/models/portfolio-model_004-optimized.glb");

  return (
    <primitive 
      object={scene} 
      rotation={[0, Math.PI, 0]} 
    />
  );
}
useGLTF.preload("/models/portfolio-model_004-optimized.glb");

// Interactive Welcome & Loading Overlay
function WelcomeOverlay() {
  const { progress } = useProgress();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setIsLoaded(true), 350);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md px-4 transition-opacity duration-300">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 text-zinc-100 shadow-2xl">
        
        {/* Header */}
        <div className="space-y-1 text-center">
          <span className="inline-block text-2xl">👋</span>
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Welcome to the Workspace
          </h2>
          <p className="text-xs text-zinc-400">
            Take a look around and explore recent product design case studies.
          </p>
        </div>

        {/* Instructions Card */}
        <div className="mt-5 space-y-2.5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-sm">
              🖱️
            </span>
            <div>
              <p className="font-medium text-zinc-200">Orbit & Pan</p>
              <p className="text-zinc-400">Click + drag to rotate • Right-click / two fingers to pan</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-sm">
              🔍
            </span>
            <div>
              <p className="font-medium text-zinc-200">Zoom</p>
              <p className="text-zinc-400">Scroll wheel or pinch on trackpad to zoom in/out</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-sm">
              🖥️
            </span>
            <div>
              <p className="font-medium text-zinc-200">Inspect Case Studies</p>
              <p className="text-zinc-400">Click any illuminated monitor screen to open the project</p>
            </div>
          </div>
        </div>

        {/* Action Button & Loader */}
        <div className="mt-6">
          {!isLoaded ? (
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] font-medium text-zinc-400">
                <span>Preparing 3D scene...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-200 ease-out" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className="w-full rounded-xl bg-indigo-600 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 active:scale-[0.98]"
            >
              Enter Space →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function My3DScene() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-zinc-950">
      <WelcomeOverlay />
      
      <Canvas 
        dpr={1} 
        shadows 
        camera={{ fov: 50, position: [28, 15, 15] }}
      >
        <Sky 
          sunPosition={[100, 20, 50]} 
          turbidity={8} 
          rayleigh={0.1} 
          mieCoefficient={0.005} 
          mieDirectionalG={0.8} 
        />

        <Environment preset="city" environmentIntensity={0.7} />

        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[35, 14, 15]} 
          intensity={0.8} 
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
    </div>
  );
}
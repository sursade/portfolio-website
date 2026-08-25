import Image from "next/image";
import My3DScene from "../app/components/My3DScene";




export default function Home() {
  return (
    <main className="h-screen w-full relative">
      {/* Background Canvas */}
      <div className="absolute inset-0 z-0">
        <My3DScene />
      </div>

      {/* Your Landing Page Content - Now stays on top of the interactive 3D */}
      <div className="relative z-10 p-12">
        <h1 className="text-white text-6xl font-bold">Interactive Model</h1>
        <p className="text-zinc-400 mt-4">Drag the model to rotate it.</p>
      </div>
    </main>
  );
}
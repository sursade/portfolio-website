import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-64 pt-28 md:pt-32 md:p-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <a href="/" className="text-sm text-indigo-400 hover:underline inline-block">&larr; Back to 3D Scene</a>
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        
        <div className="space-y-4 pt-4">
          <ProjectCard
            title="Designing a Granular Banking Dashboard"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore."
            tags={["UX Design", "React Native", "Fintech"]}
            href="/projects/1"
            imageUrl="/portfolio-pieces/portfolio3.webp" // Optional: leave blank or omit to show placeholder box
          />

          <ProjectCard
            title="UX for Better Saving habits"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            tags={["Data Viz", "TypeScript", "Tailwind"]}
            href="/projects/2"
            imageUrl="/portfolio-pieces/portfolio2.webp"
          />

    


        <ProjectCard
            title="Landing page for wellness application"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            tags={["Data Viz", "TypeScript", "Tailwind"]}
            href="/projects/3"
            imageUrl="/portfolio-pieces/portfolio1.webp"
          />

        </div>
      </div>
    </main>
  );
}
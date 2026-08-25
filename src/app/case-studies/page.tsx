import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-64 pt-28 md:pt-32 md:p-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <a href="/" className="text-sm text-indigo-400 hover:underline inline-block">&larr; Back to 3D Scene</a>
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        
        <div className="space-y-4 pt-4">
          <ProjectCard
            title="Case Study: AI-Powered file search"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore."
            tags={["UX Design", "React Native", "Fintech"]}
            href="/case-studies/ai-powered-file-search"
            imageUrl="/portfolio-pieces/case-study1-banner.webp" // Optional: leave blank or omit to show placeholder box
          />

          <ProjectCard
            title="Case Study: Large scale drilldown"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            tags={["Data Viz", "TypeScript", "Tailwind"]}
            href="/case-studies/large-scale-drilldown"
            imageUrl="/portfolio-pieces/case-study2-banner.webp"
          />

    


        <ProjectCard
            title="Case Study: AI Fitness App"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            tags={["Data Viz", "TypeScript", "Tailwind"]}
            href="/case-studies/ai-powered-fitness-app"
            imageUrl="/portfolio-pieces/case-study3-banner.webp"
          />

        </div>
      </div>
    </main>
  );
}
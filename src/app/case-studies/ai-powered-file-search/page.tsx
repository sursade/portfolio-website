import React from 'react';

export default function CaseStudy() {
  return (
    <article className="bg-zinc-950 text-zinc-100 font-sans min-h-screen py-32 px-6 antialiased selection:bg-zinc-800 selection:text-white">
      <div className="max-w-3xl mx-auto space-y-16">
        
        {/* Header / Intro */}
        <header className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Case Study • 02 2024 • 8 Weeks • 4 Sprints
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            AI-Powered Workplace File Search
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            Designing an internal tool that helps employees find information faster—without getting misled by outdated data.
          </p>
          <p className="text-xs text-zinc-600 italic">
            Protected by NDA: this case study focuses on process, findings, and design rationale.
          </p>
        </header>

        <hr className="border-zinc-900" />

        {/* Context & Problem */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">Context & The Problem</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            Employees were losing significant time searching for internal files. The proposed solution was an AI-powered chat interface. However, before launch, our team identified a core tension that threatened user trust: the AI model is only retrained periodically, meaning employees could receive confident-sounding answers based on files that had already been updated or deprecated.
          </p>
        </section>

        {/* Workflow & Process (Image Placeholder for Grid) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">Process & Timeline</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            Working across four agile sprints alongside development and backend architects, we moved from initial user interviews to final handoff.
          </p>
          
          {/* Image Placeholder for Sprints Grid */}
          <div className="my-8 p-12  text-center text-zinc-500 text-sm rounded-lg">
            <img
            src='/portfolio-pieces/ai-workplace-image-1.webp'           
          />
        </div>
        </section>

        {/* Research Findings */}
        <section className="space-y-8">
          <h2 className="text-2xl font-medium tracking-tight text-white">Research Findings & Design Responses</h2>
          
          <div className="space-y-6 text-zinc-300 font-light leading-relaxed">
            <div>
              <h3 className="text-white font-medium mb-1">1. Invisible Model State</h3>
              <p className="text-zinc-400 text-sm">
                Because the model trains on snapshots, newly uploaded files weren't automatically ingested, leading to false confidence. 
                <span className="block text-zinc-200 mt-1 font-normal">→ Design response: A visual tagging system distinguishing processed vs. pending files.</span>
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">2. Outdated Answers</h3>
              <p className="text-zinc-400 text-sm">
                Revised files were silently ignored in favor of old model references. 
                <span className="block text-zinc-200 mt-1 font-normal">→ Design response: Proactive deprecation warnings with automatic context fetching.</span>
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">3. Unfamiliar Interaction Model</h3>
              <p className="text-zinc-400 text-sm">
                Users weren't sure what an AI workplace chat could or couldn't do. 
                <span className="block text-zinc-200 mt-1 font-normal">→ Design response: Reduced scope signaling communicating a single clear purpose—file search.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Pipeline Changes (Image Placeholder for Table) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">Pipeline Changes</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            Our design interventions directly shifted how data moved between the backend system and the user interface.
          </p>

          {/* Image Placeholder for Before/After Table */}
          <div className="my-8 p-12  text-center text-zinc-500 text-sm rounded-lg">
            <img
            src='/portfolio-pieces/ai-workplace-image-2.webp'           
          />
        </div>
        </section>

        {/* Outcome */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">Outcome & Learnings</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            The tool achieved a <strong className="text-white font-medium">96% satisfaction rate</strong> upon launch with design-related friction points kept to a minimum. Future iterations focus primarily on tightening the feedback loop between backend model updates and notification systems.
          </p>
          <div className="my-8 p-12  text-center text-zinc-500 text-sm rounded-lg">
            <img
            src='/portfolio-pieces/ai-workplace-image-3.webp'           
          />
        </div>
        </section>

        <footer className="pt-12 border-t border-zinc-900 text-xs text-zinc-600">
          Protected by NDA • Case study layout
        </footer>

      </div>
    </article>
  );
}
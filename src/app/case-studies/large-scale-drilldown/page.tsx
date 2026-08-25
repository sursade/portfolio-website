import React from 'react';

export default function DrillDownCaseStudy() {
  return (
    <article className="bg-zinc-950 text-zinc-100 font-sans min-h-screen py-32 px-6 antialiased selection:bg-zinc-800 selection:text-white">
      <div className="max-w-3xl mx-auto space-y-16">
        
        {/* Header / Intro */}
        <header className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Case Study • Region-Wide Monitoring • Real-Time Platform
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Large-Scale Drill-Down Monitoring Platform
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            Designing a unified, region-wide data visualization system that serves both machine-floor engineers and executive decision-makers without compromising either.
          </p>
          <p className="text-xs text-zinc-600 italic">
            Protected by NDA: this case study focuses on process, findings, and design rationale rather than specific product details.
          </p>
        </header>

        <hr className="border-zinc-900" />

        {/* The Challenge */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">The Challenge: One Platform, Very Different Users</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            A new unified platform was built to collect and analyze industry data across an entire region. The primary risk from the start was that designing toward just one user group would silently break the experience for everyone else. To prevent this, we surveyed prospective users extensively before committing to any structure, terminology, or interaction patterns.
          </p>
        </section>

        {/* Research Findings */}
        <section className="space-y-8">
          <h2 className="text-2xl font-medium tracking-tight text-white">Research Findings & Mental Models</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            Research confirmed two primary user groups with fundamentally different goals, time horizons, and decision-making contexts, alongside informal edge cases that heavily influenced daily use.
          </p>
          
          <div className="space-y-6 text-zinc-300 font-light leading-relaxed">
            <div>
              <h3 className="text-white font-medium mb-1">1. Engineers (Operators)</h3>
              <p className="text-zinc-400 text-sm">
                Focused on real-time, point-of-action data, live machine status, active alarms, and short-term trends to confirm interventions with high speed and confidence.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">2. Performance & Planning (Managers)</h3>
              <p className="text-zinc-400 text-sm">
                Focused on a strategic, long-term view, aggregate metrics, performance tracking, and proactive scheduling adjustments.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">Key Insight: Shared Structure, Different Entry Points</h3>
              <p className="text-zinc-400 text-sm">
                While both groups require drill-down capabilities, engineers start at the machine level and move up when escalating, whereas planners start at the aggregate level and move down only when anomalies appear. 
                <span className="block text-zinc-200 mt-1 font-normal">→ Design response: Role-based permissions control default views while maintaining a bidirectional hierarchy for all users.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Information Architecture (Image Placeholder) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">Information Architecture</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            The platform is structured around the ISA-95 enterprise-control integration standard, scaling from enterprise down to individual machine levels.
          </p>

          {/* Image Placeholder for ISA-95 Hierarchy */}
        <img
            src='/portfolio-pieces/large-scale1.webp'           
          />         
        </section>

        {/* Pipeline Changes (Image Placeholder) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">Pipeline Changes: Before vs. After</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            Targeted design interventions resolved invisible team coordination loops, lagging managerial signals, and isolated cost data.
          </p>

          {/* Image Placeholder for Before/After Table */}
          <img
            src='/portfolio-pieces/large-scale2.webp'           
          /> 
        </section>

        {/* Outcome & Results (Image Placeholder) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">Outcome & Results</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            The final design successfully balanced real-time operational needs with long-term strategic forecasting across engineering, management, and finance roles.
          </p>

          {/* Image Placeholder for Outcome Matrix */}
          <img
            src='/portfolio-pieces/large-scale3.webp'           
          /> 
        </section>

        <footer className="pt-12 border-t border-zinc-900 text-xs text-zinc-600">
          Protected by NDA • Case study process and design rationale
        </footer>

      </div>
    </article>
  );
}
import React from 'react';

export default function FitnessAppCaseStudy() {
  return (
    <article className="bg-zinc-950 text-zinc-100 font-sans min-h-screen py-32 px-6 antialiased selection:bg-zinc-800 selection:text-white">
      <div className="max-w-3xl mx-auto space-y-16">
        
        {/* Header / Intro */}
        <header className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Case Study • UX Research • AI Integration • Mobile Design • Onboarding • Personalization
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Designing an AI-Powered Fitness App That Keeps Users Coming Back
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            Designing a targeted mobile experience that addresses the root causes of user churn within the first 90 days through deep personalization and AI coaching.
          </p>
          <p className="text-xs text-zinc-600 italic">
            Protected by NDA: this case study focuses on process, findings, and design rationale rather than specific product details.
          </p>
        </header>

        <hr className="border-zinc-900" />

        {/* Understanding the User */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">Understanding the User: The Problem Worth Solving</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            A targeted survey revealed why so many users abandon fitness apps within the first 90 days and what a truly personalized experience would need to do differently. With 120 survey responders and 70% of users churning early, we gathered hard numbers alongside personal user frustrations.
          </p>

          {/* Image Placeholder for Survey Severity Chart */}
          <div className="my-8 p-12  text-center text-zinc-500 text-sm rounded-lg">
            <img
            src='/portfolio-pieces/ai-fitness-image-1.webp'           
          />
          <img
            src='/portfolio-pieces/ai-fitness-image-2.webp'           
          />
        </div>
        </section>

        {/* Key Insights */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">Key Insights: Four Themes That Shaped Every Design Decision</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            Our research pointed to distinct pillars that formed the foundation of the product strategy, moving away from rigid routines toward adaptive coaching.
          </p>

          {/* Image Placeholder for 4-Card Insights Grid */}
          <div className="my-8 p-12  text-center text-zinc-500 text-sm rounded-lg">
            <img
            src='/portfolio-pieces/ai-fitness-image-3.webp'           
          />
        </div>
        </section>

        {/* Product Vision */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">Product Vision & AI Capabilities</h2>
          <blockquote className="border-l-2 border-zinc-700 pl-4 my-4 italic text-zinc-300 font-light">
            "The goal was to make sophisticated AI-driven insights feel simple, supportive, and human—not clinical and overwhelming."
          </blockquote>
          <p className="text-zinc-300 leading-relaxed font-light">
            The platform leverages core AI capabilities including personalized workout generators, predictive progress analytics, wearable sync adaptation, real-time form correction, nutrition/sleep integration, and natural language coaching.
          </p>
        </section>

        {/* MVP Scope */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">MVP Scope: What Shipped First</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            Rather than building everything at once, the MVP focused on proving the core value loop: get users started quickly, give them a personalized plan, and show them progress within the first session.
          </p>
        </section>

        {/* User Journey (Image Placeholder) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">User Journey Mapping</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            A detailed journey map surfaced pain points, moments of delight, and gaps from discovery through onboarding, first workouts, adaptation, and long-term habit formation.
          </p>

          {/* Image Placeholder for Journey Map */}
          <div className="my-8 p-12  text-center text-zinc-500 text-sm rounded-lg">
            <img
            src='/portfolio-pieces/ai-fitness-image-5.webp'           
          />
        </div>
        </section>

        {/* Reflection */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight text-white">Reflection</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            Personal familiarity with fitness apps was a starting point, not a substitute for research. The key tension throughout was making AI feel helpful rather than clinical—surfacing intelligent recommendations without overwhelming users with data. Good UX is what bridges that gap.
          </p>
        </section>

        <footer className="pt-12 border-t border-zinc-900 text-xs text-zinc-600">
          Protected by NDA • Case study process, findings, and design rationale
        </footer>

      </div>
    </article>
  );
}
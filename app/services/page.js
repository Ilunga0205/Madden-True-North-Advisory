"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ServicesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');

        .font-display {
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.02em;
          font-weight: 600;
        }

        .font-body {
          font-family: 'Montserrat', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slideDown {
          opacity: 0;
          animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .bg-brand {
          background-color: #8FA89A;
        }

        .text-brand {
          color: #8FA89A;
        }

        .border-brand {
          border-color: #8FA89A;
        }

        .bg-warm-white {
          background-color: #F6F4F1;
        }

        .bg-charcoal {
          background-color: #1F1F1F;
        }

        .text-charcoal {
          color: #1F1F1F;
        }

        .bg-taupe {
          background-color: #C6B8A5;
        }

        .text-taupe {
          color: #C6B8A5;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-warm-white overflow-hidden py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          {/* Tag */}
          <div className="animate-slideDown mb-6" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block text-brand font-body text-sm font-semibold tracking-wider uppercase">
              Our Services
            </span>
          </div>

          {/* Main Headline */}
          <div className="animate-fadeInUp mb-8" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1]">
              Strategic clarity for <span className="text-brand italic">complex challenges</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fadeInUp mb-10" style={{ animationDelay: "0.3s" }}>
            <p className="font-body text-xl md:text-2xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              Focused advisory services designed to support clarity, governance, 
              and sustainable growth through independent perspective and proven frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-sm font-semibold rounded-full mb-6">
              What we offer
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              Services built for lasting impact
            </h2>
          </div>

          <div className="space-y-6">
            <ServiceCard
              number="01"
              title="Strategic Advisory"
              description="High-level strategic guidance to support leadership decision-making and long-term positioning."
              details={[
                "Strategic planning and scenario analysis",
                "Market positioning and competitive strategy",
                "Growth strategy and opportunity assessment",
                "Executive decision support and facilitation"
              ]}
            />
            <ServiceCard
              number="02"
              title="Governance & Structure"
              description="Support in designing governance frameworks that enable accountability and resilience."
              details={[
                "Board effectiveness and governance design",
                "Risk management frameworks",
                "Policy and compliance architecture",
                "Stakeholder management structures"
              ]}
            />
            <ServiceCard
              number="03"
              title="Organisational Alignment"
              description="Helping teams align strategy, operations, and culture for effective execution."
              details={[
                "Strategic alignment workshops and facilitation",
                "Operating model design and optimization",
                "Change management support",
                "Performance framework development"
              ]}
            />
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-32 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-5 gap-16 items-start">
            {/* Left - Heading */}
            <div className="md:col-span-2">
              <div className="inline-block px-4 py-2 bg-white text-brand font-body text-sm font-semibold rounded-full mb-6">
                Our approach
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight sticky top-24">
                Tailored to your <span className="text-brand italic">context</span>
              </h2>
            </div>

            {/* Right - Content */}
            <div className="md:col-span-3 space-y-8">
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                Every engagement is shaped by your specific challenges, opportunities, 
                and constraints. We don't apply generic frameworks—we adapt our approach 
                to what you actually need.
              </p>
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                Whether you need strategic clarity for a critical decision, governance 
                structures that enable better oversight, or organizational alignment to 
                execute on your vision, we bring the right combination of analytical rigor 
                and practical wisdom.
              </p>
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                Our engagements are collaborative, with clear deliverables and outcomes 
                that you can implement immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-sm font-semibold rounded-full mb-6">
              How we work
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-6">
              From insight to <span className="text-brand italic">implementation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="scroll-reveal" style={{ transitionDelay: "0.1s" }}>
              <ProcessItem
                title="Discovery & Scoping"
                description="We begin by understanding your context, challenges, and what success looks like for you."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.2s" }}>
              <ProcessItem
                title="Analysis & Framework"
                description="We apply analytical rigor and proven frameworks to structure thinking and identify pathways forward."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.3s" }}>
              <ProcessItem
                title="Recommendations"
                description="We deliver clear, actionable recommendations grounded in your reality and constraints."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.4s" }}>
              <ProcessItem
                title="Implementation Support"
                description="We support execution through coaching, facilitation, or ongoing advisory as needed."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="py-32 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20">
            <div className="inline-block px-4 py-2 bg-brand text-white font-body text-sm font-semibold rounded-full mb-6">
              Engagement models
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight max-w-4xl">
              Flexible partnerships for different needs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="scroll-reveal" style={{ transitionDelay: "0.1s" }}>
              <EngagementCard
                title="Project-Based"
                description="Defined scope and timeline for specific strategic challenges or governance needs. Clear deliverables with beginning and end points."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.2s" }}>
              <EngagementCard
                title="Retainer Advisory"
                description="Ongoing strategic counsel for leadership teams navigating continuous change and complex decisions over time."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.3s" }}>
              <EngagementCard
                title="Board Support"
                description="Independent perspective for boards of directors on governance, oversight, and strategic direction."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.4s" }}>
              <EngagementCard
                title="Facilitation & Workshops"
                description="Structured sessions to align leadership teams, develop strategy, or work through critical decisions."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 scroll-reveal overflow-hidden bg-brand">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm text-white/90 font-body text-sm font-medium rounded-full mb-8">
            Let's connect
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
            Ready to explore
            <br />
            <span className="italic">how we can help?</span>
          </h2>
          
          <p className="font-body text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Every engagement begins with a conversation about what you're facing and whether we're the right fit.
          </p>
          
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-10 py-5 bg-white text-brand font-body font-semibold hover:bg-white/90 transition-all hover:shadow-2xl hover:shadow-white/20"
          >
            <span>Start a conversation</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function ServiceCard({ number, title, description, details }) {
  return (
    <div className="scroll-reveal bg-white p-8 md:p-10 border-l-4 border-brand group hover:bg-white hover:shadow-lg transition-all">
      <div className="flex items-start gap-8">
        <div className="font-display text-6xl md:text-7xl text-stone-200 group-hover:text-brand/30 transition-colors flex-shrink-0">
          {number}
        </div>
        <div className="flex-1 pt-2">
          <h3 className="font-display text-2xl md:text-3xl mb-3 text-charcoal group-hover:text-brand transition-colors">
            {title}
          </h3>
          <p className="font-body text-lg text-stone-700 leading-relaxed mb-6">
            {description}
          </p>
          
          {/* Details List */}
          <div className="space-y-2">
            {details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-body text-stone-600">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessItem({ title, description }) {
  return (
    <div className="group bg-warm-white p-8 h-full border-l-4 border-transparent hover:border-brand transition-all">
      <h3 className="font-display text-2xl md:text-3xl mb-4 text-charcoal group-hover:text-brand transition-colors">
        {title}
      </h3>
      <p className="font-body text-lg text-stone-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function EngagementCard({ title, description }) {
  return (
    <div className="group bg-white p-8 border border-stone-200 hover:border-brand hover:shadow-lg transition-all h-full">
      <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-4 group-hover:text-brand transition-colors">
        {title}
      </h3>
      <p className="font-body text-lg text-stone-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
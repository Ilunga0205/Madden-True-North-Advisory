"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function OffersPage() {
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
              Our Offers
            </span>
          </div>

          {/* Main Headline */}
          <div className="animate-fadeInUp mb-8" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1]">
              Clear engagement formats for <span className="text-brand italic">focused outcomes</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fadeInUp mb-10" style={{ animationDelay: "0.3s" }}>
            <p className="font-body text-xl md:text-2xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              Structured offerings designed to support leadership, strategy, and governance 
              with clarity on scope, timeline, and deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* Core Offers Section */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-sm font-semibold rounded-full mb-6">
              Engagement formats
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              Structured support for your needs
            </h2>
          </div>

          <div className="space-y-6">
            <OfferCard
              number="01"
              title="Executive Advisory"
              description="Ongoing strategic advisory support for executives navigating complexity and change."
              details={[
                "Regular strategic counsel and decision support",
                "Independent perspective on critical challenges",
                "Board preparation and governance guidance",
                "Confidential sounding board for leadership"
              ]}
              duration="Retainer basis"
              idealFor="CEOs, executives, and senior leaders facing ongoing strategic decisions"
            />
            <OfferCard
              number="02"
              title="Strategic Review"
              description="A focused engagement to assess strategic direction, risks, and opportunities."
              details={[
                "Comprehensive strategic assessment",
                "Market and competitive positioning analysis",
                "Risk identification and scenario planning",
                "Clear recommendations and implementation roadmap"
              ]}
              duration="6-12 weeks"
              idealFor="Organizations at inflection points or considering major strategic shifts"
            />
            <OfferCard
              number="03"
              title="Governance Support"
              description="Short-term or project-based support to strengthen governance and decision structures."
              details={[
                "Governance framework design and review",
                "Board effectiveness assessment",
                "Policy development and compliance support",
                "Stakeholder engagement structures"
              ]}
              duration="Project-based, 4-16 weeks"
              idealFor="Boards and leadership teams enhancing governance capability"
            />
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-32 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-5 gap-16 items-start">
            {/* Left - Heading */}
            <div className="md:col-span-2">
              <div className="inline-block px-4 py-2 bg-white text-brand font-body text-sm font-semibold rounded-full mb-6">
                Choosing the right fit
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight sticky top-24">
                Finding the <span className="text-brand italic">right engagement</span>
              </h2>
            </div>

            {/* Right - Content */}
            <div className="md:col-span-3 space-y-8">
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                Not sure which offering fits your needs? The right engagement depends on 
                your timeline, the nature of your challenge, and the type of support that 
                will be most valuable.
              </p>
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                <strong className="font-semibold">Executive Advisory</strong> works best when 
                you need ongoing strategic counsel over time. <strong className="font-semibold">Strategic Review</strong> is 
                ideal for defined strategic questions or transitions. <strong className="font-semibold">Governance Support</strong> addresses 
                specific governance gaps or improvement needs.
              </p>
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                We can also combine or customize engagements based on what you're facing. 
                Every conversation begins with understanding your context and recommending 
                the most appropriate approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-sm font-semibold rounded-full mb-6">
              What you can expect
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-6">
              Clarity from <span className="text-brand italic">start to finish</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="scroll-reveal" style={{ transitionDelay: "0.1s" }}>
              <IncludedItem
                title="Clear scope and deliverables"
                description="Every engagement begins with agreed scope, timeline, and expected outcomes. No ambiguity about what you're getting."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.2s" }}>
              <IncludedItem
                title="Direct senior involvement"
                description="You work directly with experienced advisors, not junior team members. Your time is valuable."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.3s" }}>
              <IncludedItem
                title="Actionable recommendations"
                description="Insights are only valuable if you can act on them. We deliver practical recommendations you can implement."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.4s" }}>
              <IncludedItem
                title="Confidential partnership"
                description="Everything discussed stays confidential. We create space for honest conversation about complex challenges."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-32 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-brand text-white font-body text-sm font-semibold rounded-full mb-6">
              Investment
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-8">
              Transparent pricing and flexible terms
            </h2>
            
            <div className="space-y-6 font-body text-lg text-stone-700 leading-relaxed">
              <p>
                Our engagements are priced based on scope, complexity, and duration. We provide 
                clear fee estimates before any work begins, with no hidden costs or surprises.
              </p>
              <p>
                <strong className="font-semibold">Executive Advisory</strong> typically operates 
                on a monthly retainer basis, providing predictable costs and flexible access. 
                <strong className="font-semibold"> Strategic Review</strong> and <strong className="font-semibold">Governance Support</strong> are 
                project-based with fixed-fee or capped arrangements.
              </p>
              <p>
                We're happy to discuss pricing and structure during our initial conversation 
                once we understand your specific needs.
              </p>
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
            Get started
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
            Let's discuss
            <br />
            <span className="italic">what you need</span>
          </h2>
          
          <p className="font-body text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Every engagement begins with understanding your context and recommending the right approach.
          </p>
          
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-10 py-5 bg-white text-brand font-body font-semibold hover:bg-white/90 transition-all hover:shadow-2xl hover:shadow-white/20"
          >
            <span>Schedule a conversation</span>
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

function OfferCard({ number, title, description, details, duration, idealFor }) {
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
          <div className="space-y-2 mb-6">
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

          {/* Meta Information */}
          <div className="pt-6 border-t border-stone-200 grid md:grid-cols-2 gap-4">
            <div>
              <div className="font-body text-sm font-semibold text-brand uppercase tracking-wider mb-1">
                Duration
              </div>
              <div className="font-body text-stone-700">
                {duration}
              </div>
            </div>
            <div>
              <div className="font-body text-sm font-semibold text-brand uppercase tracking-wider mb-1">
                Ideal for
              </div>
              <div className="font-body text-stone-700">
                {idealFor}
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center font-body text-brand hover:text-charcoal font-medium transition-colors group/link"
            >
              <span className="underline underline-offset-4">Enquire about this offer</span>
              <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function IncludedItem({ title, description }) {
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
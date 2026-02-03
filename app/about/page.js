"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      {/* Hero Section - Simple centered approach */}
      <section className="relative bg-warm-white overflow-hidden py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          {/* Tag */}
          <div className="animate-slideDown mb-6" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block text-brand font-body text-sm font-semibold tracking-wider uppercase">
              About Madden True North Advisory
            </span>
          </div>

          {/* Main Headline */}
          <div className="animate-fadeInUp mb-8" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1]">
              Building clarity from <span className="text-brand italic">complexity</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fadeInUp mb-10" style={{ animationDelay: "0.3s" }}>
            <p className="font-body text-xl md:text-2xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              We partner with leaders to navigate uncertainty, strengthen governance, 
              and create lasting strategic advantage through independent perspective 
              and proven frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section - Full width */}
      <section className="scroll-reveal">
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/about-hero.jpg"
            alt="Strategic consultation"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-5 gap-16 items-start">
            {/* Left - Heading */}
            <div className="md:col-span-2">
              <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-sm font-semibold rounded-full mb-6">
                Our foundation
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight sticky top-24">
                Strategic clarity enables <span className="text-brand italic">better decisions</span>
              </h2>
            </div>

            {/* Right - Content */}
            <div className="md:col-span-3 space-y-8">
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                True North Advisory is built on the belief that with the right perspective 
                and frameworks, complex challenges become navigable.
              </p>
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                We work closely with senior leaders to define direction, strengthen 
                governance structures, and ensure strategic vision translates into 
                meaningful outcomes.
              </p>
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                Our approach balances analytical rigor with practical wisdom, ensuring 
                recommendations can be implemented in your reality, not just on paper.
              </p>
              
              <div className="mt-12 p-8 bg-warm-white border-l-4 border-brand">
                <p className="font-body text-lg text-stone-700 leading-relaxed italic">
                  "Complex problems require clear frameworks that illuminate paths forward 
                  without oversimplification. That's where we begin."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-32 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-brand text-white font-body text-sm font-semibold rounded-full mb-6">
              How we work
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              Principles that guide every engagement
            </h2>
          </div>

          <div className="space-y-6">
            <PrincipleCard
              number="01"
              title="Independence"
              description="We provide objective counsel, free from internal politics and organizational constraints."
            />
            <PrincipleCard
              number="02"
              title="Clarity"
              description="Complex problems require clear frameworks that illuminate paths forward without oversimplification."
            />
            <PrincipleCard
              number="03"
              title="Partnership"
              description="We work alongside leadership teams, building capability and confidence alongside insight."
            />
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-sm font-semibold rounded-full mb-6">
              Our approach
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-6">
              From insight to <span className="text-brand italic">implementation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="scroll-reveal" style={{ transitionDelay: "0.1s" }}>
              <ApproachItem
                title="Listen deeply"
                description="Every engagement begins with understanding your context, constraints, and what's truly at stake."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.2s" }}>
              <ApproachItem
                title="Structure thinking"
                description="We bring frameworks and analytical rigor to organize complexity without losing nuance."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.3s" }}>
              <ApproachItem
                title="Challenge constructively"
                description="Our value lies in asking difficult questions and offering perspectives you might not hear internally."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.4s" }}>
              <ApproachItem
                title="Enable action"
                description="Insight without implementation is academic. We ensure recommendations can be executed."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20">
            <div className="inline-block px-4 py-2 bg-brand text-white font-body text-sm font-semibold rounded-full mb-6">
              Our values
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight max-w-4xl">
              What guides our work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="scroll-reveal" style={{ transitionDelay: "0.1s" }}>
              <ValueCard
                title="Intellectual honesty"
                description="We tell you what we believe to be true, not what you want to hear. Trust is built on candor."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.2s" }}>
              <ValueCard
                title="Long-term thinking"
                description="We optimize for sustainable outcomes over short-term wins. Quick fixes rarely solve complex problems."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.3s" }}>
              <ValueCard
                title="Practical wisdom"
                description="Theory matters, but only when it translates to real-world application. We work in your reality."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.4s" }}>
              <ValueCard
                title="Respectful challenge"
                description="We push thinking forward while honoring the complexity you navigate daily. Growth requires discomfort."
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
            Ready to find your
            <br />
            <span className="italic">true north?</span>
          </h2>
          
          <p className="font-body text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Every engagement begins with a conversation about what you're facing and how we might help.
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

function PrincipleCard({ number, title, description }) {
  return (
    <div className="scroll-reveal bg-white p-8 md:p-10 border-l-4 border-brand group hover:bg-white hover:shadow-lg transition-all">
      <div className="flex items-start gap-8">
        <div className="font-display text-6xl md:text-7xl text-stone-200 group-hover:text-brand/30 transition-colors flex-shrink-0">
          {number}
        </div>
        <div className="flex-1 pt-2">
          <h3 className="font-display text-2xl md:text-3xl mb-3 text-charcoal group-hover:text-brand transition-colors">{title}</h3>
          <p className="font-body text-lg text-stone-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ApproachItem({ title, description }) {
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

function ValueCard({ title, description }) {
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
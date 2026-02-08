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

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
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

        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
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

        /* Decorative scroll indicator */
        .scroll-indicator {
          position: relative;
          width: 30px;
          height: 50px;
          border: 2px solid #8FA89A;
          border-radius: 20px;
        }

        .scroll-indicator::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          width: 4px;
          height: 8px;
          background: #8FA89A;
          border-radius: 2px;
          transform: translateX(-50%);
          animation: scroll-down 2s ease-in-out infinite;
        }

        @keyframes scroll-down {
          0% {
            top: 8px;
            opacity: 1;
          }
          50% {
            top: 20px;
            opacity: 0.5;
          }
          100% {
            top: 8px;
            opacity: 1;
          }
        }
      `}</style>

      {/* Hero Section - Compact */}
      <section className="relative bg-warm-white overflow-hidden py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          {/* Tag */}
          <div className="animate-slideDown mb-4" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block text-brand font-body text-sm font-semibold tracking-wider uppercase">
              About Inge Madden
            </span>
          </div>

          {/* Main Headline */}
          <div className="animate-fadeInUp mb-6" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1]">
              Financial clarity meets <span className="text-brand italic">human insight</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fadeInUp mb-0" style={{ animationDelay: "0.3s" }}>
            <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              I'm Inge Madden, founder of True North Advisory. I help business owners gain clarity, 
              plan for sustainable growth, and lead with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll Teaser Section */}
      <section className="relative bg-warm-white pt-4 pb-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Teaser Cards - Peek at content below */}
          <div className="grid md:grid-cols-3 gap-6 mb-4">
            <div className="bg-white p-6 border-l-4 border-brand shadow-sm hover:shadow-md transition-shadow animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              <div className="text-brand font-display text-4xl mb-2">01</div>
              <h3 className="font-display text-xl text-charcoal mb-2">Financial Expertise</h3>
              <p className="font-body text-sm text-stone-600">Accounting & strategic finance background</p>
            </div>
            
            <div className="bg-white p-6 border-l-4 border-brand shadow-sm hover:shadow-md transition-shadow animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
              <div className="text-brand font-display text-4xl mb-2">02</div>
              <h3 className="font-display text-xl text-charcoal mb-2">Coaching</h3>
              <p className="font-body text-sm text-stone-600">Supporting your leadership journey</p>
            </div>
            
            <div className="bg-white p-6 border-l-4 border-brand shadow-sm hover:shadow-md transition-shadow animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
              <div className="text-brand font-display text-4xl mb-2">03</div>
              <h3 className="font-display text-xl text-charcoal mb-2">Resilience</h3>
              <p className="font-body text-sm text-stone-600">Practical strategies for sustainable growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="scroll-reveal">
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/about-hero.jpg"
            alt="Inge Madden - True North Advisory"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
          
          {/* Overlay text on image */}
          <div className="absolute inset-0 flex items-end justify-center pb-12">
            <div className="text-center">
              <p className="font-display text-white text-2xl md:text-3xl italic">
                "True growth is about understanding priorities and making deliberate choices"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-5 gap-16 items-start">
            {/* Left - Heading */}
            <div className="md:col-span-2">
              <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-sm font-semibold rounded-full mb-6">
                My journey
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight sticky top-24">
                From numbers to <span className="text-brand italic">holistic growth</span>
              </h2>
            </div>

            {/* Right - Content */}
            <div className="md:col-span-3 space-y-8">
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                I began my career in accounting and finance, working with international clients 
                and seeing firsthand how clarity in numbers drives confident decision-making.
              </p>
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                Over time, I realized that true growth isn't just about financials — it's about 
                understanding priorities, making deliberate choices, and staying grounded through change.
              </p>
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                That's why I combine financial expertise with coaching and practical resilience 
                strategies, helping business owners gain clarity, plan for sustainable growth, 
                and lead with confidence.
              </p>
              
              <div className="mt-12 p-8 bg-warm-white border-l-4 border-brand">
                <p className="font-body text-lg text-stone-700 leading-relaxed italic">
                  "My work supports both the strategic and human sides of business, offering 
                  a clear, structured, and balanced path forward."
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
              My approach
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              Three pillars of sustainable growth
            </h2>
          </div>

          <div className="space-y-6">
            <PrincipleCard
              number="01"
              title="Financial Expertise"
              description="Deep experience in accounting and finance, working with international clients to turn numbers into actionable insights and confident decisions."
            />
            <PrincipleCard
              number="02"
              title="Coaching & Strategy"
              description="Helping you understand your priorities, make deliberate choices, and stay aligned with your vision as you grow."
            />
            <PrincipleCard
              number="03"
              title="Practical Resilience"
              description="Building sustainable systems and mindsets that help you stay grounded through change and navigate challenges with confidence."
            />
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-sm font-semibold rounded-full mb-6">
              Working together
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-6">
              What you can <span className="text-brand italic">expect</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="scroll-reveal" style={{ transitionDelay: "0.1s" }}>
              <ApproachItem
                title="Clear financial foundation"
                description="Your books are accurate, your reports are meaningful, and you understand exactly where your business stands."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.2s" }}>
              <ApproachItem
                title="Strategic clarity"
                description="You have a clear plan for growth, informed by both numbers and your deeper business priorities."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.3s" }}>
              <ApproachItem
                title="Confident decision-making"
                description="You feel equipped to make important decisions, knowing you have both the data and the support you need."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.4s" }}>
              <ApproachItem
                title="Sustainable systems"
                description="You've built resilient practices and mindsets that support long-term success, not just short-term wins."
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
              Core values
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight max-w-4xl">
              What guides my work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="scroll-reveal" style={{ transitionDelay: "0.1s" }}>
              <ValueCard
                title="Clarity over complexity"
                description="Numbers should inform, not overwhelm. I help you see what matters and make sense of your financial story."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.2s" }}>
              <ValueCard
                title="Growth with balance"
                description="Sustainable success comes from honoring both the strategic and human sides of business. It's not one or the other."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.3s" }}>
              <ValueCard
                title="Deliberate decision-making"
                description="Every choice shapes your business. I support you in making decisions that align with your priorities and values."
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "0.4s" }}>
              <ValueCard
                title="Grounded resilience"
                description="Change is constant. I help you build the systems and mindsets that keep you steady through growth and challenges."
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
            Ready to find
            <br />
            <span className="italic">your clarity?</span>
          </h2>
          
          <p className="font-body text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Let's talk about where you are, where you want to go, and how I can support your journey.
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
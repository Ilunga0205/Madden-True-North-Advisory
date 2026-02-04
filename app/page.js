"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        .animate-scaleIn {
          opacity: 0;
          animation: scaleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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

        .bg-brand-light {
          background-color: #E8EDE9;
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

        /* Parallax effect for hero image */
        .parallax-image {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {/* Professional Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-screen max-w-none">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-20 order-1 lg:order-1">
            <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto">
              {/* Tag */}
              <div className="animate-slideDown mb-4" style={{ animationDelay: "0.1s" }}>
                <span className="inline-block text-brand font-body text-xs sm:text-sm font-semibold tracking-wider uppercase">
                  Strategic Advisory Excellence
                </span>
              </div>

              {/* Main Headline */}
              <div className="animate-fadeInUp mb-5" style={{ animationDelay: "0.2s" }}>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] mb-5">
                  Navigate complexity with <span className="text-brand">clarity</span>
                </h1>
              </div>

              {/* Description */}
              <div className="animate-fadeInUp mb-8" style={{ animationDelay: "0.3s" }}>
                <p className="font-body text-sm sm:text-base md:text-lg text-stone-700 leading-relaxed">
                  Madden True North Advisory provides senior leaders with strategic counsel, 
                  governance design, and the independent perspective needed to make 
                  confident decisions in uncertain environments.
                </p>
              </div>

              {/* CTAs */}
              <div className="animate-fadeInUp flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10" style={{ animationDelay: "0.4s" }}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-brand text-white font-body font-semibold hover:bg-[#7a9284] transition-all text-sm md:text-base">
                  <span>Start a conversation</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 border-2 border-stone-300 text-charcoal font-body font-semibold hover:border-brand hover:text-brand transition-all text-sm md:text-base">
                  Explore services
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="animate-fadeIn" style={{ animationDelay: "0.5s" }}>
                <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-stone-200">
                  <div>
                    <div className="font-display text-xl sm:text-2xl md:text-3xl text-brand mb-1">15+</div>
                    <div className="font-body text-xs md:text-sm text-stone-700">Years Experience</div>
                  </div>
                  <div>
                    <div className="font-display text-xl sm:text-2xl md:text-3xl text-brand mb-1">100+</div>
                    <div className="font-body text-xs md:text-sm text-stone-700">Organizations Served</div>
                  </div>
                  <div>
                    <div className="font-display text-xl sm:text-2xl md:text-3xl text-brand mb-1">5</div>
                    <div className="font-body text-xs md:text-sm text-stone-700">Continents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[50vh] sm:h-[60vh] lg:h-auto order-2 lg:order-2">
            <div className="relative w-full h-full overflow-hidden">
              <div 
                className="parallax-image absolute inset-0 w-full h-full"
                style={{
                  transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.3}px)`
                }}
              >
                <Image
                  src="/images/hero-advisory.jpg"
                  alt="Strategic advisory consultation"
                  fill
                  priority
                  className="object-cover"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent" />
            </div>
            
            {/* Info card overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:left-8 lg:right-auto lg:bottom-12 bg-white shadow-2xl p-4 sm:p-6 max-w-sm animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-body font-semibold text-charcoal mb-1 text-sm sm:text-base">Trusted Partner</div>
                  <div className="font-body text-xs sm:text-sm text-stone-700">Independent perspective you can rely on</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value proposition - Clean white section */}
      <section className="py-16 sm:py-24 lg:py-32 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block px-4 py-2 bg-white text-brand font-body text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
              How we work
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-4 sm:mb-6">
              Turning complexity into <span className="text-brand italic">actionable insight</span>
            </h2>
            <p className="font-body text-base sm:text-lg lg:text-xl text-stone-700 leading-relaxed">
              Our approach combines deep expertise with a commitment to understanding your unique context.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="scroll-reveal bg-white p-6 sm:p-8 lg:p-10 border-l-4 border-brand" style={{ transitionDelay: "0.1s" }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand flex items-center justify-center mb-4 sm:mb-6">
                <span className="font-display text-xl sm:text-2xl text-white">01</span>
              </div>
              <h3 className="font-body text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-charcoal">Deep listening</h3>
              <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed">
                We begin by understanding your context, constraints, and what's truly at stake before offering solutions.
              </p>
            </div>

            <div className="scroll-reveal bg-white p-6 sm:p-8 lg:p-10 border-l-4 border-brand" style={{ transitionDelay: "0.2s" }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand flex items-center justify-center mb-4 sm:mb-6">
                <span className="font-display text-xl sm:text-2xl text-white">02</span>
              </div>
              <h3 className="font-body text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-charcoal">Structured thinking</h3>
              <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed">
                Complex challenges require frameworks that bring order without oversimplifying the reality you face.
              </p>
            </div>

            <div className="scroll-reveal bg-white p-6 sm:p-8 lg:p-10 border-l-4 border-brand sm:col-span-2 md:col-span-1" style={{ transitionDelay: "0.3s" }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand flex items-center justify-center mb-4 sm:mb-6">
                <span className="font-display text-xl sm:text-2xl text-white">03</span>
              </div>
              <h3 className="font-body text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-charcoal">Independent perspective</h3>
              <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed">
                Our value lies in offering objective analysis free from internal politics and organizational blind spots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 lg:py-32 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-2 bg-brand text-white font-body text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
                Services
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
                Strategic support at every level
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard
              title="Strategic Advisory"
              description="Direction and frameworks for complex organizational decisions"
              icon={
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              link="/services#strategic"
            />
            <ServiceCard
              title="Governance Design"
              description="Structures and processes that enable effective oversight"
              icon={
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              link="/services#governance"
            />
            <ServiceCard
              title="Organisational Alignment"
              description="Coherence across teams, functions, and strategic intent"
              icon={
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              link="/services#alignment"
            />
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 sm:py-24 lg:py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
            <div>
              <div className="inline-block px-4 py-2 bg-brand-light text-brand font-body text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
                Insights
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
                Current thinking
              </h2>
            </div>
            <Link 
              href="/insights"
              className="inline-flex items-center gap-2 font-body text-brand font-semibold hover:gap-4 transition-all group text-sm sm:text-base"
            >
              <span>View all insights</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <InsightCard
              title="Navigating Complexity in Leadership"
              date="January 2026"
              category="Leadership"
              excerpt="How senior leaders can maintain clarity and direction in increasingly uncertain environments."
            />
            <InsightCard
              title="Strategy vs Execution"
              date="December 2025"
              category="Strategy"
              excerpt="Bridging the gap between strategic intent and operational reality."
            />
            <InsightCard
              title="The Governance Gap"
              date="December 2025"
              category="Governance"
              excerpt="Why effective oversight requires more than compliance frameworks."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 lg:py-40 scroll-reveal overflow-hidden bg-brand">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block px-4 sm:px-5 py-2 bg-white/10 backdrop-blur-sm text-white/90 font-body text-xs sm:text-sm font-medium rounded-full mb-6 sm:mb-8">
            Let's connect
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 sm:mb-8 leading-tight px-4">
            Let's find your
            <br />
            <span className="italic">true north</span>
          </h2>
          
          <p className="font-body text-base sm:text-lg lg:text-xl text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
            Every engagement begins with a conversation about what you're facing and how we might help.
          </p>
          
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-brand font-body font-semibold hover:bg-white/90 transition-all hover:shadow-2xl hover:shadow-white/20 text-sm sm:text-base"
          >
            <span>Book a consultation</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ title, description, icon, link }) {
  return (
    <Link 
      href={link}
      className="group scroll-reveal block bg-white p-6 sm:p-8 border-2 border-stone-200 hover:border-brand transition-all duration-300"
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-light flex items-center justify-center text-brand mb-4 sm:mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-body text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-charcoal group-hover:text-brand transition-colors">{title}</h3>
      <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed mb-4 sm:mb-6">{description}</p>
      <div className="flex items-center text-brand font-body font-semibold group-hover:gap-3 transition-all text-sm sm:text-base">
        <span>Learn more</span>
        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}

function InsightCard({ title, date, category, excerpt }) {
  return (
    <Link 
      href="/insights"
      className="group scroll-reveal block bg-warm-white p-6 sm:p-8 border-l-4 border-brand hover:bg-brand-light transition-all"
    >
      <div className="flex items-start justify-between gap-4 sm:gap-6">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
            <span className="inline-block px-3 py-1 bg-brand text-white font-body text-xs font-semibold rounded-full w-fit">
              {category}
            </span>
            <span className="font-body text-xs sm:text-sm text-stone-500">{date}</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-charcoal mb-2 sm:mb-3 group-hover:text-brand transition-colors">
            {title}
          </h3>
          <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed">{excerpt}</p>
        </div>
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand flex-shrink-0 group-hover:translate-x-2 transition-transform mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ServicesPage() {
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

      {/* Hero Section - Compact */}
      <section className="relative bg-warm-white overflow-hidden py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          {/* Tag */}
          <div className="animate-slideDown mb-4" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block text-brand font-body text-sm font-semibold tracking-wider uppercase">
              Services
            </span>
          </div>

          {/* Main Headline */}
          <div className="animate-fadeInUp mb-6" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1]">
              Financial clarity meets <span className="text-brand italic">strategic support</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fadeInUp mb-0" style={{ animationDelay: "0.3s" }}>
            <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              From bookkeeping to CFO-level advisory and leadership coaching—comprehensive support 
              for business owners who want both financial clarity and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Snapshot Section */}
      <section className="relative bg-warm-white pt-4 pb-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-6 mb-4">
            <div className="bg-white p-6 border-l-4 border-brand shadow-sm hover:shadow-md transition-shadow animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              <div className="text-brand font-display text-4xl mb-2">💰</div>
              <h3 className="font-display text-xl text-charcoal mb-2">Financial Clarity & Strategy</h3>
              <p className="font-body text-sm text-stone-600">Accounting, bookkeeping, reporting, and forecasting</p>
            </div>
            
            <div className="bg-white p-6 border-l-4 border-brand shadow-sm hover:shadow-md transition-shadow animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
              <div className="text-brand font-display text-4xl mb-2">🎯</div>
              <h3 className="font-display text-xl text-charcoal mb-2">Business & Decision Coaching</h3>
              <p className="font-body text-sm text-stone-600">Strategic thinking, leadership support, clarity in direction</p>
            </div>
            
            <div className="bg-white p-6 border-l-4 border-brand shadow-sm hover:shadow-md transition-shadow animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
              <div className="text-brand font-display text-4xl mb-2">🌱</div>
              <h3 className="font-display text-xl text-charcoal mb-2">Resilience & Well-being</h3>
              <p className="font-body text-sm text-stone-600">Embodied and movement-based practices for sustainability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="scroll-reveal">
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/services-hero.jpg"
            alt="Financial services and coaching"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
          
          {/* Overlay text on image */}
          <div className="absolute inset-0 flex items-end justify-center pb-12">
            <div className="text-center">
              <p className="font-display text-white text-2xl md:text-3xl italic">
                "Clear numbers. Strategic thinking. Sustainable growth."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Accounting & Financial Management - Left Aligned with Image */}
      <section className="py-20 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-xs font-semibold rounded-full mb-4">
                Service 1
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                Accounting & Financial Management
              </h2>
              <p className="font-body text-xl text-stone-600 mb-6">
                The foundation of financial clarity
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">Monthly bookkeeping</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">Management accounts</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">Cash flow tracking</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">Budgeting and forecasting</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">Clean-ups and system setup</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">Support for international clients</span>
                </div>
              </div>

              <div className="p-6 bg-warm-white border-l-4 border-brand mb-6">
                <p className="font-body font-semibold text-charcoal mb-1">Outcome:</p>
                <p className="font-body text-stone-700 italic">Clear numbers, less overwhelm, better decisions.</p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center font-body text-brand hover:text-charcoal font-semibold transition-colors group"
              >
                <span className="underline underline-offset-4">Get started</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right - Image */}
            <div className="order-1 md:order-2">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/accounting-service.jpg"
                  alt="Accounting and financial management"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Financial Strategy & Advisory - Right Aligned */}
      <section className="py-20 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/strategy-service.jpg"
                  alt="Financial strategy and advisory"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-brand text-white font-body text-xs font-semibold rounded-full mb-4">
                Service 2
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                Financial Strategy & Advisory
              </h2>
              <p className="font-body text-xl text-stone-600 mb-6">
                CFO-level thinking for your business
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">Business performance reviews</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">Growth planning</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">Pricing and profitability analysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">CFO-style advisory for small businesses</span>
                </div>
              </div>

              <div className="p-6 bg-white border-l-4 border-brand mb-6">
                <p className="font-body font-semibold text-charcoal mb-1">Outcome:</p>
                <p className="font-body text-stone-700 italic">Strategic clarity and financial confidence.</p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center font-body text-brand hover:text-charcoal font-semibold transition-colors group"
              >
                <span className="underline underline-offset-4">Get started</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Coaching & Decision Support - Centered Card */}
      <section className="py-20 scroll-reveal bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-warm-white p-8 md:p-12 border-l-4 border-brand">
            <div className="inline-block px-4 py-2 bg-brand text-white font-body text-xs font-semibold rounded-full mb-4">
              Service 3
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
              Coaching & Decision Support
            </h2>
            <p className="font-body text-xl text-stone-600 mb-8">
              Leadership clarity when you need it most
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">One-on-one coaching sessions</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">Business clarity and prioritisation</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">Leadership and confidence support</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-stone-700">Navigating transitions and growth phases</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border-l-4 border-brand mb-6">
              <p className="font-body font-semibold text-charcoal mb-1">Outcome:</p>
              <p className="font-body text-stone-700 italic">Focused decisions and aligned leadership.</p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center font-body text-brand hover:text-charcoal font-semibold transition-colors group"
            >
              <span className="underline underline-offset-4">Get started</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service 4: Resilience & Embodied Support - Dark Card */}
      <section className="py-20 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-charcoal rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Left - Content (3 columns) */}
              <div className="md:col-span-3 p-8 md:p-12">
                <div className="inline-block px-4 py-2 bg-brand text-white font-body text-xs font-semibold rounded-full mb-4">
                  Service 4 • Optional Add-On
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
                  Resilience & Embodied Support
                </h2>
                <p className="font-body text-xl text-white/80 mb-8">
                  Sustainable energy for sustainable business
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-body text-white/90">Nia-based movement sessions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-body text-white/90">Grounding and stress management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-body text-white/90">Energy and focus support for business owners</span>
                  </div>
                </div>

                <div className="p-6 bg-white/10 backdrop-blur-sm border-l-4 border-brand mb-6">
                  <p className="font-body font-semibold text-white mb-1">Outcome:</p>
                  <p className="font-body text-white/80 italic">Sustainable energy and resilience while building a business.</p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center font-body text-white hover:text-brand font-semibold transition-colors group"
                >
                  <span className="underline underline-offset-4">Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Right - Image (2 columns) */}
              <div className="md:col-span-2 relative min-h-[300px] md:min-h-0">
                <Image
                  src="/images/resilience-service.jpg"
                  alt="Resilience and embodied support"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Together Section */}
      <section className="py-32 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-brand text-white font-body text-sm font-semibold rounded-full mb-6">
              The complete picture
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              Services that work <span className="text-brand italic">together</span>
            </h2>
            <p className="font-body text-xl text-stone-700 leading-relaxed mt-6">
              You don't have to choose just one. Most clients combine services to create the 
              support structure that fits their business and stage of growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-l-4 border-brand">
              <h3 className="font-display text-2xl text-charcoal mb-3">For Solo Founders</h3>
              <p className="font-body text-stone-700 leading-relaxed mb-4">
                Start with solid bookkeeping and monthly reporting. Add coaching when you need 
                help prioritizing or making key decisions.
              </p>
              <div className="text-sm font-body text-brand">Foundation → Growth</div>
            </div>

            <div className="bg-white p-8 border-l-4 border-brand">
              <h3 className="font-display text-2xl text-charcoal mb-3">For Scaling Businesses</h3>
              <p className="font-body text-stone-700 leading-relaxed mb-4">
                Combine financial management with strategic advisory and regular coaching 
                to navigate growth with confidence.
              </p>
              <div className="text-sm font-body text-brand">Growth → Advisory</div>
            </div>

            <div className="bg-white p-8 border-l-4 border-brand">
              <h3 className="font-display text-2xl text-charcoal mb-3">For Sustainable Leaders</h3>
              <p className="font-body text-stone-700 leading-relaxed mb-4">
                Add resilience support to any package to build practices that keep you 
                grounded and energized through challenges.
              </p>
              <div className="text-sm font-body text-brand">Any package + Resilience</div>
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
            Let's talk
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
            Which services
            <br />
            <span className="italic">fit your needs?</span>
          </h2>
          
          <p className="font-body text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Not sure where to start? Let's have a conversation about where you are and what 
            support would be most valuable right now.
          </p>
          
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-10 py-5 bg-white text-brand font-body font-semibold hover:bg-white/90 transition-all hover:shadow-2xl hover:shadow-white/20"
          >
            <span>Get in touch</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
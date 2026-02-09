"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { globalStyles } from "@/styles/globalStyles";

export default function PackagesPage() {
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
      <style jsx global>{globalStyles}</style>

      {/* Hero Section - Compact */}
      <section className="relative bg-warm-white overflow-hidden py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          {/* Tag */}
          <div className="animate-slideDown mb-4" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block text-brand font-body text-sm font-semibold tracking-wider uppercase">
              Work With Me
            </span>
          </div>

          {/* Main Headline */}
          <div className="animate-fadeInUp mb-6" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1]">
              Financial clarity for <span className="text-brand italic">confident decisions</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fadeInUp mb-0" style={{ animationDelay: "0.3s" }}>
            <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              From bookkeeping to CFO-level advisory, choose the support that fits your business stage and growth ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll Teaser Section */}
      <section className="relative bg-warm-white pt-4 pb-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Teaser Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-4">
            <div className="bg-white p-6 border-l-4 border-brand shadow-sm hover:shadow-md transition-shadow animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              <div className="text-brand font-display text-4xl mb-2">3</div>
              <h3 className="font-display text-xl text-charcoal mb-2">Core Packages</h3>
              <p className="font-body text-sm text-stone-600">Foundation, Growth, Advisory</p>
            </div>
            
            <div className="bg-white p-6 border-l-4 border-brand shadow-sm hover:shadow-md transition-shadow animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
              <div className="text-brand font-display text-4xl mb-2">Fully</div>
              <h3 className="font-display text-xl text-charcoal mb-2">Customizable</h3>
              <p className="font-body text-sm text-stone-600">Tailored to your business</p>
            </div>
            
            <div className="bg-white p-6 border-l-4 border-brand shadow-sm hover:shadow-md transition-shadow animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
              <div className="text-brand font-display text-4xl mb-2">1:1</div>
              <h3 className="font-display text-xl text-charcoal mb-2">Direct Support</h3>
              <p className="font-body text-sm text-stone-600">Work directly with me</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="scroll-reveal">
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/Financialplanningandstrategy.jpg"
            alt="Financial planning and strategy"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
          
          {/* Overlay text on image */}
          <div className="absolute inset-0 flex items-end justify-center pb-12">
            <div className="text-center">
              <p className="font-display text-white text-2xl md:text-3xl italic">
                &quot;Numbers tell a story—let&apos;s make sure it&apos;s yours&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package 1: Foundation - Standard Left-aligned Card */}
      <section className="py-20 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-xs font-semibold rounded-full mb-4">
                Package 1
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                Foundation
              </h2>
              <p className="font-body text-xl text-stone-600 mb-6 italic">
                For solo founders needing consistency and clarity
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-body font-semibold text-charcoal">Monthly bookkeeping</div>
                    <div className="font-body text-sm text-stone-600">All transactions categorized and reconciled</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-body font-semibold text-charcoal">Basic reporting</div>
                    <div className="font-body text-sm text-stone-600">P&L and balance sheet delivered monthly</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-body font-semibold text-charcoal">Monthly check-in call</div>
                    <div className="font-body text-sm text-stone-600">Review numbers and answer questions</div>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center font-body text-brand hover:text-charcoal font-semibold transition-colors group"
              >
                <span className="underline underline-offset-4">Get started with Foundation</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right - Image */}
            <div className="order-1 md:order-2">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Foundationbookkeeping.jpg"
                  alt="Foundation bookkeeping"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package 2: Growth - Right-aligned Card with accent bg */}
      <section className="py-20 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Growth strategyandorecasting.jpg"
                  alt="Growth strategy and forecasting"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-brand text-white font-body text-xs font-semibold rounded-full mb-4">
                Package 2 • Most Popular
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                Growth
              </h2>
              <p className="font-body text-xl text-stone-600 mb-6 italic">
                For businesses scaling or refining strategy
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-body font-semibold text-charcoal">Full bookkeeping & reporting</div>
                    <div className="font-body text-sm text-stone-600">Everything in Foundation, plus advanced insights</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-body font-semibold text-charcoal">Cash flow forecasting</div>
                    <div className="font-body text-sm text-stone-600">13-week rolling forecast for confident planning</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-body font-semibold text-charcoal">Monthly strategy / coaching session</div>
                    <div className="font-body text-sm text-stone-600">Deep dive on financial strategy and business decisions</div>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center font-body text-brand hover:text-charcoal font-semibold transition-colors group"
              >
                <span className="underline underline-offset-4">Get started with Growth</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Package 3: Advisory - Full-width card with side image */}
      <section className="py-20 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-charcoal rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Left - Content (3 columns) */}
              <div className="md:col-span-3 p-8 md:p-12">
                <div className="inline-block px-4 py-2 bg-brand text-white font-body text-xs font-semibold rounded-full mb-4">
                  Package 3 • Premium
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
                  Advisory
                </h2>
                <p className="font-body text-xl text-white/80 mb-8 italic">
                  For founders wanting CFO-level support
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-body font-semibold text-white">Financial oversight</div>
                      <div className="font-body text-sm text-white/70">Complete bookkeeping, reporting, and forecasting</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-body font-semibold text-white">Strategic advisory</div>
                      <div className="font-body text-sm text-white/70">CFO-level guidance on major decisions and growth plans</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-body font-semibold text-white">Coaching support</div>
                      <div className="font-body text-sm text-white/70">Regular sessions to build your financial confidence</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-body font-semibold text-white">Priority access</div>
                      <div className="font-body text-sm text-white/70">First response times and flexible availability</div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center font-body text-white hover:text-brand font-semibold transition-colors group"
                >
                  <span className="underline underline-offset-4">Get started with Advisory</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Right - Image (2 columns) */}
              <div className="md:col-span-2 relative min-h-[300px] md:min-h-0">
                <Image
                  src="/images/advisorypackage.jpg"
                  alt="CFO advisory services"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Packages Section */}
      <section className="py-32 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-2 bg-brand text-white font-body text-sm font-semibold rounded-full mb-6">
              Custom Solutions
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Custom Packages <span className="text-brand italic">Available</span>
            </h2>
            <p className="font-body text-xl text-stone-700 leading-relaxed">
              All services can be tailored to fit your unique needs, business model, and growth stage. 
              Whether you need specific services from different packages or something entirely custom, 
              we&apos;ll design the right support structure for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="scroll-reveal bg-white p-8 border-l-4 border-brand" style={{ transitionDelay: "0.1s" }}>
              <div className="w-12 h-12 mb-4 text-brand">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl text-charcoal mb-3">
                Mix & Match
              </h3>
              <p className="font-body text-stone-700 leading-relaxed">
                Combine services from different packages to create your perfect fit. Need bookkeeping plus strategic advisory? We can do that.
              </p>
            </div>

            <div className="scroll-reveal bg-white p-8 border-l-4 border-brand" style={{ transitionDelay: "0.2s" }}>
              <div className="w-12 h-12 mb-4 text-brand">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl text-charcoal mb-3">
                Scale Up or Down
              </h3>
              <p className="font-body text-stone-700 leading-relaxed">
                Start with Foundation and upgrade as you grow. Or adjust your package as your business evolves and needs change.
              </p>
            </div>

            <div className="scroll-reveal bg-white p-8 border-l-4 border-brand" style={{ transitionDelay: "0.3s" }}>
              <div className="w-12 h-12 mb-4 text-brand">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl text-charcoal mb-3">
                Project-Based
              </h3>
              <p className="font-body text-stone-700 leading-relaxed">
                Need help with a specific project? We offer one-time services like financial model builds, system cleanups, and more.
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
            Ready to get started?
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
            Let&apos;s design
            <br />
            <span className="italic">your support</span>
          </h2>
          
          <p className="font-body text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Whether you choose a package or need something custom, we&apos;ll create the perfect financial support structure for your business.
          </p>
          
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-10 py-5 bg-white text-brand font-body font-semibold hover:bg-white/90 transition-all hover:shadow-2xl hover:shadow-white/20"
          >
            <span>Let&apos;s talk about your needs</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
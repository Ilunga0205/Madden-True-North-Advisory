"use client";

import Link from "next/link";
import { useRef } from "react";

export default function HeroSection({ scrollY }) {
  const videoRef = useRef(null);

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen max-w-none">

        {/* ── Left Column — Content ── */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-20 order-1">
          <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto">

            {/* Headline */}
            <div className="animate-fadeInUp mb-8" style={{ animationDelay: "0.1s" }}>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] leading-[1.1]">
  <span className="text-[#8FA89A]">Clarity</span>, direction, and sustainable growth.
</h1>
            </div>

            {/* Buttons */}
            <div
              className="animate-fadeInUp flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10"
              style={{ animationDelay: "0.2s" }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-[#8FA89A] text-white font-body font-semibold hover:bg-[#7a9284] transition-all text-sm md:text-base whitespace-nowrap"
              >
                <span>Book a free consultation</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 border-2 border-stone-300 text-[#1F1F1F] font-body font-semibold hover:border-[#8FA89A] hover:text-[#8FA89A] transition-all text-sm md:text-base whitespace-nowrap"
              >
                Explore services
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="animate-fadeIn mb-6" style={{ animationDelay: "0.3s" }}>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-stone-200">
                <div>
                  <div className="font-display text-xl sm:text-2xl md:text-3xl text-[#8FA89A] mb-1">50+</div>
                  <div className="font-body text-xs md:text-sm text-stone-700">Years Experience</div>
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl md:text-3xl text-[#8FA89A] mb-1">35+</div>
                  <div className="font-body text-xs md:text-sm text-stone-700">Organisations Supported</div>
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl md:text-3xl text-[#8FA89A] mb-1">5</div>
                  <div className="font-body text-xs md:text-sm text-stone-700">Continents</div>
                </div>
              </div>
            </div>

            {/* Info card — below trust indicators */}
            <div className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              <div className="bg-white shadow-lg border border-stone-100 p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8FA89A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-body font-semibold text-[#1F1F1F] mb-1 text-sm sm:text-base">
                    Certified Public Accountant
                  </div>
                  <div className="font-body text-xs sm:text-sm text-stone-700">
                    Clear and independent guidance you can rely on
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Right Column — Video ── */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-auto order-2">
          <div className="relative w-full h-full overflow-hidden">

            {/* Video */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{
                transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.3}px)`,
              }}
            >
              <source src="/images/video.mp4" type="video/mp4" />
            </video>

            {/* Brand overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8FA89A]/5 to-transparent pointer-events-none" />

          </div>
        </div>

      </div>

      <style>{`
        @keyframes heroProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
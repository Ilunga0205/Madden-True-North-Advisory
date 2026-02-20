"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { trustIndicators } from "@/constants/brand";

const IMAGES = [
  { src: "/images/heropic3.jpg", alt: "Financial and strategic advisory consultation" },
  { src: "/images/heropic2.jpg", alt: "Financial clarity and strategic direction" },
];

const INTERVAL        = 10000; // ms between transitions
const SLIDE_DURATION  = 2200;  // ms for the reveal animation

export default function HeroSection({ scrollY }) {
  const [current, setCurrent]     = useState(0);
  const [next, setNext]           = useState(null);
  const [revealing, setRevealing] = useState(false);
  const revealingRef = useRef(false);
  const currentRef   = useRef(0);

  const triggerTransition = () => {
    if (revealingRef.current) return;
    const nextIdx = (currentRef.current + 1) % IMAGES.length;
    setNext(nextIdx);

    // Let the DOM paint the incoming image at clip 0 first, then animate
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setRevealing(true);
        revealingRef.current = true;

        setTimeout(() => {
          currentRef.current = nextIdx;
          setCurrent(nextIdx);
          setNext(null);
          setRevealing(false);
          revealingRef.current = false;
        }, SLIDE_DURATION);
      });
    });
  };

  useEffect(() => {
    const timer = setInterval(triggerTransition, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen max-w-none">

        {/* ── Left Column — Content ── */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-20 order-1">
          <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto">

            <div className="animate-slideDown" style={{ animationDelay: "0.1s" }}>
              <span className="inline-block text-[#8FA89A] font-body text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Financial Clarity & Strategic Direction
              </span>
            </div>

            <div className="animate-fadeInUp mb-5" style={{ animationDelay: "0.2s" }}>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] leading-[1.1] mb-5">
                <span className="text-[#8FA89A]">Clarity</span>, direction, and
                <br />
                sustainable growth.
              </h1>
            </div>

            <div className="animate-fadeInUp mb-8" style={{ animationDelay: "0.3s" }}>
              <p className="font-body text-sm sm:text-base md:text-lg text-stone-700 leading-relaxed">
                Financial clarity and strategic guidance for business owners
                navigating growth, change, and complexity.
              </p>
            </div>

            <div
              className="animate-fadeInUp flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-[#8FA89A] text-white font-body font-semibold hover:bg-[#7a9284] transition-all text-sm md:text-base"
              >
                <span>Book a free consultation</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 border-2 border-stone-300 text-[#1F1F1F] font-body font-semibold hover:border-[#8FA89A] hover:text-[#8FA89A] transition-all text-sm md:text-base"
              >
                Explore services
              </Link>
            </div>

            <div className="animate-fadeIn" style={{ animationDelay: "0.5s" }}>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-stone-200">
                {trustIndicators.map((indicator, index) => (
                  <div key={index}>
                    <div className="font-display text-xl sm:text-2xl md:text-3xl text-[#8FA89A] mb-1">
                      {indicator.value}
                    </div>
                    <div className="font-body text-xs md:text-sm text-stone-700">
                      {indicator.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column — Split Reveal ── */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-auto order-2">
          <div className="relative w-full h-full overflow-hidden">

            {/* Current image (sits behind, parallax) */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.3}px)`,
              }}
            >
              <Image
                src={IMAGES[current].src}
                alt={IMAGES[current].alt}
                fill
                priority
                className="object-cover object-center"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Incoming image — wiped in from left edge using clip-path */}
            {next !== null && (
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  clipPath: revealing ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
                  transition: revealing
                    ? `clip-path ${SLIDE_DURATION}ms cubic-bezier(0.76, 0, 0.24, 1)`
                    : "none",
                  transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.3}px)`,
                }}
              >
                <Image
                  src={IMAGES[next].src}
                  alt={IMAGES[next].alt}
                  fill
                  className="object-cover object-center"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}

            {/* Thin white leading-edge line that sweeps across */}
            {next !== null && (
              <div
                className="absolute top-0 bottom-0 w-px bg-white/50 z-10 pointer-events-none"
                style={{
                  left: revealing ? "100%" : "0%",
                  transition: revealing
                    ? `left ${SLIDE_DURATION}ms cubic-bezier(0.76, 0, 0.24, 1)`
                    : "none",
                }}
              />
            )}

            {/* Brand overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8FA89A]/5 to-transparent pointer-events-none" />

            {/* Slim progress bar — resets & fills between each transition */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20 z-10 overflow-hidden">
              <div
                key={current} // re-mounts on image change to restart animation
                className="h-full bg-[#8FA89A]/60"
                style={{ animation: `heroProgress ${INTERVAL}ms linear forwards` }}
              />
            </div>
          </div>

          {/* Info card */}
          <div
            className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:left-8 lg:right-auto lg:bottom-12 bg-white shadow-2xl p-4 sm:p-6 max-w-sm animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8FA89A] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-body font-semibold text-[#1F1F1F] mb-1 text-sm sm:text-base">
                  Trusted Advisor
                </div>
                <div className="font-body text-xs sm:text-sm text-stone-700">
                  Clear, independent guidance you can rely on
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Keyframe — move to globals.css if you prefer */}
      <style>{`
        @keyframes heroProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
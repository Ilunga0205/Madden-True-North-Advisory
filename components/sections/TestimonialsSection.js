"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import SectionBadge from "@/components/ui/SectionBadge";

const AUTOPLAY_INTERVAL = 5000;

const testimonials = [
  {
    id: 1,
    quote: "Always a pleasure to deal with Inge and her team and can highly recommend SABIZ.",
    name: "Eddie Pio",
    title: "Frontosa Information Technologies",
    initial: "E",
  },
  {
    id: 2,
    quote: "SABIZ has dedicated staff with excellent work ethics who pride themselves on delivering exceptional, understandable work in a timely manner. Always approachable and a pleasure to work with.",
    name: "Hendriette",
    title: "FM of Bhubesi Fire Projects",
    initial: "H",
  },
  {
    id: 3,
    quote: "Inge and her team assisted us with our first large audit. Clear communication was evident and attention to detail was present, assisting us in reaching our deadlines on time.",
    name: "Cristiana Brandao",
    title: "CFO of Mitra Energy",
    initial: "C",
  },
  {
    id: 4,
    quote: "Inge and her team successfully set up our South African company, putting processes and procedures in place for monthly and annual reporting, as well as preparation for the audits, and clear communication of tax deadlines. I would recommend her any day!",
    name: "Helder Maocha",
    title: "Director of Mitra Energy SA",
    initial: "H",
  },
  {
    id: 5,
    quote: "Good service and presentation of clear financials. Queries are explained well and response is quick. Great to work with! SABIZ has definitely assisted my business.",
    name: "Keith",
    title: "Director, Facility Scope",
    initial: "K",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [started, setStarted] = useState(false);
  const autoplayRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const delay = setTimeout(() => setStarted(true), 3000);
    return () => clearTimeout(delay);
  }, []);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    const cardWidth = el.scrollWidth / testimonials.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, testimonials.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToCard = useCallback((i) => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".testimonial-card");
    if (cards[i]) {
      const cardLeft = cards[i].offsetLeft - el.offsetLeft;
      el.scrollTo({ left: cardLeft, behavior: "smooth" });
    }
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  // Auto-scroll — moves one card at a time, loops back to start
  useEffect(() => {
    if (isPaused || !started) return;
    autoplayRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10;
      if (atEnd) {
        // Loop back to start
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 420, behavior: "smooth" });
      }
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(autoplayRef.current);
  }, [isPaused, started]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        scroll(1);
      } else {
        scroll(-1);
      }
    }
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 scroll-reveal bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <SectionBadge variant="light">Client Stories</SectionBadge>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] leading-tight">
              What clients <span className="text-[#8FA89A] italic">say</span>
            </h2>
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                scroll(-1);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 3000);
              }}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`w-11 h-11 sm:w-12 sm:h-12 border-2 flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? "border-[#8FA89A] text-[#8FA89A] hover:bg-[#8FA89A] hover:text-white"
                  : "border-stone-200 text-stone-300 cursor-not-allowed"
              }`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => {
                scroll(1);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 3000);
              }}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`w-11 h-11 sm:w-12 sm:h-12 border-2 flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? "border-[#8FA89A] text-[#8FA89A] hover:bg-[#8FA89A] hover:text-white"
                  : "border-stone-200 text-stone-300 cursor-not-allowed"
              }`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable track */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card flex-none w-[300px] sm:w-[360px] lg:w-[400px] flex flex-col justify-between bg-[#F6F4F1] p-7 sm:p-8 border-t-4 border-[#8FA89A] hover:shadow-lg transition-shadow duration-300"
              style={{ scrollSnapAlign: "start" }}
            >
              <div
                className="font-display text-6xl leading-none text-[#8FA89A]/20 mb-2 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <blockquote className="font-body text-sm sm:text-base text-stone-700 leading-relaxed flex-1 mb-8">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-3 pt-5 border-t border-stone-200">
                <div className="w-10 h-10 bg-[#8FA89A] flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-base text-white">{t.initial}</span>
                </div>
                <div>
                  <div className="font-body font-semibold text-sm text-[#1F1F1F]">{t.name}</div>
                  <div className="font-body text-xs text-stone-500 leading-tight">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                scrollToCard(i);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 3000);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-[#8FA89A]" : "w-3 bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        section .overflow-x-auto::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
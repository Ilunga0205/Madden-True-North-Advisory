"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function HomePage() {
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
    <main>
      {/* ---------------- HERO ---------------- */}
<section className="relative min-h-screen border-b overflow-hidden bg-neutral-50">
  <div className="max-w-7xl mx-auto px-6 h-screen">
    <div className="grid lg:grid-cols-2 h-full items-center gap-20">
      
      {/* Left content */}
      <div className="flex flex-col justify-center">
        <div className="animate-fadeInUp">
          <span className="inline-block text-sm uppercase tracking-wide text-neutral-500 mb-4">
            Advisory Services
          </span>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight mb-8">
            Strategic clarity for complex decisions
          </h1>
        </div>

        <div
          className="animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-xl text-neutral-600 leading-relaxed max-w-xl mb-10">
            True North Advisory supports leaders and organisations in navigating
            complexity through clear strategy, governance, and insight.
          </p>
        </div>

        <div
          className="animate-fadeInUp flex items-center gap-6"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-4 rounded-md hover:bg-neutral-800 transition-colors"
          >
            Book a consultation
          </Link>

          <span className="text-sm text-neutral-500">
            Trusted by senior leaders
          </span>
        </div>
      </div>

      {/* Right image */}
      <div
        className="hidden lg:flex justify-end items-center h-full animate-fadeInUp"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="relative h-[85%] w-full max-w-xl">
          <Image
            src="/images/hero-advisory.jpg"
            alt="Executive advisory portrait"
            fill
            priority
            className="object-cover rounded-2xl"
          />
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ---------------- VALUE ---------------- */}
      <section className="py-20 md:py-32 scroll-reveal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <ValueItem
              title="Clarity"
              text="Helping leaders define direction when complexity obscures decision-making."
            />
            <ValueItem
              title="Structure"
              text="Designing governance and strategic frameworks that support execution."
            />
            <ValueItem
              title="Perspective"
              text="Independent advisory insight grounded in experience and analysis."
            />
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="bg-neutral-50 py-20 md:py-32 scroll-reveal">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="Services" link="/services" />

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <ServiceCard
              title="Strategic Advisory"
              image="/images/service-strategy.jpg"
            />
            <ServiceCard
              title="Governance & Structure"
              image="/images/service-governance.jpg"
            />
            <ServiceCard
              title="Organisational Alignment"
              image="/images/service-alignment.jpg"
            />
          </div>
        </div>
      </section>

      {/* ---------------- OFFERS ---------------- */}
      <section className="py-20 md:py-32 scroll-reveal">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="Offers" link="/offers" />

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <PreviewCard title="Executive Advisory" />
            <PreviewCard title="Strategic Review" />
          </div>
        </div>
      </section>

      {/* ---------------- INSIGHTS ---------------- */}
      <section className="bg-neutral-50 py-20 md:py-32 scroll-reveal">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="Insights" link="/insights" />

          <div className="max-w-3xl space-y-8 mt-10">
            <InsightPreview
              title="Navigating Complexity in Leadership"
              date="January 2026"
            />
            <InsightPreview
              title="Strategy vs Execution"
              date="December 2025"
            />
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative text-white py-24 md:py-32 scroll-reveal">
        <Image
          src="/images/cta-advisory.jpg"
          alt="Advisory consultation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 max-w-2xl">
            Let’s discuss your next step
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-md hover:bg-neutral-100 transition-colors"
          >
            Book a consultation
          </Link>
        </div>
      </section>

      {/* ---------------- ANIMATIONS ---------------- */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function ValueItem({ title, text }) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{text}</p>
    </div>
  );
}

function SectionHeader({ title, link }) {
  return (
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-3xl font-medium">{title}</h2>
      <Link
        href={link}
        className="text-sm text-neutral-600 hover:text-black transition-colors"
      >
        View all →
      </Link>
    </div>
  );
}

function ServiceCard({ title, image }) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:border-neutral-400 transition-colors">
      <div className="relative h-44">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-8">
        <h3 className="font-medium">{title}</h3>
      </div>
    </div>
  );
}

function PreviewCard({ title }) {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-10 hover:border-neutral-400 transition-colors">
      <h3 className="font-medium">{title}</h3>
    </div>
  );
}

function InsightPreview({ title, date }) {
  return (
    <div className="border-b border-neutral-200 pb-8">
      <p className="text-sm text-neutral-500 mb-2">{date}</p>
      <p className="text-xl font-medium">{title}</p>
    </div>
  );
}

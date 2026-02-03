"use client";

import Link from "next/link";
import { useEffect } from "react";

const insights = [
  {
    slug: "navigating-complexity",
    title: "Navigating Complexity in Leadership",
    excerpt:
      "Why clarity matters most when decisions are hardest to make.",
    date: "January 2026",
    category: "Leadership"
  },
  {
    slug: "strategy-vs-execution",
    title: "Strategy vs Execution",
    excerpt:
      "Bridging the gap between vision and operational reality.",
    date: "December 2025",
    category: "Strategy"
  },
];

export default function InsightsPage() {
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

        .text-charcoal {
          color: #1F1F1F;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-warm-white overflow-hidden py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="animate-slideDown mb-6" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block text-brand font-body text-sm font-semibold tracking-wider uppercase">
              Insights & Perspectives
            </span>
          </div>

          <div className="animate-fadeInUp mb-8" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1]">
              Thoughts on leadership, <span className="text-brand italic">strategy</span>, and governance
            </h1>
          </div>

          <div className="animate-fadeInUp mb-10" style={{ animationDelay: "0.3s" }}>
            <p className="font-body text-xl md:text-2xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              Reflections, commentary, and perspectives on navigating complexity, 
              strengthening governance, and leading with clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-sm font-semibold rounded-full mb-6">
              Recent articles
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              Latest thinking
            </h2>
          </div>

          <div className="space-y-8">
            {insights.map((post, index) => (
              <InsightCard
                key={post.slug}
                post={post}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Insights Section */}
      <section className="py-32 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-5 gap-16 items-start">
            <div className="md:col-span-2">
              <div className="inline-block px-4 py-2 bg-white text-brand font-body text-sm font-semibold rounded-full mb-6">
                Why we write
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight sticky top-24">
                Sharing what we <span className="text-brand italic">learn</span>
              </h2>
            </div>

            <div className="md:col-span-3 space-y-8">
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                These insights emerge from years of working with leaders navigating 
                complex challenges. Each piece reflects patterns we&#39;ve observed, 
                frameworks we&#39;ve found useful, and questions worth asking.
              </p>
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                We write for leaders who value clear thinking over buzzwords, practical 
                wisdom over theoretical perfection, and honest reflection over easy answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20">
            <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-sm font-semibold rounded-full mb-6">
              Topics we explore
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight max-w-4xl">
              The themes that matter most
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <TopicCard
              title="Strategic Clarity"
              description="Making sense of complexity. Building frameworks that illuminate paths forward. Asking better questions before seeking answers."
            />
            <TopicCard
              title="Leadership & Governance"
              description="The art of oversight. Balancing independence with support. Creating structures that enable better decisions."
            />
            <TopicCard
              title="Organizational Dynamics"
              description="How strategy translates to execution. Aligning vision with capability. Navigating change without losing momentum."
            />
            <TopicCard
              title="Decision-Making"
              description="When to decide and when to wait. Managing uncertainty. Creating space for difficult conversations that matter."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 scroll-reveal overflow-hidden bg-brand">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-125 h-[500px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm text-white/90 font-body text-sm font-medium rounded-full mb-8">
            Work with us
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
            Facing a complex
            <br />
            <span className="italic">challenge?</span>
          </h2>
          
          <p className="font-body text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            If these perspectives resonate with what you&#39;re navigating, let&#39;s explore how we can help.
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

function InsightCard({ post, index }) {
  return (
    <article className="scroll-reveal group" style={{ transitionDelay: `${index * 0.1}s` }}>
      <Link href={`/insights/${post.slug}`}>
        <div className="bg-white p-8 md:p-10 border-l-4 border-transparent hover:border-brand hover:shadow-lg transition-all">
          <div className="flex items-start justify-between gap-6 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1 bg-warm-white text-brand font-body text-xs font-semibold rounded-full">
                  {post.category}
                </span>
                <span className="font-body text-sm text-stone-500">
                  {post.date}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-charcoal group-hover:text-brand transition-colors mb-3">
                {post.title}
              </h3>
              <p className="font-body text-lg text-stone-700 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            <div className="shrink-0">
              <div className="w-10 h-10 rounded-full bg-warm-white group-hover:bg-brand transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 text-brand group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-stone-200">
            <span className="inline-flex items-center font-body text-brand hover:text-charcoal font-medium transition-colors">
              Read article
              <svg className="w-4 h-4 ml-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

function TopicCard({ title, description }) {
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
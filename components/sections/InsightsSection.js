"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import InsightCard from "@/components/ui/InsightCard";
import { insights as staticInsights } from "@/constants/brand";
import { format } from "date-fns";

function normalizeInsight(item) {
  const slug = typeof item.slug === "object" ? item.slug?.current : item.slug;
  let date = item.date;
  try {
    date = format(new Date(item.date), "MMMM yyyy");
  } catch (_) {}
  return {
    id: item._id || item.id,
    title: item.title,
    date,
    category: item.category,
    excerpt: item.excerpt,
    slug,
  };
}

export default function InsightsSection() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch("/api/get-insights");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const { insights: data } = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const latest = [...data]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3)
            .map(normalizeInsight);
          setInsights(latest);
        } else {
          setInsights(staticInsights.slice(0, 3));
        }
      } catch {
        setInsights(staticInsights.slice(0, 3));
      } finally {
        setLoading(false);
      }
    };

    fetchLatest();
  }, []);

  // Re-run scroll reveal after data loads so async cards get picked up
  useEffect(() => {
    if (loading) return;

    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll(".scroll-reveal:not(.revealed)").forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 50); // small delay to let React render the cards first

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <section className="py-16 sm:py-24 lg:py-32 scroll-reveal bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <SectionBadge variant="light">Insights</SectionBadge>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] leading-tight">
              Current thinking
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-body text-[#8FA89A] font-semibold hover:gap-4 transition-all group text-sm sm:text-base"
          >
            <span>View all insights</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {loading ? (
          <div className="space-y-4 sm:space-y-6">
            {[0, 1].map((i) => (
              <div key={i} className="h-32 bg-stone-100 animate-pulse rounded" />
            ))}
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {insights.map((insight) => (
              <InsightCard
                key={insight.id}
                title={insight.title}
                date={insight.date}
                category={insight.category}
                excerpt={insight.excerpt}
                slug={insight.slug}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
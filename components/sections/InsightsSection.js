import Link from "next/link";
import SectionBadge from "@/components/ui/SectionBadge";
import InsightCard from "@/components/ui/InsightCard";
import { insights } from "@/constants/brand";

export default function InsightsSection() {
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
      </div>
    </section>
  );
}
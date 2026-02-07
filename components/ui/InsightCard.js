import Link from "next/link";

export default function InsightCard({ title, date, category, excerpt, slug }) {
  return (
    <Link 
      href={`/insights/${slug}`}
      className="group scroll-reveal block bg-[#F6F4F1] p-6 sm:p-8 border-l-4 border-[#8FA89A] hover:bg-[#E8EDE9] transition-all"
    >
      <div className="flex items-start justify-between gap-4 sm:gap-6">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
            <span className="inline-block px-3 py-1 bg-[#8FA89A] text-white font-body text-xs font-semibold rounded-full w-fit">
              {category}
            </span>
            <span className="font-body text-xs sm:text-sm text-stone-500">{date}</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#1F1F1F] mb-2 sm:mb-3 group-hover:text-[#8FA89A] transition-colors">
            {title}
          </h3>
          <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed">{excerpt}</p>
        </div>
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8FA89A] flex-shrink-0 group-hover:translate-x-2 transition-transform mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
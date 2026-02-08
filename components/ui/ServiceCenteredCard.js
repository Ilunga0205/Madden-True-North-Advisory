import Link from "next/link";

export default function ServiceCenteredCard({ 
  badge,
  title, 
  subtitle, 
  featuresColumns, // Array of arrays for 2-column layout
  outcome,
  link = "/contact",
  buttonText = "Get started"
}) {
  return (
    <div className="bg-[#F6F4F1] p-8 md:p-12 border-l-4 border-[#8FA89A]">
      <div className="inline-block px-4 py-2 bg-[#8FA89A] text-white font-body text-xs font-semibold rounded-full mb-4">
        {badge}
      </div>
      <h2 className="font-display text-4xl md:text-5xl text-[#1F1F1F] mb-4">
        {title}
      </h2>
      <p className="font-body text-xl text-stone-600 mb-8">
        {subtitle}
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {featuresColumns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-3">
            {column.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#8FA89A] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-body text-stone-700">{feature}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="p-6 bg-white border-l-4 border-[#8FA89A] mb-6">
        <p className="font-body font-semibold text-[#1F1F1F] mb-1">Outcome:</p>
        <p className="font-body text-stone-700 italic">{outcome}</p>
      </div>

      <Link
        href={link}
        className="inline-flex items-center font-body text-[#8FA89A] hover:text-[#1F1F1F] font-semibold transition-colors group"
      >
        <span className="underline underline-offset-4">{buttonText}</span>
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
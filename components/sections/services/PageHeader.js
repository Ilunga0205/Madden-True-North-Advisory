export default function PageHeader({ tag, title, description }) {
  return (
    <section className="relative bg-[#F6F4F1] overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Tag */}
        {tag && (
          <div className="animate-slideDown mb-6" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block text-[#8FA89A] font-body text-sm font-semibold tracking-wider uppercase">
              {tag}
            </span>
          </div>
        )}

        {/* Main Headline */}
        <div className="animate-fadeInUp mb-8" style={{ animationDelay: "0.2s" }}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1F1F1F] leading-[1.1]">
            {title}
          </h1>
        </div>

        {/* Description */}
        {description && (
          <div className="animate-fadeInUp mb-10" style={{ animationDelay: "0.3s" }}>
            <p className="font-body text-lg sm:text-xl md:text-2xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
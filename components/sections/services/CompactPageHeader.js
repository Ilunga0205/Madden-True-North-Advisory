export default function CompactPageHeader({ tag, title, description, showImagePeek = false }) {
  return (
    <section className={`relative bg-[#F6F4F1] overflow-hidden ${showImagePeek ? 'pt-24 pb-12 md:pt-28 md:pb-16' : 'py-16 md:py-20'}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Tag */}
        {tag && (
          <div className="animate-slideDown mb-4" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block text-[#8FA89A] font-body text-sm font-semibold tracking-wider uppercase">
              {tag}
            </span>
          </div>
        )}

        {/* Main Headline */}
        <div className="animate-fadeInUp mb-6" style={{ animationDelay: "0.2s" }}>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] leading-[1.1]">
            {title}
          </h1>
        </div>

        {/* Description */}
        {description && (
          <div className="animate-fadeInUp mb-0" style={{ animationDelay: "0.3s" }}>
            <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
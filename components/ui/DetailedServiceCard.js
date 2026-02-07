export default function DetailedServiceCard({ number, title, description, details }) {
  return (
    <div className="scroll-reveal bg-white p-8 md:p-10 border-l-4 border-[#8FA89A] group hover:bg-white hover:shadow-lg transition-all">
      <div className="flex items-start gap-8">
        <div className="font-display text-6xl md:text-7xl text-stone-200 group-hover:text-[#8FA89A]/30 transition-colors flex-shrink-0">
          {number}
        </div>
        <div className="flex-1 pt-2">
          <h3 className="font-display text-2xl md:text-3xl mb-3 text-[#1F1F1F] group-hover:text-[#8FA89A] transition-colors">
            {title}
          </h3>
          <p className="font-body text-lg text-stone-700 leading-relaxed mb-6">
            {description}
          </p>
          
          {/* Details List */}
          <div className="space-y-2">
            {details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#8FA89A] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-body text-stone-600">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
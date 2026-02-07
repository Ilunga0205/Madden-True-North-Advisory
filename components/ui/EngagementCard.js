export default function EngagementCard({ title, description }) {
  return (
    <div className="group bg-white p-8 border border-stone-200 hover:border-[#8FA89A] hover:shadow-lg transition-all h-full">
      <h3 className="font-display text-2xl md:text-3xl text-[#1F1F1F] mb-4 group-hover:text-[#8FA89A] transition-colors">
        {title}
      </h3>
      <p className="font-body text-lg text-stone-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
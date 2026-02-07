export default function ProcessItem({ title, description }) {
  return (
    <div className="group bg-[#F6F4F1] p-8 h-full border-l-4 border-transparent hover:border-[#8FA89A] transition-all">
      <h3 className="font-display text-2xl md:text-3xl mb-4 text-[#1F1F1F] group-hover:text-[#8FA89A] transition-colors">
        {title}
      </h3>
      <p className="font-body text-lg text-stone-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
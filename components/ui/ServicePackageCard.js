export default function ServicePackageCard({ title, description, path }) {
  return (
    <div className="bg-white p-8 border-l-4 border-[#8FA89A]">
      <h3 className="font-display text-2xl text-[#1F1F1F] mb-3">{title}</h3>
      <p className="font-body text-stone-700 leading-relaxed mb-4">
        {description}
      </p>
      <div className="text-sm font-body text-[#8FA89A]">{path}</div>
    </div>
  );
}
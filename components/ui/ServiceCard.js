import { ChartBarIcon, BuildingOfficeIcon, UsersIcon } from "@heroicons/react/24/outline";

const iconMap = {
  chart: ChartBarIcon,
  building: BuildingOfficeIcon,
  users: UsersIcon,
};

export default function ServiceCard({ title, description, icon }) {
  const Icon = iconMap[icon] || ChartBarIcon;

  return (
    <div className="scroll-reveal bg-white p-6 sm:p-8 border-2 border-stone-200">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#E8EDE9] flex items-center justify-center text-[#8FA89A] mb-4 sm:mb-6">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
      <h3 className="font-body text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-[#1F1F1F]">
        {title}
      </h3>
      <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
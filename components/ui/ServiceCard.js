import Link from "next/link";
import { ChartBarIcon, BuildingOfficeIcon, UsersIcon } from "@heroicons/react/24/outline";

const iconMap = {
  chart: ChartBarIcon,
  building: BuildingOfficeIcon,
  users: UsersIcon,
};

export default function ServiceCard({ title, description, icon, link }) {
  const Icon = iconMap[icon] || ChartBarIcon;

  return (
    <Link 
      href={link}
      className="group scroll-reveal block bg-white p-6 sm:p-8 border-2 border-stone-200 hover:border-[#8FA89A] transition-all duration-300"
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#E8EDE9] flex items-center justify-center text-[#8FA89A] mb-4 sm:mb-6 group-hover:bg-[#8FA89A] group-hover:text-white transition-all duration-300">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
      <h3 className="font-body text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-[#1F1F1F] group-hover:text-[#8FA89A] transition-colors">
        {title}
      </h3>
      <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed mb-4 sm:mb-6">
        {description}
      </p>
      <div className="flex items-center text-[#8FA89A] font-body font-semibold group-hover:gap-3 transition-all text-sm sm:text-base">
        <span>Learn more</span>
        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
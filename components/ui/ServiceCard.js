"use client";

import { 
  TrendingUp,
  Target, 
  Sprout,
  BarChart3,
  Compass,
  Heart,
  Calculator,
  PieChart,
  Circle,
  BookOpen,
  ClipboardCheck,
  Eye
} from 'lucide-react';

const iconMap = {
  TrendingUp,
  Target,
  Sprout,
  BarChart3,
  Compass,
  Heart,
  Calculator,
  PieChart,
  Circle,
  BookOpen,
  ClipboardCheck,
  Eye,
};

export default function ServiceCard({ title, description, icon }) {
  const IconComponent = iconMap[icon] || Circle;

  return (
    <div className="bg-white p-6 sm:p-8 border-l-4 border-[#8FA89A] shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="text-[#8FA89A] mb-4">
        <IconComponent size={40} strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-xl sm:text-2xl text-[#1F1F1F] mb-3 group-hover:text-[#8FA89A] transition-colors">
        {title}
      </h3>
      <p className="font-body text-sm sm:text-base text-stone-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
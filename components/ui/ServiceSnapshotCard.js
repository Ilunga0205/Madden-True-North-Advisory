"use client";

import { 
  DollarSign, 
  Target, 
  Sprout, 
  TrendingUp, 
  Calculator,
  Compass,
  Lightbulb,
  Heart,
  Activity,
  Circle 
} from 'lucide-react';

const iconMap = {
  DollarSign,
  Target,
  Sprout,
  TrendingUp,
  Calculator,
  Compass,
  Lightbulb,
  Heart,
  Activity,
  Circle,
};

export default function ServiceSnapshotCard({ icon, title, description, delay = "0s" }) {
  const IconComponent = iconMap[icon] || Circle;
  
  return (
    <div 
      className="bg-white p-6 border-l-4 border-[#8FA89A] shadow-sm hover:shadow-md transition-shadow animate-fadeInUp" 
      style={{ animationDelay: delay }}
    >
      <div className="text-[#8FA89A] mb-4">
        <IconComponent size={40} strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-xl text-[#1F1F1F] mb-2">{title}</h3>
      <p className="font-body text-sm text-stone-600">{description}</p>
    </div>
  );
}
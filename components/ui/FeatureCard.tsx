import { cn } from "@/lib/utils";
import { LucideIcon, Check } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  isAgent?: boolean;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  features,
  isAgent = true,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative p-6 sm:p-8 rounded-2xl bg-[#111827]/50 border border-[#1e293b] transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10",
        className
      )}
    >
      {/* Glowing corner effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-cyan-500/10">
            <Icon className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {isAgent && (
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                Agent
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

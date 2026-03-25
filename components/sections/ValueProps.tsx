"use client";

import { StatCard } from "@/components/ui/StatCard";
import { Zap, Clock, ShieldCheck, Users } from "lucide-react";

const stats = [
  {
    value: 75,
    suffix: "%",
    label: "效率提升",
    icon: Zap,
  },
  {
    value: 92,
    suffix: "%",
    label: "时间成本降低",
    icon: Clock,
  },
  {
    value: 50,
    prefix: ">",
    suffix: "%",
    label: "审核一次通过率",
    icon: ShieldCheck,
  },
  {
    value: 7,
    suffix: "x24",
    label: "全程人工可控",
    icon: Users,
  },
];

export function ValueProps() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            核心价值主张
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            基于 AI Agent 能力，为传统建筑行业投标流程注入智能化能力
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <StatCard
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

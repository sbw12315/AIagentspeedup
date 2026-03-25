"use client";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  prefix?: string;
}

export function StatCard({ value, suffix = "", label, prefix = "" }: StatCardProps) {
  return (
    <div className="text-center p-6 rounded-2xl bg-[#111827]/50 border border-[#1e293b] hover:border-cyan-500/30 transition-all duration-300">
      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        {prefix}{value}{suffix}
      </div>
      <div className="mt-2 text-slate-400 text-sm sm:text-base">{label}</div>
    </div>
  );
}

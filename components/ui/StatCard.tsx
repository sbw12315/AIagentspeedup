"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  prefix?: string;
}

export function StatCard({ value, suffix = "", label, prefix = "" }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const animateValue = useCallback(() => {
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOut * value);

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue();
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [animateValue, hasAnimated]);

  return (
    <div
      ref={cardRef}
      className="text-center p-6 rounded-2xl bg-[#111827]/50 border border-[#1e293b] hover:border-cyan-500/30 transition-all duration-300"
    >
      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="mt-2 text-slate-400 text-sm sm:text-base">{label}</div>
    </div>
  );
}

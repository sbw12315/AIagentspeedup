import { cn } from "@/lib/utils";
import { LucideIcon, User } from "lucide-react";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  isHuman?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  isActive?: boolean;
  stepNumber?: number;
}

export function ProcessStep({
  icon: Icon,
  title,
  description,
  isHuman = false,
  isFirst = false,
  isActive = false,
  stepNumber,
}: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Connector line (before) */}
      {!isFirst && (
        <div className="hidden sm:block absolute top-1/2 -left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-flow-line" />
        </div>
      )}

      {/* Step node */}
      <div
        className={cn(
          "relative flex flex-col items-center",
          isHuman ? "z-10" : "z-10"
        )}
      >
        {/* Outer glow for Agent steps */}
        {!isHuman && (
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md animate-pulse" />
        )}

        {/* Icon circle */}
        <div
          className={cn(
            "relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300",
            isHuman
              ? "bg-slate-700 border-2 border-slate-500"
              : "bg-gradient-to-br from-cyan-500 to-purple-500 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/30",
            isActive && "scale-110 ring-4 ring-cyan-500/30"
          )}
        >
          {isHuman ? (
            <User className="w-7 h-7 sm:w-8 sm:h-8 text-slate-300" />
          ) : (
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          )}

          {/* Step number badge */}
          {stepNumber && (
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-cyan-500 text-white text-xs font-bold flex items-center justify-center">
              {stepNumber}
            </div>
          )}
        </div>

        {/* Title */}
        <div className="mt-4 text-center">
          <h4
            className={cn(
              "text-sm sm:text-base font-semibold",
              isHuman ? "text-slate-300" : "text-white"
            )}
          >
            {title}
          </h4>
          {description && (
            <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-[120px]">
              {description}
            </p>
          )}
        </div>

        {/* Human label */}
        {isHuman && (
          <span className="mt-2 px-2 py-0.5 text-xs font-medium rounded bg-slate-700/50 text-slate-400 border border-slate-600/50">
            人工
          </span>
        )}
      </div>
    </div>
  );
}

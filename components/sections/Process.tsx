"use client";

import { Upload, FileSearch, FileEdit, FileCheck, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Upload,
    title: "人工上传",
    description: "上传招标文件",
    isHuman: true,
  },
  {
    icon: FileSearch,
    title: "Agent 分析",
    description: "智能解析评估",
    isHuman: false,
  },
  {
    icon: CheckCircle,
    title: "人工审核",
    description: "确认分析结果",
    isHuman: true,
  },
  {
    icon: FileEdit,
    title: "Agent 生成",
    description: "生成标书初稿",
    isHuman: false,
  },
  {
    icon: FileCheck,
    title: "Agent 审核",
    description: "格式合规检查",
    isHuman: false,
  },
  {
    icon: CheckCircle,
    title: "人工确认",
    description: "最终审核签字",
    isHuman: true,
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
            智能流程
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            人机协作流程
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            全程人工可控，AI 辅助提升效率，核心决策始终在您手中
          </p>
        </div>

        {/* Process flow */}
        <div className="relative">
          {/* Desktop view - horizontal */}
          <div className="hidden lg:flex items-start justify-center">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                {/* Step */}
                <div className="w-36 flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div
                    className={cn(
                      "relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300",
                      step.isHuman
                        ? "bg-slate-700 border-2 border-slate-500"
                        : "bg-gradient-to-br from-cyan-500 to-purple-500 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/30"
                    )}
                  >
                    <step.icon
                      className={cn(
                        "w-8 h-8",
                        step.isHuman ? "text-slate-300" : "text-white"
                      )}
                    />
                    {/* Step number */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-cyan-500 text-white text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mt-4 min-h-[76px] flex flex-col items-center justify-start">
                    <h4
                      className={cn(
                        "text-base font-semibold",
                        step.isHuman ? "text-slate-300" : "text-white"
                      )}
                    >
                      {step.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">{step.description}</p>
                  </div>

                  {/* Human label */}
                  {step.isHuman && (
                    <span className="mt-2 px-2 py-0.5 text-xs font-medium rounded bg-slate-700/50 text-slate-400 border border-slate-600/50">
                      人工
                    </span>
                  )}
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="relative mt-10 w-16 h-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 mx-4 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-flow-line" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile view - vertical */}
          <div className="lg:hidden flex flex-col gap-0 max-w-sm mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center pb-8">
                {/* Step number circle */}
                <div
                  className={cn(
                    "relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                    step.isHuman
                      ? "bg-slate-700 border-2 border-slate-500"
                      : "bg-gradient-to-br from-cyan-500 to-purple-500 border-2 border-cyan-400/50"
                  )}
                >
                  <step.icon
                    className={cn(
                      "w-5 h-5",
                      step.isHuman ? "text-slate-300" : "text-white"
                    )}
                  />
                </div>

                {/* Content */}
                <div className="mt-4 flex flex-col items-center">
                  <div className="flex items-center justify-center gap-2">
                    <h4
                      className={cn(
                        "text-base font-semibold",
                        step.isHuman ? "text-slate-300" : "text-white"
                      )}
                    >
                      {step.title}
                    </h4>
                    {step.isHuman && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded bg-slate-700/50 text-slate-400 border border-slate-600/50">
                        人工
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key principle */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">
              全程人工可随时介入审核，确保流程可控
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

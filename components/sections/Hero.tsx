"use client";

import { Button } from "@/components/ui/Button";
import { DataFlowCanvas } from "@/components/effects/DataFlowCanvas";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Canvas */}
      <div className="absolute inset-0">
        <DataFlowCanvas />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-3 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Sparkles className="w-4 h-4" />
                数字智能化改造
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/30">
                AI Agent 驱动
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
                <span className="text-white">AI Agent 驱动</span>
                <br />
                <span className="gradient-text">投标智能化改造</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl animate-fade-in-up delay-100">
                将人工密集的投标流程，转化为高效精准的智能流程。专业可靠的 AI Agent，为工程建设咨询行业注入新动能。
              </p>
            </div>

            {/* Features highlights */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-400 animate-fade-in-up delay-200">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                投标分析 Agent
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                标书生成 Agent
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                文档审核 Agent
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Button size="lg" className="group">
                预约产品演示
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg">
                了解更多
              </Button>
            </div>
          </div>

          {/* Right Visual (decorative, handled by canvas) */}
          <div className="hidden lg:block relative h-[500px]">
            {/* Abstract visualization is handled by DataFlowCanvas */}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1a] to-transparent" />
    </section>
  );
}

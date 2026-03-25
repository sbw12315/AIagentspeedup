"use client";

import { Shield, Lock, Cloud, UserCheck, Zap, FileCheck } from "lucide-react";

const safetyPoints = [
  {
    icon: Shield,
    title: "数据零留存",
    description: "处理完毕即返回，服务器不存储项目数据",
  },
  {
    icon: Lock,
    title: "隐私保障",
    description: "文档仅用于当次处理，不用于模型训练",
  },
  {
    icon: Zap,
    title: "商用级AI",
    description: "采用最新付费商用大模型，确保输出质量与合规",
  },
  {
    icon: UserCheck,
    title: "明确边界",
    description: "U盾签章等核心操作不触碰，完全符合行业规范",
  },
  {
    icon: Cloud,
    title: "即用即走",
    description: "通过 OpenClaw + 飞书即时获取结果",
  },
  {
    icon: FileCheck,
    title: "合规交付",
    description: "符合工程建设咨询行业法规要求",
  },
];

export function TrustSafety() {
  return (
    <section id="safety" className="relative py-20 sm:py-28 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
            安全承诺
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            安全可信的 AI 助手
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            辅助而非替代 — AI 负责协助性工作，核心操作仍由人工完成
          </p>
        </div>

        {/* Safety grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyPoints.map((point, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-[#111827]/50 border border-[#1e293b] hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 w-fit group-hover:bg-cyan-500/20 transition-colors">
                  <point.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {point.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data flow diagram */}
        <div className="mt-16 p-6 rounded-2xl bg-[#111827]/30 border border-[#1e293b]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Upload */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📤</span>
              </div>
              <span className="text-sm text-slate-400">上传文件</span>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-cyan-500/50">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* AI Processing */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-2 shadow-lg shadow-cyan-500/30">
                <span className="text-3xl">🤖</span>
              </div>
              <span className="text-sm text-slate-400">AI Agent 处理</span>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-cyan-500/50">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Return */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📥</span>
              </div>
              <span className="text-sm text-slate-400">直接返回</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-slate-500 text-sm">
              处理完毕即返回结果，文档不在服务器留存
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

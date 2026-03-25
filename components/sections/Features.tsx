"use client";

import { FeatureCard } from "@/components/ui/FeatureCard";
import { FileSearch, FileEdit, FileCheck } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "投标分析 Agent",
    description:
      "基于商用大模型的智能分析 Agent，协助解析招标文件、评估资质匹配度与项目风险，输出分析报告供专业人员参考。",
    features: [
      "招标文件智能解析",
      "资质匹配度量化评估",
      "风险点自动标注",
      "投标建议智能输出",
    ],
  },
  {
    icon: FileEdit,
    title: "标书生成 Agent",
    description:
      "融合企业资质库、历史业绩、行业模板，协助生成标书框架与初稿，大幅提升编写效率。",
    features: [
      "标书框架智能生成",
      "资质业绩自动归集",
      "模板智能推荐",
      "输出可编辑文档",
    ],
  },
  {
    icon: FileCheck,
    title: "文档审核 Agent",
    description:
      "自动校验投标文件格式、页码、附件完整性，协助发现潜在问题，减少返工。",
    features: [
      "格式规范自动校验",
      "页码目录核查",
      "附件清单对比",
      "审核问题清单",
    ],
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
            核心能力
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            三大 AI Agent 模块
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            辅助而非替代 — AI 负责协助性工作，核心操作仍由人工完成
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                features={feature.features}
              />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            所有 Agent 均采用商用级大模型，确保输出质量与合规
          </p>
        </div>
      </div>
    </section>
  );
}

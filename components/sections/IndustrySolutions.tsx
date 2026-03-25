"use client";

import { FileText, Brain, Zap, Cloud } from "lucide-react";

const solutions = [
  {
    icon: FileText,
    title: "多业务线覆盖",
    items: ["工程监理标书", "造价咨询文件", "招标代理文件", "项目管理方案"],
  },
  {
    icon: Brain,
    title: "行业痛点针对",
    items: ["招标文件解读耗时", "资质匹配易遗漏", "标书编写效率低", "格式错误返工多"],
  },
  {
    icon: Zap,
    title: "专业术语支持",
    items: ["熟悉监理规范", "掌握造价编审指引", "理解招标法规要求"],
  },
  {
    icon: Cloud,
    title: "安全交付方式",
    items: ["OpenClaw + 飞书分发", "处理完毕直接返回", "服务器零留存"],
  },
];

export function IndustrySolutions() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
            行业解决方案
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            专为工程建设咨询行业打造
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            深耕建筑行业多年，专注投标场景的 AI 智能化改造
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-[#0a0f1a]/50 border border-[#1e293b] hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 w-fit mb-4">
                <solution.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {solution.title}
              </h3>
              <ul className="space-y-2">
                {solution.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-2 text-sm text-slate-400"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

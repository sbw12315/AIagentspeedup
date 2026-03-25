import { FileText, ListChecks, BookOpenCheck, ShieldCheck } from "lucide-react";

const deliverables = [
  {
    icon: FileText,
    title: "落地方案文档",
    detail: "业务目标、场景优先级、推进节奏、组织分工与风险边界说明。",
  },
  {
    icon: ListChecks,
    title: "标准化流程包",
    detail: "覆盖投标分析、标书生成、文档审核的操作清单与人工审核节点。",
  },
  {
    icon: BookOpenCheck,
    title: "模板与提示词库",
    detail: "沉淀可复用模板、行业术语词典和高频场景提示词，便于团队复制使用。",
  },
  {
    icon: ShieldCheck,
    title: "验收与优化报告",
    detail: "输出试跑结果、效率对比、问题清单和下一轮优化建议。",
  },
];

export function Deliverables() {
  return (
    <section id="deliverables" className="relative py-20 sm:py-28 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
            交付内容
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            不只交功能，更交可持续执行的方法
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            每次合作都以“可落地、可复用、可审计”为目标，确保团队能独立持续运行。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-[#111827]/50 border border-[#1e293b] hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

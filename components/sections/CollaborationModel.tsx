import { Handshake, CalendarRange, Users, BriefcaseBusiness } from "lucide-react";

const collaborationModes = [
  {
    icon: Handshake,
    title: "先咨询后估价",
    description:
      "先进行 30-45 分钟业务沟通，再基于团队规模、交付深度与周期给出合作建议。",
  },
  {
    icon: CalendarRange,
    title: "双阶段推进",
    description: "支持首月验证与年度定制两种节奏，按阶段评估结果后再扩展范围。",
  },
  {
    icon: Users,
    title: "双周协同机制",
    description: "以双周为节奏复盘目标达成、流程卡点与风险项，确保方案持续可控。",
  },
];

const suitableScenarios = [
  "管理层希望先看到可汇报的 AI 投标改造方案，再决定是否全面启动。",
  "团队已尝试多种 AI 工具，但缺少统一流程和可复用模板。",
  "计划将分析、生成、审核能力真正接入日常投标工作流。",
];

export function CollaborationModel() {
  return (
    <section id="collaboration" className="relative py-20 sm:py-28 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
            合作方式
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            按阶段合作，按结果推进
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            我们坚持先明确边界再执行，让每一步都对预算、进度和风险可解释。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {collaborationModes.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#0a0f1a]/60 border border-[#1e293b] hover:border-cyan-500/40 transition-colors"
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 w-fit mb-4">
                <item.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0f1a]/70 border border-[#1e293b]">
          <div className="flex items-center gap-3 mb-5">
            <BriefcaseBusiness className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">适合先沟通的场景</h3>
          </div>
          <ul className="space-y-3">
            {suitableScenarios.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

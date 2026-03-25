import { ClipboardCheck, Target, Gauge } from "lucide-react";

const implementationSteps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "现状诊断",
    description:
      "梳理团队组织、现有工具、投标流程卡点，确认优先落地场景与约束边界。",
  },
  {
    step: "02",
    icon: Target,
    title: "方案定界",
    description:
      "明确先做首轮验证还是年度推进，定义里程碑、角色分工、风险控制与验收标准。",
  },
  {
    step: "03",
    icon: Gauge,
    title: "试跑与优化",
    description:
      "围绕真实投标任务试运行 Agent 协作链路，并基于反馈迭代提示词、模板与流程。",
  },
];

export function ImplementationPlan() {
  return (
    <section id="implementation" className="relative py-20 sm:py-28 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
            具体实施方案
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            先诊断，再定界，再试跑落地
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            我们不先给固定报价，而是先把团队现状、推进边界和目标周期说清，再进入实施。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {implementationSteps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-[#0a0f1a]/60 border border-[#1e293b] hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-cyan-500/10">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-cyan-400/80">
                  STEP {item.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

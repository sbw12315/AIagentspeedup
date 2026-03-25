"use client";

import { AlertTriangle } from "lucide-react";

export function RiskDisclaimer() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#111827]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Warning box */}
        <div className="relative p-8 sm:p-10 rounded-2xl bg-amber-500/5 border border-amber-500/30">
          {/* Warning icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 p-3 rounded-full bg-[#111827] border border-amber-500/30">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
          </div>

          {/* Content */}
          <div className="text-center mt-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              理性认知 AI 的角色
            </h2>

            <div className="space-y-6 text-left max-w-2xl mx-auto">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-amber-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    AI 是强大的效率工具，但不能替代专业判断
                  </h3>
                  <p className="text-slate-400 text-sm">
                    AI Agent 能够显著提升投标效率，但投标决策涉及复杂的商业判断、法律合规和专业责任，仍需由具备相应资质的专业人员做出。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-amber-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    最终审核与签字必须由持证专业人员完成
                  </h3>
                  <p className="text-slate-400 text-sm">
                    投标文件的正式提交、盖章、签字等法律行为，必须由具备相应执业资格的人员按照法定程序完成。AI 可以辅助审核，但最终责任由人承担。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-amber-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    投标人对提交内容承担全部法律责任
                  </h3>
                  <p className="text-slate-400 text-sm">
                    无论是否使用 AI 辅助，投标人对其提交的投标文件内容的真实性、完整性、合规性承担全部法律责任。我们提供工具，您掌控结果。
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
              <p className="text-slate-300 text-sm italic">
                &ldquo;AI Agent 显著提升投标效率，但最终决策权始终在您手中。投标文件的专业审核、法律合规确认、正式提交前的最终签字，仍需由具备相应资质的专业人员完成。我们提供工具，您掌控结果。&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { MessageCircle, Mail, Clock3, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const prepChecklist = [
  {
    title: "团队情况",
    detail: "开发与投标团队人数、角色分工、是否有负责人统一推进。",
  },
  {
    title: "工具基础",
    detail: "当前使用的模型账号、文档体系、协作平台和自动化工具。",
  },
  {
    title: "目标优先级",
    detail: "是先让团队能稳定使用，还是直接进入流程集成与规模化。",
  },
  {
    title: "预算周期",
    detail: "是首月验证还是年度推进，期望的投入节奏和验收节点。",
  },
];

export function ContactConsultation() {
  const [formData, setFormData] = useState<{
    name: string;
    company: string;
    contact: string;
    message: string;
  }>({
    name: "",
    company: "",
    contact: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(`预约咨询需求 - ${formData.name || "未填写姓名"}`);
    const body = encodeURIComponent(
      `姓名: ${formData.name || "未填写"}\n公司/团队: ${formData.company || "未填写"}\n联系方式: ${formData.contact || "未填写"}\n\n本次最想先聊的内容:\n${formData.message || "未填写"}`
    );
    window.location.href = `mailto:bowen@aiagentspeedup.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="relative py-20 sm:py-28 bg-[#0a0f1a]">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">预约需求已提交</h3>
          <p className="text-slate-400">我们已收到您的预约请求，会尽快通过邮件与您联系。</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#0a0f1a]">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
            联系我们
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            1 对 1 咨询，先把边界和预算说清
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            企业级定制项目建议先沟通团队规模、现状基础与优先场景，再进入正式估价与合作排期。
          </p>
        </div>

        <div className="grid xl:grid-cols-5 gap-6">
          <div className="xl:col-span-3 p-6 sm:p-8 rounded-2xl bg-[#111827]/60 border border-[#1e293b]">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-5">
              <Clock3 className="w-4 h-4" />
              建议沟通时长：30 - 45 分钟
            </div>
            <h3 className="text-xl font-semibold text-white mb-5">预约前建议准备 4 件事</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {prepChecklist.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-[#0a0f1a]/70 border border-[#1e293b]"
                >
                  <p className="text-white font-medium mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
              <p className="text-cyan-300 text-sm">
                先预约咨询，再估价。我们会根据团队规模与交付深度给出建议方案与推进节奏。
              </p>
            </div>
          </div>

          <div className="xl:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-[#111827]/60 border border-[#1e293b]">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">直接联系</h3>
              <div className="flex flex-col items-center gap-3 text-sm">
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  微信 healthybowen
                </a>
                <a
                  href="mailto:bowen@aiagentspeedup.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  bowen@aiagentspeedup.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#111827]/60 border border-[#1e293b]">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">提交预约信息</h3>
              <div className="space-y-3">
                <input
                  name="name"
                  type="text"
                  placeholder="姓名"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0f1a]/80 border border-[#1e293b] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50"
                />
                <input
                  name="company"
                  type="text"
                  placeholder="公司 / 团队"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0f1a]/80 border border-[#1e293b] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50"
                />
                <input
                  name="contact"
                  type="text"
                  placeholder="联系方式"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0f1a]/80 border border-[#1e293b] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50"
                />
                <textarea
                  name="message"
                  placeholder="本次最想先聊什么（场景、目标、周期）"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0f1a]/80 border border-[#1e293b] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 resize-none"
                />
                <Button className="w-full group" onClick={handleSubmit}>
                  提交预约需求
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

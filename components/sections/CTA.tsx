"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#0a0f1a]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] to-[#0a0f1a]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            开启您的
            <span className="gradient-text"> 投标智能化</span>
            之旅
          </h2>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            预约产品演示，了解 AI Agent 如何为您的投标流程注入智能化能力
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group">
              <Calendar className="mr-2 w-5 h-5" />
              预约产品演示
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg">
              联系我们
            </Button>
          </div>

          {/* Contact info */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">
              或通过以下方式联系我们
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                contact@example.com
              </a>
              <a
                href="tel:+86-755-xxxxxxx"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                0755-XXXXXXXX
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

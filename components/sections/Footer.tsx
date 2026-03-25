import Link from "next/link";

const footerLinks = [
  { href: "/", label: "首页" },
  { href: "/implementation", label: "实施方案" },
  { href: "/deliverables", label: "交付内容" },
  { href: "/collaboration", label: "合作方式" },
  { href: "/contact", label: "联系我们" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-[#070b12] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-white">
                AI
              </div>
              <span className="text-lg font-semibold text-white">
                投标智能平台
              </span>
            </div>
            <p className="text-slate-500 text-sm">
              © {currentYear} 数字智能化赋能平台. 保留所有权利.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ICP */}
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm">
              粤ICP备 xxxxxxxx 号
            </p>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-slate-600 text-xs flex items-center justify-center gap-1">
            AI Agent 驱动投标智能化 · 用心服务 · 持续创新
          </p>
        </div>
      </div>
    </footer>
  );
}

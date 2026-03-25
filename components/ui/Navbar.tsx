"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/implementation", label: "实施方案" },
  { href: "/deliverables", label: "交付内容" },
  { href: "/collaboration", label: "合作方式" },
  { href: "/contact", label: "联系我们" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass border-b border-[#1e293b] shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-white">
              AI
            </div>
            <span className="text-lg font-semibold text-white hidden sm:block">
              投标智能平台
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button size="sm">预约演示</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-[#1e293b]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="mt-2 w-full">
              预约演示
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

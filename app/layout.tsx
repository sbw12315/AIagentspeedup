import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: "AI Agent 驱动投标智能化改造 | 数字智能化赋能平台",
  description:
    "基于 AI Agent 能力，为工程建设咨询行业投标流程注入智能化能力，实现效率提升、人力成本节约。数据零留存，全程人工可控。",
  keywords: ["AI Agent", "投标智能化", "数字智能化改造", "工程建设咨询", "标书生成", "投标分析"],
  authors: [{ name: "Digital Transformation Team" }],
  openGraph: {
    title: "AI Agent 驱动投标智能化改造",
    description: "将人工密集的投标流程，转化为高效精准的智能流程",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSansSC.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}

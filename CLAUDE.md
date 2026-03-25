# 建筑行业AI投标赋能平台

## 项目概述

为工程建设咨询行业（尤其是投标场景）打造的 AI Agent 驱动智能化改造平台。面向华南地区行业龙头（如深圳合创集团），通过 OpenClaw + 飞书分发 AI 服务。

**核心功能**：
- 投标分析 Agent：招标文件智能解析、资质匹配度评估、风险点标注
- 标书生成 Agent：框架生成、资质归集、模板匹配
- 文档审核 Agent：格式校验、页码核查、附件完整性检查

**核心定位**：
- AI 辅助而非替代人工
- 数据零留存（处理完毕即返回）
- 全程人工可控（可随时介入审核）

## 技术栈

- **框架**：Next.js 15 (App Router)
- **样式**：Tailwind CSS v4
- **图标**：Lucide React
- **字体**：Noto Sans SC + Inter
- **动画**：CSS + Canvas

## 目录结构

```
app/
  ├── layout.tsx          # 根布局（字体、全局Meta）
  ├── page.tsx            # 主页（组装所有Section）
  └── globals.css         # 全局样式 + CSS Variables + Animations

components/
  ├── ui/
  │   ├── Navbar.tsx      # 导航栏（毛玻璃、响应式）
  │   ├── Button.tsx      # 按钮组件（Primary/Secondary）
  │   ├── FeatureCard.tsx # Agent功能卡片
  │   ├── ProcessStep.tsx # 流程节点
  │   └── StatCard.tsx    # 数字统计卡片
  ├── sections/
  │   ├── Hero.tsx        # Hero区域（数据流动画）
  │   ├── ValueProps.tsx  # 价值主张（四指标）
  │   ├── IndustrySolutions.tsx # 行业解决方案
  │   ├── Features.tsx    # 三大Agent模块
  │   ├── Process.tsx     # 人机协作流程图
  │   ├── TrustSafety.tsx # 安全承诺
  │   ├── RiskDisclaimer.tsx # 风险提示
  │   ├── CTA.tsx         # 行动召唤
  │   └── Footer.tsx      # 页脚
  └── effects/
      └── DataFlowCanvas.tsx # 抽象数据流动画

lib/
  └── utils.ts            # cn() 工具函数
```

## 设计规范

### 色彩系统
```css
--bg-primary: #0a0f1a        /* 深邃藏青 */
--bg-secondary: #111827      /* 石墨灰 */
--accent-cyan: #06b6d4       /* 科技青 */
--accent-purple: #8b5cf6     /* 智慧紫 */
--text-primary: #f8fafc      /* 主文字 */
--text-secondary: #94a3b8     /* 次文字 */
--border-subtle: #1e293b      /* 微妙边框 */
```

### 布局断点
- PC: ≥1024px
- Tablet: 768-1023px
- Mobile: <768px

### 动效规范
- 滚动淡入：duration 600ms, ease-out
- 悬停过渡：duration 300ms
- Canvas动画：30-60fps

## 关键要求

1. **数据零留存**：不在服务器存储任何项目文档
2. **人工可控**：每个AI步骤后都有人工审核点
3. **交付方式**：通过 OpenClaw + 飞书分发
4. **合规要求**：Footer需显示 ICP 备案号

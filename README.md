# Candle Lens

An interactive web application for learning Japanese candlestick chart techniques, based on Steve Nison's *Japanese Candlestick Charting Techniques*.

[中文文档](#中文文档)

---

## Features

- **Chapter-by-chapter learning** — 13 chapters covering candlestick basics through advanced multi-candle patterns
- **Interactive annotated charts** — Live TradingView Lightweight Charts with highlighted patterns and progressive scene walkthroughs
- **Bilingual support** — Full English and Chinese (简体中文) UI and content
- **Progress tracking** — Chapters marked complete as you finish them
- **Responsive design** — Works on desktop and mobile

## Tech Stack

| Layer | Library |
|---|---|
| UI framework | React 19 + TypeScript |
| Build tool | Vite 6 |
| Charting | TradingView Lightweight Charts v5 |
| Styling | Tailwind CSS v4 |
| State | Zustand |
| i18n | i18next + react-i18next |
| Routing | React Router v7 |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type check
npm run typecheck

# Run tests
npm run test

# Production build
npm run build
```

## Deployment Configuration

The app defaults to the production custom domain, but you can override the deployment values with env vars:

```bash
VITE_APP_BASE_PATH=/
VITE_SITE_URL=https://candle-lens.lightpixels.tech/
VITE_GITHUB_PROJECT_HOST=linlih.github.io
VITE_GITHUB_PROJECT_PATH=/candle-lens
```

- `VITE_APP_BASE_PATH` controls the Vite `base` path and asset/router basename behavior
- `VITE_SITE_URL` controls the absolute site URL used in social metadata
- `VITE_GITHUB_PROJECT_HOST` and `VITE_GITHUB_PROJECT_PATH` are used to redirect the legacy GitHub Pages project URL to the custom domain

Examples:

```bash
# Custom domain at site root
VITE_APP_BASE_PATH=/
VITE_SITE_URL=https://example.com/
VITE_GITHUB_PROJECT_HOST=linlih.github.io
VITE_GITHUB_PROJECT_PATH=/candle-lens
```

## Content Structure

Chapters are organized into four parts:

| Part | Chapters | Topics |
|---|---|---|
| Part 1 | 1–4 | Introduction, Doji, Hammer & Hanging Man, Stars |
| Part 2 | 5–10 | Engulfing, Dark Cloud Cover, Evening/Morning Stars, Harami, Tweezers, Three-candle patterns |
| Part 3 | 11–12 | Windows (gaps), Three Methods |
| Part 4 | 13 | Western technical analysis integration |

### Adding a Chapter

Each chapter lives in `src/content/chapters/{id}/` with five files:

```
{id}/
  data.ts         # OHLC candle data and scene definitions
  annotations.ts  # Chart annotation overlays per scene
  en.ts           # English text content
  zh.ts           # Chinese text content
  index.ts        # Re-exports everything
```

Register the chapter in `src/content/catalog.ts` and `src/content/index.ts`.

## Manual Verification Checklist

Before release or deployment, verify:

- Rapidly switch between chapters and confirm content/chart data never flashes from the previous chapter
- Toggle language on the home page, chapter page, cheat sheet, and legal pages and confirm copy stays consistent
- Toggle theme and confirm charts plus layout colors update correctly
- Open a chapter on mobile width and confirm the sidebar opens, closes, and dismisses via backdrop
- Run `npm run typecheck`
- Run `npm run test`
- Run `npm run build`

## License

[MIT](LICENSE)

---

# 中文文档

一个用于学习日本蜡烛图技术的交互式 Web 应用，内容基于史蒂夫·尼森的经典著作《日本蜡烛图技术》。

[English Documentation](#candle-lens)

---

## 功能特点

- **逐章学习** — 共 13 章，从蜡烛图基础到高级多根蜡烛形态
- **交互式注释图表** — 基于 TradingView Lightweight Charts 的实时图表，带有形态高亮和逐步场景讲解
- **双语支持** — 完整的英文与中文（简体）界面和内容
- **学习进度追踪** — 完成章节后自动标记
- **响应式设计** — 支持桌面端与移动端

## 技术栈

| 层级 | 库 |
|---|---|
| UI 框架 | React 19 + TypeScript |
| 构建工具 | Vite 6 |
| 图表库 | TradingView Lightweight Charts v5 |
| 样式 | Tailwind CSS v4 |
| 状态管理 | Zustand |
| 国际化 | i18next + react-i18next |
| 路由 | React Router v7 |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（http://localhost:5173）
npm run dev

# 类型检查
npm run typecheck

# 生产环境构建
npm run build
```

## 内容结构

章节分为四个部分：

| 部分 | 章节 | 主题 |
|---|---|---|
| 第一部分 | 1–4 | 简介、十字星、锤子线与上吊线、星线 |
| 第二部分 | 5–10 | 吞没形态、乌云盖顶、黄昏星/晨星、孕线、镊子顶底、三根蜡烛形态 |
| 第三部分 | 11–12 | 窗口（缺口）、三法 |
| 第四部分 | 13 | 与西方技术分析的结合 |

### 新增章节

每个章节位于 `src/content/chapters/{id}/` 目录下，包含五个文件：

```
{id}/
  data.ts         # K 线数据及场景定义
  annotations.ts  # 每个场景的图表注释覆盖层
  en.ts           # 英文内容
  zh.ts           # 中文内容
  index.ts        # 统一导出
```

在 `src/content/catalog.ts` 和 `src/content/index.ts` 中注册新章节即可。

## 许可证

[MIT](LICENSE)

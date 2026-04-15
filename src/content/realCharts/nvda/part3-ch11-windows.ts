import type { RealChartData } from '@/types/realChart'

// NVDA Oct 30 – Nov 18, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Rising Window (Gap Up) on Nov 10, 2025
//   Nov 7 high  = 188.32
//   Nov 10 low  = 193.79
//   Gap size    = +$5.47 (fully open — no overlap between the two candles)
//   Follows the hammer reversal on Nov 7; gap confirms bullish momentum.
//   Window acts as support: Nov 11–12 consolidate above the gap zone.

export const realChart: RealChartData = {
  chapterId: 'part3-ch11-windows',
  ticker: 'NVDA',
  candles: [
    { time: '2025-10-30', open: 205.15, high: 206.16, low: 201.41, close: 202.89 },
    { time: '2025-10-31', open: 206.45, high: 207.97, low: 202.07, close: 202.49 },
    { time: '2025-11-03', open: 208.08, high: 211.34, low: 205.56, close: 206.88 },
    { time: '2025-11-04', open: 203.00, high: 203.97, low: 197.93, close: 198.69 },
    { time: '2025-11-05', open: 198.77, high: 202.92, low: 194.65, close: 195.21 },
    { time: '2025-11-06', open: 196.42, high: 197.62, low: 186.38, close: 188.08 },
    { time: '2025-11-07', open: 184.90, high: 188.32, low: 178.91, close: 188.15 }, // Pre-gap
    { time: '2025-11-10', open: 195.11, high: 199.94, low: 193.79, close: 199.05 }, // Post-gap
    { time: '2025-11-11', open: 195.16, high: 195.42, low: 191.30, close: 193.16 },
    { time: '2025-11-12', open: 195.72, high: 195.89, low: 191.13, close: 193.80 },
    { time: '2025-11-13', open: 191.05, high: 191.44, low: 183.85, close: 186.86 },
    { time: '2025-11-14', open: 182.86, high: 191.01, low: 180.58, close: 190.17 },
    { time: '2025-11-17', open: 185.97, high: 189.00, low: 184.32, close: 186.60 },
    { time: '2025-11-18', open: 183.38, high: 184.80, low: 179.65, close: 181.36 },
    { time: '2025-11-19', open: 184.79, high: 187.86, low: 182.83, close: 186.52 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'gap-zone',
      timeRange: { from: '2025-11-07', to: '2025-11-10' },
      priceRange: { high: 193.79, low: 188.32 },
      fillColor: 'rgba(38, 166, 154, 0.20)',
      borderColor: '#26a69a',
      borderWidth: 1,
    },
    {
      kind: 'hline',
      id: 'gap-top',
      price: 193.79,
      color: 'rgba(38, 166, 154, 0.8)',
      width: 1,
      dash: [4, 3],
    },
    {
      kind: 'hline',
      id: 'gap-bottom',
      price: 188.32,
      color: 'rgba(38, 166, 154, 0.8)',
      width: 1,
      dash: [4, 3],
    },
    {
      kind: 'label',
      id: 'window-label',
      time: '2025-11-10',
      price: 201.5,
      text: 'Rising Window +$5.47',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  locale: {
    en: {
      patternLabel: 'Rising Window (Gap Up) — Nov 7→10, 2025',
      analysisText:
        "Following the Hammer reversal on November 7, NVDA gapped up dramatically on November 10 — the low of $193.79 was $5.47 above the prior session's high of $188.32, leaving a clean rising window (highlighted zone). This gap confirmed the bullish reversal and showed strong overnight demand. According to Nison, a rising window becomes a support zone: the $188–$194 gap area was repeatedly tested on November 11–13 as price consolidated above it before the next leg played out.",
    },
    zh: {
      patternLabel: '跳涨缺口（上升窗口）— 2025年11月7日→10日',
      analysisText:
        '11月7日锤子线反转后，英伟达于11月10日大幅跳空高开——当日最低价193.79美元高出前一日最高价188.32美元达5.47美元，形成清晰的跳涨缺口（高亮区域）。这一缺口确认了看涨反转，显示出强劲的隔夜需求。尼森指出，跳涨缺口形成后将转化为支撑区域：11月11-13日价格在188-194美元的缺口区域上方反复测试整理，印证了这一原则。',
      labelText: {
        'window-label': '跳涨缺口 +$5.47',
      },
    },
  },
}

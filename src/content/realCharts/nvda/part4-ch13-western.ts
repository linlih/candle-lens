import type { RealChartData } from '@/types/realChart'

// NVDA Feb 27 – Mar 19, 2026 (16 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Doji with Long Upper Shadow at Resistance — Mar 16, 2026
//   O=182.97, H=188.88, L=181.41, C=183.22  body=0.25, upper shadow=5.66
//   Context: NVDA declined from $197 (Feb 25) → $175 (Mar 9), then bounced.
//   On Mar 16 the recovery rally tested prior support-turned-resistance near $188-189.
//   The long upper shadow shows price rejection at that level (western resistance confluence).
//   Bearish follow-through on Mar 17 confirms the candlestick signal.

export const realChart: RealChartData = {
  chapterId: 'part4-ch13-western',
  ticker: 'NVDA',
  candles: [
    { time: '2026-02-27', open: 181.25, high: 182.59, low: 176.38, close: 177.19 },
    { time: '2026-03-02', open: 175.01, high: 183.46, low: 174.64, close: 182.48 },
    { time: '2026-03-03', open: 178.49, high: 180.90, low: 176.92, close: 180.05 },
    { time: '2026-03-04', open: 180.44, high: 184.70, low: 180.06, close: 183.04 },
    { time: '2026-03-05', open: 181.17, high: 184.06, low: 177.88, close: 183.34 },
    { time: '2026-03-06', open: 179.84, high: 182.76, low: 176.82, close: 177.82 },
    { time: '2026-03-09', open: 176.83, high: 182.91, low: 175.56, close: 182.65 },
    { time: '2026-03-10', open: 182.40, high: 186.44, low: 182.01, close: 184.77 },
    { time: '2026-03-11', open: 185.91, high: 187.62, low: 184.45, close: 186.03 },
    { time: '2026-03-12', open: 184.05, high: 184.94, low: 181.75, close: 183.14 },
    { time: '2026-03-13', open: 184.92, high: 186.09, low: 179.94, close: 180.25 },
    { time: '2026-03-16', open: 182.97, high: 188.88, low: 181.41, close: 183.22 }, // Doji at resistance
    { time: '2026-03-17', open: 185.06, high: 185.40, low: 181.68, close: 181.93 }, // Bearish confirm
    { time: '2026-03-18', open: 182.48, high: 183.38, low: 180.33, close: 180.40 },
    { time: '2026-03-19', open: 178.01, high: 179.98, low: 175.79, close: 178.56 },
    { time: '2026-03-20', open: 178.00, high: 178.26, low: 171.72, close: 172.70 },
  ],
  annotations: [
    {
      kind: 'hline',
      id: 'resistance-line',
      price: 188.5,
      color: 'rgba(239, 83, 80, 0.7)',
      width: 1,
      dash: [5, 4],
    },
    {
      kind: 'box',
      id: 'doji-box',
      timeRange: { from: '2026-03-16', to: '2026-03-16' },
      priceRange: { high: 188.88, low: 181.41 },
      pricePadding: 0.3,
      fillColor: 'rgba(255, 193, 7, 0.15)',
      borderColor: '#ffc107',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'resistance-label',
      time: '2026-03-11',
      price: 189.8,
      text: 'Prior Support → Resistance',
      position: 'above',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 10,
      arrowhead: false,
    },
    {
      kind: 'label',
      id: 'doji-label',
      time: '2026-03-16',
      price: 190.5,
      text: 'Doji + Rejection',
      position: 'above',
      backgroundColor: '#ffc107',
      textColor: '#1a1a2e',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  locale: {
    en: {
      patternLabel: 'Candlestick + Resistance confluence — Mar 16, 2026',
      analysisText:
        "After breaking down from $197 in late February, NVDA staged a recovery rally into mid-March. On March 16, the stock spiked to $188.88 intraday — probing the prior support zone near $188–189 that had now flipped to resistance (dashed line). The session closed near its open at $183.22, forming a Doji with a long upper shadow ($5.66): a classic candlestick rejection at a western technical level. The Western + Eastern combination produced a high-confidence signal, and NVDA resumed declining sharply, losing $10 over the next four sessions.",
    },
    zh: {
      patternLabel: '蜡烛图信号+阻力位共振 — 2026年3月16日',
      analysisText:
        '2月下旬从197美元大幅下跌后，英伟达在3月中旬展开反弹。3月16日，股价盘中冲高至188.88美元——测试此前已从支撑转为阻力的188-189美元区域（虚线）。当日收于接近开盘价的183.22美元，形成上影线长达5.66美元的十字星：这是价格在西方技术分析关键位遭到拒绝的经典蜡烛图信号。东西方技术共振产生了高可信度的看跌信号，此后四个交易日NVDA持续急跌，下跌约10美元。',
    },
  },
}

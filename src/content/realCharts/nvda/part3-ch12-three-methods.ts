import type { RealChartData } from '@/types/realChart'

// NVDA Oct 15 – Nov 5, 2025 (16 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Rising Three Methods (near-textbook) on Oct 17–28, 2025
//   First bull  (Oct 17): O=180.18, H=184.10, L=179.75, C=183.22 (body=3.04)
//   Pullback 1  (Oct 20): O=183.13, C=182.64 (small bear, body=0.49)
//   Pullback 2  (Oct 21): O=182.79, C=181.16 (small bear, body=1.63)
//   Pullback 3  (Oct 22): O=181.14, C=180.28 (small bear, body=0.86)
//   Continuation (Oct 23–28): rallies to C=201.03 — well above first bull's high.
//   Real-world caveat: Oct 22 dipped slightly below Oct 17's low (176.76 vs 179.75).

export const realChart: RealChartData = {
  chapterId: 'part3-ch12-three-methods',
  ticker: 'NVDA',
  candles: [
    { time: '2025-10-15', open: 184.80, high: 184.87, low: 177.29, close: 179.83 },
    { time: '2025-10-16', open: 182.23, high: 183.28, low: 179.77, close: 181.81 },
    { time: '2025-10-17', open: 180.18, high: 184.10, low: 179.75, close: 183.22 }, // First Bull
    { time: '2025-10-20', open: 183.13, high: 185.20, low: 181.73, close: 182.64 }, // Pullback 1
    { time: '2025-10-21', open: 182.79, high: 182.79, low: 179.80, close: 181.16 }, // Pullback 2
    { time: '2025-10-22', open: 181.14, high: 183.44, low: 176.76, close: 180.28 }, // Pullback 3
    { time: '2025-10-23', open: 180.42, high: 183.03, low: 179.79, close: 182.16 },
    { time: '2025-10-24', open: 183.84, high: 187.47, low: 183.50, close: 186.26 },
    { time: '2025-10-27', open: 189.99, high: 192.00, low: 188.43, close: 191.49 },
    { time: '2025-10-28', open: 193.05, high: 203.15, low: 191.91, close: 201.03 }, // Strong Bull
    { time: '2025-10-29', open: 207.98, high: 212.19, low: 204.78, close: 207.04 },
    { time: '2025-10-30', open: 205.15, high: 206.16, low: 201.41, close: 202.89 },
    { time: '2025-10-31', open: 206.45, high: 207.97, low: 202.07, close: 202.49 },
    { time: '2025-11-03', open: 208.08, high: 211.34, low: 205.56, close: 206.88 },
    { time: '2025-11-04', open: 203.00, high: 203.97, low: 197.93, close: 198.69 },
    { time: '2025-11-05', open: 198.77, high: 202.92, low: 194.65, close: 195.21 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'first-bull-box',
      timeRange: { from: '2025-10-17', to: '2025-10-17' },
      priceRange: { high: 184.10, low: 179.75 },
      fillColor: 'rgba(38, 166, 154, 0.18)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'box',
      id: 'pullback-box',
      timeRange: { from: '2025-10-20', to: '2025-10-22' },
      priceRange: { high: 185.20, low: 176.76 },
      fillColor: 'rgba(255, 193, 7, 0.10)',
      borderColor: '#ffc107',
      borderWidth: 1,
    },
    {
      kind: 'label',
      id: 'methods-label',
      time: '2025-10-28',
      price: 204.5,
      text: 'Rising Three Methods',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  locale: {
    en: {
      patternLabel: 'Rising Three Methods — Oct 17–28, 2025',
      analysisText:
        "After a strong bullish candle on October 17 ($180→$183), NVDA paused for three sessions (Oct 20–22) with small bearish candles that gave back only a fraction of the prior gain — the market \"catching its breath\" within the uptrend. On October 28, a powerful bull candle confirmed the continuation, closing at $201 and clearly surpassing the October 17 candle's high. This Rising Three Methods structure signalled that the uptrend was resuming, consistent with the pattern's core message: brief pullbacks during trends are consolidation, not reversal.",
    },
    zh: {
      patternLabel: '上升三法 — 2025年10月17-28日',
      analysisText:
        '10月17日出现强劲阳线（180→183美元）后，英伟达连续三个交易日（10月20-22日）出现小阴线回调，仅收回前期涨幅的一小部分——市场在上升趋势中"稍作喘息"。10月28日，一根强力阳线确认趋势延续，收盘于201美元，明显超越10月17日阳线的最高价。这一上升三法形态预示着上升趋势的重启，与该形态的核心含义一致：趋势中的短暂回调是整理而非反转。',
    },
  },
}

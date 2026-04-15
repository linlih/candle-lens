import type { RealChartData } from '@/types/realChart'

// NVDA Nov 5 – Nov 24, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Piercing Line on Nov 13–14, 2025
//   Bear (Nov 13): O=191.05, H=191.44, L=183.85, C=186.86 (body=4.19)
//   Bull (Nov 14): O=182.86, H=191.01, L=180.58, C=190.17 (body=7.31)
//   Nov 14 opens below Nov 13 close, surges past midpoint (188.96) to 190.17.
//   Classic Piercing Line — bullish reversal in a downtrend.

export const realChart: RealChartData = {
  chapterId: 'part2-ch06-cloud',
  ticker: 'NVDA',
  candles: [
    { time: '2025-11-05', open: 198.77, high: 202.92, low: 194.65, close: 195.21 },
    { time: '2025-11-06', open: 196.42, high: 197.62, low: 186.38, close: 188.08 },
    { time: '2025-11-07', open: 184.90, high: 188.32, low: 178.91, close: 188.15 },
    { time: '2025-11-10', open: 195.11, high: 199.94, low: 193.79, close: 199.05 },
    { time: '2025-11-11', open: 195.16, high: 195.42, low: 191.30, close: 193.16 },
    { time: '2025-11-12', open: 195.72, high: 195.89, low: 191.13, close: 193.80 },
    { time: '2025-11-13', open: 191.05, high: 191.44, low: 183.85, close: 186.86 }, // Bear day
    { time: '2025-11-14', open: 182.86, high: 191.01, low: 180.58, close: 190.17 }, // Piercing Line
    { time: '2025-11-17', open: 185.97, high: 189.00, low: 184.32, close: 186.60 },
    { time: '2025-11-18', open: 183.38, high: 184.80, low: 179.65, close: 181.36 },
    { time: '2025-11-19', open: 184.79, high: 187.86, low: 182.83, close: 186.52 },
    { time: '2025-11-20', open: 195.95, high: 196.00, low: 179.85, close: 180.64 },
    { time: '2025-11-21', open: 181.24, high: 184.56, low: 172.93, close: 178.88 },
    { time: '2025-11-24', open: 179.49, high: 183.50, low: 176.48, close: 182.55 },
    { time: '2025-11-25', open: 174.91, high: 178.16, low: 169.55, close: 177.82 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'piercing-box',
      timeRange: { from: '2025-11-13', to: '2025-11-14' },
      priceRange: { high: 191.44, low: 180.58 },
      pricePadding: 0.5,
      fillColor: 'rgba(38, 166, 154, 0.12)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'piercing-label',
      time: '2025-11-14',
      price: 192.8,
      text: 'Piercing Line',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
    {
      kind: 'hline',
      id: 'midpoint-line',
      price: 188.96,
      color: 'rgba(255, 193, 7, 0.7)',
      width: 1,
      dash: [4, 3],
    },
  ],
  locale: {
    en: {
      patternLabel: 'Piercing Line — Nov 13–14, 2025',
      analysisText:
        "After dropping from $199 to $187 over two sessions, NVDA gapped down further on November 14 — opening at $182.86, well below the prior close of $186.86. However, buyers absorbed the selling pressure and drove the stock all the way to $190.17, clearly piercing above the midpoint of the November 13 bearish candle ($188.96, dashed line). This Piercing Line signaled exhaustion of the short-term downtrend and set the stage for consolidation, though the broader decline resumed later.",
    },
    zh: {
      patternLabel: '刺透形态 — 2025年11月13-14日',
      analysisText:
        '英伟达两个交易日从199美元跌至187美元后，11月14日再度跳空低开——开盘182.86美元，远低于前一日收盘价186.86美元。然而买方吸收了抛压，将股价推升至190.17美元，明显穿越11月13日阴线实体的中点（188.96美元，虚线）。这一刺透形态标志着短期下跌趋势的衰竭，为阶段性整理奠定基础，尽管整体跌势随后仍有所延续。',
    },
  },
}

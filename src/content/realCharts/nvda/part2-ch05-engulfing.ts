import type { RealChartData } from '@/types/realChart'

// NVDA Nov 6 – Nov 25, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Bearish Engulfing on Nov 20, 2025
//   Prev (Nov 19): O=184.79, H=187.86, L=182.83, C=186.52 (bull)
//   Cur  (Nov 20): O=195.95, H=196.00, L=179.85, C=180.64 (bear)
//   Opens $9 above prev close, crashes below prev open — massive bearish engulfing.
//   Driven by news gap-up at open then complete reversal.

export const realChart: RealChartData = {
  chapterId: 'part2-ch05-engulfing',
  ticker: 'NVDA',
  candles: [
    { time: '2025-11-06', open: 196.42, high: 197.62, low: 186.38, close: 188.08 },
    { time: '2025-11-07', open: 184.90, high: 188.32, low: 178.91, close: 188.15 },
    { time: '2025-11-10', open: 195.11, high: 199.94, low: 193.79, close: 199.05 },
    { time: '2025-11-11', open: 195.16, high: 195.42, low: 191.30, close: 193.16 },
    { time: '2025-11-12', open: 195.72, high: 195.89, low: 191.13, close: 193.80 },
    { time: '2025-11-13', open: 191.05, high: 191.44, low: 183.85, close: 186.86 },
    { time: '2025-11-14', open: 182.86, high: 191.01, low: 180.58, close: 190.17 },
    { time: '2025-11-17', open: 185.97, high: 189.00, low: 184.32, close: 186.60 },
    { time: '2025-11-18', open: 183.38, high: 184.80, low: 179.65, close: 181.36 },
    { time: '2025-11-19', open: 184.79, high: 187.86, low: 182.83, close: 186.52 }, // Bull (prev day)
    { time: '2025-11-20', open: 195.95, high: 196.00, low: 179.85, close: 180.64 }, // Bearish Engulfing
    { time: '2025-11-21', open: 181.24, high: 184.56, low: 172.93, close: 178.88 },
    { time: '2025-11-24', open: 179.49, high: 183.50, low: 176.48, close: 182.55 },
    { time: '2025-11-25', open: 174.91, high: 178.16, low: 169.55, close: 177.82 },
    { time: '2025-11-26', open: 181.63, high: 182.91, low: 178.24, close: 180.26 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'engulf-box',
      timeRange: { from: '2025-11-19', to: '2025-11-20' },
      priceRange: { high: 196.00, low: 179.85 },
      pricePadding: 0.5,
      fillColor: 'rgba(239, 83, 80, 0.12)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'engulf-label',
      time: '2025-11-20',
      price: 197.8,
      text: 'Bearish Engulfing',
      position: 'above',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  locale: {
    en: {
      patternLabel: 'Bearish Engulfing — Nov 20, 2025',
      analysisText:
        "On November 20, 2025, NVDA gapped up at the open to $195.95 — $9 above the prior day's close of $186.52 — but sellers immediately took control. By the close the stock had reversed to $180.64, completely swallowing the previous bullish candle's body in a textbook Bearish Engulfing. The wide-range bearish candle signaled an exhaustion of the rally from the November 7 hammer low, and the stock continued lower in subsequent sessions.",
    },
    zh: {
      patternLabel: '看跌吞没形态 — 2025年11月20日',
      analysisText:
        '2025年11月20日，英伟达跳空高开至195.95美元——高于前一日收盘价186.52美元9美元之多——但空方随即占据主导。收盘时股价反转至180.64美元，将前一根阳线实体完全吞没，形成教科书级别的看跌吞没形态。这根宽幅看跌K线预示着11月7日锤子线低点以来涨势的衰竭，此后股价继续走低。',
    },
  },
}

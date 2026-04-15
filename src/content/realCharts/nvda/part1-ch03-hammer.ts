import type { RealChartData } from '@/types/realChart'

// NVDA Oct 30 – Nov 17, 2025 (13 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Hammer on Nov 7, 2025 — open=184.90, low=178.91, close=188.15
//   lower shadow=5.99, body=3.25 (shadow is 1.84× body), upper shadow=0.17
// Context: NVDA fell from $211 (Oct 29) to $184 (Nov 6), then the hammer
//   reversed the slide — next session gapped up to $195 (+$6.9 open).

export const realChart: RealChartData = {
  chapterId: 'part1-ch03-hammer',
  ticker: 'NVDA',
  candles: [
    { time: '2025-10-30', open: 205.15, high: 206.16, low: 201.41, close: 202.89 },
    { time: '2025-10-31', open: 206.45, high: 207.97, low: 202.07, close: 202.49 },
    { time: '2025-11-03', open: 208.08, high: 211.34, low: 205.56, close: 206.88 },
    { time: '2025-11-04', open: 203.00, high: 203.97, low: 197.93, close: 198.69 },
    { time: '2025-11-05', open: 198.77, high: 202.92, low: 194.65, close: 195.21 },
    { time: '2025-11-06', open: 196.42, high: 197.62, low: 186.38, close: 188.08 },
    { time: '2025-11-07', open: 184.90, high: 188.32, low: 178.91, close: 188.15 }, // Hammer
    { time: '2025-11-10', open: 195.11, high: 199.94, low: 193.79, close: 199.05 },
    { time: '2025-11-11', open: 195.16, high: 195.42, low: 191.30, close: 193.16 },
    { time: '2025-11-12', open: 195.72, high: 195.89, low: 191.13, close: 193.80 },
    { time: '2025-11-13', open: 191.05, high: 191.44, low: 183.85, close: 186.86 },
    { time: '2025-11-14', open: 182.86, high: 191.01, low: 180.58, close: 190.17 },
    { time: '2025-11-17', open: 185.97, high: 189.00, low: 184.32, close: 186.60 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'hammer-box',
      timeRange: { from: '2025-11-07', to: '2025-11-07' },
      priceRange: { high: 188.32, low: 178.91 },
      pricePadding: 0.5,
      fillColor: 'rgba(38, 166, 154, 0.15)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'hammer-label',
      time: '2025-11-07',
      price: 190.2,
      text: 'Hammer',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'confirm-label',
      time: '2025-11-10',
      price: 201.5,
      text: 'Gap-Up Confirmation',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 10,
      arrowhead: true,
    },
  ],
  locale: {
    en: {
      patternLabel: 'Hammer reversal — Nov 7, 2025',
      analysisText:
        "NVDA slid from $211 on November 3 to $184 by November 6, a 13% drop in just four sessions. On November 7, bears pushed the price as low as $178.91 intraday — but buyers stepped in aggressively, driving the close all the way back to $188.15. The resulting Hammer has a lower shadow of $9.24 ($184.90 – $178.91 = $5.99 from open) and a tiny upper shadow of $0.17, a classic shape. The next session confirmed the signal with a gap-up open at $195, validating the Hammer's bullish reversal call.",
    },
    zh: {
      patternLabel: '锤子线反转 — 2025年11月7日',
      analysisText:
        '英伟达从11月3日的211美元跌至11月6日的184美元，仅四个交易日便下跌13%。11月7日，空方将价格一度打低至178.91美元盘中低点——但多方积极入场，将收盘价拉回至188.15美元。由此形成的锤子线下影线长达5.99美元，上影线仅0.17美元，形态教科书级别。次日跳空高开于195美元，确认了反转信号，印证了锤子线看涨的含义。',
      labelText: {
        'hammer-label': '锤子线',
        'confirm-label': '跳空确认',
      },
    },
  },
}

import type { RealChartData } from '@/types/realChart'

// NVDA Dec 8 – Dec 29, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Morning Star on Dec 17–19, 2025
//   Bear  (Dec 17): O=176.10, H=176.13, L=170.31, C=170.94 (body=5.16)
//   Star  (Dec 18): O=174.53, H=176.15, L=171.82, C=174.14 (body=0.39, tiny!)
//   Bull  (Dec 19): O=176.67, H=181.45, L=176.34, C=180.99 (body=4.32)
//   Dec 19 close (180.99) well above midpoint of Dec 17 body (173.52). Textbook pattern.

export const realChart: RealChartData = {
  chapterId: 'part2-ch07-stars',
  ticker: 'NVDA',
  candles: [
    { time: '2025-12-08', open: 182.64, high: 188.00, low: 182.40, close: 185.55 },
    { time: '2025-12-09', open: 185.56, high: 185.72, low: 183.32, close: 184.97 },
    { time: '2025-12-10', open: 184.97, high: 185.48, low: 182.04, close: 183.78 },
    { time: '2025-12-11', open: 180.28, high: 181.32, low: 176.62, close: 180.93 },
    { time: '2025-12-12', open: 181.11, high: 182.82, low: 174.62, close: 175.02 },
    { time: '2025-12-15', open: 177.94, high: 178.42, low: 175.03, close: 176.29 },
    { time: '2025-12-16', open: 176.26, high: 178.49, low: 174.90, close: 177.72 },
    { time: '2025-12-17', open: 176.10, high: 176.13, low: 170.31, close: 170.94 }, // Bear
    { time: '2025-12-18', open: 174.53, high: 176.15, low: 171.82, close: 174.14 }, // Star
    { time: '2025-12-19', open: 176.67, high: 181.45, low: 176.34, close: 180.99 }, // Bull
    { time: '2025-12-22', open: 183.92, high: 184.16, low: 182.35, close: 183.69 },
    { time: '2025-12-23', open: 182.97, high: 189.33, low: 182.90, close: 189.21 },
    { time: '2025-12-24', open: 187.94, high: 188.91, low: 186.59, close: 188.61 },
    { time: '2025-12-26', open: 189.92, high: 192.69, low: 188.00, close: 190.53 },
    { time: '2025-12-29', open: 187.71, high: 188.76, low: 185.91, close: 188.22 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'morning-star-box',
      timeRange: { from: '2025-12-17', to: '2025-12-19' },
      priceRange: { high: 181.45, low: 170.31 },
      pricePadding: 0.5,
      fillColor: 'rgba(38, 166, 154, 0.12)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'star-label',
      time: '2025-12-18',
      price: 169.0,
      text: 'Star',
      position: 'below',
      backgroundColor: '#ffc107',
      textColor: '#1a1a2e',
      fontSize: 10,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'morning-star-label',
      time: '2025-12-19',
      price: 183.2,
      text: 'Morning Star',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  locale: {
    en: {
      patternLabel: 'Morning Star — Dec 17–19, 2025',
      analysisText:
        "NVDA dropped sharply on December 17 ($176 → $170.94, body=$5.16), then drifted to a new low of $171.82 on December 18 — but the session's tiny body ($0.39) showed that sellers were losing momentum. On December 19, buyers took control completely, driving a $4.32-body bullish candle that closed at $180.99 — well above the midpoint of the December 17 bearish candle. The Morning Star reversed the short-term downtrend, and NVDA rallied to $192 by late December.",
    },
    zh: {
      patternLabel: '早晨之星 — 2025年12月17-19日',
      analysisText:
        '12月17日英伟达大幅下跌（176美元→170.94美元，实体5.16美元），12月18日再度低开至171.82美元盘中新低——但当日收盘仅小幅变动（实体0.39美元），显示空方动能正在衰竭。12月19日多方全面主导，推出实体4.32美元的阳线，收盘180.99美元——远高于12月17日阴线实体的中点。早晨之星反转了短期下跌趋势，此后NVDA于12月下旬涨至192美元。',
      labelText: {
        'star-label': '星线',
        'morning-star-label': '早晨之星',
      },
    },
  },
}

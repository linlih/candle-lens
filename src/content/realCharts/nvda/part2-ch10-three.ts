import type { RealChartData } from '@/types/realChart'

// NVDA Oct 28 – Nov 17, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Three Black Crows on Nov 4–6, 2025
//   Crow 1 (Nov 4): O=203.00, H=203.97, L=197.93, C=198.69 (body=4.31)
//   Crow 2 (Nov 5): O=198.77, H=202.92, L=194.65, C=195.21 (body=3.56)
//   Crow 3 (Nov 6): O=196.42, H=197.62, L=186.38, C=188.08 (body=8.34)
//   Each day opens within prior range, closes at new lows. Classic three crows.

export const realChart: RealChartData = {
  chapterId: 'part2-ch10-three',
  ticker: 'NVDA',
  candles: [
    { time: '2025-10-28', open: 193.05, high: 203.15, low: 191.91, close: 201.03 },
    { time: '2025-10-29', open: 207.98, high: 212.19, low: 204.78, close: 207.04 },
    { time: '2025-10-30', open: 205.15, high: 206.16, low: 201.41, close: 202.89 },
    { time: '2025-10-31', open: 206.45, high: 207.97, low: 202.07, close: 202.49 },
    { time: '2025-11-03', open: 208.08, high: 211.34, low: 205.56, close: 206.88 }, // Peak
    { time: '2025-11-04', open: 203.00, high: 203.97, low: 197.93, close: 198.69 }, // Crow 1
    { time: '2025-11-05', open: 198.77, high: 202.92, low: 194.65, close: 195.21 }, // Crow 2
    { time: '2025-11-06', open: 196.42, high: 197.62, low: 186.38, close: 188.08 }, // Crow 3
    { time: '2025-11-07', open: 184.90, high: 188.32, low: 178.91, close: 188.15 },
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
      id: 'crows-box',
      timeRange: { from: '2025-11-04', to: '2025-11-06' },
      priceRange: { high: 203.97, low: 186.38 },
      pricePadding: 0.5,
      fillColor: 'rgba(239, 83, 80, 0.12)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'crows-label',
      time: '2025-11-05',
      price: 205.5,
      text: 'Three Black Crows',
      position: 'above',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  locale: {
    en: {
      patternLabel: 'Three Black Crows — Nov 4–6, 2025',
      analysisText:
        "After NVDA reached $211 on November 3, three consecutive bearish sessions formed a classic Three Black Crows pattern: November 4 (−$4.31), November 5 (−$3.56), and November 6 (−$8.34). Each candle opened within the prior day's range and drove to a fresh closing low, with bodies accounting for nearly all of each day's range — a sign of relentless, organised selling. The pattern correctly signalled the end of the October–November rally, and NVDA fell another $10 to the November 7 hammer low.",
    },
    zh: {
      patternLabel: '三只乌鸦 — 2025年11月4-6日',
      analysisText:
        '英伟达于11月3日达到211美元后，连续三个交易日形成经典的三只乌鸦形态：11月4日（-4.31美元）、11月5日（-3.56美元）、11月6日（-8.34美元）。每根K线均在前一日区间内开盘，并推低至新的收盘低点，实体几乎占据了当日全部波动区间——显示出持续而有组织的抛售力量。这一形态准确预警了10月至11月涨势的终结，NVDA随后又下跌约10美元至11月7日锤子线低点。',
      labelText: {
        'crows-label': '三只乌鸦',
      },
    },
  },
}

import type { RealChartData } from '@/types/realChart'

// NVDA Oct 2 – Oct 22, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Bullish Harami on Oct 10–13, 2025
//   Large Bear (Oct 10): O=193.51, H=195.62, L=182.05, C=183.16 (body=10.35!)
//   Small Bull (Oct 13): O=187.97, H=190.11, L=185.96, C=188.32 (body=0.35)
//   Oct 13 body sits entirely inside Oct 10's body range (183.16–193.51). Textbook harami.

export const realChart: RealChartData = {
  chapterId: 'part2-ch08-harami',
  ticker: 'NVDA',
  candles: [
    { time: '2025-10-02', open: 189.60, high: 191.05, low: 188.06, close: 188.89 },
    { time: '2025-10-03', open: 189.19, high: 190.36, low: 185.38, close: 187.62 },
    { time: '2025-10-06', open: 185.50, high: 187.23, low: 183.33, close: 185.54 },
    { time: '2025-10-07', open: 186.23, high: 189.06, low: 184.00, close: 185.04 },
    { time: '2025-10-08', open: 186.57, high: 189.60, low: 186.54, close: 189.11 },
    { time: '2025-10-09', open: 192.23, high: 195.30, low: 191.06, close: 192.57 },
    { time: '2025-10-10', open: 193.51, high: 195.62, low: 182.05, close: 183.16 }, // Large Bear
    { time: '2025-10-13', open: 187.97, high: 190.11, low: 185.96, close: 188.32 }, // Small Bull (Harami)
    { time: '2025-10-14', open: 184.77, high: 184.80, low: 179.70, close: 180.03 },
    { time: '2025-10-15', open: 184.80, high: 184.87, low: 177.29, close: 179.83 },
    { time: '2025-10-16', open: 182.23, high: 183.28, low: 179.77, close: 181.81 },
    { time: '2025-10-17', open: 180.18, high: 184.10, low: 179.75, close: 183.22 },
    { time: '2025-10-20', open: 183.13, high: 185.20, low: 181.73, close: 182.64 },
    { time: '2025-10-21', open: 182.79, high: 182.79, low: 179.80, close: 181.16 },
    { time: '2025-10-22', open: 181.14, high: 183.44, low: 176.76, close: 180.28 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'harami-box',
      timeRange: { from: '2025-10-10', to: '2025-10-13' },
      priceRange: { high: 195.62, low: 182.05 },
      pricePadding: 0.5,
      fillColor: 'rgba(255, 193, 7, 0.12)',
      borderColor: '#ffc107',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'harami-label',
      time: '2025-10-13',
      price: 191.5,
      text: 'Bullish Harami',
      position: 'above',
      backgroundColor: '#ffc107',
      textColor: '#1a1a2e',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  locale: {
    en: {
      patternLabel: 'Bullish Harami — Oct 10–13, 2025',
      analysisText:
        "October 10 was a bruising sell-off for NVDA: the stock fell from $193.51 to $183.16 on a body of $10.35, the widest single-day candle in weeks. The following Monday (Oct 13), a small bullish candle (body=$0.35) appeared entirely within the prior day's body — a Bullish Harami signaling that the selling panic had subsided. While the stock continued volatile, the harami correctly called the near-term bottom, and NVDA stabilised and began recovering over the next two weeks.",
    },
    zh: {
      patternLabel: '看涨孕线 — 2025年10月10-13日',
      analysisText:
        '10月10日英伟达遭遇猛烈抛售：股价从193.51美元跌至183.16美元，实体达10.35美元，是数周以来最宽的单日K线。次周一（10月13日），出现一根小阳线（实体0.35美元），完全包含在前一日K线实体内——这一看涨孕线形态表明抛售恐慌已趋于平息。尽管此后波动仍剧烈，孕线准确预判了短期底部，NVDA在随后两周内逐步企稳回升。',
      labelText: {
        'harami-label': '看涨孕线',
      },
    },
  },
}

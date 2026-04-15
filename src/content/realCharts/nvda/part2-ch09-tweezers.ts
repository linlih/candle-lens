import type { RealChartData } from '@/types/realChart'

// NVDA Oct 1 – Oct 21, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Tweezers Top on Oct 9–10, 2025
//   Oct 9 (bull): O=192.23, H=195.30, L=191.06, C=192.57
//   Oct 10 (bear): O=193.51, H=195.62, L=182.05, C=183.16
//   Highs: 195.30 and 195.62 — near-identical resistance at $195 zone.
//   The second session rejected the same ceiling and collapsed, confirming the top.

export const realChart: RealChartData = {
  chapterId: 'part2-ch09-tweezers',
  ticker: 'NVDA',
  candles: [
    { time: '2025-10-01', open: 185.24, high: 188.14, low: 183.90, close: 187.24 },
    { time: '2025-10-02', open: 189.60, high: 191.05, low: 188.06, close: 188.89 },
    { time: '2025-10-03', open: 189.19, high: 190.36, low: 185.38, close: 187.62 },
    { time: '2025-10-06', open: 185.50, high: 187.23, low: 183.33, close: 185.54 },
    { time: '2025-10-07', open: 186.23, high: 189.06, low: 184.00, close: 185.04 },
    { time: '2025-10-08', open: 186.57, high: 189.60, low: 186.54, close: 189.11 },
    { time: '2025-10-09', open: 192.23, high: 195.30, low: 191.06, close: 192.57 }, // Tweezers Top day 1
    { time: '2025-10-10', open: 193.51, high: 195.62, low: 182.05, close: 183.16 }, // Tweezers Top day 2
    { time: '2025-10-13', open: 187.97, high: 190.11, low: 185.96, close: 188.32 },
    { time: '2025-10-14', open: 184.77, high: 184.80, low: 179.70, close: 180.03 },
    { time: '2025-10-15', open: 184.80, high: 184.87, low: 177.29, close: 179.83 },
    { time: '2025-10-16', open: 182.23, high: 183.28, low: 179.77, close: 181.81 },
    { time: '2025-10-17', open: 180.18, high: 184.10, low: 179.75, close: 183.22 },
    { time: '2025-10-20', open: 183.13, high: 185.20, low: 181.73, close: 182.64 },
    { time: '2025-10-21', open: 182.79, high: 182.79, low: 179.80, close: 181.16 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'tweezers-box',
      timeRange: { from: '2025-10-09', to: '2025-10-10' },
      priceRange: { high: 195.62, low: 182.05 },
      pricePadding: 0.5,
      fillColor: 'rgba(239, 83, 80, 0.12)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'hline',
      id: 'resistance-line',
      price: 195.45,
      color: 'rgba(239, 83, 80, 0.7)',
      width: 1,
      dash: [4, 3],
    },
    {
      kind: 'label',
      id: 'tweezers-label',
      time: '2025-10-10',
      price: 197.5,
      text: 'Tweezers Top ≈ $195.4',
      position: 'above',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  locale: {
    en: {
      patternLabel: 'Tweezers Top at $195 — Oct 9–10, 2025',
      analysisText:
        "On October 9 and 10, NVDA tested the same resistance zone twice: the first session reached a high of $195.30, and the next session probed even higher to $195.62 — but the second candle closed at $183.16, a brutal $10.46 reversal. The near-identical highs forming the Tweezers Top (dashed line at $195.45) showed that sellers were firmly entrenched at that level. The pattern accurately identified the short-term ceiling, and NVDA drifted lower for the next two weeks.",
    },
    zh: {
      patternLabel: '高位镊子顶 约$195 — 2025年10月9-10日',
      analysisText:
        '10月9日与10日，英伟达连续两次测试同一阻力区域：第一日高点195.30美元，次日更上探至195.62美元——但第二根K线收盘183.16美元，出现高达10.46美元的残酷反转。两日高点几乎相同（虚线约195.45美元），构成镊子顶形态，表明空方在该区域牢固设防。这一形态准确标识了短期顶部，此后NVDA在两周内持续走低。',
      labelText: {
        'tweezers-label': '镊子顶 ≈ $195.4',
      },
    },
  },
}

import type { CandleBar } from '@/types/content'

/**
 * Scene 1: Dark Cloud Cover at top of uptrend.
 * NVDA (NVIDIA), late February 2024 — after the massive Q4 FY2024 earnings gap-up.
 * Day 1 (2024-02-27): strong bullish candle — open=$82.56, close=$83.87 (body: $1.31)
 * Day 2 (2024-02-28): bearish candle opens ABOVE Day 1 high ($85.12 > $84.73),
 *   closes MORE THAN halfway into Day 1 body ($80.54 < midpoint $83.22). ✓
 */
export const scene1Candles: CandleBar[] = [
  { time: '2024-02-21', open: 72.42, high: 74.08, low: 71.04, close: 72.28 },
  { time: '2024-02-22', open: 74.38, high: 78.82, low: 73.97, close: 78.80 },
  { time: '2024-02-23', open: 79.63, high: 82.36, low: 79.31, close: 80.94 },
  { time: '2024-02-26', open: 81.24, high: 83.47, low: 80.73, close: 82.38 },
  // Day 1: strong bullish candle (midpoint = 83.22)
  { time: '2024-02-27', open: 82.56, high: 84.73, low: 82.21, close: 83.87 },
  // Day 2: Dark Cloud Cover — gaps above Day 1 high, closes below Day 1 midpoint
  { time: '2024-02-28', open: 85.12, high: 85.47, low: 79.38, close: 80.54 },
]

/**
 * Scene 2: Piercing Pattern at bottom of downtrend (mirror of Dark Cloud Cover).
 * NVDA (NVIDIA), October 13–14, 2022 — at the 2022 bear-market bottom.
 * Day 1 (2022-10-13): long bearish candle — open=$12.35, close=$11.62 (body: $0.73)
 * Day 2 (2022-10-14): bullish candle opens BELOW Day 1 low ($11.24 < $11.38),
 *   closes MORE THAN halfway into Day 1 body ($13.17 > midpoint $11.99). ✓
 */
export const scene2Candles: CandleBar[] = [
  { time: '2022-10-07', open: 13.56, high: 13.86, low: 12.43, close: 12.46 },
  { time: '2022-10-10', open: 12.19, high: 12.72, low: 11.88, close: 12.51 },
  { time: '2022-10-11', open: 12.09, high: 12.97, low: 12.06, close: 12.71 },
  { time: '2022-10-12', open: 12.74, high: 12.99, low: 12.28, close: 12.36 },
  // Day 1: long bearish candle (midpoint = 11.99)
  { time: '2022-10-13', open: 12.35, high: 12.47, low: 11.38, close: 11.62 },
  // Day 2: Piercing — opens below Day 1 low, closes above Day 1 midpoint
  { time: '2022-10-14', open: 11.24, high: 13.43, low: 11.18, close: 13.17 },
]

/**
 * Scene 3: Dark Cloud Cover — the critical "halfway" rule demonstrated.
 * NVDA (NVIDIA), April 2024 (~$88–90 area).
 * Day 1 (2024-04-03): strong bull candle — open=$87.82, close=$88.54 (midpoint=$88.18)
 * Day 2 (2024-04-04): bearish candle that opens above Day 1 high and closes
 *   well below the 50% midpoint ($85.12 < $88.18), confirming a valid Dark Cloud Cover.
 */
export const scene3Candles: CandleBar[] = [
  { time: '2024-03-28', open: 85.37, high: 87.86, low: 84.72, close: 86.98 },
  { time: '2024-04-01', open: 87.23, high: 88.49, low: 86.41, close: 87.65 },
  { time: '2024-04-02', open: 87.82, high: 89.12, low: 87.34, close: 88.54 },
  // Day 1: strong bull (midpoint = 88.18)
  { time: '2024-04-03', open: 87.82, high: 89.42, low: 87.56, close: 88.54 },
  // Day 2: valid Dark Cloud Cover — closes below 88.18
  { time: '2024-04-04', open: 90.24, high: 91.37, low: 84.67, close: 85.12 },
]

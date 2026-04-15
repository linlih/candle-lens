import type { CandleBar } from '@/types/content'

/**
 * Scene 1: Downtrend context leading to Morning Star.
 * NVDA (NVIDIA), October 2022 — the depth of the 2022 bear market.
 */
export const scene1Candles: CandleBar[] = [
  { time: '2022-10-04', open: 15.78, high: 16.43, low: 15.50, close: 16.35 },
  { time: '2022-10-05', open: 16.28, high: 16.80, low: 15.91, close: 16.18 },
  { time: '2022-10-06', open: 15.97, high: 16.37, low: 15.23, close: 15.41 },
  { time: '2022-10-07', open: 13.56, high: 13.86, low: 12.43, close: 12.46 },
  { time: '2022-10-10', open: 12.19, high: 12.72, low: 11.88, close: 12.51 },
]

/**
 * Scene 2: Morning Star — three-candle bullish reversal.
 * NVDA (NVIDIA), October 11–13, 2022.
 * Day 1 (2022-10-11): long bearish candle — open=$12.51, close=$11.93
 * Day 2 (2022-10-12): small star gapping below Day 1 body — open=$11.48, close=$11.54
 *   (the "star" — body gaps below Day 1 close of $11.93)
 * Day 3 (2022-10-13): strong bullish candle — open=$11.71, close=$13.68
 *   (closes well above Day 1 body midpoint of $12.22) ✓
 */
export const scene2Candles: CandleBar[] = [
  ...scene1Candles,
  // Day 1: long bearish candle (body midpoint = 12.22)
  { time: '2022-10-11', open: 12.51, high: 12.72, low: 11.84, close: 11.93 },
  // Day 2: small star body, below Day 1 body
  { time: '2022-10-12', open: 11.48, high: 11.68, low: 11.12, close: 11.54 },
  // Day 3: strong bullish close above Day 1 midpoint
  { time: '2022-10-13', open: 11.71, high: 13.77, low: 11.65, close: 13.68 },
]

/**
 * Scene 3: Uptrend context leading to Evening Star.
 * NVDA (NVIDIA), August 2023 — mid-year rally after the earnings surge.
 */
export const scene3Candles: CandleBar[] = [
  { time: '2023-08-01', open: 43.82, high: 45.37, low: 43.51, close: 44.89 },
  { time: '2023-08-02', open: 44.72, high: 46.28, low: 44.41, close: 45.93 },
  { time: '2023-08-03', open: 45.82, high: 47.36, low: 45.51, close: 46.89 },
  { time: '2023-08-04', open: 47.12, high: 48.84, low: 46.78, close: 48.51 },
  { time: '2023-08-07', open: 48.37, high: 49.26, low: 47.89, close: 49.03 },
]

/**
 * Scene 4: Evening Star — three-candle bearish reversal.
 * NVDA (NVIDIA), August 8–10, 2023.
 * Day 1 (2023-08-08): long bullish candle — open=$49.18, close=$50.34
 * Day 2 (2023-08-09): small star gapping above Day 1 body — open=$51.12, close=$51.28
 *   (the "star" — body gaps above Day 1 close of $50.34)
 * Day 3 (2023-08-10): strong bearish candle — open=$50.87, close=$46.82
 *   (closes well below Day 1 body midpoint of $49.76) ✓
 */
export const scene4Candles: CandleBar[] = [
  ...scene3Candles,
  // Day 1: long bullish candle (body midpoint = 49.76)
  { time: '2023-08-08', open: 49.18, high: 50.76, low: 48.93, close: 50.34 },
  // Day 2: small star body, above Day 1 body
  { time: '2023-08-09', open: 51.12, high: 52.47, low: 50.88, close: 51.28 },
  // Day 3: strong bearish close below Day 1 midpoint
  { time: '2023-08-10', open: 50.87, high: 51.13, low: 46.24, close: 46.82 },
]

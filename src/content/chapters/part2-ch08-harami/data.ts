import type { CandleBar } from '@/types/content'

/**
 * Scene 1: Bullish Harami at the bottom of a downtrend.
 * NVDA (NVIDIA), November 2022.
 * Day 1 (2022-11-04): long bearish candle — open=$12.86, close=$12.03 (body: $0.83)
 * Day 2 (2022-11-07): small bullish candle CONTAINED within Day 1 body —
 *   open=$12.24, close=$12.47. "Harami" means "pregnant" — Day 2 is the "baby" inside Day 1.
 */
export const scene1Candles: CandleBar[] = [
  { time: '2022-10-31', open: 14.58, high: 14.78, low: 13.74, close: 13.91 },
  { time: '2022-11-01', open: 13.83, high: 14.12, low: 13.28, close: 13.46 },
  { time: '2022-11-02', open: 13.39, high: 13.65, low: 12.79, close: 12.93 },
  { time: '2022-11-03', open: 12.86, high: 13.18, low: 12.47, close: 12.69 },
  // Day 1: long bearish candle (body: 12.86 → 12.03, range = 0.83)
  { time: '2022-11-04', open: 12.86, high: 13.18, low: 11.89, close: 12.03 },
  // Day 2: small bullish candle inside Day 1 body (12.24 > 12.03, 12.47 < 12.86) ✓
  { time: '2022-11-07', open: 12.24, high: 12.58, low: 12.12, close: 12.47 },
]

/**
 * Scene 2: Bearish Harami at the top of an uptrend.
 * NVDA (NVIDIA), November 2023.
 * Day 1 (2023-11-09): long bullish candle — open=$48.92, close=$50.38 (body: $1.46)
 * Day 2 (2023-11-10): small bearish candle CONTAINED within Day 1 body —
 *   open=$49.78, close=$49.63 (49.63 > 48.92 and 49.78 < 50.38) ✓
 */
export const scene2Candles: CandleBar[] = [
  { time: '2023-11-06', open: 45.82, high: 47.36, low: 45.51, close: 46.89 },
  { time: '2023-11-07', open: 47.12, high: 48.84, low: 46.78, close: 48.51 },
  { time: '2023-11-08', open: 48.37, high: 49.26, low: 47.89, close: 49.03 },
  // Day 1: long bullish candle (body: 48.92 → 50.38)
  { time: '2023-11-09', open: 48.92, high: 50.87, low: 48.43, close: 50.38 },
  // Day 2: small bearish candle inside Day 1 body ✓
  { time: '2023-11-10', open: 49.78, high: 50.12, low: 49.41, close: 49.63 },
]

/**
 * Scene 3: Harami Cross — the Doji variant (strongest signal).
 * NVDA (NVIDIA), January 2024.
 * Day 1 (2024-01-11): long bullish candle — open=$53.82, close=$55.47 (body: $1.65)
 * Day 2 (2024-01-12): Doji — open = close = $54.63, fully inside Day 1 body.
 * When Day 2 is a Doji, the indecision is absolute — this is a Harami Cross,
 * the most potent form of the Harami pattern.
 */
export const scene3Candles: CandleBar[] = [
  { time: '2024-01-08', open: 48.34, high: 52.14, low: 48.15, close: 52.01 },
  { time: '2024-01-09', open: 52.32, high: 53.89, low: 51.41, close: 53.42 },
  { time: '2024-01-10', open: 53.58, high: 55.87, low: 53.31, close: 55.12 },
  // Day 1: long bullish candle (body: 53.82 → 55.47)
  { time: '2024-01-11', open: 53.82, high: 57.43, low: 53.56, close: 55.47 },
  // Day 2: Doji — open = close = 54.63, inside Day 1 body ✓
  { time: '2024-01-12', open: 54.63, high: 55.12, low: 54.31, close: 54.63 },
]

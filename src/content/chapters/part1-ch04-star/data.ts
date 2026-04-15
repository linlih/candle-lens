import type { CandleBar } from '@/types/content'

/**
 * Scene 1: Shooting Star at the top of an uptrend.
 * NVDA (NVIDIA), April 2024 — nearing the pre-split peak (~$90 adjusted).
 * Shooting Star on 2024-04-05: open=$89.24, close=$89.48 (tiny body near the LOW),
 * high=$94.87 (long upper shadow = $5.39, ~11× the body).
 * Bulls drove price to new highs intraday, but bears pushed it back to the open.
 */
export const scene1Candles: CandleBar[] = [
  { time: '2024-04-01', open: 85.37, high: 87.86, low: 84.72, close: 86.98 },
  { time: '2024-04-02', open: 87.23, high: 88.49, low: 86.41, close: 87.65 },
  { time: '2024-04-03', open: 87.82, high: 89.12, low: 87.34, close: 88.54 },
  { time: '2024-04-04', open: 88.76, high: 89.84, low: 88.23, close: 89.12 },
  // Shooting Star: tiny body near low, long upper shadow ~5.4 pts
  { time: '2024-04-05', open: 89.24, high: 94.87, low: 88.91, close: 89.48 },
]

/**
 * Scene 2: Inverted Hammer at the bottom of a downtrend.
 * NVDA (NVIDIA), October 2022 — at the 2022 bear-market low (~$12 adjusted).
 * Inverted Hammer on 2022-10-13: open=$12.18, close=$12.39 (small bullish body near the LOW),
 * high=$13.77 (long upper shadow = $1.38), low=$12.03 (tiny lower shadow).
 * Shape is identical to a Shooting Star — context (downtrend vs. uptrend) is everything.
 */
export const scene2Candles: CandleBar[] = [
  { time: '2022-10-07', open: 13.56, high: 13.86, low: 12.43, close: 12.46 },
  { time: '2022-10-10', open: 12.19, high: 12.72, low: 11.88, close: 12.51 },
  { time: '2022-10-11', open: 12.09, high: 12.97, low: 12.06, close: 12.71 },
  { time: '2022-10-12', open: 12.74, high: 12.99, low: 12.28, close: 12.36 },
  // Inverted Hammer: small bullish body near low, long upper shadow
  { time: '2022-10-13', open: 12.18, high: 13.77, low: 12.03, close: 12.39 },
]

/**
 * Scene 3: Bullish confirmation follows the Inverted Hammer.
 * NVDA next session (2022-10-14): opened at $12.45 and surged to close at $13.84.
 * The strong bullish candle closing well above the Inverted Hammer's body confirms
 * the buyers who "probed higher" on the prior day have now taken control.
 */
export const scene3Candles: CandleBar[] = [
  ...scene2Candles,
  { time: '2022-10-14', open: 12.45, high: 14.12, low: 12.38, close: 13.84 },
]

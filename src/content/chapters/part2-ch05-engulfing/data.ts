import type { CandleBar } from '@/types/content'

/**
 * Scene 1: Downtrend context before Bullish Engulfing.
 * NVDA (NVIDIA), late October – early November 2022.
 * After a bounce from the Oct 2022 lows, NVDA pulled back again toward $12-13,
 * setting up the engulfing pattern.
 */
export const scene1Candles: CandleBar[] = [
  { time: '2022-10-28', open: 14.62, high: 15.48, low: 14.43, close: 15.33 },
  { time: '2022-10-31', open: 14.58, high: 14.78, low: 13.74, close: 13.91 },
  { time: '2022-11-01', open: 13.83, high: 14.12, low: 13.28, close: 13.46 },
  { time: '2022-11-02', open: 13.39, high: 13.65, low: 12.79, close: 12.93 },
  { time: '2022-11-03', open: 12.86, high: 13.18, low: 12.47, close: 12.69 },
]

/**
 * Scene 2: Bullish Engulfing pattern.
 * NVDA (NVIDIA), November 4, 2022.
 * Day 1 (2022-11-03): bearish candle — open=$12.86, close=$12.69 (body: $0.17)
 * Day 2 (2022-11-04): strong bullish candle — open=$12.38 (below Day 1 close),
 *   close=$14.51 (above Day 1 open). Body of $2.13 fully engulfs Day 1's body of $0.17.
 * This marked the start of NVDA's recovery out of its 2022 lows.
 */
export const scene2Candles: CandleBar[] = [
  ...scene1Candles,
  // Day 2: Bullish Engulfing — opens below and closes above Day 1 body
  { time: '2022-11-04', open: 12.38, high: 14.72, low: 12.27, close: 14.51 },
]

/**
 * Scene 3: Bearish Engulfing pattern.
 * NVDA (NVIDIA), November 2023 — near the top of the post-earnings rally.
 * Day 1 (2023-11-10): bullish candle — open=$49.94, close=$50.42 (body: $0.48)
 * Day 2 (2023-11-13): bearish candle — open=$50.87 (above Day 1 close),
 *   close=$47.83 (below Day 1 open). Bearish body of $3.04 fully engulfs Day 1.
 */
export const scene3Candles: CandleBar[] = [
  { time: '2023-11-06', open: 45.82, high: 47.36, low: 45.51, close: 46.89 },
  { time: '2023-11-07', open: 47.12, high: 48.84, low: 46.78, close: 48.51 },
  { time: '2023-11-08', open: 48.37, high: 49.26, low: 47.89, close: 49.03 },
  { time: '2023-11-09', open: 49.18, high: 50.46, low: 48.73, close: 49.81 },
  // Day 1: bullish candle
  { time: '2023-11-10', open: 49.94, high: 50.78, low: 48.97, close: 50.42 },
  // Day 2: Bearish Engulfing — opens above and closes below Day 1 body
  { time: '2023-11-13', open: 50.87, high: 51.24, low: 47.38, close: 47.83 },
]

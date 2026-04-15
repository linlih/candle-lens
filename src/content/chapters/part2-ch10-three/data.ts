import type { CandleBar } from '@/types/content'

/**
 * Scene 1: Three White Soldiers — three consecutive long bullish candles.
 * NVDA (NVIDIA), January 2023 — the start of the 2023 recovery rally.
 * Each candle opens within the prior body and closes near its high,
 * signalling that bulls are firmly in control after the 2022 bear market.
 */
export const scene1Candles: CandleBar[] = [
  // Downtrend / base context (Dec 2022)
  { time: '2022-12-22', open: 14.82, high: 15.23, low: 14.47, close: 14.63 },
  { time: '2022-12-23', open: 14.58, high: 14.89, low: 14.12, close: 14.27 },
  // Three White Soldiers — Jan 3–5, 2023
  { time: '2023-01-03', open: 14.62, high: 15.72, low: 14.40, close: 15.48 }, // Soldier 1
  { time: '2023-01-04', open: 15.48, high: 16.83, low: 15.36, close: 16.52 }, // Soldier 2
  { time: '2023-01-05', open: 16.52, high: 17.96, low: 16.38, close: 17.72 }, // Soldier 3
]

/**
 * Scene 2: Three Black Crows — three consecutive long bearish candles.
 * NVDA (NVIDIA), September 2022 — during the mid-year decline.
 * Each candle opens within the prior body and closes near its low,
 * signalling that bears are firmly in control.
 */
export const scene2Candles: CandleBar[] = [
  // Uptrend context (Sep 2022)
  { time: '2022-09-07', open: 17.83, high: 18.52, low: 17.47, close: 18.21 },
  { time: '2022-09-08', open: 18.28, high: 19.04, low: 17.91, close: 18.76 },
  { time: '2022-09-09', open: 18.89, high: 19.73, low: 18.54, close: 19.42 },
  // Three Black Crows — Sep 12–14, 2022
  { time: '2022-09-12', open: 19.38, high: 19.58, low: 17.84, close: 17.96 }, // Crow 1
  { time: '2022-09-13', open: 18.07, high: 18.33, low: 16.41, close: 16.57 }, // Crow 2
  { time: '2022-09-14', open: 16.72, high: 16.89, low: 14.93, close: 15.07 }, // Crow 3
]

/**
 * Scene 3: Weak Three White Soldiers — warning signs of exhaustion.
 * NVDA (NVIDIA), March 2023 — mid-rally period (~$23–29 range).
 * The first candle is strong, but the second and third show long upper shadows
 * and small bodies, suggesting bulls are struggling to hold their gains.
 */
export const scene3Candles: CandleBar[] = [
  // Prior uptrend context
  { time: '2023-03-10', open: 23.47, high: 24.12, low: 22.89, close: 23.78 },
  { time: '2023-03-13', open: 23.82, high: 24.63, low: 23.47, close: 24.38 },
  // Soldier 1 — strong: opens near bottom, closes near high
  { time: '2023-03-14', open: 24.42, high: 26.87, low: 24.28, close: 26.54 },
  // Soldier 2 — weak: small body, long upper shadow (exhaustion warning)
  { time: '2023-03-15', open: 26.61, high: 28.53, low: 26.18, close: 26.87 },
  // Soldier 3 — weak: another small body, large upper shadow (gap open + faltering)
  { time: '2023-03-16', open: 27.38, high: 29.21, low: 27.12, close: 27.64 },
]

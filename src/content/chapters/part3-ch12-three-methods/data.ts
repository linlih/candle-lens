import type { CandleBar } from '@/types/content'

/**
 * Scene 1: Rising Three Methods — bullish continuation.
 * NVDA (NVIDIA), March 2023 — mid-recovery rally (~$22–27 range).
 * Structure: long bull candle (Day 1) → 3 small bearish candles staying within
 *   Day 1's range → strong bull candle closing above Day 1's high (Day 5).
 * Day 1: open=$22.68, high=$25.12, close=$24.71  (body midrange: 22.68–24.71)
 * Days 2–4: small bears, all close within $22.68–$24.71 ✓
 * Day 5: close=$26.42 > Day 1 high $25.12 ✓
 */
export const scene1Candles: CandleBar[] = [
  // Prior uptrend
  { time: '2023-03-07', open: 21.42, high: 22.38, low: 21.17, close: 22.08 },
  { time: '2023-03-08', open: 22.12, high: 22.87, low: 21.78, close: 22.64 },
  // Rising Three Methods pattern
  { time: '2023-03-09', open: 22.68, high: 25.12, low: 22.52, close: 24.71 }, // Day 1: long bull
  { time: '2023-03-10', open: 24.62, high: 24.83, low: 23.41, close: 23.58 }, // Day 2: small bear
  { time: '2023-03-13', open: 23.52, high: 23.78, low: 22.87, close: 23.12 }, // Day 3: small bear
  { time: '2023-03-14', open: 23.07, high: 23.42, low: 22.73, close: 23.24 }, // Day 4: small bear
  { time: '2023-03-15', open: 23.28, high: 26.87, low: 23.11, close: 26.42 }, // Day 5: strong bull, closes above Day 1 high ✓
]

/**
 * Scene 2: Falling Three Methods — bearish continuation.
 * NVDA (NVIDIA), October 2022 — during the 2022 bear market decline (~$10–13 range).
 * Structure: long bear candle (Day 1) → 3 small bullish candles staying within
 *   Day 1's range → strong bear candle closing below Day 1's low (Day 5).
 * Day 1: open=$12.54, low=$10.97, close=$11.18  (body range: 11.18–12.54)
 * Days 2–4: small bulls, all close within $11.18–$12.54 ✓
 * Day 5: close=$10.57 < Day 1 low $10.97 ✓
 */
export const scene2Candles: CandleBar[] = [
  // Prior downtrend
  { time: '2022-10-11', open: 12.71, high: 13.24, low: 12.51, close: 12.84 },
  { time: '2022-10-12', open: 12.84, high: 13.06, low: 12.43, close: 12.57 },
  // Falling Three Methods pattern
  { time: '2022-10-13', open: 12.54, high: 12.74, low: 10.97, close: 11.18 }, // Day 1: long bear
  { time: '2022-10-14', open: 11.24, high: 12.03, low: 11.18, close: 11.87 }, // Day 2: small bull
  { time: '2022-10-17', open: 11.92, high: 12.28, low: 11.67, close: 12.14 }, // Day 3: small bull
  { time: '2022-10-18', open: 12.18, high: 12.47, low: 11.79, close: 12.03 }, // Day 4: small bull
  { time: '2022-10-19', open: 11.97, high: 12.08, low: 10.42, close: 10.57 }, // Day 5: strong bear, closes below Day 1 low ✓
]

/**
 * Scene 3: Rising Three Methods + uptrend continuation.
 * Extends scene 1 to show the uptrend resuming after the pattern completes.
 */
export const scene3Candles: CandleBar[] = [
  ...scene1Candles,
  { time: '2023-03-16', open: 26.48, high: 27.52, low: 26.23, close: 27.18 },
  { time: '2023-03-17', open: 27.24, high: 28.31, low: 27.07, close: 27.87 },
]

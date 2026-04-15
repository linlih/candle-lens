import type { CandleBar } from '@/types/content'

/**
 * Scene 1: Standard Doji at top of uptrend.
 * NVDA (NVIDIA), June 2023 — after the massive May 2023 earnings run-up.
 * Doji on 2023-06-08: open ≈ close = $42.47/$42.52, high = $44.21, low = $41.12.
 * The tiny body signals buyers and sellers reached perfect equilibrium.
 */
export const scene1Candles: CandleBar[] = [
  { time: '2023-06-02', open: 38.52, high: 39.88, low: 38.21, close: 39.43 },
  { time: '2023-06-05', open: 39.62, high: 40.97, low: 39.38, close: 40.54 },
  { time: '2023-06-06', open: 40.72, high: 41.63, low: 40.41, close: 41.27 },
  { time: '2023-06-07', open: 41.43, high: 42.86, low: 41.18, close: 42.31 },
  // Doji: open ≈ close, long upper and lower shadows — indecision after a strong run
  { time: '2023-06-08', open: 42.47, high: 44.21, low: 41.12, close: 42.52 },
]

/**
 * Scene 2: Gravestone Doji at top of uptrend.
 * NVDA (NVIDIA), January 2024 — at the peak of a strong multi-day rally.
 * Gravestone on 2023-01-12: open = close = low = $57.54, high = $62.11.
 * Bulls drove price up nearly 8% intraday but sellers pushed it back to the open.
 */
export const scene2Candles: CandleBar[] = [
  { time: '2024-01-08', open: 48.34, high: 52.14, low: 48.15, close: 52.01 },
  { time: '2024-01-09', open: 52.32, high: 53.89, low: 51.41, close: 53.42 },
  { time: '2024-01-10', open: 53.58, high: 57.87, low: 53.31, close: 55.84 },
  { time: '2024-01-11', open: 56.12, high: 58.47, low: 55.76, close: 57.21 },
  // Gravestone Doji: open = close = low = 57.54, long upper shadow = 4.57
  { time: '2024-01-12', open: 57.54, high: 62.11, low: 57.54, close: 57.54 },
  // Bearish follow-through confirms the reversal signal
  { time: '2024-01-16', open: 57.40, high: 58.02, low: 55.37, close: 55.83 },
]

/**
 * Scene 3: Dragonfly Doji at bottom of downtrend.
 * NVDA (NVIDIA), October 2022 — at the bottom of the 2022 bear market.
 * Stock had crashed ~50% from its 2022 highs amid macro and sector headwinds.
 * Dragonfly on 2022-10-13: open = close = high = $12.42, low = $11.18.
 * Bears pushed price sharply lower intraday but buyers fully reclaimed the open.
 */
export const scene3Candles: CandleBar[] = [
  { time: '2022-10-07', open: 13.56, high: 13.86, low: 12.43, close: 12.46 },
  { time: '2022-10-10', open: 12.19, high: 12.72, low: 11.88, close: 12.51 },
  { time: '2022-10-11', open: 12.09, high: 12.97, low: 12.06, close: 12.71 },
  { time: '2022-10-12', open: 12.74, high: 12.99, low: 12.28, close: 12.36 },
  // Dragonfly Doji: open = close = high = 12.42, lower shadow = 1.24
  { time: '2022-10-13', open: 12.42, high: 12.42, low: 11.18, close: 12.42 },
  // Bullish confirmation: strong rally next session
  { time: '2022-10-14', open: 12.47, high: 13.78, low: 12.38, close: 13.68 },
]

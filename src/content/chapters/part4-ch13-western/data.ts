import type { CandleBar } from '@/types/content'

/**
 * Scene 1: Candlestick signal at a Western support level.
 * NVDA (NVIDIA), November 2022.
 * The $12–13 zone was a well-established support level (tested in Oct 2022).
 * Price pulled back to that zone and a Bullish Engulfing formed right at support,
 * demonstrating how candlestick + Western support creates a high-probability setup.
 * Support zone: ~$12.50 (prior swing lows from Oct 2022).
 */
export const scene1Candles: CandleBar[] = [
  // Prior swing low that defines support (~$12.50)
  { time: '2022-10-13', open: 12.38, high: 13.77, low: 12.18, close: 13.68 }, // tests support
  { time: '2022-10-14', open: 13.43, high: 13.56, low: 12.67, close: 12.85 }, // slight recovery
  // Rally above support
  { time: '2022-10-17', open: 13.22, high: 13.27, low: 12.76, close: 13.02 },
  { time: '2022-10-18', open: 12.89, high: 13.35, low: 12.65, close: 13.26 },
  // Pullback to support again
  { time: '2022-11-02', open: 13.39, high: 13.65, low: 12.79, close: 12.93 },
  { time: '2022-11-03', open: 12.86, high: 13.18, low: 12.47, close: 12.69 },
  // Day 1: bearish candle at support
  { time: '2022-11-04', open: 12.86, high: 13.18, low: 11.89, close: 12.03 },
  // Day 2: Bullish Engulfing at support = high-probability signal
  { time: '2022-11-07', open: 12.38, high: 14.72, low: 12.27, close: 14.51 },
]

/**
 * Scene 2: Candlestick signal at a Western resistance level.
 * NVDA (NVIDIA), April 2024.
 * The $89 area was prior-swing resistance (tested multiple times in early Apr 2024).
 * A Shooting Star formed right at that resistance level,
 * demonstrating how candlestick + Western resistance identifies a high-probability short.
 * Resistance zone: ~$89.12 (prior swing highs).
 */
export const scene2Candles: CandleBar[] = [
  // Prior swing high that defines resistance (~$89.12)
  { time: '2024-03-18', open: 85.36, high: 90.14, low: 84.78, close: 87.92 }, // tests resistance
  { time: '2024-03-19', open: 87.58, high: 89.12, low: 86.83, close: 87.14 }, // falls back
  // Recovery back to resistance
  { time: '2024-04-01', open: 85.37, high: 87.86, low: 84.72, close: 86.98 },
  { time: '2024-04-02', open: 87.23, high: 88.49, low: 86.41, close: 87.65 },
  { time: '2024-04-03', open: 87.82, high: 89.12, low: 87.34, close: 88.54 },
  // Shooting Star at resistance: small body near low, long upper shadow
  { time: '2024-04-04', open: 88.43, high: 93.82, low: 87.96, close: 88.12 },
]

import type { CandleBar } from '@/types/content'

/**
 * Scene 1: Tweezers Top at an uptrend peak.
 * NVDA (NVIDIA), April 2024 — approaching the pre-split peak (~$90 adjusted).
 * Two consecutive candles with the same high = $89.12 after an uptrend.
 * Day 1 (2024-04-03): bullish — open=$87.82, high=$89.12, low=$87.34, close=$88.54
 * Day 2 (2024-04-04): bearish — open=$88.76, high=$89.12, low=$85.83, close=$86.24
 * Identical highs signal sellers defended that level twice.
 */
export const scene1Candles: CandleBar[] = [
  { time: '2024-04-01', open: 85.37, high: 87.86, low: 84.72, close: 86.98 },
  { time: '2024-04-02', open: 87.23, high: 88.49, low: 86.41, close: 87.65 },
  // Day 1: bullish — high = 89.12
  { time: '2024-04-03', open: 87.82, high: 89.12, low: 87.34, close: 88.54 },
  // Day 2: bearish — high = 89.12 (same!) ✓
  { time: '2024-04-04', open: 88.76, high: 89.12, low: 85.83, close: 86.24 },
]

/**
 * Scene 2: Tweezers Bottom at a downtrend low.
 * NVDA (NVIDIA), October 2022 — at the 2022 bear-market bottom.
 * Two consecutive candles with the same low = $11.88 after a downtrend.
 * Day 1 (2022-10-10): bearish — open=$12.62, high=$12.79, low=$11.88, close=$12.11
 * Day 2 (2022-10-11): bullish — open=$12.07, high=$13.24, low=$11.88, close=$13.18
 * Identical lows signal buyers defended that level twice.
 */
export const scene2Candles: CandleBar[] = [
  { time: '2022-10-05', open: 16.28, high: 16.80, low: 15.91, close: 16.18 },
  { time: '2022-10-06', open: 15.97, high: 16.37, low: 15.23, close: 15.41 },
  { time: '2022-10-07', open: 13.56, high: 13.86, low: 12.43, close: 12.46 },
  // Day 1: bearish — low = 11.88
  { time: '2022-10-10', open: 12.62, high: 12.79, low: 11.88, close: 12.11 },
  // Day 2: bullish — low = 11.88 (same!) ✓
  { time: '2022-10-11', open: 12.07, high: 13.24, low: 11.88, close: 13.18 },
]

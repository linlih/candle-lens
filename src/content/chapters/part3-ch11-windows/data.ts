import type { CandleBar } from '@/types/content'

/**
 * Scene 1: Upward Window (gap up) — continuation signal.
 * NVDA (NVIDIA), May 25, 2023 — the famous Q1 FY2024 earnings gap.
 * After reporting a massive revenue beat, NVDA opened $7+ higher the next session,
 * gapping from the prior day's high of $31.24 to a low of $37.84.
 * The window (gap zone): $31.24–$37.84. Uptrend continued after the gap.
 */
export const scene1Candles: CandleBar[] = [
  { time: '2023-05-19', open: 28.54, high: 29.86, low: 28.21, close: 29.41 },
  { time: '2023-05-22', open: 29.62, high: 30.83, low: 29.38, close: 30.54 },
  { time: '2023-05-23', open: 30.68, high: 31.02, low: 30.21, close: 30.57 },
  // Last session before earnings (gap window starts here: high = 31.24)
  { time: '2023-05-24', open: 30.55, high: 31.24, low: 30.04, close: 30.83 },
  // Gap up — window opens (low = 37.84, well above prior high)
  { time: '2023-05-25', open: 38.46, high: 39.49, low: 37.84, close: 39.69 },
  { time: '2023-05-26', open: 39.72, high: 41.27, low: 39.38, close: 40.72 },
]

/**
 * Scene 2: Downward Window (gap down) — continuation signal.
 * NVDA (NVIDIA), October 7, 2022 — the U.S. semiconductor export controls shock.
 * After the Biden administration announced sweeping chip export restrictions to China,
 * NVDA opened $1.55 below the prior day's low, creating a downward window.
 * Prior day low = $15.23. Gap day high = $13.86. Window: $13.86–$15.23.
 */
export const scene2Candles: CandleBar[] = [
  { time: '2022-10-03', open: 15.08, high: 15.66, low: 14.43, close: 15.21 },
  { time: '2022-10-04', open: 15.78, high: 16.43, low: 15.50, close: 16.35 },
  { time: '2022-10-05', open: 16.28, high: 16.80, low: 15.91, close: 16.18 },
  // Last session before shock (gap window starts here: low = 15.23)
  { time: '2022-10-06', open: 15.97, high: 16.37, low: 15.23, close: 15.41 },
  // Gap down — window opens (high = 13.86, well below prior low)
  { time: '2022-10-07', open: 13.56, high: 13.86, low: 12.43, close: 12.46 },
  { time: '2022-10-10', open: 12.19, high: 12.72, low: 11.88, close: 12.51 },
]

/**
 * Scene 3: Window as support — price pulls back and bounces at the gap zone.
 * NVDA (NVIDIA), post-earnings pullback, May–June 2023.
 * After the May 25 gap-up, NVDA rallied then pulled back toward the gap zone (~$37–38).
 * The prior window (gap zone) acted as support and buyers stepped in there.
 */
export const scene3Candles: CandleBar[] = [
  // Initial run-up after earnings gap
  { time: '2023-05-25', open: 38.46, high: 39.49, low: 37.84, close: 39.69 },
  { time: '2023-05-26', open: 39.72, high: 41.27, low: 39.38, close: 40.72 },
  { time: '2023-05-30', open: 40.89, high: 42.17, low: 40.53, close: 41.83 },
  // Pullback toward the gap zone (~37.84–31.24)
  { time: '2023-05-31', open: 41.76, high: 42.08, low: 38.42, close: 38.83 }, // tests gap top
  // Bounce from gap zone = support
  { time: '2023-06-01', open: 38.92, high: 40.17, low: 38.36, close: 40.03 },
]

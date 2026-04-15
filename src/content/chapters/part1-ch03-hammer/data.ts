import type { CandleBar } from '@/types/content'

/** Scene 1: Downtrend context leading up to the hammer */
export const scene1Candles: CandleBar[] = [
  { time: '2024-01-08', open: 115, high: 117, low: 112, close: 113 },
  { time: '2024-01-09', open: 113, high: 114, low: 109, close: 110 },
  { time: '2024-01-10', open: 110, high: 111, low: 106, close: 107 },
  { time: '2024-01-11', open: 107, high: 108, low: 103, close: 104 },
  { time: '2024-01-12', open: 104, high: 106, low: 99,  close: 105 }, // Bearish hammer-like
]

/** Scene 2: The Hammer candle appears */
export const scene2Candles: CandleBar[] = [
  { time: '2024-01-08', open: 115, high: 117, low: 112, close: 113 },
  { time: '2024-01-09', open: 113, high: 114, low: 109, close: 110 },
  { time: '2024-01-10', open: 110, high: 111, low: 106, close: 107 },
  { time: '2024-01-11', open: 107, high: 108, low: 103, close: 104 },
  { time: '2024-01-12', open: 103, high: 104, low: 95,  close: 103 }, // Hammer: long lower shadow, small body near top
]

/** Scene 3: Confirmation candle (bullish close above hammer) */
export const scene3Candles: CandleBar[] = [
  { time: '2024-01-08', open: 115, high: 117, low: 112, close: 113 },
  { time: '2024-01-09', open: 113, high: 114, low: 109, close: 110 },
  { time: '2024-01-10', open: 110, high: 111, low: 106, close: 107 },
  { time: '2024-01-11', open: 107, high: 108, low: 103, close: 104 },
  { time: '2024-01-12', open: 103, high: 104, low: 95,  close: 103 },
  { time: '2024-01-15', open: 103, high: 111, low: 102, close: 110 }, // Strong bullish confirmation
  { time: '2024-01-16', open: 110, high: 114, low: 109, close: 113 },
]

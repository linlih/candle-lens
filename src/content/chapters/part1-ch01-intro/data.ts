import type { CandleBar } from '@/types/content'

/** Scene 1: A variety of candles to show the general look */
export const scene1Candles: CandleBar[] = [
  { time: '2024-01-02', open: 100, high: 106, low: 98,  close: 104 },
  { time: '2024-01-03', open: 104, high: 108, low: 102, close: 103 },
  { time: '2024-01-04', open: 103, high: 107, low: 100, close: 101 },
  { time: '2024-01-05', open: 101, high: 105, low: 99,  close: 104 },
  { time: '2024-01-08', open: 104, high: 109, low: 103, close: 108 },
  { time: '2024-01-09', open: 108, high: 110, low: 105, close: 106 },
  { time: '2024-01-10', open: 106, high: 111, low: 104, close: 110 },
]

/**
 * Scene 2: anatomy diagram — single candle only
 * open=90  close=120  high=136  low=62
 *   Upper wick : 120 → 136  (16 units)
 *   Body       :  90 → 120  (30 units)
 *   Lower wick :  62 →  90  (28 units)
 */
export const scene2Candles: CandleBar[] = [
  { time: '2024-01-02', open: 90, high: 136, low: 62, close: 120 },
]

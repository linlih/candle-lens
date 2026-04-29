import type { CandleBar } from '@/types/content'

export const scene1Candles: CandleBar[] = [
  { time: '2024-02-05', open: 116, high: 118, low: 112, close: 113 },
  { time: '2024-02-06', open: 113, high: 114, low: 108, close: 109 },
  { time: '2024-02-07', open: 109, high: 110, low: 103, close: 104 },
  { time: '2024-02-08', open: 104, high: 105, low: 99, close: 100 },
  { time: '2024-02-09', open: 100, high: 101, low: 95, close: 97 },
]

export const scene2Candles: CandleBar[] = [
  ...scene1Candles,
  { time: '2024-02-12', open: 97, high: 99, low: 92, close: 98 },
]

export const scene3Candles: CandleBar[] = [
  ...scene2Candles,
  { time: '2024-02-13', open: 98, high: 104, low: 97, close: 103 },
  { time: '2024-02-14', open: 103, high: 106, low: 101, close: 105 },
]

export const scene4Candles: CandleBar[] = [
  { time: '2024-03-04', open: 118, high: 119, low: 114, close: 115 },
  { time: '2024-03-05', open: 115, high: 116, low: 110, close: 111 },
  { time: '2024-03-06', open: 111, high: 112, low: 106, close: 107 },
  { time: '2024-03-07', open: 107, high: 108, low: 101, close: 103 },
  { time: '2024-03-08', open: 103, high: 105, low: 98, close: 104 },
  { time: '2024-03-11', open: 103, high: 104, low: 95, close: 96 },
]

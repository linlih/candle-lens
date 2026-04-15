import type { AnnotationDef } from '@/types/annotation'

/** Scene 1: Downtrend context — arrow only */
export const scene1Annotations: AnnotationDef[] = [
  {
    kind: 'arrow',
    id: 'downtrend-arrow',
    time: '2022-11-03',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'downtrend',
  },
]

/**
 * Scene 2: Bullish Engulfing.
 * Day 1: 2022-11-03, open=12.86, close=12.69
 * Day 2: 2022-11-04, open=12.38, close=14.51
 */
export const scene2Annotations: AnnotationDef[] = [
  // Box spanning both engulfing candles
  {
    kind: 'box',
    id: 'engulf-box',
    timeRange: { from: '2022-11-03', to: '2022-11-04' },
    priceRange: { high: 14.72, low: 12.27 },
    pricePadding: 0.1,
    fillColor: 'rgba(38, 166, 154, 0.12)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  // Pattern label above
  {
    kind: 'label',
    id: 'engulf-label',
    time: '2022-11-04',
    price: 14.72,
    textKey: 'engulfing_bull',
    position: 'above',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Label: Day 1 bearish body
  {
    kind: 'label',
    id: 'day1-label',
    time: '2022-11-03',
    price: 13.46,
    text: 'Day 1: bearish',
    position: 'left',
    backgroundColor: '#363a45',
    textColor: '#ef5350',
    fontSize: 10,
  },
  // Label: Day 2 bullish body engulfs
  {
    kind: 'label',
    id: 'day2-label',
    time: '2022-11-04',
    price: 12.27,
    text: 'Day 2: engulfs Day 1',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#26a69a',
    fontSize: 10,
  },
  // Bullish reversal arrow
  {
    kind: 'arrow',
    id: 'reversal-arrow',
    time: '2022-11-04',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'reversal',
  },
]

/**
 * Scene 3: Bearish Engulfing.
 * Day 1: 2023-11-10, open=49.94, close=50.42
 * Day 2: 2023-11-13, open=50.87, close=47.83
 */
export const scene3Annotations: AnnotationDef[] = [
  // Box spanning both engulfing candles
  {
    kind: 'box',
    id: 'engulf-box',
    timeRange: { from: '2023-11-10', to: '2023-11-13' },
    priceRange: { high: 51.24, low: 47.38 },
    pricePadding: 0.2,
    fillColor: 'rgba(239, 83, 80, 0.12)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  // Pattern label above
  {
    kind: 'label',
    id: 'engulf-label',
    time: '2023-11-13',
    price: 51.24,
    textKey: 'engulfing_bear',
    position: 'above',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Label: Day 1
  {
    kind: 'label',
    id: 'day1-label',
    time: '2023-11-10',
    price: 50.78,
    text: 'Day 1: bullish',
    position: 'left',
    backgroundColor: '#363a45',
    textColor: '#26a69a',
    fontSize: 10,
  },
  // Label: Day 2 engulfs
  {
    kind: 'label',
    id: 'day2-label',
    time: '2023-11-13',
    price: 47.38,
    text: 'Day 2: engulfs Day 1',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#ef5350',
    fontSize: 10,
  },
  // Uptrend arrow on prior candle
  {
    kind: 'arrow',
    id: 'uptrend-arrow',
    time: '2023-11-09',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'uptrend',
  },
  // Bearish reversal arrow
  {
    kind: 'arrow',
    id: 'reversal-arrow',
    time: '2023-11-13',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'reversal',
  },
]

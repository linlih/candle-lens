import type { AnnotationDef } from '@/types/annotation'

/** Scene 1: Downtrend context */
export const scene1Annotations: AnnotationDef[] = [
  {
    kind: 'arrow',
    id: 'downtrend-arrow',
    time: '2022-10-10',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'downtrend',
  },
]

/**
 * Scene 2: Morning Star.
 * Day 1: 2022-10-11, open=12.51, close=11.93  (body midpoint=12.22)
 * Day 2: 2022-10-12, open=11.48, close=11.54  (small star — gaps below Day 1)
 * Day 3: 2022-10-13, open=11.71, close=13.68  (bullish, closes above Day 1 midpoint)
 */
export const scene2Annotations: AnnotationDef[] = [
  // Box spanning the three-candle pattern
  {
    kind: 'box',
    id: 'star-box',
    timeRange: { from: '2022-10-11', to: '2022-10-13' },
    priceRange: { high: 13.77, low: 11.12 },
    pricePadding: 0.1,
    fillColor: 'rgba(38, 166, 154, 0.10)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  // Pattern label
  {
    kind: 'label',
    id: 'morning-label',
    time: '2022-10-13',
    price: 13.77,
    textKey: 'morning_star',
    position: 'above',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Label: Day 1 — long bearish
  {
    kind: 'label',
    id: 'day1-label',
    time: '2022-10-11',
    price: 12.22,
    text: 'Day 1: long bearish',
    position: 'left',
    backgroundColor: '#363a45',
    textColor: '#ef5350',
    fontSize: 10,
  },
  // Label: Day 2 — the star (gaps down)
  {
    kind: 'label',
    id: 'day2-label',
    time: '2022-10-12',
    price: 11.12,
    text: 'Day 2: star (gap down)',
    position: 'below',
    backgroundColor: '#ffc107',
    textColor: '#1a1a2e',
    fontSize: 10,
  },
  // Label: Day 3 — bullish confirmation
  {
    kind: 'label',
    id: 'day3-label',
    time: '2022-10-13',
    price: 11.65,
    text: 'Day 3: closes into Day 1',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#26a69a',
    fontSize: 10,
  },
  // Midpoint of Day 1 body: (12.51+11.93)/2 = 12.22
  {
    kind: 'hline',
    id: 'midpoint-line',
    price: 12.22,
    color: 'rgba(255, 193, 7, 0.6)',
    width: 1,
    dash: [5, 3],
  },
  // Bullish reversal arrow
  {
    kind: 'arrow',
    id: 'reversal-arrow',
    time: '2022-10-13',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'reversal',
  },
]

/** Scene 3: Uptrend context */
export const scene3Annotations: AnnotationDef[] = [
  {
    kind: 'arrow',
    id: 'uptrend-arrow',
    time: '2023-08-07',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'uptrend',
  },
]

/**
 * Scene 4: Evening Star.
 * Day 1: 2023-08-08, open=49.18, close=50.34  (body midpoint=49.76)
 * Day 2: 2023-08-09, open=51.12, close=51.28  (small star — gaps above Day 1)
 * Day 3: 2023-08-10, open=50.87, close=46.82  (bearish, closes below Day 1 midpoint)
 */
export const scene4Annotations: AnnotationDef[] = [
  // Box spanning the three-candle pattern
  {
    kind: 'box',
    id: 'star-box',
    timeRange: { from: '2023-08-08', to: '2023-08-10' },
    priceRange: { high: 52.47, low: 46.24 },
    pricePadding: 0.2,
    fillColor: 'rgba(239, 83, 80, 0.10)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  // Pattern label
  {
    kind: 'label',
    id: 'evening-label',
    time: '2023-08-10',
    price: 52.47,
    textKey: 'evening_star',
    position: 'above',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Label: Day 1 — long bullish
  {
    kind: 'label',
    id: 'day1-label',
    time: '2023-08-08',
    price: 49.76,
    text: 'Day 1: long bullish',
    position: 'left',
    backgroundColor: '#363a45',
    textColor: '#26a69a',
    fontSize: 10,
  },
  // Label: Day 2 — the star (gaps up)
  {
    kind: 'label',
    id: 'day2-label',
    time: '2023-08-09',
    price: 52.47,
    text: 'Day 2: star (gap up)',
    position: 'above',
    backgroundColor: '#ffc107',
    textColor: '#1a1a2e',
    fontSize: 10,
  },
  // Label: Day 3 — bearish closes into Day 1
  {
    kind: 'label',
    id: 'day3-label',
    time: '2023-08-10',
    price: 46.24,
    text: 'Day 3: closes into Day 1',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#ef5350',
    fontSize: 10,
  },
  // Midpoint of Day 1 body: (50.34+49.18)/2 = 49.76
  {
    kind: 'hline',
    id: 'midpoint-line',
    price: 49.76,
    color: 'rgba(255, 193, 7, 0.6)',
    width: 1,
    dash: [5, 3],
  },
  // Bearish reversal arrow
  {
    kind: 'arrow',
    id: 'reversal-arrow',
    time: '2023-08-10',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'reversal',
  },
]

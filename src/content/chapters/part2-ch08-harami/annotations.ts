import type { AnnotationDef } from '@/types/annotation'

/**
 * Scene 1: Bullish Harami.
 * Day 1: 2022-11-04, open=12.86, close=12.03
 * Day 2: 2022-11-07, open=12.24, close=12.47 (inside Day 1 body)
 */
export const scene1Annotations: AnnotationDef[] = [
  // Box spanning both candles
  {
    kind: 'box',
    id: 'harami-box',
    timeRange: { from: '2022-11-04', to: '2022-11-07' },
    priceRange: { high: 13.18, low: 11.89 },
    pricePadding: 0.1,
    fillColor: 'rgba(38, 166, 154, 0.12)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'harami-label',
    time: '2022-11-07',
    price: 13.18,
    textKey: 'harami_bull',
    position: 'above',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Show Day 1 body boundaries
  {
    kind: 'hline',
    id: 'day1-top',
    price: 12.86,
    color: 'rgba(239, 83, 80, 0.5)',
    width: 1,
    dash: [4, 3],
  },
  {
    kind: 'hline',
    id: 'day1-bot',
    price: 12.03,
    color: 'rgba(239, 83, 80, 0.5)',
    width: 1,
    dash: [4, 3],
  },
  // Label: Day 2 is inside Day 1
  {
    kind: 'label',
    id: 'inside-label',
    time: '2022-11-07',
    price: 12.03,
    text: 'Day 2 inside Day 1',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#d1d4dc',
    fontSize: 10,
  },
  {
    kind: 'arrow',
    id: 'reversal-arrow',
    time: '2022-11-07',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'reversal',
  },
]

/**
 * Scene 2: Bearish Harami.
 * Day 1: 2023-11-09, open=48.92, close=50.38
 * Day 2: 2023-11-10, open=49.78, close=49.63 (inside Day 1 body)
 */
export const scene2Annotations: AnnotationDef[] = [
  {
    kind: 'box',
    id: 'harami-box',
    timeRange: { from: '2023-11-09', to: '2023-11-10' },
    priceRange: { high: 50.87, low: 48.43 },
    pricePadding: 0.2,
    fillColor: 'rgba(239, 83, 80, 0.12)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'harami-label',
    time: '2023-11-10',
    price: 50.87,
    textKey: 'harami_bear',
    position: 'above',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Day 1 body boundaries
  {
    kind: 'hline',
    id: 'day1-top',
    price: 50.38,
    color: 'rgba(38, 166, 154, 0.5)',
    width: 1,
    dash: [4, 3],
  },
  {
    kind: 'hline',
    id: 'day1-bot',
    price: 48.92,
    color: 'rgba(38, 166, 154, 0.5)',
    width: 1,
    dash: [4, 3],
  },
  {
    kind: 'label',
    id: 'inside-label',
    time: '2023-11-10',
    price: 50.12,
    text: 'Day 2 inside Day 1',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#d1d4dc',
    fontSize: 10,
  },
  {
    kind: 'arrow',
    id: 'uptrend-arrow',
    time: '2023-11-08',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'uptrend',
  },
  {
    kind: 'arrow',
    id: 'reversal-arrow',
    time: '2023-11-10',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'reversal',
  },
]

/**
 * Scene 3: Bearish Harami Cross (Doji inside Day 1 body).
 * Day 1: 2024-01-11, open=53.82, close=55.47
 * Day 2: 2024-01-12, open=close=54.63 (Doji, inside Day 1)
 */
export const scene3Annotations: AnnotationDef[] = [
  {
    kind: 'box',
    id: 'harami-box',
    timeRange: { from: '2024-01-11', to: '2024-01-12' },
    priceRange: { high: 57.43, low: 53.56 },
    pricePadding: 0.2,
    fillColor: 'rgba(239, 83, 80, 0.12)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'harami-label',
    time: '2024-01-12',
    price: 57.43,
    text: 'Harami Cross',
    position: 'above',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  {
    kind: 'label',
    id: 'doji-label',
    time: '2024-01-12',
    price: 54.63,
    textKey: 'doji',
    position: 'right',
    backgroundColor: '#ffc107',
    textColor: '#1a1a2e',
    fontSize: 10,
  },
  // Day 1 body boundaries
  {
    kind: 'hline',
    id: 'day1-top',
    price: 55.47,
    color: 'rgba(38, 166, 154, 0.5)',
    width: 1,
    dash: [4, 3],
  },
  {
    kind: 'hline',
    id: 'day1-bot',
    price: 53.82,
    color: 'rgba(38, 166, 154, 0.5)',
    width: 1,
    dash: [4, 3],
  },
  {
    kind: 'arrow',
    id: 'reversal-arrow',
    time: '2024-01-12',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'reversal',
  },
]

import type { AnnotationDef } from '@/types/annotation'

/**
 * Scene 1: Rising Three Methods.
 * Day 1: 2023-03-09, open=22.68, high=25.12, close=24.71
 * Days 2-4: small bearish candles within Day 1's range
 * Day 5: 2023-03-15, close=26.42 (above Day 1 high of 25.12)
 */
export const scene1Annotations: AnnotationDef[] = [
  // Box around the entire 5-candle pattern
  {
    kind: 'box',
    id: 'pattern-box',
    timeRange: { from: '2023-03-09', to: '2023-03-15' },
    priceRange: { high: 26.87, low: 22.52 },
    pricePadding: 0.2,
    fillColor: 'rgba(38, 166, 154, 0.08)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  // Day 1 body range lines
  {
    kind: 'hline',
    id: 'day1-high',
    price: 24.71,
    color: 'rgba(38, 166, 154, 0.6)',
    width: 1,
    dash: [5, 3],
  },
  {
    kind: 'hline',
    id: 'day1-low',
    price: 22.68,
    color: 'rgba(38, 166, 154, 0.6)',
    width: 1,
    dash: [5, 3],
  },
  // Label for the pullback zone
  {
    kind: 'label',
    id: 'pullback-label',
    time: '2023-03-13',
    price: 23.78,
    text: 'Small bearish candles — pullback within range',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#9598a1',
    fontSize: 10,
  },
  // Pattern label
  {
    kind: 'label',
    id: 'method-label',
    time: '2023-03-15',
    price: 26.87,
    text: 'Rising Three Methods',
    position: 'above',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Day 5 confirmation arrow
  {
    kind: 'arrow',
    id: 'confirm-arrow',
    time: '2023-03-15',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'uptrend',
  },
]

/**
 * Scene 2: Falling Three Methods.
 * Day 1: 2022-10-13, open=12.54, low=10.97, close=11.18
 * Days 2-4: small bullish candles within Day 1's range
 * Day 5: 2022-10-19, close=10.57 (below Day 1 low of 10.97)
 */
export const scene2Annotations: AnnotationDef[] = [
  {
    kind: 'box',
    id: 'pattern-box',
    timeRange: { from: '2022-10-13', to: '2022-10-19' },
    priceRange: { high: 12.74, low: 10.42 },
    pricePadding: 0.1,
    fillColor: 'rgba(239, 83, 80, 0.08)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  {
    kind: 'hline',
    id: 'day1-high',
    price: 12.54,
    color: 'rgba(239, 83, 80, 0.6)',
    width: 1,
    dash: [5, 3],
  },
  {
    kind: 'hline',
    id: 'day1-low',
    price: 11.18,
    color: 'rgba(239, 83, 80, 0.6)',
    width: 1,
    dash: [5, 3],
  },
  {
    kind: 'label',
    id: 'rally-label',
    time: '2022-10-17',
    price: 12.03,
    text: 'Small bullish candles — rally within range',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#9598a1',
    fontSize: 10,
  },
  {
    kind: 'label',
    id: 'method-label',
    time: '2022-10-19',
    price: 10.42,
    text: 'Falling Three Methods',
    position: 'below',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  {
    kind: 'arrow',
    id: 'confirm-arrow',
    time: '2022-10-19',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'downtrend',
  },
]

/** Scene 3: Rising Three Methods + uptrend continuation */
export const scene3Annotations: AnnotationDef[] = [
  ...scene1Annotations,
  {
    kind: 'arrow',
    id: 'cont1',
    time: '2023-03-16',
    direction: 'up',
    color: '#26a69a',
  },
  {
    kind: 'arrow',
    id: 'cont2',
    time: '2023-03-17',
    direction: 'up',
    color: '#26a69a',
  },
]

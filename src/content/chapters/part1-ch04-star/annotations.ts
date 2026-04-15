import type { AnnotationDef } from '@/types/annotation'

/**
 * Scene 1: Shooting Star at top of uptrend.
 * Candle: 2024-04-05, open=89.24, close=89.48, high=94.87, low=88.91
 */
export const scene1Annotations: AnnotationDef[] = [
  // Uptrend arrow on prior bullish candle
  {
    kind: 'arrow',
    id: 'uptrend-arrow',
    time: '2024-04-04',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'uptrend',
  },
  // Box around the shooting star
  {
    kind: 'box',
    id: 'star-box',
    timeRange: { from: '2024-04-05', to: '2024-04-05' },
    priceRange: { high: 94.87, low: 88.91 },
    pricePadding: 0.3,
    fillColor: 'rgba(239, 83, 80, 0.15)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  // Label above
  {
    kind: 'label',
    id: 'star-label',
    time: '2024-04-05',
    price: 94.87,
    textKey: 'shooting_star',
    position: 'above',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Label on upper shadow midpoint: (94.87+89.48)/2 ≈ 92.2
  {
    kind: 'label',
    id: 'shadow-label',
    time: '2024-04-05',
    price: 92.18,
    text: 'Long upper shadow',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#9598a1',
    fontSize: 10,
    arrowhead: true,
  },
  // Label on body midpoint: (89.24+89.48)/2 ≈ 89.36
  {
    kind: 'label',
    id: 'body-label',
    time: '2024-04-05',
    price: 89.36,
    text: 'Small body near low',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#d1d4dc',
    fontSize: 10,
    arrowhead: true,
  },
  // Bearish arrow on the shooting star itself
  {
    kind: 'arrow',
    id: 'bearish-arrow',
    time: '2024-04-05',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'reversal',
  },
]

/**
 * Scene 2: Inverted Hammer at bottom of downtrend.
 * Candle: 2022-10-13, open=12.18, close=12.39, high=13.77, low=12.03
 */
export const scene2Annotations: AnnotationDef[] = [
  // Downtrend arrow on prior bearish candle
  {
    kind: 'arrow',
    id: 'downtrend-arrow',
    time: '2022-10-12',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'downtrend',
  },
  // Box around the inverted hammer
  {
    kind: 'box',
    id: 'inv-hammer-box',
    timeRange: { from: '2022-10-13', to: '2022-10-13' },
    priceRange: { high: 13.77, low: 12.03 },
    pricePadding: 0.1,
    fillColor: 'rgba(38, 166, 154, 0.15)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  // Label above
  {
    kind: 'label',
    id: 'inv-hammer-label',
    time: '2022-10-13',
    price: 13.77,
    textKey: 'inverted_hammer',
    position: 'above',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Label on upper shadow midpoint: (13.77+12.39)/2 ≈ 13.08
  {
    kind: 'label',
    id: 'shadow-label',
    time: '2022-10-13',
    price: 13.08,
    text: 'Bulls probed higher…',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#9598a1',
    fontSize: 10,
    arrowhead: true,
  },
  // Label on body: ~12.28
  {
    kind: 'label',
    id: 'body-label',
    time: '2022-10-13',
    price: 12.28,
    text: '…but closed near open',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#d1d4dc',
    fontSize: 10,
    arrowhead: true,
  },
]

/**
 * Scene 3: Inverted Hammer + bullish confirmation next session.
 * Confirmation candle: 2022-10-14, close=13.84
 */
export const scene3Annotations: AnnotationDef[] = [
  // Carry over the inverted hammer box
  {
    kind: 'box',
    id: 'inv-hammer-box',
    timeRange: { from: '2022-10-13', to: '2022-10-13' },
    priceRange: { high: 13.77, low: 12.03 },
    pricePadding: 0.1,
    fillColor: 'rgba(38, 166, 154, 0.15)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'inv-hammer-label',
    time: '2022-10-13',
    price: 13.77,
    textKey: 'inverted_hammer',
    position: 'above',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Confirmation candle label
  {
    kind: 'label',
    id: 'confirm-label',
    time: '2022-10-14',
    price: 14.12,
    textKey: 'confirmation',
    position: 'above',
    backgroundColor: '#2962ff',
    textColor: '#ffffff',
    fontSize: 11,
  },
  {
    kind: 'arrow',
    id: 'confirm-arrow',
    time: '2022-10-14',
    direction: 'up',
    color: '#2962ff',
  },
  // Support hline at inverted hammer low
  {
    kind: 'hline',
    id: 'support-line',
    price: 12.03,
    color: 'rgba(38, 166, 154, 0.5)',
    width: 1,
    dash: [6, 3],
  },
]

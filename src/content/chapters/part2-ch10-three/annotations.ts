import type { AnnotationDef } from '@/types/annotation'

/** Scene 1: Three White Soldiers */
export const scene1Annotations: AnnotationDef[] = [
  // Box around the three soldiers
  {
    kind: 'box',
    id: 'soldiers-box',
    timeRange: { from: '2023-01-03', to: '2023-01-05' },
    priceRange: { high: 17.96, low: 14.40 },
    pricePadding: 0.1,
    fillColor: 'rgba(38, 166, 154, 0.10)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'soldiers-label',
    time: '2023-01-05',
    price: 17.96,
    textKey: 'three_white_soldiers',
    position: 'above',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Arrow labels for each soldier
  {
    kind: 'arrow',
    id: 'soldier1',
    time: '2023-01-03',
    direction: 'up',
    color: '#26a69a',
  },
  {
    kind: 'arrow',
    id: 'soldier2',
    time: '2023-01-04',
    direction: 'up',
    color: '#26a69a',
  },
  {
    kind: 'arrow',
    id: 'soldier3',
    time: '2023-01-05',
    direction: 'up',
    color: '#26a69a',
  },
  {
    kind: 'arrow',
    id: 'downtrend-arrow',
    time: '2022-12-23',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'downtrend',
  },
]

/** Scene 2: Three Black Crows */
export const scene2Annotations: AnnotationDef[] = [
  // Box around the three crows
  {
    kind: 'box',
    id: 'crows-box',
    timeRange: { from: '2022-09-12', to: '2022-09-14' },
    priceRange: { high: 19.58, low: 14.93 },
    pricePadding: 0.1,
    fillColor: 'rgba(239, 83, 80, 0.10)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'crows-label',
    time: '2022-09-14',
    price: 14.93,
    textKey: 'three_black_crows',
    position: 'below',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  {
    kind: 'arrow',
    id: 'crow1',
    time: '2022-09-12',
    direction: 'down',
    color: '#ef5350',
  },
  {
    kind: 'arrow',
    id: 'crow2',
    time: '2022-09-13',
    direction: 'down',
    color: '#ef5350',
  },
  {
    kind: 'arrow',
    id: 'crow3',
    time: '2022-09-14',
    direction: 'down',
    color: '#ef5350',
  },
  {
    kind: 'arrow',
    id: 'uptrend-arrow',
    time: '2022-09-09',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'uptrend',
  },
]

/** Scene 3: Weak Three White Soldiers (warning signs) */
export const scene3Annotations: AnnotationDef[] = [
  // Highlight the weakening candles (soldiers 2 & 3)
  {
    kind: 'box',
    id: 'weak-box',
    timeRange: { from: '2023-03-15', to: '2023-03-16' },
    priceRange: { high: 29.21, low: 26.18 },
    pricePadding: 0.2,
    fillColor: 'rgba(255, 193, 7, 0.10)',
    borderColor: '#ffc107',
    borderWidth: 2,
  },
  // Label warning
  {
    kind: 'label',
    id: 'warning-label',
    time: '2023-03-16',
    price: 29.21,
    text: 'Long upper shadows — exhaustion?',
    position: 'above',
    backgroundColor: '#ffc107',
    textColor: '#1a1a2e',
    fontSize: 10,
  },
  // First soldier — strong (green box)
  {
    kind: 'box',
    id: 'strong-box',
    timeRange: { from: '2023-03-14', to: '2023-03-14' },
    priceRange: { high: 26.87, low: 24.28 },
    pricePadding: 0,
    fillColor: 'rgba(38, 166, 154, 0.15)',
    borderColor: '#26a69a',
    borderWidth: 1,
  },
  {
    kind: 'label',
    id: 'strong-label',
    time: '2023-03-14',
    price: 24.42,
    text: 'Strong',
    position: 'left',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 10,
  },
]

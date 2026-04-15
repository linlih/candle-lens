import type { AnnotationDef } from '@/types/annotation'

/**
 * Scene 1: Dark Cloud Cover.
 * Day 1: 2024-02-27, open=82.56, close=83.87  → midpoint = 83.22
 * Day 2: 2024-02-28, open=85.12, close=80.54  → closes well below midpoint ✓
 */
export const scene1Annotations: AnnotationDef[] = [
  // Box spanning the two-candle pattern
  {
    kind: 'box',
    id: 'cloud-box',
    timeRange: { from: '2024-02-27', to: '2024-02-28' },
    priceRange: { high: 85.47, low: 79.38 },
    pricePadding: 0.3,
    fillColor: 'rgba(239, 83, 80, 0.12)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  // Pattern label
  {
    kind: 'label',
    id: 'cloud-label',
    time: '2024-02-28',
    price: 85.47,
    textKey: 'dark_cloud_cover',
    position: 'above',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Midpoint hline of Day 1 body: (83.87+82.56)/2 = 83.22
  {
    kind: 'hline',
    id: 'midpoint-line',
    price: 83.22,
    color: 'rgba(255, 193, 7, 0.8)',
    width: 1,
    dash: [5, 3],
  },
  // Label for midpoint
  {
    kind: 'label',
    id: 'midpoint-label',
    time: '2024-02-27',
    price: 83.22,
    text: '50% of Day 1 body',
    position: 'left',
    backgroundColor: '#363a45',
    textColor: '#ffc107',
    fontSize: 10,
  },
  // Label: Day 2 gaps up then closes deep into Day 1
  {
    kind: 'label',
    id: 'gap-label',
    time: '2024-02-28',
    price: 85.12,
    text: 'Gap up open',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#9598a1',
    fontSize: 10,
    arrowhead: true,
  },
  // Uptrend arrow
  {
    kind: 'arrow',
    id: 'uptrend-arrow',
    time: '2024-02-26',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'uptrend',
  },
  // Bearish reversal arrow
  {
    kind: 'arrow',
    id: 'reversal-arrow',
    time: '2024-02-28',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'reversal',
  },
]

/**
 * Scene 2: Piercing Pattern.
 * Day 1: 2022-10-13, open=12.35, close=11.62  → midpoint = 11.99
 * Day 2: 2022-10-14, open=11.24, close=13.17  → closes well above midpoint ✓
 */
export const scene2Annotations: AnnotationDef[] = [
  // Box spanning the two-candle pattern
  {
    kind: 'box',
    id: 'pierce-box',
    timeRange: { from: '2022-10-13', to: '2022-10-14' },
    priceRange: { high: 13.43, low: 11.18 },
    pricePadding: 0.1,
    fillColor: 'rgba(38, 166, 154, 0.12)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  // Pattern label
  {
    kind: 'label',
    id: 'pierce-label',
    time: '2022-10-14',
    price: 13.43,
    textKey: 'piercing',
    position: 'above',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Midpoint hline of Day 1 body: (12.35+11.62)/2 = 11.99
  {
    kind: 'hline',
    id: 'midpoint-line',
    price: 11.99,
    color: 'rgba(255, 193, 7, 0.8)',
    width: 1,
    dash: [5, 3],
  },
  // Label for midpoint
  {
    kind: 'label',
    id: 'midpoint-label',
    time: '2022-10-13',
    price: 11.99,
    text: '50% of Day 1 body',
    position: 'left',
    backgroundColor: '#363a45',
    textColor: '#ffc107',
    fontSize: 10,
  },
  // Label: Day 2 gaps down then rallies into Day 1
  {
    kind: 'label',
    id: 'gap-label',
    time: '2022-10-14',
    price: 11.24,
    text: 'Gap down open',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#9598a1',
    fontSize: 10,
    arrowhead: true,
  },
  // Downtrend arrow
  {
    kind: 'arrow',
    id: 'downtrend-arrow',
    time: '2022-10-12',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'downtrend',
  },
  // Bullish reversal arrow
  {
    kind: 'arrow',
    id: 'reversal-arrow',
    time: '2022-10-14',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'reversal',
  },
]

/**
 * Scene 3: Valid Dark Cloud Cover — the 50% rule.
 * Day 1: 2024-04-03, open=87.82, close=88.54  → midpoint = 88.18
 * Day 2: 2024-04-04, open=90.24, close=85.12  → closes well below midpoint ✓
 */
export const scene3Annotations: AnnotationDef[] = [
  // Box for the valid Dark Cloud Cover
  {
    kind: 'box',
    id: 'cloud-box',
    timeRange: { from: '2024-04-03', to: '2024-04-04' },
    priceRange: { high: 91.37, low: 84.67 },
    pricePadding: 0.3,
    fillColor: 'rgba(239, 83, 80, 0.12)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'cloud-label',
    time: '2024-04-04',
    price: 91.37,
    textKey: 'dark_cloud_cover',
    position: 'above',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Midpoint hline: (88.54+87.82)/2 = 88.18
  {
    kind: 'hline',
    id: 'midpoint-line',
    price: 88.18,
    color: 'rgba(255, 193, 7, 0.8)',
    width: 1,
    dash: [5, 3],
  },
  {
    kind: 'label',
    id: 'rule-label',
    time: '2024-04-03',
    price: 88.18,
    text: '50% rule — must close below this',
    position: 'left',
    backgroundColor: '#363a45',
    textColor: '#ffc107',
    fontSize: 10,
  },
  {
    kind: 'arrow',
    id: 'reversal-arrow',
    time: '2024-04-04',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'reversal',
  },
]

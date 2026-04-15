import type { AnnotationDef } from '@/types/annotation'

/**
 * Scene 1: Tweezers Top.
 * Day 1: 2024-04-03, high=89.12
 * Day 2: 2024-04-04, high=89.12 (same level)
 */
export const scene1Annotations: AnnotationDef[] = [
  // Resistance hline at the shared high
  {
    kind: 'hline',
    id: 'resistance-line',
    price: 89.12,
    color: 'rgba(239, 83, 80, 0.8)',
    width: 2,
    dash: [6, 3],
  },
  // Box around both tweezers candles
  {
    kind: 'box',
    id: 'tweezers-box',
    timeRange: { from: '2024-04-03', to: '2024-04-04' },
    priceRange: { high: 89.12, low: 85.83 },
    pricePadding: 0.3,
    fillColor: 'rgba(239, 83, 80, 0.10)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  // Pattern label
  {
    kind: 'label',
    id: 'tweezers-label',
    time: '2024-04-04',
    price: 89.12,
    textKey: 'tweezers_top',
    position: 'above',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Resistance label
  {
    kind: 'label',
    id: 'resistance-label',
    time: '2024-04-03',
    price: 89.12,
    textKey: 'resistance',
    position: 'left',
    backgroundColor: '#363a45',
    textColor: '#ef5350',
    fontSize: 10,
  },
  // Uptrend arrow
  {
    kind: 'arrow',
    id: 'uptrend-arrow',
    time: '2024-04-02',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'uptrend',
  },
  // Reversal arrow
  {
    kind: 'arrow',
    id: 'reversal-arrow',
    time: '2024-04-04',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'reversal',
  },
]

/**
 * Scene 2: Tweezers Bottom.
 * Day 1: 2022-10-10, low=11.88
 * Day 2: 2022-10-11, low=11.88 (same level)
 */
export const scene2Annotations: AnnotationDef[] = [
  // Support hline at the shared low
  {
    kind: 'hline',
    id: 'support-line',
    price: 11.88,
    color: 'rgba(38, 166, 154, 0.8)',
    width: 2,
    dash: [6, 3],
  },
  // Box around both candles
  {
    kind: 'box',
    id: 'tweezers-box',
    timeRange: { from: '2022-10-10', to: '2022-10-11' },
    priceRange: { high: 13.24, low: 11.88 },
    pricePadding: 0.1,
    fillColor: 'rgba(38, 166, 154, 0.10)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  // Pattern label
  {
    kind: 'label',
    id: 'tweezers-label',
    time: '2022-10-11',
    price: 13.24,
    textKey: 'tweezers_bottom',
    position: 'above',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Support label
  {
    kind: 'label',
    id: 'support-label',
    time: '2022-10-10',
    price: 11.88,
    textKey: 'support',
    position: 'left',
    backgroundColor: '#363a45',
    textColor: '#26a69a',
    fontSize: 10,
  },
  // Downtrend arrow
  {
    kind: 'arrow',
    id: 'downtrend-arrow',
    time: '2022-10-07',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'downtrend',
  },
  // Reversal arrow
  {
    kind: 'arrow',
    id: 'reversal-arrow',
    time: '2022-10-11',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'reversal',
  },
]

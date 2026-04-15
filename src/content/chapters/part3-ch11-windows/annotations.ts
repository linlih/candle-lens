import type { AnnotationDef } from '@/types/annotation'

/**
 * Scene 1: Upward Window (May 2023 earnings gap).
 * Window between 2023-05-24 (high=31.24) and 2023-05-25 (low=37.84).
 * Gap zone: 31.24–37.84.
 */
export const scene1Annotations: AnnotationDef[] = [
  // Box highlighting the gap/window
  {
    kind: 'box',
    id: 'window-box',
    timeRange: { from: '2023-05-24', to: '2023-05-25' },
    priceRange: { high: 37.84, low: 31.24 },
    pricePadding: 0,
    fillColor: 'rgba(38, 166, 154, 0.25)',
    borderColor: '#26a69a',
    borderWidth: 1,
  },
  {
    kind: 'label',
    id: 'window-label',
    time: '2023-05-25',
    price: 34.54,
    text: 'Window (Gap Up)',
    position: 'right',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Uptrend continuation arrow
  {
    kind: 'arrow',
    id: 'continue-arrow',
    time: '2023-05-26',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'uptrend',
  },
]

/**
 * Scene 2: Downward Window (Oct 2022 export controls gap).
 * Window between 2022-10-06 (low=15.23) and 2022-10-07 (high=13.86).
 * Gap zone: 13.86–15.23.
 */
export const scene2Annotations: AnnotationDef[] = [
  {
    kind: 'box',
    id: 'window-box',
    timeRange: { from: '2022-10-06', to: '2022-10-07' },
    priceRange: { high: 15.23, low: 13.86 },
    pricePadding: 0,
    fillColor: 'rgba(239, 83, 80, 0.25)',
    borderColor: '#ef5350',
    borderWidth: 1,
  },
  {
    kind: 'label',
    id: 'window-label',
    time: '2022-10-07',
    price: 14.55,
    text: 'Window (Gap Down)',
    position: 'right',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  {
    kind: 'arrow',
    id: 'continue-arrow',
    time: '2022-10-10',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'downtrend',
  },
]

/**
 * Scene 3: Window as support on pullback.
 * Window zone top: 37.84 (May 25 low).
 * Price pulls back to ~38.42 and bounces.
 */
export const scene3Annotations: AnnotationDef[] = [
  // Window zone (gap area = support)
  {
    kind: 'box',
    id: 'window-box',
    timeRange: { from: '2023-05-25', to: '2023-05-26' },
    priceRange: { high: 39.69, low: 37.84 },
    pricePadding: 0,
    fillColor: 'rgba(38, 166, 154, 0.20)',
    borderColor: '#26a69a',
    borderWidth: 1,
  },
  {
    kind: 'label',
    id: 'window-label',
    time: '2023-05-25',
    price: 38.77,
    text: 'Window = support zone',
    position: 'right',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 10,
  },
  // Support hline at gap zone top
  {
    kind: 'hline',
    id: 'support-line',
    price: 37.84,
    color: 'rgba(38, 166, 154, 0.7)',
    width: 1,
    dash: [6, 3],
  },
  // Pullback arrow
  {
    kind: 'arrow',
    id: 'pullback-arrow',
    time: '2023-05-31',
    direction: 'down',
    color: '#ffc107',
  },
  // Bounce arrow
  {
    kind: 'arrow',
    id: 'bounce-arrow',
    time: '2023-06-01',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'support',
  },
]

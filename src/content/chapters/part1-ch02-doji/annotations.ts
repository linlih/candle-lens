import type { AnnotationDef } from '@/types/annotation'

/**
 * Scene 1: Standard Doji at end of uptrend.
 * Doji: time='2023-06-08', open=42.47, close=42.52, high=44.21, low=41.12
 */
export const scene1Annotations: AnnotationDef[] = [
  // Uptrend arrow on last bullish candle before doji
  {
    kind: 'arrow',
    id: 'uptrend-arrow',
    time: '2023-06-07',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'uptrend',
  },
  // Box around the doji candle
  {
    kind: 'box',
    id: 'doji-box',
    timeRange: { from: '2023-06-08', to: '2023-06-08' },
    priceRange: { high: 44.21, low: 41.12 },
    pricePadding: 0.3,
    fillColor: 'rgba(255, 193, 7, 0.15)',
    borderColor: '#ffc107',
    borderWidth: 2,
  },
  // Label above the doji
  {
    kind: 'label',
    id: 'doji-label',
    time: '2023-06-08',
    price: 44.21,
    textKey: 'doji',
    position: 'above',
    backgroundColor: '#ffc107',
    textColor: '#1a1a2e',
    fontSize: 11,
  },
  // Label on the open=close line (body midpoint)
  {
    kind: 'label',
    id: 'open-close-label',
    time: '2023-06-08',
    price: 42.47,
    text: 'Open = Close',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#d1d4dc',
    fontSize: 10,
  },
]

/**
 * Scene 2: Gravestone Doji at top of uptrend.
 * Gravestone: time='2024-01-12', open=close=low=57.54, high=62.11
 */
export const scene2Annotations: AnnotationDef[] = [
  // Box around gravestone doji
  {
    kind: 'box',
    id: 'gravestone-box',
    timeRange: { from: '2024-01-12', to: '2024-01-12' },
    priceRange: { high: 62.11, low: 57.54 },
    pricePadding: 0.3,
    fillColor: 'rgba(239, 83, 80, 0.15)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  // Label above the gravestone
  {
    kind: 'label',
    id: 'gravestone-label',
    time: '2024-01-12',
    price: 62.11,
    textKey: 'gravestone_doji',
    position: 'above',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Label at the high (top of long upper shadow)
  {
    kind: 'label',
    id: 'high-label',
    time: '2024-01-12',
    price: 59.82,
    text: 'Bulls pushed price up…',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#9598a1',
    fontSize: 10,
    arrowhead: true,
  },
  // Label at the open/close level
  {
    kind: 'label',
    id: 'open-close-label',
    time: '2024-01-12',
    price: 57.54,
    text: '…but closed at the open',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#d1d4dc',
    fontSize: 10,
    arrowhead: true,
  },
  // Bearish arrow on the next confirmation candle
  {
    kind: 'arrow',
    id: 'bearish-arrow',
    time: '2024-01-16',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'reversal',
  },
]

/**
 * Scene 3: Dragonfly Doji at bottom of downtrend.
 * Dragonfly: time='2022-10-13', open=close=high=12.42, low=11.18
 */
export const scene3Annotations: AnnotationDef[] = [
  // Box around dragonfly doji
  {
    kind: 'box',
    id: 'dragonfly-box',
    timeRange: { from: '2022-10-13', to: '2022-10-13' },
    priceRange: { high: 12.42, low: 11.18 },
    pricePadding: 0.1,
    fillColor: 'rgba(38, 166, 154, 0.15)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  // Label above dragonfly
  {
    kind: 'label',
    id: 'dragonfly-label',
    time: '2022-10-13',
    price: 12.42,
    textKey: 'dragonfly_doji',
    position: 'above',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Label describing the lower shadow
  {
    kind: 'label',
    id: 'open-close-label',
    time: '2022-10-13',
    price: 11.8,
    text: 'Bears pushed price down…',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#9598a1',
    fontSize: 10,
    arrowhead: true,
  },
  // Label at the high/open/close
  {
    kind: 'label',
    id: 'low-label',
    time: '2022-10-13',
    price: 12.42,
    text: '…but closed at the open',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#d1d4dc',
    fontSize: 10,
  },
  // Support hline at dragonfly low
  {
    kind: 'hline',
    id: 'support-line',
    price: 11.18,
    color: 'rgba(38, 166, 154, 0.5)',
    width: 1,
    dash: [6, 3],
  },
  // Bullish reversal arrow on next candle
  {
    kind: 'arrow',
    id: 'bullish-arrow',
    time: '2022-10-14',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'reversal',
  },
]

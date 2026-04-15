import type { AnnotationDef } from '@/types/annotation'

/**
 * Scene 1: Bullish Engulfing at Western support level (~$12.50).
 * Support zone: ~$12.50. Engulfing: Day 1 = 2022-11-04, Day 2 = 2022-11-07.
 */
export const scene1Annotations: AnnotationDef[] = [
  // Support zone hline
  {
    kind: 'hline',
    id: 'support-line',
    price: 12.50,
    color: 'rgba(38, 166, 154, 0.7)',
    width: 2,
    dash: [6, 3],
  },
  // Support label
  {
    kind: 'label',
    id: 'support-label',
    time: '2022-10-13',
    price: 12.50,
    textKey: 'support',
    position: 'left',
    backgroundColor: '#1a5c58',
    textColor: '#26a69a',
    fontSize: 10,
  },
  // Box around the Engulfing at support
  {
    kind: 'box',
    id: 'engulf-box',
    timeRange: { from: '2022-11-04', to: '2022-11-07' },
    priceRange: { high: 14.72, low: 11.89 },
    pricePadding: 0.1,
    fillColor: 'rgba(38, 166, 154, 0.15)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'engulf-label',
    time: '2022-11-07',
    price: 14.72,
    textKey: 'engulfing_bull',
    position: 'above',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Combined signal label
  {
    kind: 'label',
    id: 'combined-label',
    time: '2022-11-07',
    price: 11.89,
    text: 'Candlestick + Support = High probability',
    position: 'right',
    backgroundColor: '#2962ff',
    textColor: '#ffffff',
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
 * Scene 2: Shooting Star at Western resistance level (~$89).
 * Resistance zone: ~$89.12. Shooting Star: 2024-04-04.
 */
export const scene2Annotations: AnnotationDef[] = [
  // Resistance zone hline
  {
    kind: 'hline',
    id: 'resistance-line',
    price: 89.12,
    color: 'rgba(239, 83, 80, 0.7)',
    width: 2,
    dash: [6, 3],
  },
  // Resistance label
  {
    kind: 'label',
    id: 'resistance-label',
    time: '2024-03-18',
    price: 89.12,
    textKey: 'resistance',
    position: 'left',
    backgroundColor: '#5c1a1a',
    textColor: '#ef5350',
    fontSize: 10,
  },
  // Box around the Shooting Star
  {
    kind: 'box',
    id: 'star-box',
    timeRange: { from: '2024-04-04', to: '2024-04-04' },
    priceRange: { high: 93.82, low: 87.96 },
    pricePadding: 0.3,
    fillColor: 'rgba(239, 83, 80, 0.15)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'star-label',
    time: '2024-04-04',
    price: 93.82,
    textKey: 'shooting_star',
    position: 'above',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Combined signal label
  {
    kind: 'label',
    id: 'combined-label',
    time: '2024-04-04',
    price: 87.96,
    text: 'Candlestick + Resistance = High probability',
    position: 'right',
    backgroundColor: '#2962ff',
    textColor: '#ffffff',
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

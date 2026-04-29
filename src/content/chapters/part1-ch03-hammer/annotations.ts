import type { AnnotationDef } from '@/types/annotation'

export const scene1Annotations: AnnotationDef[] = [
  {
    kind: 'arrow',
    id: 'trend-arrow-1',
    time: '2024-01-09',
    direction: 'down',
    color: '#ef5350',
    label: '↓ Downtrend',
    labelKey: 'downtrend',
  },
]

export const scene2Annotations: AnnotationDef[] = [
  // Box around the Hammer
  {
    kind: 'box',
    id: 'hammer-box',
    timeRange: { from: '2024-01-12', to: '2024-01-12' },
    pricePadding: 1,
    fillColor: 'rgba(38, 166, 154, 0.15)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  // Label above hammer
  {
    kind: 'label',
    id: 'hammer-label',
    time: '2024-01-12',
    price: 106,
    textKey: 'hammer',
    position: 'above',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
  // Arrow pointing up at hammer
  {
    kind: 'arrow',
    id: 'hammer-arrow',
    time: '2024-01-12',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'reversal',
  },
  // Support level at hammer low
  {
    kind: 'hline',
    id: 'support',
    price: 95,
    color: 'rgba(38, 166, 154, 0.6)',
    width: 1,
    dash: [6, 3],
  },
]

export const scene3Annotations: AnnotationDef[] = [
  ...scene2Annotations.filter((a) => a.id !== 'hammer-arrow'),
  // Confirmation label
  {
    kind: 'label',
    id: 'confirm-label',
    time: '2024-01-15',
    price: 113,
    textKey: 'confirmation',
    position: 'above',
    backgroundColor: '#2962ff',
    textColor: '#ffffff',
    fontSize: 11,
  },
  {
    kind: 'arrow',
    id: 'confirm-arrow',
    time: '2024-01-15',
    direction: 'up',
    color: '#2962ff',
  },
]

export const scene4Annotations: AnnotationDef[] = [
  {
    kind: 'arrow',
    id: 'trend-arrow-2',
    time: '2024-02-06',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'uptrend',
  },
  {
    kind: 'box',
    id: 'hanging-man-box',
    timeRange: { from: '2024-02-09', to: '2024-02-09' },
    pricePadding: 1,
    fillColor: 'rgba(239, 83, 80, 0.12)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'hanging-man-label',
    time: '2024-02-09',
    price: 111,
    textKey: 'hanging_man',
    position: 'above',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  {
    kind: 'arrow',
    id: 'hanging-man-arrow',
    time: '2024-02-09',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'reversal',
  },
]

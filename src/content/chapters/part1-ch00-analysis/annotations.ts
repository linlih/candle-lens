import type { AnnotationDef } from '@/types/annotation'

export const scene1Annotations: AnnotationDef[] = [
  {
    kind: 'arrow',
    id: 'framework-downtrend',
    time: '2024-02-06',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'downtrend',
  },
  {
    kind: 'hline',
    id: 'framework-support',
    price: 94,
    color: 'rgba(38, 166, 154, 0.7)',
    width: 1,
    dash: [5, 4],
  },
  {
    kind: 'label',
    id: 'framework-support-label',
    time: '2024-02-09',
    price: 94,
    textKey: 'support',
    position: 'below',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
]

export const scene2Annotations: AnnotationDef[] = [
  ...scene1Annotations,
  {
    kind: 'box',
    id: 'framework-hammer-box',
    timeRange: { from: '2024-02-12', to: '2024-02-12' },
    pricePadding: 0.8,
    fillColor: 'rgba(255, 193, 7, 0.14)',
    borderColor: '#ffc107',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'framework-hammer-label',
    time: '2024-02-12',
    price: 100.5,
    textKey: 'hammer',
    position: 'above',
    backgroundColor: '#ffc107',
    textColor: '#1a1a2e',
    fontSize: 11,
  },
]

export const scene3Annotations: AnnotationDef[] = [
  ...scene2Annotations,
  {
    kind: 'label',
    id: 'framework-confirm-label',
    time: '2024-02-13',
    price: 105.5,
    textKey: 'confirmation',
    position: 'above',
    backgroundColor: '#2962ff',
    textColor: '#ffffff',
    fontSize: 11,
  },
  {
    kind: 'arrow',
    id: 'framework-confirm-arrow',
    time: '2024-02-13',
    direction: 'up',
    color: '#2962ff',
  },
]

export const scene4Annotations: AnnotationDef[] = [
  {
    kind: 'hline',
    id: 'framework-failed-support',
    price: 98,
    color: 'rgba(38, 166, 154, 0.7)',
    width: 1,
    dash: [5, 4],
  },
  {
    kind: 'box',
    id: 'framework-failed-hammer-box',
    timeRange: { from: '2024-03-08', to: '2024-03-08' },
    pricePadding: 0.8,
    fillColor: 'rgba(255, 193, 7, 0.14)',
    borderColor: '#ffc107',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'framework-failed-hammer-label',
    time: '2024-03-08',
    price: 106.2,
    textKey: 'hammer',
    position: 'above',
    backgroundColor: '#ffc107',
    textColor: '#1a1a2e',
    fontSize: 11,
  },
  {
    kind: 'label',
    id: 'framework-invalidation-label',
    time: '2024-03-11',
    price: 94.2,
    textKey: 'invalidation',
    position: 'below',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
  {
    kind: 'arrow',
    id: 'framework-invalidation-arrow',
    time: '2024-03-11',
    direction: 'down',
    color: '#ef5350',
  },
]

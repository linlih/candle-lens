import type { AnnotationDef } from '@/types/annotation'

export const scene1Annotations: AnnotationDef[] = [
  {
    kind: 'box',
    id: 'syntax-marubozu-box',
    timeRange: { from: '2024-04-01', to: '2024-04-02' },
    priceRange: { high: 112, low: 99 },
    pricePadding: 0.5,
    fillColor: 'rgba(38, 166, 154, 0.08)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'syntax-marubozu-label',
    time: '2024-04-01',
    price: 114,
    textKey: 'marubozu',
    position: 'above',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
]

export const scene2Annotations: AnnotationDef[] = [
  {
    kind: 'box',
    id: 'syntax-spinning-box',
    timeRange: { from: '2024-04-10', to: '2024-04-10' },
    pricePadding: 0.6,
    fillColor: 'rgba(255, 193, 7, 0.14)',
    borderColor: '#ffc107',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'syntax-spinning-label',
    time: '2024-04-10',
    price: 111.5,
    textKey: 'spinning_top',
    position: 'above',
    backgroundColor: '#ffc107',
    textColor: '#1a1a2e',
    fontSize: 11,
  },
]

export const scene3Annotations: AnnotationDef[] = [
  {
    kind: 'arrow',
    id: 'syntax-uptrend-arrow',
    time: '2024-04-16',
    direction: 'up',
    color: '#26a69a',
    labelKey: 'uptrend',
  },
  {
    kind: 'box',
    id: 'syntax-upper-shadow-box',
    timeRange: { from: '2024-04-18', to: '2024-04-18' },
    pricePadding: 0.4,
    fillColor: 'rgba(239, 83, 80, 0.12)',
    borderColor: '#ef5350',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'syntax-upper-shadow-label',
    time: '2024-04-18',
    price: 116,
    textKey: 'upper_shadow_rejection',
    position: 'above',
    backgroundColor: '#ef5350',
    textColor: '#ffffff',
    fontSize: 11,
  },
]

export const scene4Annotations: AnnotationDef[] = [
  {
    kind: 'arrow',
    id: 'syntax-downtrend-arrow',
    time: '2024-04-23',
    direction: 'down',
    color: '#ef5350',
    labelKey: 'downtrend',
  },
  {
    kind: 'box',
    id: 'syntax-lower-shadow-box',
    timeRange: { from: '2024-04-25', to: '2024-04-25' },
    pricePadding: 0.4,
    fillColor: 'rgba(38, 166, 154, 0.12)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'syntax-lower-shadow-label',
    time: '2024-04-25',
    price: 97.2,
    textKey: 'lower_shadow_recovery',
    position: 'below',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },
]

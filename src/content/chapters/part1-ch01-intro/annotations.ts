import type { AnnotationDef } from '@/types/annotation'

export const scene1Annotations: AnnotationDef[] = []

/**
 * Scene 2: anatomy of the bullish candle at '2024-01-02'
 *   open=90  close=120  high=136  low=62
 *
 * Layout:
 *   High  → 'above'  (no overlap with anything)
 *   Low   → 'below'  (no overlap with anything)
 *   Everything else → 'right', at well-spaced price levels
 *
 * No full-width hlines — the box + connector lines in LabelPrimitive
 * are sufficient visual anchors.
 */
export const scene2Annotations: AnnotationDef[] = [
  // ── Real body highlight ──────────────────────────────────────────────────
  {
    kind: 'box',
    id: 'body-box',
    timeRange: { from: '2024-01-02', to: '2024-01-02' },
    priceRange: { high: 120, low: 90 },
    pricePadding: 0,
    fillColor: 'rgba(38, 166, 154, 0.2)',
    borderColor: '#26a69a',
    borderWidth: 2,
  },

  // ── High (above the candle) ──────────────────────────────────────────────
  {
    kind: 'label',
    id: 'lbl-high',
    time: '2024-01-02',
    price: 136,
    textKey: 'anat_high',
    position: 'above',
    backgroundColor: '#4a4e5c',
    textColor: '#d1d4dc',
    fontSize: 11,
  },

  // ── Upper Shadow (right, midpoint of upper wick: (136+120)/2 = 128) ──────
  {
    kind: 'label',
    id: 'lbl-upper-shadow',
    time: '2024-01-02',
    price: 128,
    textKey: 'anat_upper_shadow',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#9598a1',
    fontSize: 11,
    arrowhead: true,
  },

  // ── Close (right, top of body) ───────────────────────────────────────────
  {
    kind: 'label',
    id: 'lbl-close',
    time: '2024-01-02',
    price: 120,
    textKey: 'anat_close',
    position: 'right',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },

  // ── Body (right, midpoint of body: (120+90)/2 = 105) ────────────────────
  {
    kind: 'label',
    id: 'lbl-body',
    time: '2024-01-02',
    price: 105,
    textKey: 'anat_body',
    position: 'right',
    backgroundColor: '#1a5c58',
    textColor: '#ffffff',
    fontSize: 11,
  },

  // ── Open (right, bottom of body) ─────────────────────────────────────────
  {
    kind: 'label',
    id: 'lbl-open',
    time: '2024-01-02',
    price: 90,
    textKey: 'anat_open',
    position: 'right',
    backgroundColor: '#26a69a',
    textColor: '#ffffff',
    fontSize: 11,
  },

  // ── Lower Shadow (right, midpoint of lower wick: (90+62)/2 = 76) ─────────
  {
    kind: 'label',
    id: 'lbl-lower-shadow',
    time: '2024-01-02',
    price: 76,
    textKey: 'anat_lower_shadow',
    position: 'right',
    backgroundColor: '#363a45',
    textColor: '#9598a1',
    fontSize: 11,
    arrowhead: true,
  },

  // ── Low (below the candle) ───────────────────────────────────────────────
  {
    kind: 'label',
    id: 'lbl-low',
    time: '2024-01-02',
    price: 62,
    textKey: 'anat_low',
    position: 'below',
    backgroundColor: '#4a4e5c',
    textColor: '#d1d4dc',
    fontSize: 11,
  },
]

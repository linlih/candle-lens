import type { LWTime } from './content'

export interface TimeRange {
  from: LWTime
  to: LWTime
}

/**
 * BoxAnnotation: a filled rectangle around one or more candles.
 * priceRange is auto-calculated from candle highs/lows if omitted.
 */
export interface BoxAnnotation {
  kind: 'box'
  id: string
  timeRange: TimeRange
  priceRange?: { high: number; low: number }
  /** Extra price-unit padding above and below auto price range */
  pricePadding?: number
  fillColor: string
  borderColor: string
  borderWidth?: number
}

/** Text label anchored to a (time, price) point */
export interface LabelAnnotation {
  kind: 'label'
  id: string
  time: LWTime
  price: number
  /** Resolved text (use when no i18n needed) */
  text?: string
  /** i18n key in the 'patterns' namespace, takes priority over text */
  textKey?: string
  position: 'above' | 'below' | 'left' | 'right'
  backgroundColor: string
  textColor: string
  fontSize?: number
  /** Draw an arrowhead at the candle-side end of the connector line */
  arrowhead?: boolean
}

/** A horizontal price line across the full chart */
export interface HorizontalLineAnnotation {
  kind: 'hline'
  id: string
  price: number
  color: string
  width?: number
  dash?: number[]
}

/** A diagonal line between two (time, price) anchor points */
export interface TrendLineAnnotation {
  kind: 'trendline'
  id: string
  p1: { time: LWTime; price: number }
  p2: { time: LWTime; price: number }
  color: string
  width?: number
}

/**
 * Arrow annotation via LW built-in series.setMarkers().
 * direction 'up' → aboveBar arrowUp; 'down' → belowBar arrowDown.
 */
export interface ArrowAnnotation {
  kind: 'arrow'
  id: string
  time: LWTime
  direction: 'up' | 'down'
  color: string
  label?: string
  labelKey?: string
}

export type AnnotationDef =
  | BoxAnnotation
  | LabelAnnotation
  | HorizontalLineAnnotation
  | TrendLineAnnotation
  | ArrowAnnotation

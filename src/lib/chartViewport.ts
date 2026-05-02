import type { AnnotationDef } from '../types/annotation.js'
import type { CandleBar, LWTime } from '../types/content.js'

export interface ChartLogicalRange {
  from: number
  to: number
}

export interface AnnotationPriceRange {
  minValue: number
  maxValue: number
}

export interface ChartViewportOptions {
  targetBarSpacing: number
  minSidePaddingBars: number
  maxVisibleRangeMultiplier: number
  minSideLabelPaddingBars: number
  minCenteredLabelPaddingBars: number
  arrowPaddingBars: number
}

export const chartViewportDefaults: ChartViewportOptions = {
  targetBarSpacing: 30,
  minSidePaddingBars: 2,
  maxVisibleRangeMultiplier: 4,
  minSideLabelPaddingBars: 8,
  minCenteredLabelPaddingBars: 4,
  arrowPaddingBars: 3,
}

export function calculateChartVisibleLogicalRange(
  candles: Pick<CandleBar, 'time'>[],
  annotations: AnnotationDef[],
  width: number,
  options: Partial<ChartViewportOptions> = {},
): ChartLogicalRange | null {
  const candleCount = candles.length
  if (candleCount <= 0 || width <= 0) return null

  const resolvedOptions = { ...chartViewportDefaults, ...options }
  const timeToIndex = createTimeIndex(candles)
  const annotationPadding = calculateAnnotationPadding(
    annotations,
    timeToIndex,
    resolvedOptions,
  )
  const minLeftPadding = Math.max(
    resolvedOptions.minSidePaddingBars,
    annotationPadding.left,
  )
  const minRightPadding = Math.max(
    resolvedOptions.minSidePaddingBars,
    annotationPadding.right,
  )

  const targetVisibleBars = Math.ceil(width / resolvedOptions.targetBarSpacing)
  const minVisibleBars = candleCount + minLeftPadding + minRightPadding
  const maxVisibleBars = Math.max(
    minVisibleBars,
    Math.ceil(candleCount * resolvedOptions.maxVisibleRangeMultiplier),
  )
  const visibleBars = Math.max(minVisibleBars, Math.min(targetVisibleBars, maxVisibleBars))
  const balancedExtraBars = Math.max(0, visibleBars - minVisibleBars)
  const leftPadding = minLeftPadding + balancedExtraBars / 2
  const rightPadding = minRightPadding + balancedExtraBars / 2

  return {
    from: -leftPadding,
    to: candleCount - 1 + rightPadding,
  }
}

export function calculateAnnotationPriceRange(
  candles: CandleBar[],
  annotations: AnnotationDef[],
): AnnotationPriceRange | null {
  let minValue = Number.POSITIVE_INFINITY
  let maxValue = Number.NEGATIVE_INFINITY
  const visibleTimes = new Set(candles.map((candle) => candle.time))

  const include = (value: number) => {
    if (!Number.isFinite(value)) return
    minValue = Math.min(minValue, value)
    maxValue = Math.max(maxValue, value)
  }

  for (const annotation of annotations) {
    switch (annotation.kind) {
      case 'box': {
        const hasVisibleCandle = candles.some((candle) => {
          return candle.time >= annotation.timeRange.from && candle.time <= annotation.timeRange.to
        })
        if (!hasVisibleCandle) {
          break
        }
        const range = annotation.priceRange
          ?? getCandlePriceRange(candles, annotation.timeRange.from, annotation.timeRange.to)
        if (!range) break
        const padding = annotation.pricePadding ?? 1
        include(range.low - padding)
        include(range.high + padding)
        break
      }
      case 'label':
        if (visibleTimes.has(annotation.time)) include(annotation.price)
        break
      case 'hline':
        include(annotation.price)
        break
      case 'trendline':
        if (visibleTimes.has(annotation.p1.time)) include(annotation.p1.price)
        if (visibleTimes.has(annotation.p2.time)) include(annotation.p2.price)
        break
      case 'arrow':
        break
    }
  }

  if (!Number.isFinite(minValue) || !Number.isFinite(maxValue)) return null
  return { minValue, maxValue }
}

function calculateAnnotationPadding(
  annotations: AnnotationDef[],
  timeToIndex: Map<LWTime, number>,
  options: ChartViewportOptions,
): { left: number; right: number } {
  let left = 0
  let right = 0

  const includeCentered = (time: LWTime, padding: number) => {
    const index = timeToIndex.get(time)
    if (index === undefined) return
    left = Math.max(left, Math.max(0, padding - index))
    right = Math.max(right, Math.max(0, padding - (timeToIndex.size - 1 - index)))
  }

  for (const annotation of annotations) {
    switch (annotation.kind) {
      case 'box': {
        const fromIndex = timeToIndex.get(annotation.timeRange.from)
        const toIndex = timeToIndex.get(annotation.timeRange.to)
        if (fromIndex !== undefined) {
          left = Math.max(left, Math.max(0, options.minSidePaddingBars - fromIndex))
        }
        if (toIndex !== undefined) {
          right = Math.max(right, Math.max(0, options.minSidePaddingBars - (timeToIndex.size - 1 - toIndex)))
        }
        break
      }
      case 'label': {
        const index = timeToIndex.get(annotation.time)
        if (index === undefined) break

        const sidePadding = Math.max(
          options.minSideLabelPaddingBars,
          estimateLabelBars(annotation.text ?? annotation.textKey ?? annotation.id, annotation.fontSize, options),
        )
        const centeredPadding = Math.max(
          options.minCenteredLabelPaddingBars,
          Math.ceil(sidePadding / 2),
        )

        if (annotation.position === 'left') {
          left = Math.max(left, Math.max(0, sidePadding - index))
        } else if (annotation.position === 'right') {
          right = Math.max(right, Math.max(0, sidePadding - (timeToIndex.size - 1 - index)))
        } else {
          includeCentered(annotation.time, centeredPadding)
        }
        break
      }
      case 'arrow':
        includeCentered(annotation.time, options.arrowPaddingBars)
        break
      case 'trendline':
        includeCentered(annotation.p1.time, options.minCenteredLabelPaddingBars)
        includeCentered(annotation.p2.time, options.minCenteredLabelPaddingBars)
        break
      case 'hline':
        break
    }
  }

  return { left, right }
}

function estimateLabelBars(
  text: string,
  fontSize = 11,
  options: ChartViewportOptions,
): number {
  const textUnits = Array.from(text).reduce((sum, char) => {
    return sum + (char.charCodeAt(0) > 255 ? 1.05 : 0.58)
  }, 0)
  const estimatedWidth = textUnits * fontSize + 40
  return Math.ceil(estimatedWidth / options.targetBarSpacing)
}

function createTimeIndex(candles: Pick<CandleBar, 'time'>[]): Map<LWTime, number> {
  return new Map(candles.map((candle, index) => [candle.time, index]))
}

function getCandlePriceRange(
  candles: CandleBar[],
  from: LWTime,
  to: LWTime,
): { high: number; low: number } | null {
  const inRange = candles.filter((candle) => candle.time >= from && candle.time <= to)
  if (!inRange.length) return null

  return {
    high: Math.max(...inRange.map((candle) => candle.high)),
    low: Math.min(...inRange.map((candle) => candle.low)),
  }
}

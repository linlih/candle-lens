import test from 'node:test'
import assert from 'node:assert/strict'

import {
  calculateAnnotationPriceRange,
  calculateChartVisibleLogicalRange,
} from '../src/lib/chartViewport.js'
import type { AnnotationDef } from '../src/types/annotation.js'
import type { CandleBar } from '../src/types/content.js'

const candles: CandleBar[] = [
  { time: '2024-01-01', open: 10, high: 12, low: 9, close: 11 },
  { time: '2024-01-02', open: 11, high: 13, low: 10, close: 12 },
  { time: '2024-01-03', open: 12, high: 14, low: 11, close: 13 },
  { time: '2024-01-04', open: 13, high: 15, low: 12, close: 14 },
  { time: '2024-01-05', open: 14, high: 16, low: 13, close: 15 },
]

test('chart viewport keeps base candles visible with balanced padding', () => {
  const range = calculateChartVisibleLogicalRange(candles, [], 900)

  assert.ok(range)
  assert.ok(range.from < 0)
  assert.ok(range.to > candles.length - 1)
  assert.equal(Math.abs(range.from), range.to - (candles.length - 1))
})

test('chart viewport reserves right-side room for labels near the final candle', () => {
  const annotations: AnnotationDef[] = [
    {
      kind: 'label',
      id: 'right-label',
      time: '2024-01-05',
      price: 15,
      text: 'Candlestick + Resistance = High probability',
      position: 'right',
      backgroundColor: '#2962ff',
      textColor: '#ffffff',
    },
  ]

  const range = calculateChartVisibleLogicalRange(candles, annotations, 900)

  assert.ok(range)
  const leftPadding = Math.abs(range.from)
  const rightPadding = range.to - (candles.length - 1)
  assert.ok(rightPadding > leftPadding)
  assert.ok(rightPadding >= 10)
})

test('chart viewport reserves left-side room for labels near the first candle', () => {
  const annotations: AnnotationDef[] = [
    {
      kind: 'label',
      id: 'left-label',
      time: '2024-01-01',
      price: 10,
      text: 'Support zone',
      position: 'left',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
    },
  ]

  const range = calculateChartVisibleLogicalRange(candles, annotations, 900)

  assert.ok(range)
  const leftPadding = Math.abs(range.from)
  const rightPadding = range.to - (candles.length - 1)
  assert.ok(leftPadding > rightPadding)
})

test('annotation price range includes labels, lines, and padded boxes', () => {
  const annotations: AnnotationDef[] = [
    {
      kind: 'box',
      id: 'box',
      timeRange: { from: '2024-01-02', to: '2024-01-03' },
      priceRange: { high: 25, low: 8 },
      pricePadding: 2,
      fillColor: 'rgba(41, 98, 255, 0.1)',
      borderColor: '#2962ff',
    },
    {
      kind: 'label',
      id: 'label',
      time: '2024-01-04',
      price: 50,
      text: 'Breakout',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
    },
    {
      kind: 'hline',
      id: 'line',
      price: 7,
      color: '#ef5350',
    },
  ]

  assert.deepEqual(
    calculateAnnotationPriceRange(candles, annotations),
    { minValue: 6, maxValue: 50 },
  )
})

test('annotation price range ignores time-bound annotations outside visible candles', () => {
  const annotations: AnnotationDef[] = [
    {
      kind: 'label',
      id: 'future-label',
      time: '2024-02-01',
      price: 100,
      text: 'Hidden',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
    },
    {
      kind: 'box',
      id: 'future-box',
      timeRange: { from: '2024-02-01', to: '2024-02-02' },
      priceRange: { high: 120, low: 80 },
      fillColor: 'rgba(41, 98, 255, 0.1)',
      borderColor: '#2962ff',
    },
    {
      kind: 'hline',
      id: 'visible-line',
      price: 7,
      color: '#ef5350',
    },
  ]

  assert.deepEqual(
    calculateAnnotationPriceRange(candles, annotations),
    { minValue: 7, maxValue: 7 },
  )
})

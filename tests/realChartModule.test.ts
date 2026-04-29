import test from 'node:test'
import assert from 'node:assert/strict'

import { normalizeRealCharts } from '../src/lib/realChartModule.js'
import type { RealChartData } from '../src/types/realChart.js'

const sampleChart: RealChartData = {
  chapterId: 'sample',
  ticker: 'NVDA',
  candles: [
    { time: '2026-01-01', open: 1, high: 2, low: 0.5, close: 1.5 },
  ],
  annotations: [],
  locale: {
    en: {
      patternLabel: 'Sample',
      analysisText: 'Sample analysis.',
    },
    zh: {
      patternLabel: '示例',
      analysisText: '示例分析。',
    },
  },
}

test('normalizeRealCharts returns array from legacy single-chart module', () => {
  assert.deepEqual(normalizeRealCharts({ realChart: sampleChart }), [sampleChart])
})

test('normalizeRealCharts prefers explicit multi-chart modules', () => {
  const secondChart = {
    ...sampleChart,
    chapterId: 'sample-2',
  }

  assert.deepEqual(
    normalizeRealCharts({ realChart: sampleChart, realCharts: [sampleChart, secondChart] }),
    [sampleChart, secondChart],
  )
})

test('normalizeRealCharts returns empty array when module has no chart payload', () => {
  assert.deepEqual(normalizeRealCharts({}), [])
})

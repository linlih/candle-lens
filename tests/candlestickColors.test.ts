import test from 'node:test'
import assert from 'node:assert/strict'
import { normalizeCandleColorMode, resolveCandleColorMode, resolveCandleColors } from '../src/lib/candlestickColors.js'

test('resolveCandleColorMode follows locale defaults when mode is auto', () => {
  assert.equal(resolveCandleColorMode('auto', 'zh'), 'red-up')
  assert.equal(resolveCandleColorMode('auto', 'en'), 'green-up')
})

test('resolveCandleColorMode preserves explicit user overrides', () => {
  assert.equal(resolveCandleColorMode('red-up', 'en'), 'red-up')
  assert.equal(resolveCandleColorMode('green-up', 'zh'), 'green-up')
})

test('normalizeCandleColorMode maps legacy persisted values to neutral names', () => {
  assert.equal(normalizeCandleColorMode('cn'), 'red-up')
  assert.equal(normalizeCandleColorMode('global'), 'green-up')
})

test('resolveCandleColors maps red-up mode to red-up green-down', () => {
  const colors = resolveCandleColors('red-up', 'en')
  assert.equal(colors.bullColor, '#ef5350')
  assert.equal(colors.bearColor, '#26a69a')
})

test('resolveCandleColors maps green-up mode to green-up red-down', () => {
  const colors = resolveCandleColors('green-up', 'zh')
  assert.equal(colors.bullColor, '#26a69a')
  assert.equal(colors.bearColor, '#ef5350')
})

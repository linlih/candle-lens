import test from 'node:test'
import assert from 'node:assert/strict'
import {
  normalizeBasePath,
  normalizeProjectPath,
  normalizeSiteUrl,
} from '../src/lib/deploymentConfig.js'

test('normalizeBasePath ensures a leading and trailing slash', () => {
  assert.equal(normalizeBasePath('/candle-lens/'), '/candle-lens/')
  assert.equal(normalizeBasePath('/candle-lens'), '/candle-lens/')
  assert.equal(normalizeBasePath('candle-lens'), '/candle-lens/')
  assert.equal(normalizeBasePath('/'), '/')
})

test('normalizeSiteUrl ensures a trailing slash', () => {
  assert.equal(normalizeSiteUrl('https://example.com'), 'https://example.com/')
  assert.equal(normalizeSiteUrl('https://example.com/'), 'https://example.com/')
  assert.equal(
    normalizeSiteUrl('https://linlih.github.io/candle-lens'),
    'https://linlih.github.io/candle-lens/',
  )
})

test('normalizeProjectPath ensures a leading slash without a trailing slash', () => {
  assert.equal(normalizeProjectPath('/candle-lens'), '/candle-lens')
  assert.equal(normalizeProjectPath('/candle-lens/'), '/candle-lens')
  assert.equal(normalizeProjectPath('candle-lens'), '/candle-lens')
  assert.equal(normalizeProjectPath('/'), '/')
})

import test from 'node:test'
import assert from 'node:assert/strict'
import { resolveLocale } from '../src/lib/locale.js'

test('resolveLocale prefers zh variants', () => {
  assert.equal(resolveLocale('zh'), 'zh')
  assert.equal(resolveLocale('zh-CN'), 'zh')
  assert.equal(resolveLocale('zh-TW'), 'zh')
})

test('resolveLocale falls back to en for non-zh languages and empty input', () => {
  assert.equal(resolveLocale('en'), 'en')
  assert.equal(resolveLocale('en-US'), 'en')
  assert.equal(resolveLocale('fr'), 'en')
  assert.equal(resolveLocale(undefined), 'en')
})

import test from 'node:test'
import assert from 'node:assert/strict'
import { createLatestRequestRunner } from '../src/lib/asyncRequestGuard.js'

function deferred<T>() {
  let resolve!: (value: T) => void
  let reject!: (reason?: unknown) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

test('latest request wins when older request resolves later', async () => {
  const runner = createLatestRequestRunner<string>()
  const first = deferred<string>()
  const second = deferred<string>()
  const applied: string[] = []

  runner.run(() => first.promise, {
    onSuccess: (value: string) => applied.push(`first:${value}`),
    onError: () => applied.push('first:error'),
  })

  runner.run(() => second.promise, {
    onSuccess: (value: string) => applied.push(`second:${value}`),
    onError: () => applied.push('second:error'),
  })

  first.resolve('stale')
  second.resolve('fresh')
  await Promise.resolve()
  await Promise.resolve()

  assert.deepEqual(applied, ['second:fresh'])
})

test('cleanup prevents a request from applying after cancellation', async () => {
  const runner = createLatestRequestRunner<string>()
  const pending = deferred<string>()
  const applied: string[] = []

  const cancel = runner.run(() => pending.promise, {
    onSuccess: (value: string) => applied.push(value),
    onError: () => applied.push('error'),
  })

  cancel()
  pending.resolve('ignored')
  await Promise.resolve()
  await Promise.resolve()

  assert.deepEqual(applied, [])
})

test('latest request also gates errors', async () => {
  const runner = createLatestRequestRunner<string>()
  const first = deferred<string>()
  const second = deferred<string>()
  const applied: string[] = []

  runner.run(() => first.promise, {
    onSuccess: (value: string) => applied.push(value),
    onError: () => applied.push('first:error'),
  })

  runner.run(() => second.promise, {
    onSuccess: (value: string) => applied.push(value),
    onError: () => applied.push('second:error'),
  })

  first.reject(new Error('stale'))
  second.reject(new Error('fresh'))
  await Promise.resolve()
  await Promise.resolve()

  assert.deepEqual(applied, ['second:error'])
})

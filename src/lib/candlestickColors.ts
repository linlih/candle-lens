import type { Locale } from './locale.js'

export type CandleColorMode = 'auto' | 'red-up' | 'green-up'
type LegacyCandleColorMode = 'cn' | 'global'
type AnyCandleColorMode = CandleColorMode | LegacyCandleColorMode

export interface CandleColors {
  bullColor: string
  bearColor: string
  wickBullColor: string
  wickBearColor: string
}

const CN_COLORS: CandleColors = {
  bullColor: '#ef5350',
  bearColor: '#26a69a',
  wickBullColor: '#ef5350',
  wickBearColor: '#26a69a',
}

const GLOBAL_COLORS: CandleColors = {
  bullColor: '#26a69a',
  bearColor: '#ef5350',
  wickBullColor: '#26a69a',
  wickBearColor: '#ef5350',
}

export function normalizeCandleColorMode(mode: AnyCandleColorMode | undefined): CandleColorMode {
  if (mode === 'cn') return 'red-up'
  if (mode === 'global') return 'green-up'
  return mode ?? 'auto'
}

export function resolveCandleColorMode(
  mode: AnyCandleColorMode | undefined,
  locale: Locale,
): Exclude<CandleColorMode, 'auto'> {
  const normalized = normalizeCandleColorMode(mode)
  if (normalized === 'auto') {
    return locale === 'zh' ? 'red-up' : 'green-up'
  }

  return normalized
}

export function resolveCandleColors(mode: AnyCandleColorMode | undefined, locale: Locale): CandleColors {
  return resolveCandleColorMode(mode, locale) === 'red-up' ? CN_COLORS : GLOBAL_COLORS
}

import type { CandleBar } from './content'
import type { AnnotationDef } from './annotation'

export interface RealChartLocale {
  patternLabel: string   // shown below section header, e.g. "Doji — Oct 2023"
  analysisText: string   // 2–4 sentences explaining the highlighted pattern
}

export interface RealChartData {
  chapterId: string
  ticker: string           // e.g. 'NVDA'
  candles: CandleBar[]     // 15–20 trading days: context + pattern + reaction
  annotations: AnnotationDef[]
  locale: {
    en: RealChartLocale
    zh: RealChartLocale
  }
}

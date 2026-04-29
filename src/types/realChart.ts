import type { CandleBar } from './content'
import type { AnnotationDef } from './annotation'

export type RealChartBias = 'bullish' | 'bearish' | 'neutral' | 'wait'

export interface RealChartLocale {
  patternLabel: string   // shown below section header, e.g. "Doji — Oct 2023"
  analysisText: string   // 2–4 sentences explaining the highlighted pattern
  /** annotation id → localized label text; overrides the English `text` field on LabelAnnotations */
  labelText?: Record<string, string>
}

export interface RealChartLessonStepLocale {
  title: string
  summary: string
  question?: string
  answer?: string
  confirmationSignals?: string[]
  invalidationSignals?: string[]
}

export interface RealChartLessonStep {
  id: string
  visibleCount: number
  bias: RealChartBias
  annotationIds?: string[]
  locale: {
    en: RealChartLessonStepLocale
    zh: RealChartLessonStepLocale
  }
}

export interface RealChartLessonLocale {
  intro: string
  conclusion: string
}

export interface RealChartLesson {
  steps: RealChartLessonStep[]
  locale: {
    en: RealChartLessonLocale
    zh: RealChartLessonLocale
  }
}

export interface RealChartData {
  chapterId: string
  ticker: string           // e.g. 'NVDA'
  candles: CandleBar[]     // 15–20 trading days: context + pattern + reaction
  annotations: AnnotationDef[]
  lesson?: RealChartLesson
  locale: {
    en: RealChartLocale
    zh: RealChartLocale
  }
}

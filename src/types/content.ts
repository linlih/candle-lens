import type { AnnotationDef } from './annotation.js'

/** Lightweight-charts time format: 'YYYY-MM-DD' */
export type LWTime = string

export interface CandleBar {
  time: LWTime
  open: number
  high: number
  low: number
  close: number
  volume?: number
}

/**
 * A Scene is one "slide" within a chapter.
 * A chapter may have multiple scenes stepping through context → pattern → confirmation.
 */
export interface Scene {
  id: string
  /** Key into the chapter's sceneTitles record */
  titleKey: string
  candles: CandleBar[]
  annotations: AnnotationDef[]
}

export type ExplanationBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'callout'; variant: 'tip' | 'warning' | 'rule'; text: string }
  | { type: 'keyPoints'; points: string[] }
  | { type: 'comparison'; bullish: string; bearish: string }
  /**
   * Inline chart placeholder — renders the current scene's CandleChart
   * at this position in the explanation flow.
   */
  | { type: 'chart' }

export interface ChapterLocaleContent {
  title: string
  subtitle: string
  explanation: ExplanationBlock[]
  /** Per-scene subtitles keyed by Scene.titleKey */
  sceneTitles: Record<string, string>
}

export interface ChapterContent {
  id: string
  partNumber: 1 | 2 | 3 | 4
  chapterNumber: number
  patternNames: string[]
  scenes: Scene[]
  locale: {
    en: ChapterLocaleContent
    zh: ChapterLocaleContent
  }
}

/** Lightweight summary used in nav + home page — does NOT include scene data */
export interface ChapterMeta {
  id: string
  partNumber: 1 | 2 | 3 | 4
  chapterNumber: number
  patternNames: string[]
  sceneCount: number
}

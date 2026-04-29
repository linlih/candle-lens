import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles, scene3Candles, scene4Candles } from './data'
import { scene1Annotations, scene2Annotations, scene3Annotations, scene4Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part1-ch00-analysis',
  partNumber: 1,
  chapterNumber: 0,
  patternNames: ['Trend', 'Location', 'Confirmation', 'Invalidation'],
  scenes: [
    {
      id: 'scene-context',
      titleKey: 'scene-context',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-candidate',
      titleKey: 'scene-candidate',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
    {
      id: 'scene-confirmed',
      titleKey: 'scene-confirmed',
      candles: scene3Candles,
      annotations: scene3Annotations,
    },
    {
      id: 'scene-failed',
      titleKey: 'scene-failed',
      candles: scene4Candles,
      annotations: scene4Annotations,
    },
  ],
  locale: { en, zh },
}

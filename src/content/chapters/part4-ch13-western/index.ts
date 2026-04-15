import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles } from './data'
import { scene1Annotations, scene2Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part4-ch13-western',
  partNumber: 4,
  chapterNumber: 13,
  patternNames: ['Combining Western Techniques'],
  scenes: [
    {
      id: 'scene-at-support',
      titleKey: 'scene-at-support',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-at-resistance',
      titleKey: 'scene-at-resistance',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
  ],
  locale: { en, zh },
}

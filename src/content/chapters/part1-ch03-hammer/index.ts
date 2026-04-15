import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles, scene3Candles } from './data'
import { scene1Annotations, scene2Annotations, scene3Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part1-ch03-hammer',
  partNumber: 1,
  chapterNumber: 3,
  patternNames: ['Hammer', 'Hanging Man'],
  scenes: [
    {
      id: 'scene-downtrend',
      titleKey: 'scene-downtrend',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-hammer',
      titleKey: 'scene-hammer',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
    {
      id: 'scene-confirm',
      titleKey: 'scene-confirm',
      candles: scene3Candles,
      annotations: scene3Annotations,
    },
  ],
  locale: { en, zh },
}

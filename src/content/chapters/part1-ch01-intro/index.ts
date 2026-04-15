import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles } from './data'
import { scene1Annotations, scene2Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part1-ch01-intro',
  partNumber: 1,
  chapterNumber: 1,
  patternNames: ['Candlestick Basics'],
  scenes: [
    {
      id: 'scene-anatomy',
      titleKey: 'scene-anatomy',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
    {
      id: 'scene-overview',
      titleKey: 'scene-overview',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
  ],
  locale: { en, zh },
}

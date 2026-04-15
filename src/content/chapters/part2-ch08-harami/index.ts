import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles, scene3Candles } from './data'
import { scene1Annotations, scene2Annotations, scene3Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part2-ch08-harami',
  partNumber: 2,
  chapterNumber: 8,
  patternNames: ['Bullish Harami', 'Bearish Harami'],
  scenes: [
    {
      id: 'scene-bull-harami',
      titleKey: 'scene-bull-harami',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-bear-harami',
      titleKey: 'scene-bear-harami',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
    {
      id: 'scene-harami-cross',
      titleKey: 'scene-harami-cross',
      candles: scene3Candles,
      annotations: scene3Annotations,
    },
  ],
  locale: { en, zh },
}

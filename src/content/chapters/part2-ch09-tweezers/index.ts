import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles } from './data'
import { scene1Annotations, scene2Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part2-ch09-tweezers',
  partNumber: 2,
  chapterNumber: 9,
  patternNames: ['Tweezers Top', 'Tweezers Bottom'],
  scenes: [
    {
      id: 'scene-tweezers-top',
      titleKey: 'scene-tweezers-top',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-tweezers-bottom',
      titleKey: 'scene-tweezers-bottom',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
  ],
  locale: { en, zh },
}

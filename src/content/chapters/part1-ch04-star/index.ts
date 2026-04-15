import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles, scene3Candles } from './data'
import { scene1Annotations, scene2Annotations, scene3Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part1-ch04-star',
  partNumber: 1,
  chapterNumber: 4,
  patternNames: ['Shooting Star', 'Inverted Hammer'],
  scenes: [
    {
      id: 'scene-shooting-star',
      titleKey: 'scene-shooting-star',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-inv-hammer',
      titleKey: 'scene-inv-hammer',
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

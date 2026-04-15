import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles, scene3Candles } from './data'
import { scene1Annotations, scene2Annotations, scene3Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part1-ch02-doji',
  partNumber: 1,
  chapterNumber: 2,
  patternNames: ['Doji', 'Gravestone Doji', 'Dragonfly Doji'],
  scenes: [
    {
      id: 'scene-doji',
      titleKey: 'scene-doji',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-gravestone',
      titleKey: 'scene-gravestone',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
    {
      id: 'scene-dragonfly',
      titleKey: 'scene-dragonfly',
      candles: scene3Candles,
      annotations: scene3Annotations,
    },
  ],
  locale: { en, zh },
}

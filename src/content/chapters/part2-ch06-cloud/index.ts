import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles, scene3Candles } from './data'
import { scene1Annotations, scene2Annotations, scene3Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part2-ch06-cloud',
  partNumber: 2,
  chapterNumber: 6,
  patternNames: ['Dark Cloud Cover', 'Piercing Pattern'],
  scenes: [
    {
      id: 'scene-dark-cloud',
      titleKey: 'scene-dark-cloud',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-piercing',
      titleKey: 'scene-piercing',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
    {
      id: 'scene-50-rule',
      titleKey: 'scene-50-rule',
      candles: scene3Candles,
      annotations: scene3Annotations,
    },
  ],
  locale: { en, zh },
}

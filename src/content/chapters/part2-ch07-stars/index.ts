import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles, scene3Candles, scene4Candles } from './data'
import { scene1Annotations, scene2Annotations, scene3Annotations, scene4Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part2-ch07-stars',
  partNumber: 2,
  chapterNumber: 7,
  patternNames: ['Morning Star', 'Evening Star'],
  scenes: [
    {
      id: 'scene-downtrend',
      titleKey: 'scene-downtrend',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-morning',
      titleKey: 'scene-morning',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
    {
      id: 'scene-uptrend',
      titleKey: 'scene-uptrend',
      candles: scene3Candles,
      annotations: scene3Annotations,
    },
    {
      id: 'scene-evening',
      titleKey: 'scene-evening',
      candles: scene4Candles,
      annotations: scene4Annotations,
    },
  ],
  locale: { en, zh },
}

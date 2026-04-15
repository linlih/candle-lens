import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles, scene3Candles } from './data'
import { scene1Annotations, scene2Annotations, scene3Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part3-ch12-three-methods',
  partNumber: 3,
  chapterNumber: 12,
  patternNames: ['Rising Three Methods', 'Falling Three Methods'],
  scenes: [
    {
      id: 'scene-rising',
      titleKey: 'scene-rising',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-falling',
      titleKey: 'scene-falling',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
    {
      id: 'scene-continuation',
      titleKey: 'scene-continuation',
      candles: scene3Candles,
      annotations: scene3Annotations,
    },
  ],
  locale: { en, zh },
}

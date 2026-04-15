import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles, scene3Candles } from './data'
import { scene1Annotations, scene2Annotations, scene3Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part3-ch11-windows',
  partNumber: 3,
  chapterNumber: 11,
  patternNames: ['Windows (Gaps)'],
  scenes: [
    {
      id: 'scene-rising-window',
      titleKey: 'scene-rising-window',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-falling-window',
      titleKey: 'scene-falling-window',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
    {
      id: 'scene-window-support',
      titleKey: 'scene-window-support',
      candles: scene3Candles,
      annotations: scene3Annotations,
    },
  ],
  locale: { en, zh },
}

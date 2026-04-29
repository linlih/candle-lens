import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles, scene3Candles, scene4Candles } from './data'
import { scene1Annotations, scene2Annotations, scene3Annotations, scene4Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part1-ch00-syntax',
  partNumber: 1,
  chapterNumber: 0,
  patternNames: ['Marubozu', 'Spinning Top', 'Shadow Psychology'],
  scenes: [
    {
      id: 'scene-marubozu',
      titleKey: 'scene-marubozu',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-spinning-top',
      titleKey: 'scene-spinning-top',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
    {
      id: 'scene-upper-shadow',
      titleKey: 'scene-upper-shadow',
      candles: scene3Candles,
      annotations: scene3Annotations,
    },
    {
      id: 'scene-lower-shadow',
      titleKey: 'scene-lower-shadow',
      candles: scene4Candles,
      annotations: scene4Annotations,
    },
  ],
  locale: { en, zh },
}

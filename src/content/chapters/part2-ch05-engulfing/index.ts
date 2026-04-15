import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles, scene3Candles } from './data'
import { scene1Annotations, scene2Annotations, scene3Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part2-ch05-engulfing',
  partNumber: 2,
  chapterNumber: 5,
  patternNames: ['Bullish Engulfing', 'Bearish Engulfing'],
  scenes: [
    {
      id: 'scene-downtrend',
      titleKey: 'scene-downtrend',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-bull-engulf',
      titleKey: 'scene-bull-engulf',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
    {
      id: 'scene-bear-engulf',
      titleKey: 'scene-bear-engulf',
      candles: scene3Candles,
      annotations: scene3Annotations,
    },
  ],
  locale: { en, zh },
}

import type { ChapterContent } from '@/types/content'
import { scene1Candles, scene2Candles, scene3Candles } from './data'
import { scene1Annotations, scene2Annotations, scene3Annotations } from './annotations'
import { en } from './en'
import { zh } from './zh'

export const chapter: ChapterContent = {
  id: 'part2-ch10-three',
  partNumber: 2,
  chapterNumber: 10,
  patternNames: ['Three White Soldiers', 'Three Black Crows'],
  scenes: [
    {
      id: 'scene-soldiers',
      titleKey: 'scene-soldiers',
      candles: scene1Candles,
      annotations: scene1Annotations,
    },
    {
      id: 'scene-crows',
      titleKey: 'scene-crows',
      candles: scene2Candles,
      annotations: scene2Annotations,
    },
    {
      id: 'scene-weak',
      titleKey: 'scene-weak',
      candles: scene3Candles,
      annotations: scene3Annotations,
    },
  ],
  locale: { en, zh },
}

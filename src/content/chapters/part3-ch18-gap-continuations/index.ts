import type { AnnotationDef } from '@/types/annotation'
import type { CandleBar, ChapterContent } from '@/types/content'

const green = '#26a69a'
const blue = '#2962ff'

const scene1Candles: CandleBar[] = [
  { time: '2024-03-04', open: 52, high: 54.6, low: 51.8, close: 54.2 },
  { time: '2024-03-05', open: 53.7, high: 55, low: 53.4, close: 54.4 },
  { time: '2024-03-06', open: 54.5, high: 57.1, low: 54.2, close: 56.8 },
]

const scene2Candles: CandleBar[] = [
  { time: '2024-06-10', open: 71, high: 73.5, low: 70.8, close: 73.2 },
  { time: '2024-06-11', open: 74.8, high: 76.1, low: 74.6, close: 75.9 },
  { time: '2024-06-12', open: 75.4, high: 75.8, low: 73.9, close: 74.4 },
  { time: '2024-06-13', open: 74.9, high: 77.4, low: 74.7, close: 77.1 },
]

const scene3Candles: CandleBar[] = [
  { time: '2024-08-19', open: 98, high: 102.5, low: 97.6, close: 102.1 },
  { time: '2024-08-20', open: 102.8, high: 103.1, low: 101.9, close: 102.3 },
  { time: '2024-08-21', open: 102.1, high: 102.4, low: 100.8, close: 101.3 },
  { time: '2024-08-22', open: 101.2, high: 101.8, low: 100.7, close: 101.5 },
  { time: '2024-08-23', open: 101.9, high: 105.2, low: 101.7, close: 104.9 },
]

const scene1Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'separating-lines-box', timeRange: { from: '2024-03-04', to: '2024-03-05' }, fillColor: 'rgba(38, 166, 154, 0.12)', borderColor: green, borderWidth: 2 },
  { kind: 'label', id: 'separating-lines-label', time: '2024-03-05', price: 55.4, text: 'Same open, trend resumes', position: 'above', backgroundColor: green, textColor: '#ffffff' },
]

const scene2Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'tasuki-box', timeRange: { from: '2024-06-11', to: '2024-06-13' }, fillColor: 'rgba(41, 98, 255, 0.10)', borderColor: blue, borderWidth: 2 },
  { kind: 'label', id: 'tasuki-label', time: '2024-06-12', price: 76.4, text: 'Tasuki pullback inside the gap', position: 'above', backgroundColor: blue, textColor: '#ffffff' },
]

const scene3Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'mat-hold-box', timeRange: { from: '2024-08-19', to: '2024-08-23' }, fillColor: 'rgba(38, 166, 154, 0.12)', borderColor: green, borderWidth: 2 },
  { kind: 'label', id: 'mat-hold-label', time: '2024-08-23', price: 105.5, text: 'Mat Hold', position: 'above', backgroundColor: green, textColor: '#ffffff' },
]

export const chapter: ChapterContent = {
  id: 'part3-ch18-gap-continuations',
  partNumber: 3,
  chapterNumber: 18,
  patternNames: ['Separating Lines', 'Tasuki Gaps', 'Mat Hold'],
  scenes: [
    { id: 'scene-separating-lines', titleKey: 'scene-separating-lines', candles: scene1Candles, annotations: scene1Annotations },
    { id: 'scene-tasuki-gaps', titleKey: 'scene-tasuki-gaps', candles: scene2Candles, annotations: scene2Annotations },
    { id: 'scene-mat-hold', titleKey: 'scene-mat-hold', candles: scene3Candles, annotations: scene3Annotations },
  ],
  locale: {
    en: {
      title: 'Gap and Hold Continuation Patterns',
      subtitle: 'Structures that prove trend continuation by refusing to fully retrace',
      explanation: [
        {
          type: 'paragraph',
          text: 'Separating Lines, Tasuki Gaps, and Mat Hold all answer the same question: did the pause actually reset the trend, or did the market simply rest before continuing? These patterns are about controlled pullback quality.',
        },
        {
          type: 'keyPoints',
          points: [
            'Separating Lines resume the trend from nearly the same opening reference.',
            'Tasuki Gaps retrace part of a gap but fail to close it fully.',
            'Mat Hold contains a short consolidation inside a much larger impulse leg.',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'rule',
          text: 'Continuation patterns fail when the pullback becomes too deep or starts reclaiming the structure that should have remained intact.',
        },
      ],
      sceneTitles: {
        'scene-separating-lines': 'Separating Lines restart the trend',
        'scene-tasuki-gaps': 'Tasuki Gap refuses to fully close',
        'scene-mat-hold': 'Mat Hold pauses without surrendering control',
      },
    },
    zh: {
      title: 'Gap 与 Hold 持续形态',
      subtitle: '通过“不完全回撤”来证明趋势仍在延续的结构',
      explanation: [
        {
          type: 'paragraph',
          text: 'Separating Lines、Tasuki Gaps 和 Mat Hold 回答的是同一个问题：这段停顿到底是在重置趋势，还是只是趋势中的短暂休息？它们看的都是回撤质量。',
        },
        {
          type: 'keyPoints',
          points: [
            'Separating Lines 体现的是从几乎同一开盘参考位重新恢复原趋势。',
            'Tasuki Gap 会回撤一部分跳空，但无法把整个缺口补完。',
            'Mat Hold 则是在大脉冲内部完成一次受控整理，然后重新上冲。',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'rule',
          text: '持续形态一旦回撤过深，开始收回本该保持完整的结构，它的延续读法就会明显减弱。',
        },
      ],
      sceneTitles: {
        'scene-separating-lines': 'Separating Lines：重启原趋势',
        'scene-tasuki-gaps': 'Tasuki Gap：回撤但不补完',
        'scene-mat-hold': 'Mat Hold：整理但不交出主导权',
      },
    },
  },
}

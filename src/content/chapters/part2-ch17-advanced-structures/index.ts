import type { AnnotationDef } from '@/types/annotation'
import type { CandleBar, ChapterContent } from '@/types/content'

const green = '#26a69a'
const red = '#ef5350'
const amber = '#ffc107'

const scene1Candles: CandleBar[] = [
  { time: '2024-01-08', open: 61, high: 64.4, low: 60.7, close: 64 },
  { time: '2024-01-09', open: 64.1, high: 67.1, low: 63.8, close: 66.2 },
  { time: '2024-01-10', open: 66.4, high: 68, low: 65.9, close: 66.9 },
  { time: '2024-01-11', open: 66.7, high: 66.9, low: 63.1, close: 63.8 },
]

const scene2Candles: CandleBar[] = [
  { time: '2024-02-05', open: 74, high: 77.2, low: 73.7, close: 76.8 },
  { time: '2024-02-06', open: 76.9, high: 79.4, low: 76.2, close: 78.8 },
  { time: '2024-02-07', open: 78.9, high: 79.6, low: 78.3, close: 78.9 },
  { time: '2024-02-08', open: 78.4, high: 78.6, low: 75.4, close: 75.8 },
]

const scene3Candles: CandleBar[] = [
  { time: '2024-11-04', open: 42.8, high: 43, low: 40.1, close: 40.4 },
  { time: '2024-11-05', open: 40.3, high: 40.5, low: 37.9, close: 38.1 },
  { time: '2024-11-06', open: 38, high: 38.2, low: 35.8, close: 36.2 },
  { time: '2024-11-07', open: 35.9, high: 36.6, low: 35.5, close: 36.4 },
  { time: '2024-11-08', open: 36.5, high: 39.8, low: 36.2, close: 39.5 },
]

const scene1Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'advance-block-box', timeRange: { from: '2024-01-08', to: '2024-01-10' }, fillColor: 'rgba(255, 193, 7, 0.12)', borderColor: amber, borderWidth: 2 },
  { kind: 'label', id: 'advance-block-label', time: '2024-01-10', price: 68.4, text: 'Advance Block', position: 'above', backgroundColor: amber, textColor: '#1a1a1a' },
]

const scene2Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'deliberation-box', timeRange: { from: '2024-02-05', to: '2024-02-07' }, fillColor: 'rgba(239, 83, 80, 0.10)', borderColor: red, borderWidth: 2 },
  { kind: 'label', id: 'deliberation-label', time: '2024-02-07', price: 80, text: 'Deliberation', position: 'above', backgroundColor: red, textColor: '#ffffff' },
]

const scene3Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'ladder-bottom-box', timeRange: { from: '2024-11-04', to: '2024-11-08' }, fillColor: 'rgba(38, 166, 154, 0.12)', borderColor: green, borderWidth: 2 },
  { kind: 'label', id: 'ladder-bottom-label', time: '2024-11-08', price: 35.4, text: 'Ladder Bottom', position: 'below', backgroundColor: green, textColor: '#ffffff' },
]

export const chapter: ChapterContent = {
  id: 'part2-ch17-advanced-structures',
  partNumber: 2,
  chapterNumber: 17,
  patternNames: ['Advance Block', 'Deliberation', 'Ladder Bottom'],
  scenes: [
    { id: 'scene-advance-block', titleKey: 'scene-advance-block', candles: scene1Candles, annotations: scene1Annotations },
    { id: 'scene-deliberation', titleKey: 'scene-deliberation', candles: scene2Candles, annotations: scene2Annotations },
    { id: 'scene-ladder-bottom', titleKey: 'scene-ladder-bottom', candles: scene3Candles, annotations: scene3Annotations },
  ],
  locale: {
    en: {
      title: 'Advanced Reversal Structures',
      subtitle: 'Patterns that expose weakening push quality before the actual turn',
      explanation: [
        {
          type: 'paragraph',
          text: 'Advance Block and Deliberation belong to the family of slowing advances. Ladder Bottom does the opposite: it shows a selloff losing urgency before buyers finally take over. These structures are useful because they teach quality decay, not just one-candle reversal.',
        },
        {
          type: 'keyPoints',
          points: [
            'Advance Block keeps printing higher closes, but each push is less convincing.',
            'Deliberation adds a visible stall after a strong advance.',
            'Ladder Bottom uses a step-down selloff followed by a stabilization turn.',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'warning',
          text: 'These are sequencing patterns. If you ignore the deterioration in momentum and only stare at the final candle, you miss the entire point.',
        },
      ],
      sceneTitles: {
        'scene-advance-block': 'Advance Block shows weakening thrust',
        'scene-deliberation': 'Deliberation pauses after strength',
        'scene-ladder-bottom': 'Ladder Bottom rebuilds from exhaustion',
      },
    },
    zh: {
      title: '高级结构反转',
      subtitle: '通过推进质量衰减来暴露转向前兆的一组形态',
      explanation: [
        {
          type: 'paragraph',
          text: 'Advance Block 和 Deliberation 都属于“上涨还在继续，但质量正在恶化”的家族。Ladder Bottom 则相反，它表现的是下跌越来越没有急迫感，随后买盘才真正接管。它们的价值在于训练你读懂推进质量，而不只是盯最后一根 K 线。',
        },
        {
          type: 'keyPoints',
          points: [
            'Advance Block 虽然还在创新高，但每一段推进都变得更吃力。',
            'Deliberation 强调的是强势推进后的明显停顿。',
            'Ladder Bottom 则是台阶式下跌后，逐步完成底部修复。',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'warning',
          text: '这类形态本质上看的是“顺序里的质量变化”。如果只盯最后一根 K 线，会错过它们最重要的信息。',
        },
      ],
      sceneTitles: {
        'scene-advance-block': 'Advance Block：推进质量转弱',
        'scene-deliberation': 'Deliberation：强势后的停顿',
        'scene-ladder-bottom': 'Ladder Bottom：衰竭后的底部重建',
      },
    },
  },
}

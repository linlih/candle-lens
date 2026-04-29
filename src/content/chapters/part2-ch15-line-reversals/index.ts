import type { AnnotationDef } from '@/types/annotation'
import type { CandleBar, ChapterContent } from '@/types/content'

const green = '#26a69a'
const red = '#ef5350'
const amber = '#ffc107'

const scene1Candles: CandleBar[] = [
  { time: '2024-03-11', open: 66, high: 66.4, low: 62.2, close: 62.8 },
  { time: '2024-03-12', open: 62.7, high: 63.1, low: 59.6, close: 60.1 },
  { time: '2024-03-13', open: 59.8, high: 65.3, low: 59.8, close: 64.8 },
]

const scene2Candles: CandleBar[] = [
  { time: '2024-05-06', open: 91, high: 94.4, low: 90.7, close: 94.1 },
  { time: '2024-05-07', open: 94.9, high: 95.2, low: 93.8, close: 94.1 },
  { time: '2024-05-08', open: 93.7, high: 93.9, low: 90.5, close: 91.2 },
]

const scene3Candles: CandleBar[] = [
  { time: '2024-07-08', open: 103, high: 105.8, low: 102.7, close: 105.4 },
  { time: '2024-07-09', open: 105.9, high: 106.2, low: 103.1, close: 105.3 },
  { time: '2024-07-10', open: 104.8, high: 105, low: 101.8, close: 102.5 },
]

const scene4Candles: CandleBar[] = [
  { time: '2024-10-14', open: 48.6, high: 48.9, low: 45.1, close: 45.4 },
  { time: '2024-10-15', open: 45.1, high: 46.3, low: 43.8, close: 45.3 },
  { time: '2024-10-16', open: 45.6, high: 48.2, low: 45.5, close: 47.9 },
]

const scene1Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'belt-hold-box', timeRange: { from: '2024-03-13', to: '2024-03-13' }, fillColor: 'rgba(38, 166, 154, 0.12)', borderColor: green, borderWidth: 2 },
  { kind: 'label', id: 'belt-hold-label', time: '2024-03-13', price: 65.5, text: 'Bullish Belt Hold', position: 'above', backgroundColor: green, textColor: '#ffffff' },
]

const scene2Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'counterattack-box', timeRange: { from: '2024-05-06', to: '2024-05-07' }, fillColor: 'rgba(239, 83, 80, 0.12)', borderColor: red, borderWidth: 2 },
  { kind: 'label', id: 'counterattack-label', time: '2024-05-07', price: 95.4, text: 'Same close, opposite intent', position: 'above', backgroundColor: red, textColor: '#ffffff' },
]

const scene3Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'meeting-lines-box', timeRange: { from: '2024-07-08', to: '2024-07-09' }, fillColor: 'rgba(255, 193, 7, 0.12)', borderColor: amber, borderWidth: 2 },
  { kind: 'label', id: 'meeting-lines-label', time: '2024-07-09', price: 106.5, text: 'Meeting Lines', position: 'above', backgroundColor: amber, textColor: '#1a1a1a' },
]

const scene4Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'matching-low-box', timeRange: { from: '2024-10-14', to: '2024-10-15' }, fillColor: 'rgba(38, 166, 154, 0.12)', borderColor: green, borderWidth: 2 },
  { kind: 'label', id: 'matching-low-label', time: '2024-10-15', price: 43.4, text: 'Matching Low', position: 'below', backgroundColor: green, textColor: '#ffffff' },
]

export const chapter: ChapterContent = {
  id: 'part2-ch15-line-reversals',
  partNumber: 2,
  chapterNumber: 15,
  patternNames: ['Belt Hold', 'Counterattack', 'Meeting Lines', 'Matching Low'],
  scenes: [
    { id: 'scene-belt-hold', titleKey: 'scene-belt-hold', candles: scene1Candles, annotations: scene1Annotations },
    { id: 'scene-counterattack', titleKey: 'scene-counterattack', candles: scene2Candles, annotations: scene2Annotations },
    { id: 'scene-meeting-lines', titleKey: 'scene-meeting-lines', candles: scene3Candles, annotations: scene3Annotations },
    { id: 'scene-matching-low', titleKey: 'scene-matching-low', candles: scene4Candles, annotations: scene4Annotations },
  ],
  locale: {
    en: {
      title: 'Line-Based Reversal Patterns',
      subtitle: 'Single-level reversals defined by opens, closes, and repeated price memory',
      explanation: [
        {
          type: 'paragraph',
          text: 'Belt Hold, Counterattack, Meeting Lines, and Matching Low are all simpler than star families. Their edge comes from a very specific level interaction: an aggressive opening drive, a repeated closing level, or a defended prior low.',
        },
        {
          type: 'keyPoints',
          points: [
            'Belt Hold begins from an extreme open and finishes as a strong directional session.',
            'Counterattack uses an emotional response that closes back at the prior close.',
            'Meeting Lines warn that price is struggling to improve beyond the previous close.',
            'Matching Low says buyers defended almost the exact same support area twice.',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'rule',
          text: 'These patterns are weaker in the middle of a range. They become useful only when the repeated level clearly matters.',
        },
      ],
      sceneTitles: {
        'scene-belt-hold': 'Belt Hold from the session low',
        'scene-counterattack': 'Counterattack at a stretched high',
        'scene-meeting-lines': 'Meeting Lines after rally pressure',
        'scene-matching-low': 'Matching Low at defended support',
      },
    },
    zh: {
      title: '线型反转家族',
      subtitle: '由开盘、收盘和重复价位记忆定义的反转结构',
      explanation: [
        {
          type: 'paragraph',
          text: 'Belt Hold、Counterattack、Meeting Lines 和 Matching Low 都比星线家族更直接。它们的价值来自一个很具体的价位互动：极端开盘、重复收盘，或同一低位被再次防守。',
        },
        {
          type: 'keyPoints',
          points: [
            'Belt Hold 的核心是从极端开盘位置一路走出强势实体。',
            'Counterattack 的核心是情绪反击后收回到前一根的收盘附近。',
            'Meeting Lines 体现的是价格难以进一步脱离前一根收盘。',
            'Matching Low 表达的是同一支撑区域被连续守住两次。',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'rule',
          text: '这组形态在区间中部通常偏弱。只有那个重复出现的关键位本身足够重要时，它们才更有价值。',
        },
      ],
      sceneTitles: {
        'scene-belt-hold': '从最低位起步的 Belt Hold',
        'scene-counterattack': '高位拉伸后的 Counterattack',
        'scene-meeting-lines': '上涨后的 Meeting Lines',
        'scene-matching-low': '支撑位上的 Matching Low',
      },
    },
  },
}

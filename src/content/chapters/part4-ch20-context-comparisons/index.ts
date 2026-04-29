import type { AnnotationDef } from '@/types/annotation'
import type { CandleBar, ChapterContent } from '@/types/content'

const green = '#26a69a'
const red = '#ef5350'
const amber = '#ffc107'

const scene1Candles: CandleBar[] = [
  { time: '2024-03-25', open: 74, high: 74.2, low: 70.4, close: 71.1 },
  { time: '2024-03-26', open: 71, high: 71.4, low: 67.5, close: 68.1 },
  { time: '2024-03-27', open: 68, high: 70.3, low: 64.8, close: 69.6 },
  { time: '2024-03-28', open: 69.8, high: 73.6, low: 69.3, close: 73.2 },
]

const scene2Candles: CandleBar[] = [
  { time: '2024-04-08', open: 91, high: 92.4, low: 89.8, close: 91.6 },
  { time: '2024-04-09', open: 91.5, high: 92.1, low: 87.6, close: 91.1 },
  { time: '2024-04-10', open: 91.2, high: 91.9, low: 90.4, close: 91.4 },
]

const scene3Candles: CandleBar[] = [
  { time: '2024-05-13', open: 118, high: 121.7, low: 117.6, close: 121.2 },
  { time: '2024-05-14', open: 121.6, high: 124.1, low: 121.2, close: 123.9 },
  { time: '2024-05-15', open: 124.2, high: 125.6, low: 121.6, close: 122.3 },
]

const scene4Candles: CandleBar[] = [
  { time: '2024-06-17', open: 53, high: 53.4, low: 49.8, close: 50.3 },
  { time: '2024-06-18', open: 50.1, high: 50.6, low: 46.8, close: 47.2 },
  { time: '2024-06-19', open: 47.1, high: 49.4, low: 46.9, close: 49.1 },
]

const scene1Annotations: AnnotationDef[] = [
  { kind: 'label', id: 'support-hammer-label', time: '2024-03-27', price: 64.4, text: 'Hammer at support', position: 'below', backgroundColor: green, textColor: '#ffffff' },
]

const scene2Annotations: AnnotationDef[] = [
  { kind: 'label', id: 'range-hammer-label', time: '2024-04-09', price: 87.2, text: 'Same shape, worse location', position: 'below', backgroundColor: amber, textColor: '#1a1a1a' },
]

const scene3Annotations: AnnotationDef[] = [
  { kind: 'label', id: 'top-star-label', time: '2024-05-15', price: 126, text: 'Top-side rejection', position: 'above', backgroundColor: red, textColor: '#ffffff' },
]

const scene4Annotations: AnnotationDef[] = [
  { kind: 'label', id: 'bottom-star-label', time: '2024-06-19', price: 46.4, text: 'Bottom-side mirror', position: 'below', backgroundColor: green, textColor: '#ffffff' },
]

export const chapter: ChapterContent = {
  id: 'part4-ch20-context-comparisons',
  partNumber: 4,
  chapterNumber: 20,
  patternNames: ['Same Shape, Different Context', 'Top vs Bottom Mirrors'],
  scenes: [
    { id: 'scene-good-hammer', titleKey: 'scene-good-hammer', candles: scene1Candles, annotations: scene1Annotations },
    { id: 'scene-bad-hammer', titleKey: 'scene-bad-hammer', candles: scene2Candles, annotations: scene2Annotations },
    { id: 'scene-top-signal', titleKey: 'scene-top-signal', candles: scene3Candles, annotations: scene3Annotations },
    { id: 'scene-bottom-signal', titleKey: 'scene-bottom-signal', candles: scene4Candles, annotations: scene4Annotations },
  ],
  locale: {
    en: {
      title: 'Context Comparisons and Mirror Logic',
      subtitle: 'Why the same shape means different things in different places',
      explanation: [
        {
          type: 'paragraph',
          text: 'This is the chapter that usually separates memorisers from readers. The same hammer can be actionable at support and useless in the middle of a range. Likewise, top-side and bottom-side mirror signals may look similar, but their surrounding pressure tells a different story.',
        },
        {
          type: 'keyPoints',
          points: [
            'A pattern gains strength when its location matches the story the candle is trying to tell.',
            'Middle-of-range copies of the same shape are often noise, not signal.',
            'Mirror logic matters: rejection near highs and rejection near lows should be read against opposite directional pressure.',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'rule',
          text: 'Before you ask what the candle is called, ask whether this is the kind of place where that candle should matter.',
        },
      ],
      sceneTitles: {
        'scene-good-hammer': 'A hammer in the right place',
        'scene-bad-hammer': 'The same hammer in a weak location',
        'scene-top-signal': 'Top-side signal against an overextended rally',
        'scene-bottom-signal': 'Bottom-side mirror against a stretched selloff',
      },
    },
    zh: {
      title: '位置对照与镜像逻辑',
      subtitle: '为什么同样的形状，换个位置含义就会变',
      explanation: [
        {
          type: 'paragraph',
          text: '这一章通常最能区分“背形态”和“读图”。同样是锤子线，出现在支撑位可以有用，出现在区间中部可能只是噪音。顶部信号和底部镜像信号看起来也许相似，但它们面对的是完全相反的背景压力。',
        },
        {
          type: 'keyPoints',
          points: [
            '只有当位置和蜡烛讲述的故事一致时，形态才会明显增值。',
            '区间中部的复制品，很多时候只是视觉相似，不是真信号。',
            '镜像逻辑很重要：高位拒绝和低位拒绝看起来相像，但背后的方向压力相反。',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'rule',
          text: '先不要急着问“这根叫什么”，先问“这种位置配得上这种形态吗”。',
        },
      ],
      sceneTitles: {
        'scene-good-hammer': '位置正确的锤子线',
        'scene-bad-hammer': '位置错误的同样锤子线',
        'scene-top-signal': '过度上涨后的顶部信号',
        'scene-bottom-signal': '过度下跌后的底部镜像',
      },
    },
  },
}

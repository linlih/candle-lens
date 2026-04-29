import type { AnnotationDef } from '@/types/annotation'
import type { CandleBar, ChapterContent } from '@/types/content'

const green = '#26a69a'
const red = '#ef5350'
const blue = '#2962ff'

const scene1Candles: CandleBar[] = [
  { time: '2024-04-15', open: 87, high: 87.3, low: 83.6, close: 84.1, volume: 120 },
  { time: '2024-04-16', open: 83.8, high: 84.2, low: 80.1, close: 80.7, volume: 146 },
  { time: '2024-04-17', open: 80.5, high: 81.1, low: 77.4, close: 80.8, volume: 210 },
  { time: '2024-04-18', open: 81.9, high: 85.7, low: 81.6, close: 85.3, volume: 244 },
]

const scene2Candles: CandleBar[] = [
  { time: '2024-07-15', open: 112, high: 115.4, low: 111.7, close: 115.1, volume: 190 },
  { time: '2024-07-16', open: 115.6, high: 116.2, low: 114.8, close: 115.2, volume: 122 },
  { time: '2024-07-17', open: 114.9, high: 115.1, low: 112.6, close: 113.2, volume: 118 },
]

const scene3Candles: CandleBar[] = [
  { time: '2024-09-09', open: 66, high: 66.5, low: 63.8, close: 64.2, volume: 140 },
  { time: '2024-09-10', open: 64.1, high: 64.4, low: 61.2, close: 61.7, volume: 158 },
  { time: '2024-09-11', open: 61.5, high: 65.8, low: 61.3, close: 65.4, volume: 176 },
  { time: '2024-09-12', open: 65.6, high: 69.2, low: 65.4, close: 68.9, volume: 238 },
]

const scene1Annotations: AnnotationDef[] = [
  { kind: 'label', id: 'volume-reversal-label', time: '2024-04-17', price: 77.2, text: 'Capitulation volume spike', position: 'below', backgroundColor: blue, textColor: '#ffffff' },
  { kind: 'arrow', id: 'volume-reversal-arrow', time: '2024-04-18', direction: 'up', color: green, label: 'Follow-through matters' },
]

const scene2Annotations: AnnotationDef[] = [
  { kind: 'label', id: 'light-volume-label', time: '2024-07-16', price: 116.5, text: 'Weak volume = weak confirmation', position: 'above', backgroundColor: red, textColor: '#ffffff' },
]

const scene3Annotations: AnnotationDef[] = [
  { kind: 'label', id: 'breakout-volume-label', time: '2024-09-12', price: 69.5, text: 'Breakout supported by expanding volume', position: 'above', backgroundColor: green, textColor: '#ffffff' },
]

export const chapter: ChapterContent = {
  id: 'part4-ch19-volume',
  partNumber: 4,
  chapterNumber: 19,
  patternNames: ['Volume Confirmation'],
  scenes: [
    { id: 'scene-volume-reversal', titleKey: 'scene-volume-reversal', candles: scene1Candles, annotations: scene1Annotations },
    { id: 'scene-light-volume', titleKey: 'scene-light-volume', candles: scene2Candles, annotations: scene2Annotations },
    { id: 'scene-breakout-volume', titleKey: 'scene-breakout-volume', candles: scene3Candles, annotations: scene3Annotations },
  ],
  locale: {
    en: {
      title: 'How Volume Confirms a Candlestick Signal',
      subtitle: 'Read participation, not just shape',
      explanation: [
        {
          type: 'paragraph',
          text: 'A candlestick pattern tells you what price did. Volume helps answer how committed the market was while it did it. Reversal signals tend to improve when the rejection or breakout happens with obvious participation rather than quiet drift.',
        },
        {
          type: 'keyPoints',
          points: [
            'High-volume rejection near an extreme can mark true capitulation or distribution.',
            'Low-volume reversal attempts are easier to fade and easier to fail.',
            'Volume is most useful when it expands on the confirmation candle, not only on the candidate candle.',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Do not read volume in isolation. It is a confidence modifier layered on top of trend, location, and price behaviour.',
        },
      ],
      sceneTitles: {
        'scene-volume-reversal': 'Capitulation volume strengthens the turn',
        'scene-light-volume': 'Weak volume keeps the reversal suspect',
        'scene-breakout-volume': 'Continuation improves when breakout volume expands',
      },
    },
    zh: {
      title: '量能如何确认蜡烛图信号',
      subtitle: '看的不只是形状，而是有没有真实参与',
      explanation: [
        {
          type: 'paragraph',
          text: '蜡烛图告诉你价格发生了什么，量能则帮助回答：当时市场有多认真。反转信号如果伴随明显放量的拒绝或确认，通常比安静漂移中的信号更有说服力。',
        },
        {
          type: 'keyPoints',
          points: [
            '极端位置上的高量拒绝，往往更接近真正的投降或派发。',
            '低量下的反转尝试更容易被反抽或失效。',
            '量能最有价值的时候，往往是确认蜡烛也同步放量，而不是只有候选信号本身放量。',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'tip',
          text: '量能不是单独使用的系统，它更像是叠加在趋势、位置和价格行为之上的信心修正器。',
        },
      ],
      sceneTitles: {
        'scene-volume-reversal': '恐慌放量强化转向',
        'scene-light-volume': '低量让反转存疑',
        'scene-breakout-volume': '放量突破强化延续',
      },
    },
  },
}

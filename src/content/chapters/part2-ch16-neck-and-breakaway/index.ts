import type { AnnotationDef } from '@/types/annotation'
import type { CandleBar, ChapterContent } from '@/types/content'

const red = '#ef5350'
const amber = '#ffc107'
const blue = '#2962ff'

const scene1Candles: CandleBar[] = [
  { time: '2024-02-12', open: 76, high: 76.4, low: 72.1, close: 72.5 },
  { time: '2024-02-13', open: 71.6, high: 72.6, low: 70.8, close: 72.2 },
  { time: '2024-02-14', open: 72.1, high: 72.4, low: 68.9, close: 69.4 },
]

const scene2Candles: CandleBar[] = [
  { time: '2024-03-18', open: 88, high: 88.2, low: 83.5, close: 84.1 },
  { time: '2024-03-19', open: 83.2, high: 84.9, low: 82.6, close: 84.6 },
  { time: '2024-03-20', open: 84.3, high: 84.6, low: 81.1, close: 81.7 },
]

const scene3Candles: CandleBar[] = [
  { time: '2024-04-22', open: 95, high: 95.1, low: 90.3, close: 90.9 },
  { time: '2024-04-23', open: 89.8, high: 92.8, low: 89.5, close: 92.5 },
  { time: '2024-04-24', open: 92.2, high: 92.5, low: 88.4, close: 89.1 },
]

const scene4Candles: CandleBar[] = [
  { time: '2024-08-05', open: 112, high: 113.1, low: 108.7, close: 109.5 },
  { time: '2024-08-06', open: 109.2, high: 110, low: 105.9, close: 106.4 },
  { time: '2024-08-07', open: 106.1, high: 106.7, low: 103.5, close: 104.2 },
  { time: '2024-08-08', open: 104, high: 104.3, low: 101.6, close: 102.4 },
  { time: '2024-08-09', open: 102.2, high: 103.8, low: 100.7, close: 103.3 },
]

const scene1Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'on-neck-box', timeRange: { from: '2024-02-12', to: '2024-02-13' }, fillColor: 'rgba(239, 83, 80, 0.12)', borderColor: red, borderWidth: 2 },
  { kind: 'label', id: 'on-neck-label', time: '2024-02-13', price: 72.9, text: 'On-Neck', position: 'above', backgroundColor: red, textColor: '#ffffff' },
]

const scene2Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'in-neck-box', timeRange: { from: '2024-03-18', to: '2024-03-19' }, fillColor: 'rgba(255, 193, 7, 0.12)', borderColor: amber, borderWidth: 2 },
  { kind: 'label', id: 'in-neck-label', time: '2024-03-19', price: 85.2, text: 'In-Neck', position: 'above', backgroundColor: amber, textColor: '#1a1a1a' },
]

const scene3Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'thrusting-box', timeRange: { from: '2024-04-22', to: '2024-04-23' }, fillColor: 'rgba(41, 98, 255, 0.1)', borderColor: blue, borderWidth: 2 },
  { kind: 'label', id: 'thrusting-label', time: '2024-04-23', price: 93.1, text: 'Thrusting', position: 'above', backgroundColor: blue, textColor: '#ffffff' },
]

const scene4Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'breakaway-box', timeRange: { from: '2024-08-05', to: '2024-08-09' }, fillColor: 'rgba(239, 83, 80, 0.10)', borderColor: red, borderWidth: 2 },
  { kind: 'label', id: 'breakaway-label', time: '2024-08-09', price: 103.9, text: 'Breakaway finishes the sequence', position: 'above', backgroundColor: red, textColor: '#ffffff' },
]

export const chapter: ChapterContent = {
  id: 'part2-ch16-neck-and-breakaway',
  partNumber: 2,
  chapterNumber: 16,
  patternNames: ['On-Neck', 'In-Neck', 'Thrusting', 'Breakaway'],
  scenes: [
    { id: 'scene-on-neck', titleKey: 'scene-on-neck', candles: scene1Candles, annotations: scene1Annotations },
    { id: 'scene-in-neck', titleKey: 'scene-in-neck', candles: scene2Candles, annotations: scene2Annotations },
    { id: 'scene-thrusting', titleKey: 'scene-thrusting', candles: scene3Candles, annotations: scene3Annotations },
    { id: 'scene-breakaway', titleKey: 'scene-breakaway', candles: scene4Candles, annotations: scene4Annotations },
  ],
  locale: {
    en: {
      title: 'Neckline and Breakaway Families',
      subtitle: 'Patterns that test whether countertrend bounces are real or still trapped',
      explanation: [
        {
          type: 'paragraph',
          text: 'On-Neck, In-Neck, and Thrusting are all about failed bounce quality inside an existing downtrend. Breakaway is broader: it uses a longer sequence to show that a stretched move has finally reversed direction.',
        },
        {
          type: 'keyPoints',
          points: [
            'On-Neck closes near the prior low and usually supports continuation.',
            'In-Neck reclaims slightly more but still not enough to reverse the trend.',
            'Thrusting pushes deeper into the prior body yet can still remain bearish continuation.',
            'Breakaway matters because the sequence itself shows trend exhaustion and reversal transition.',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'tip',
          text: 'These patterns are best studied together because they force you to compare degrees of recovery rather than just memorize names.',
        },
      ],
      sceneTitles: {
        'scene-on-neck': 'On-Neck keeps the bounce shallow',
        'scene-in-neck': 'In-Neck recovers slightly more',
        'scene-thrusting': 'Thrusting pushes deeper into the body',
        'scene-breakaway': 'Breakaway ends a stretched sequence',
      },
    },
    zh: {
      title: '颈位与 Breakaway 家族',
      subtitle: '用于判断反抽质量是否足以逆转原趋势的一组形态',
      explanation: [
        {
          type: 'paragraph',
          text: 'On-Neck、In-Neck 和 Thrusting 的核心都是：下跌中的反抽有没有真正改变原有结构。Breakaway 更完整，它通过更长的顺序展示一段拉伸走势如何最终完成节奏反转。',
        },
        {
          type: 'keyPoints',
          points: [
            'On-Neck 只是把收盘拉回到前低附近，通常仍偏向延续。',
            'In-Neck 比 On-Neck 多恢复一点，但力度仍不足以宣布反转。',
            'Thrusting 深入前一根实体更深，但很多时候仍是下跌中的反抽。',
            'Breakaway 的价值在于整段顺序本身表现出原趋势衰竭并开始换向。',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'tip',
          text: '这组形态适合一起学，因为它们迫使你比较“恢复了多少”，而不是机械背名字。',
        },
      ],
      sceneTitles: {
        'scene-on-neck': 'On-Neck：反抽仍然浅',
        'scene-in-neck': 'In-Neck：恢复稍多',
        'scene-thrusting': 'Thrusting：深入实体更深',
        'scene-breakaway': 'Breakaway：拉伸后的换向',
      },
    },
  },
}

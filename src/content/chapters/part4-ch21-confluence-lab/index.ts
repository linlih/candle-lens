import type { AnnotationDef } from '@/types/annotation'
import type { CandleBar, ChapterContent } from '@/types/content'

const green = '#26a69a'
const red = '#ef5350'
const blue = '#2962ff'

const scene1Candles: CandleBar[] = [
  { time: '2024-01-22', open: 93, high: 93.2, low: 89.1, close: 89.8 },
  { time: '2024-01-23', open: 89.6, high: 90.1, low: 86.3, close: 86.9 },
  { time: '2024-01-24', open: 86.8, high: 88.6, low: 83.8, close: 88.2 },
]

const scene2Candles: CandleBar[] = [
  { time: '2024-04-29', open: 104, high: 104.4, low: 100.1, close: 100.8 },
  { time: '2024-04-30', open: 100.2, high: 105.6, low: 99.9, close: 105.2 },
  { time: '2024-05-01', open: 105.4, high: 107.8, low: 105.1, close: 107.2 },
]

const scene3Candles: CandleBar[] = [
  { time: '2024-07-22', open: 72, high: 74.9, low: 71.8, close: 74.6 },
  { time: '2024-07-23', open: 75.8, high: 76.1, low: 75.4, close: 75.7 },
  { time: '2024-07-24', open: 75.4, high: 75.8, low: 73.9, close: 74.1 },
  { time: '2024-07-25', open: 74.5, high: 77.4, low: 74.4, close: 77.1 },
]

const scene4Candles: CandleBar[] = [
  { time: '2024-10-07', open: 128, high: 131.6, low: 127.8, close: 131.3 },
  { time: '2024-10-08', open: 131.7, high: 133.2, low: 131.1, close: 132.6 },
  { time: '2024-10-09', open: 132.8, high: 133.1, low: 129.8, close: 130.4 },
  { time: '2024-10-10', open: 129.9, high: 130.2, low: 126.7, close: 127.5 },
]

const scene1Annotations: AnnotationDef[] = [
  { kind: 'trendline', id: 'trendline-support', p1: { time: '2024-01-22', price: 89.2 }, p2: { time: '2024-01-24', price: 84.2 }, color: blue, width: 2 },
  { kind: 'label', id: 'trendline-label', time: '2024-01-24', price: 83.5, text: 'Hammer near trendline support', position: 'below', backgroundColor: green, textColor: '#ffffff' },
]

const scene2Annotations: AnnotationDef[] = [
  { kind: 'hline', id: 'moving-average-zone', price: 101, color: 'rgba(41, 98, 255, 0.8)', width: 1, dash: [5, 3] },
  { kind: 'label', id: 'ma-label', time: '2024-04-30', price: 99.5, text: 'Engulfing from MA retest', position: 'below', backgroundColor: green, textColor: '#ffffff' },
]

const scene3Annotations: AnnotationDef[] = [
  { kind: 'box', id: 'gap-zone-box', timeRange: { from: '2024-07-23', to: '2024-07-24' }, fillColor: 'rgba(41, 98, 255, 0.10)', borderColor: blue, borderWidth: 2 },
  { kind: 'label', id: 'gap-zone-label', time: '2024-07-24', price: 73.5, text: 'Gap support + shallow retrace', position: 'below', backgroundColor: blue, textColor: '#ffffff' },
]

const scene4Annotations: AnnotationDef[] = [
  { kind: 'hline', id: 'range-resistance', price: 133, color: 'rgba(239, 83, 80, 0.8)', width: 1, dash: [5, 3] },
  { kind: 'label', id: 'structure-label', time: '2024-10-09', price: 133.5, text: 'Evening pressure into resistance', position: 'above', backgroundColor: red, textColor: '#ffffff' },
]

export const chapter: ChapterContent = {
  id: 'part4-ch21-confluence-lab',
  partNumber: 4,
  chapterNumber: 21,
  patternNames: ['Trendline', 'Moving Average', 'Gap', 'Structure Confluence'],
  scenes: [
    { id: 'scene-trendline', titleKey: 'scene-trendline', candles: scene1Candles, annotations: scene1Annotations },
    { id: 'scene-moving-average', titleKey: 'scene-moving-average', candles: scene2Candles, annotations: scene2Annotations },
    { id: 'scene-gap-support', titleKey: 'scene-gap-support', candles: scene3Candles, annotations: scene3Annotations },
    { id: 'scene-structure-resistance', titleKey: 'scene-structure-resistance', candles: scene4Candles, annotations: scene4Annotations },
  ],
  locale: {
    en: {
      title: 'Confluence Lab',
      subtitle: 'Combine candlesticks with trendlines, averages, gaps, and structure',
      explanation: [
        {
          type: 'paragraph',
          text: 'This chapter turns the western-technique idea into a repeatable workflow. The candle is not the whole trade thesis. It is the behavioural clue that appears at a level already made important by another tool.',
        },
        {
          type: 'keyPoints',
          points: [
            'Trendlines help you judge whether a rejection happened at a dynamic support or resistance area.',
            'Moving averages can act as context filters, not magical trigger lines.',
            'Open gaps and prior structure zones help you define where confirmation should or should not appear.',
            'The more tools agree on location, the less you need the candle itself to be visually perfect.',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'rule',
          text: 'Confluence should simplify your decision, not create indicator clutter. If the tools disagree on location, the candle should not rescue the setup by itself.',
        },
      ],
      sceneTitles: {
        'scene-trendline': 'Trendline support plus hammer behaviour',
        'scene-moving-average': 'Engulfing from a moving-average retest',
        'scene-gap-support': 'Gap support with controlled pullback',
        'scene-structure-resistance': 'Resistance structure plus top-side pressure',
      },
    },
    zh: {
      title: '共振实验室',
      subtitle: '把蜡烛图和趋势线、均线、缺口、结构位置结合起来',
      explanation: [
        {
          type: 'paragraph',
          text: '这一章把“结合西方技术”变成可重复执行的流程。蜡烛图不是完整交易逻辑，它只是恰好出现在一个本来就该重要的位置上的行为线索。',
        },
        {
          type: 'keyPoints',
          points: [
            '趋势线帮助判断拒绝行为是否发生在动态支撑或阻力附近。',
            '均线更适合做背景过滤器，而不是神奇触发线。',
            '未回补缺口和前结构区间，有助于定义确认该在哪里出现。',
            '位置共振越清晰，你就越不需要蜡烛图本身长得“完美”。',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'rule',
          text: '共振的目的是简化判断，而不是堆指标。如果这些工具在位置上都无法达成一致，就不要指望一根 K 线单独拯救这个 setup。',
        },
      ],
      sceneTitles: {
        'scene-trendline': '趋势线支撑 + 锤子线行为',
        'scene-moving-average': '均线回踩后的吞没',
        'scene-gap-support': '缺口支撑上的浅回撤',
        'scene-structure-resistance': '结构阻力位上的顶部压力',
      },
    },
  },
}

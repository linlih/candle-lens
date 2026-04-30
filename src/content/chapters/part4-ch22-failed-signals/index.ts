import type { AnnotationDef } from '@/types/annotation'
import type { CandleBar, ChapterContent } from '@/types/content'

const green = '#26a69a'
const red = '#ef5350'
const amber = '#ffc107'

const scene1Candles: CandleBar[] = [
  { time: '2024-07-01', open: 92, high: 92.4, low: 88.8, close: 89.3 },
  { time: '2024-07-02', open: 89.0, high: 89.6, low: 85.4, close: 86.1 },
  { time: '2024-07-03', open: 85.8, high: 87.2, low: 81.9, close: 86.6 },
  { time: '2024-07-04', open: 86.9, high: 87.1, low: 82.6, close: 83.1 },
]

const scene2Candles: CandleBar[] = [
  { time: '2024-08-12', open: 116, high: 116.2, low: 111.8, close: 112.3 },
  { time: '2024-08-13', open: 112.2, high: 112.8, low: 110.9, close: 112.0 },
  { time: '2024-08-14', open: 112.4, high: 114.2, low: 111.9, close: 113.8 },
  { time: '2024-08-15', open: 113.5, high: 113.9, low: 109.8, close: 110.6 },
]

const scene3Candles: CandleBar[] = [
  { time: '2024-09-02', open: 74, high: 76.6, low: 73.8, close: 76.2 },
  { time: '2024-09-03', open: 77.9, high: 79.6, low: 77.4, close: 79.1 },
  { time: '2024-09-04', open: 78.8, high: 79.0, low: 75.8, close: 76.1 },
  { time: '2024-09-05', open: 75.9, high: 76.4, low: 73.6, close: 74.2 },
]

const scene1Annotations: AnnotationDef[] = [
  {
    kind: 'box',
    id: 'failed-hammer-box',
    timeRange: { from: '2024-07-03', to: '2024-07-03' },
    priceRange: { high: 87.2, low: 81.9 },
    pricePadding: 0.4,
    fillColor: 'rgba(255, 193, 7, 0.12)',
    borderColor: amber,
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'failed-hammer-label',
    time: '2024-07-03',
    price: 87.8,
    text: 'Hammer candidate',
    position: 'above',
    backgroundColor: amber,
    textColor: '#1a1a1a',
    fontSize: 10,
  },
  {
    kind: 'label',
    id: 'failed-hammer-break',
    time: '2024-07-04',
    price: 81.4,
    text: 'Failure: low breaks',
    position: 'below',
    backgroundColor: red,
    textColor: '#ffffff',
    fontSize: 10,
  },
]

const scene2Annotations: AnnotationDef[] = [
  {
    kind: 'box',
    id: 'failed-star-box',
    timeRange: { from: '2024-08-12', to: '2024-08-14' },
    priceRange: { high: 114.2, low: 110.9 },
    pricePadding: 0.3,
    fillColor: 'rgba(38, 166, 154, 0.10)',
    borderColor: green,
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'failed-star-label',
    time: '2024-08-13',
    price: 113.0,
    text: 'Weak star sequence',
    position: 'right',
    backgroundColor: amber,
    textColor: '#1a1a1a',
    fontSize: 10,
  },
  {
    kind: 'label',
    id: 'failed-star-break',
    time: '2024-08-15',
    price: 109.2,
    text: 'Failure after weak third candle',
    position: 'below',
    backgroundColor: red,
    textColor: '#ffffff',
    fontSize: 10,
  },
]

const scene3Annotations: AnnotationDef[] = [
  {
    kind: 'box',
    id: 'failed-window-box',
    timeRange: { from: '2024-09-02', to: '2024-09-03' },
    priceRange: { high: 77.9, low: 76.6 },
    fillColor: 'rgba(38, 166, 154, 0.12)',
    borderColor: green,
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'failed-window-label',
    time: '2024-09-03',
    price: 80.2,
    text: 'Rising window',
    position: 'above',
    backgroundColor: green,
    textColor: '#ffffff',
    fontSize: 10,
  },
  {
    kind: 'label',
    id: 'failed-window-fill',
    time: '2024-09-04',
    price: 75.3,
    text: 'Failure: gap filled',
    position: 'below',
    backgroundColor: red,
    textColor: '#ffffff',
    fontSize: 10,
  },
]

export const chapter: ChapterContent = {
  id: 'part4-ch22-failed-signals',
  partNumber: 4,
  chapterNumber: 22,
  patternNames: ['Failed Hammer', 'Failed Star', 'Failed Window'],
  scenes: [
    { id: 'scene-failed-hammer', titleKey: 'scene-failed-hammer', candles: scene1Candles, annotations: scene1Annotations },
    { id: 'scene-failed-star', titleKey: 'scene-failed-star', candles: scene2Candles, annotations: scene2Annotations },
    { id: 'scene-failed-window', titleKey: 'scene-failed-window', candles: scene3Candles, annotations: scene3Annotations },
  ],
  locale: {
    en: {
      title: 'Failed Signals and Trap Patterns',
      subtitle: 'How to read invalidation instead of arguing with the chart',
      explanation: [
        {
          type: 'paragraph',
          text: 'A failed candlestick pattern is not useless noise. It is information. If a hammer loses its low, if a star never receives real confirmation, or if a rising window is filled immediately, the chart is telling you the original story was not accepted by the market.',
        },
        {
          type: 'keyPoints',
          points: [
            'A candidate pattern is not a trade thesis by itself.',
            'Failure usually happens when confirmation never arrives or key levels break quickly.',
            'Invalidation is a reading skill, not a mistake to hide from.',
            'A failed bullish signal often becomes fresh bearish information, and vice versa.',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'warning',
          text: 'Do not average down on a failed pattern just because the original candle looked textbook. Once the key level breaks, the market is telling a different story.',
        },
      ],
      sceneTitles: {
        'scene-failed-hammer': 'A hammer that never receives confirmation',
        'scene-failed-star': 'A star sequence with a weak third candle',
        'scene-failed-window': 'A rising window that gets filled too fast',
      },
    },
    zh: {
      title: '失败信号与陷阱形态',
      subtitle: '学会读懂失效，而不是和图表争辩',
      explanation: [
        {
          type: 'paragraph',
          text: '失败的蜡烛图形态不是无用噪音，而是新信息。如果锤子线很快跌破低点、星线迟迟等不到真正确认、上升窗口刚出现就被立刻回补，市场其实是在告诉你：原本那套故事并没有被接受。',
        },
        {
          type: 'keyPoints',
          points: [
            '候选形态本身并不等于完整交易逻辑。',
            '失败通常来自确认缺失，或关键价位被迅速破坏。',
            '读懂失效不是承认错误，而是掌握新的市场信息。',
            '一个失败的看涨信号，很多时候会转化成新的看空信息，反之亦然。',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'warning',
          text: '不要因为原来的形态“长得很标准”就对失效视而不见。关键位一旦被破坏，市场讲的就已经是另一套故事。',
        },
      ],
      sceneTitles: {
        'scene-failed-hammer': '没等来确认的失败锤子线',
        'scene-failed-star': '第三根太弱的失败星线',
        'scene-failed-window': '被快速回补的失败上升窗口',
      },
    },
  },
}

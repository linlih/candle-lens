import type { AnnotationDef } from '@/types/annotation'
import type { CandleBar, ChapterContent } from '@/types/content'

const green = '#26a69a'
const red = '#ef5350'
const amber = '#ffc107'

const scene1Candles: CandleBar[] = [
  { time: '2024-04-01', open: 124, high: 125, low: 120, close: 121 },
  { time: '2024-04-02', open: 121, high: 122, low: 116, close: 117 },
  { time: '2024-04-03', open: 116, high: 116.4, low: 114.2, close: 116.1 },
  { time: '2024-04-04', open: 117.8, high: 121.8, low: 117.4, close: 121.2 },
]

const scene2Candles: CandleBar[] = [
  { time: '2024-06-03', open: 84, high: 87, low: 83.4, close: 86.5 },
  { time: '2024-06-04', open: 86.6, high: 88.8, low: 86.2, close: 86.7 },
  { time: '2024-06-05', open: 86.9, high: 89.1, low: 86.5, close: 86.8 },
  { time: '2024-06-06', open: 86.7, high: 88.7, low: 86.1, close: 86.6 },
  { time: '2024-06-07', open: 86.3, high: 86.6, low: 82.8, close: 83.4 },
]

const scene3Candles: CandleBar[] = [
  { time: '2024-09-02', open: 58, high: 58.3, low: 54.2, close: 54.5 },
  { time: '2024-09-03', open: 54.3, high: 54.5, low: 50.1, close: 50.4 },
  { time: '2024-09-04', open: 52.6, high: 57.2, low: 52.5, close: 57 },
  { time: '2024-09-05', open: 57, high: 59.1, low: 56.8, close: 58.4 },
]

const scene1Annotations: AnnotationDef[] = [
  {
    kind: 'box',
    id: 'abandoned-baby-box',
    timeRange: { from: '2024-04-02', to: '2024-04-04' },
    fillColor: 'rgba(38, 166, 154, 0.12)',
    borderColor: green,
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'abandoned-baby-label',
    time: '2024-04-03',
    price: 116.7,
    text: 'Isolated Doji',
    position: 'above',
    backgroundColor: amber,
    textColor: '#1a1a1a',
  },
  {
    kind: 'label',
    id: 'abandoned-baby-confirm',
    time: '2024-04-04',
    price: 117.2,
    text: 'Gap back up confirms reversal',
    position: 'below',
    backgroundColor: green,
    textColor: '#ffffff',
  },
]

const scene2Annotations: AnnotationDef[] = [
  {
    kind: 'box',
    id: 'tri-star-box',
    timeRange: { from: '2024-06-04', to: '2024-06-06' },
    fillColor: 'rgba(255, 193, 7, 0.12)',
    borderColor: amber,
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'tri-star-label',
    time: '2024-06-05',
    price: 89.5,
    text: 'Three stalled sessions',
    position: 'above',
    backgroundColor: amber,
    textColor: '#1a1a1a',
  },
  {
    kind: 'arrow',
    id: 'tri-star-break',
    time: '2024-06-07',
    direction: 'down',
    color: red,
    label: 'Break confirms exhaustion',
  },
]

const scene3Annotations: AnnotationDef[] = [
  {
    kind: 'box',
    id: 'kicking-box',
    timeRange: { from: '2024-09-03', to: '2024-09-04' },
    fillColor: 'rgba(41, 98, 255, 0.1)',
    borderColor: '#2962ff',
    borderWidth: 2,
  },
  {
    kind: 'label',
    id: 'kicking-gap',
    time: '2024-09-04',
    price: 52.6,
    text: 'Gap reversal with authority',
    position: 'left',
    backgroundColor: '#2962ff',
    textColor: '#ffffff',
  },
  {
    kind: 'arrow',
    id: 'kicking-arrow',
    time: '2024-09-04',
    direction: 'up',
    color: green,
    label: 'Bulls seize control',
  },
]

export const chapter: ChapterContent = {
  id: 'part2-ch14-special-reversals',
  partNumber: 2,
  chapterNumber: 14,
  patternNames: ['Abandoned Baby', 'Tri-Star', 'Kicking'],
  scenes: [
    { id: 'scene-abandoned-baby', titleKey: 'scene-abandoned-baby', candles: scene1Candles, annotations: scene1Annotations },
    { id: 'scene-tri-star', titleKey: 'scene-tri-star', candles: scene2Candles, annotations: scene2Annotations },
    { id: 'scene-kicking', titleKey: 'scene-kicking', candles: scene3Candles, annotations: scene3Annotations },
  ],
  locale: {
    en: {
      title: 'Special Reversal Families',
      subtitle: 'Rare but powerful gap-driven reversal structures',
      explanation: [
        {
          type: 'paragraph',
          text: 'Abandoned Baby, Tri-Star, and Kicking are not common daily occurrences. They matter because they show a sharper regime change than ordinary hesitation candles. The rare part is not the name. The important part is the sudden break in continuity.',
        },
        {
          type: 'keyPoints',
          points: [
            'Abandoned Baby isolates a Doji between two gap-separated sessions.',
            'Tri-Star uses repeated Doji-style hesitation after an extended move.',
            'Kicking is a violent control transfer between opposite Marubozu-type sessions.',
            'All three patterns are strongest when they appear after an already stretched trend.',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'warning',
          text: 'These are specialist patterns. Do not force them. If the gap logic or isolation is not clean, it is usually better to read the chart with simpler families.',
        },
      ],
      sceneTitles: {
        'scene-abandoned-baby': 'Abandoned Baby at the end of a selloff',
        'scene-tri-star': 'Tri-Star as trend exhaustion',
        'scene-kicking': 'Kicking reversal after panic pressure',
      },
    },
    zh: {
      title: '特殊反转家族',
      subtitle: '少见但杀伤力很强的跳空反转结构',
      explanation: [
        {
          type: 'paragraph',
          text: '弃婴、三星和踢腿并不是日常高频形态，但它们值得学，因为它们体现的是比普通犹豫 K 线更剧烈的节奏切换。真正要看的不是名字，而是原有连续性被突然打断。',
        },
        {
          type: 'keyPoints',
          points: [
            'Abandoned Baby 的核心是中间那根 Doji 被两侧跳空隔离。',
            'Tri-Star 体现的是连续几次犹豫后，趋势开始明显衰竭。',
            'Kicking 体现的是两根方向相反、控制力极强的蜡烛之间直接换手。',
            '这三类形态都更适合放在已经拉伸过的趋势末端去读。',
          ],
        },
        { type: 'chart' },
        {
          type: 'callout',
          variant: 'warning',
          text: '这组形态不要硬套。只要跳空隔离或控制权切换不够干净，通常就应该回到更简单、更常见的形态去理解。',
        },
      ],
      sceneTitles: {
        'scene-abandoned-baby': '下跌尾端的弃婴',
        'scene-tri-star': '三星式衰竭',
        'scene-kicking': '恐慌后的踢腿反转',
      },
    },
  },
}

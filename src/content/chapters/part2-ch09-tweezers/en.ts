import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'Tweezers Top and Bottom',
  subtitle: 'Identical highs or lows that reveal hidden support and resistance',
  explanation: [
    {
      type: 'paragraph',
      text: 'Tweezers patterns consist of two or more candles with matching highs (Tweezers Top) or matching lows (Tweezers Bottom). The name comes from the resemblance to a pair of tweezers — two parallel tips at the same level. Unlike many other patterns, the candle bodies matter less than the shadows reaching the same price level twice.',
    },
    {
      type: 'comparison',
      bullish: 'Tweezers Bottom: two consecutive candles whose lows reach the same price level after a downtrend. The market tested a support level twice and rejected it both times — buyers defended that price.',
      bearish: 'Tweezers Top: two consecutive candles whose highs reach the same price level after an uptrend. The market tested a resistance level twice and was turned back — sellers defended that price.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Why Tweezers Work',
    },
    {
      type: 'paragraph',
      text: 'The power of the Tweezers pattern lies in what the matching price level reveals: a price where supply (at the top) or demand (at the bottom) is concentrated. When the market reaches that level twice and fails to break through, it signals that the price is acting as a significant barrier. Traders who missed the first test are now watching the second test closely.',
    },
    {
      type: 'keyPoints',
      points: [
        'The shared high or low becomes a confirmed resistance or support level',
        'Candle colour can be anything — what matters is the matching extremes',
        'The pattern is stronger when the two candles are also a recognisable formation (Engulfing, Harami, etc.)',
        'The wider the bodies and the longer the shadows reaching the level, the more significant',
        'The pattern carries more weight near prior swing highs/lows or round numbers',
      ],
    },
    { type: 'chart' },
    {
      type: 'callout',
      variant: 'rule',
      text: 'Tweezers are most effective when they appear as part of a larger pattern. A Tweezers Top that forms within a Bearish Engulfing or Dark Cloud Cover is far more powerful than a Tweezers Top in isolation.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Use the shared high or low as a precise stop-loss level. If the market breaks through the level that twice rejected price, the reversal thesis is invalidated.',
    },
  ],
  sceneTitles: {
    'scene-tweezers-top': 'Tweezers Top',
    'scene-tweezers-bottom': 'Tweezers Bottom',
  },
}

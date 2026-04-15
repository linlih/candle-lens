import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'Engulfing Patterns',
  subtitle: 'When one candle completely swallows the previous session',
  explanation: [
    {
      type: 'paragraph',
      text: 'An Engulfing pattern is a two-candle formation where the second session\'s real body completely engulfs the prior session\'s real body. It is one of the most reliable reversal signals in candlestick analysis, appearing at both market tops and bottoms.',
    },
    {
      type: 'comparison',
      bullish: 'Bullish Engulfing: appears at the bottom of a downtrend. A large green candle opens below and closes above the prior red candle\'s body, signalling a decisive shift from sellers to buyers.',
      bearish: 'Bearish Engulfing: appears at the top of an uptrend. A large red candle opens above and closes below the prior green candle\'s body, signalling bears have overwhelmed bulls.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Identification Rules',
    },
    {
      type: 'keyPoints',
      points: [
        'The market must be in a clear uptrend or downtrend',
        'The second candle\'s real body must completely engulf the first candle\'s real body',
        'The colours must differ: Day 1 bearish → Day 2 bullish (and vice versa)',
        'Shadows do not need to be engulfed — only the real bodies matter',
        'The larger the second body relative to the first, the stronger the signal',
      ],
    },
    {
      type: 'callout',
      variant: 'rule',
      text: 'The Engulfing pattern derives its power from the completeness of the reversal: what the prior session\'s participants achieved is entirely undone in a single session.',
    },
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: 'What Strengthens the Signal',
    },
    {
      type: 'keyPoints',
      points: [
        'The first day has a very small body (Doji or near-Doji) — greater contrast',
        'The second day opens with a gap in the reversal direction',
        'Heavy volume on the second (engulfing) candle confirms conviction',
        'The engulfing candle\'s body engulfs multiple prior candles',
        'The pattern appears at a key support or resistance level',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'An Engulfing pattern in a sideways, range-bound market has little predictive value. Always confirm that a trend exists before acting on the signal.',
    },
  ],
  sceneTitles: {
    'scene-downtrend': 'Downtrend context',
    'scene-bull-engulf': 'Bullish Engulfing',
    'scene-bear-engulf': 'Bearish Engulfing',
  },
}

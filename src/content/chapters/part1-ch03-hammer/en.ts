import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'The Hammer and Hanging Man',
  subtitle: 'Bullish reversal at the bottom, bearish reversal at the top',
  explanation: [
    {
      type: 'paragraph',
      text: 'The Hammer and Hanging Man are identical in appearance — a small real body near the top of the trading range with a long lower shadow and little or no upper shadow. Their significance depends entirely on where they appear in the trend.',
    },
    {
      type: 'comparison',
      bullish: 'Hammer: appears after a downtrend. The market "hammers out" a bottom. Bullish reversal signal.',
      bearish: 'Hanging Man: appears after an uptrend. The market is "hanging" at the top. Bearish warning signal.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Identification Rules',
    },
    {
      type: 'keyPoints',
      points: [
        'The real body is at the upper end of the trading range',
        'The lower shadow is at least 2× the length of the real body',
        'There is little or no upper shadow',
        'The colour of the real body is secondary — shape is what matters',
        'A bullish (green) Hammer is slightly more bullish than a red one',
      ],
    },
    {
      type: 'callout',
      variant: 'rule',
      text: 'The longer the lower shadow and the smaller the real body, the more significant the signal.',
    },
    // ← Chart appears here, after identification rules
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: 'Confirmation',
    },
    {
      type: 'paragraph',
      text: 'For the Hammer, look for a strong bullish candle closing above the Hammer\'s real body the next session. For the Hanging Man, bearish confirmation comes from a gap down or a bearish session on the following day. The Hanging Man requires more confirmation than the Hammer because the prior trend was bullish.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Never act on a Hanging Man without bearish confirmation the next session — the prior uptrend provides strong momentum that must be clearly broken.',
    },
  ],
  sceneTitles: {
    'scene-downtrend': 'Downtrend context',
    'scene-hammer': 'The Hammer appears',
    'scene-confirm': 'Bullish confirmation',
  },
}

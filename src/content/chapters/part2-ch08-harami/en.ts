import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'Harami Patterns',
  subtitle: 'The "pregnant" candle — a small body inside a large one',
  explanation: [
    {
      type: 'paragraph',
      text: 'The word "harami" means "pregnant" in Japanese. In a Harami pattern, a large candle on Day 1 is followed by a small candle on Day 2 whose real body is entirely contained within the Day 1 real body. The large candle is the "mother", the small one is the "baby". This containment signals that the prior trend\'s momentum is stalling.',
    },
    {
      type: 'comparison',
      bullish: 'Bullish Harami: appears after a downtrend. A large bearish candle is followed by a small bullish candle inside its body. The selling momentum has been contained — a bottom may be forming.',
      bearish: 'Bearish Harami: appears after an uptrend. A large bullish candle is followed by a small bearish candle inside its body. The buying momentum has stalled — a top may be forming.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Identification Rules',
    },
    {
      type: 'keyPoints',
      points: [
        'Day 1: a long candle in the direction of the existing trend',
        'Day 2: a small candle whose real body fits entirely within Day 1\'s real body',
        'The colours are typically opposite, but not always required',
        'The smaller Day 2\'s body relative to Day 1, the stronger the indecision signal',
        'Shadows of Day 2 may extend beyond Day 1\'s body — only real bodies matter',
      ],
    },
    {
      type: 'callout',
      variant: 'rule',
      text: 'The Harami is the opposite of the Engulfing pattern. Where the Engulfing shows a dramatic takeover, the Harami shows quiet hesitation — the prior trend has not been reversed, it has simply paused.',
    },
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: 'The Harami Cross',
    },
    {
      type: 'paragraph',
      text: 'When Day 2 is a Doji instead of a small real body, the pattern becomes a "Harami Cross" — a significantly stronger reversal signal. The complete absence of a body on Day 2 shows perfect indecision and is a more urgent warning that the trend is about to change.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'The Harami is a warning signal, not a confirmed reversal. Always wait for confirmation — a strong candle in the reversal direction — before acting.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'The Harami is generally a weaker reversal signal than the Engulfing or Star patterns. It works best when it appears at a well-established support or resistance level.',
    },
  ],
  sceneTitles: {
    'scene-bull-harami': 'Bullish Harami',
    'scene-bear-harami': 'Bearish Harami',
    'scene-harami-cross': 'Harami Cross (Doji variant)',
  },
}

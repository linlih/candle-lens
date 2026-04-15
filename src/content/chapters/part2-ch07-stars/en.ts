import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'Morning Star and Evening Star',
  subtitle: 'Three-candle patterns that signal major trend reversals',
  explanation: [
    {
      type: 'paragraph',
      text: 'The Morning Star and Evening Star are three-candle reversal patterns considered among the most powerful signals in Japanese candlestick analysis. Like the celestial bodies they are named after — the morning star (Venus) that precedes dawn, and the evening star that heralds darkness — these patterns mark the transition from one trend to another.',
    },
    {
      type: 'comparison',
      bullish: 'Morning Star: a three-candle bullish reversal at the bottom of a downtrend. A long bearish candle, followed by a small-bodied "star" that gaps down, followed by a strong bullish candle that recovers well into the first day\'s body.',
      bearish: 'Evening Star: a three-candle bearish reversal at the top of an uptrend. A long bullish candle, followed by a small-bodied "star" that gaps up, followed by a strong bearish candle that falls deep into the first day\'s body.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The Three-Candle Structure',
    },
    {
      type: 'keyPoints',
      points: [
        'Day 1: a long candle in the direction of the existing trend',
        'Day 2 (the "Star"): a small real body that gaps away from Day 1 — the body colour is secondary',
        'Day 3: a candle in the reversal direction, closing at least halfway into Day 1\'s body',
        'Gaps between all three candles make the pattern stronger',
        'A Doji on Day 2 creates a "Morning/Evening Doji Star" — an even more powerful variant',
      ],
    },
    { type: 'chart' },
    {
      type: 'callout',
      variant: 'rule',
      text: 'The "star" on Day 2 is the pivot point of the pattern — it represents the moment when the dominant force exhausts itself and the market enters a state of indecision before the reversal confirms.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What Strengthens the Signal',
    },
    {
      type: 'keyPoints',
      points: [
        'The Day 2 star has a very small body (or is a Doji)',
        'There are gaps between all three candles',
        'Day 3 closes more than 50% into Day 1\'s body',
        'High volume on Day 1 and Day 3, low volume on Day 2',
        'The pattern appears at a significant support (Morning) or resistance (Evening) level',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'If Day 3 closes only marginally into Day 1\'s body (less than 50%), the reversal signal is weaker and confirmation from Day 4 is especially important.',
    },
  ],
  sceneTitles: {
    'scene-downtrend': 'Downtrend context',
    'scene-morning': 'Morning Star forms',
    'scene-uptrend': 'Uptrend context',
    'scene-evening': 'Evening Star forms',
  },
}

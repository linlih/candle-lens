import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'Dark Cloud Cover and Piercing Pattern',
  subtitle: 'Two-candle reversals defined by the 50% rule',
  explanation: [
    {
      type: 'paragraph',
      text: 'The Dark Cloud Cover and Piercing Pattern are two-candle reversal formations that mirror each other. Both are defined by a critical rule: the second candle must close more than halfway into the prior candle\'s real body. This "50% penetration" requirement separates a true signal from a minor retracement.',
    },
    {
      type: 'comparison',
      bullish: 'Piercing Pattern: at the bottom of a downtrend, a strong bullish candle opens below the prior bearish close and rallies to close more than 50% into the prior body. Bulls are reclaiming ground.',
      bearish: 'Dark Cloud Cover: at the top of an uptrend, a bearish candle opens above the prior bullish close and falls to close more than 50% into the prior body. Bears are taking back control.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The Critical 50% Rule',
    },
    {
      type: 'paragraph',
      text: 'If the second candle closes less than halfway into the prior body, the pattern is not a Dark Cloud Cover or Piercing Pattern — it is simply a pullback. The deeper the penetration into the prior body, the more convincing the reversal signal.',
    },
    {
      type: 'keyPoints',
      points: [
        'Day 1: a long candle in the direction of the existing trend',
        'Day 2 (Dark Cloud Cover): opens above Day 1 high, closes more than 50% into Day 1 body',
        'Day 2 (Piercing): opens below Day 1 low, closes more than 50% into Day 1 body',
        'If Day 2 closes below Day 1 open (engulfs the body), it becomes an Engulfing pattern',
        'A gap between the two sessions strengthens the signal significantly',
      ],
    },
    { type: 'chart' },
    {
      type: 'callout',
      variant: 'rule',
      text: 'The Dark Cloud Cover is generally considered a stronger signal than the Piercing Pattern. Markets tend to fall faster than they rise, so the "cloud" descending into an uptrend is a more urgent warning.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Confirmation',
    },
    {
      type: 'paragraph',
      text: 'Both patterns benefit from a confirming candle on the third day. For the Dark Cloud Cover, a bearish third session confirms the reversal. For the Piercing Pattern, a bullish third session — ideally opening above the Piercing candle\'s close — confirms that buyers are in control.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'The Piercing Pattern is more reliable when combined with an oversold indicator or a test of a significant support level.',
    },
  ],
  sceneTitles: {
    'scene-dark-cloud': 'Dark Cloud Cover',
    'scene-piercing': 'Piercing Pattern',
    'scene-50-rule': 'The 50% rule in action',
  },
}

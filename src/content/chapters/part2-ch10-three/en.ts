import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'Three White Soldiers and Three Black Crows',
  subtitle: 'Three consecutive candles that confirm a powerful trend change',
  explanation: [
    {
      type: 'paragraph',
      text: 'Three White Soldiers and Three Black Crows are among the most visually striking reversal patterns in candlestick analysis. Unlike two-candle patterns that require confirmation, these three-candle formations are considered self-confirming — the third candle itself acts as the confirmation.',
    },
    {
      type: 'comparison',
      bullish: 'Three White Soldiers: three consecutive long bullish candles after a downtrend. Each opens within or at the top of the prior body and closes near its own high. A sustained, determined takeover by buyers.',
      bearish: 'Three Black Crows: three consecutive long bearish candles after an uptrend. Each opens within or at the bottom of the prior body and closes near its own low. A relentless, methodical takeover by sellers.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Identification Rules',
    },
    {
      type: 'keyPoints',
      points: [
        'Three consecutive candles in the same direction',
        'Each candle has a long real body with small or no shadows',
        'Each candle opens within (or near the top/bottom of) the prior candle\'s body',
        'Each candle closes progressively higher (soldiers) or lower (crows)',
        'Appears after a clear established trend in the opposite direction',
      ],
    },
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: 'Warning Signs of Weakness',
    },
    {
      type: 'paragraph',
      text: 'Not all Three White Soldiers are equally bullish. Watch for warning signs that the advance may be running out of steam. These weakened variants may still reverse, but they require more caution.',
    },
    {
      type: 'keyPoints',
      points: [
        'Long upper shadows on the soldiers signal buyers pushed too far and were faded',
        'Progressively smaller bodies suggest declining buying momentum',
        'A third candle that opens with a large gap above the second may indicate exhaustion',
        'If the pattern forms after a very extended move, the reversal risk increases sharply',
      ],
    },
    {
      type: 'callout',
      variant: 'rule',
      text: 'Three White Soldiers appearing after a prolonged downtrend carry the most weight. The same pattern late in a recovery rally that is already extended may signal exhaustion rather than the start of a new uptrend.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Three Black Crows after a short-lived or minor uptrend may be an overreaction. The pattern is most significant after a sustained, well-established rally.',
    },
  ],
  sceneTitles: {
    'scene-soldiers': 'Three White Soldiers',
    'scene-crows': 'Three Black Crows',
    'scene-weak': 'Warning signs of weakness',
  },
}

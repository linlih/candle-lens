import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'The Shooting Star and Inverted Hammer',
  subtitle: 'The same shape — two opposite meanings',
  explanation: [
    {
      type: 'paragraph',
      text: 'The Shooting Star and Inverted Hammer share an identical silhouette: a small real body at the lower end of the trading range, a long upper shadow at least twice the body length, and little or no lower shadow. What distinguishes them is not their shape but where they appear in the trend.',
    },
    {
      type: 'comparison',
      bullish: 'Inverted Hammer: appears after a downtrend. Buyers pushed prices up during the session — a potential sign that bears are losing control. Requires bullish confirmation.',
      bearish: 'Shooting Star: appears after an uptrend. Buyers drove prices sharply higher, but sellers overwhelmed them before the close. A bearish reversal warning.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Identification Rules',
    },
    {
      type: 'keyPoints',
      points: [
        'Small real body at the lower end of the session range',
        'Upper shadow is at least 2× the length of the real body',
        'Little or no lower shadow',
        'The colour of the real body is secondary — body position is what matters',
        'A gap from the previous session makes the signal stronger',
      ],
    },
    {
      type: 'callout',
      variant: 'rule',
      text: 'The Shooting Star and Inverted Hammer are mirror images of the Hammer and Hanging Man — rotated 180°. The logic is the same: shape alone is not enough; trend context is everything.',
    },
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: 'The Shooting Star',
    },
    {
      type: 'paragraph',
      text: 'At the top of an uptrend, the market opens, rallies sharply (the long upper shadow), then collapses back near the open by the close. Sellers clearly dominated. The longer the upper shadow and the smaller the body, the more bearish the signal. Look for a bearish follow-through session to confirm.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'A Shooting Star that gaps up from the prior candle and then collapses is especially significant — the gap shows buyers were still aggressive at the open, making the reversal that much more dramatic.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The Inverted Hammer',
    },
    {
      type: 'paragraph',
      text: 'At the bottom of a downtrend, the Inverted Hammer shows that buyers tried to push prices higher during the session but could not sustain the rally. Despite the potentially discouraging close, this probe upward signals that buying interest is awakening. Confirmation — a bullish session closing above the Inverted Hammer\'s body — is essential before acting.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'The Inverted Hammer requires more patience than the regular Hammer. Do not buy until the next session confirms bullish momentum with a strong close above the body.',
    },
  ],
  sceneTitles: {
    'scene-shooting-star': 'Shooting Star at uptrend top',
    'scene-inv-hammer': 'Inverted Hammer at downtrend bottom',
    'scene-confirm': 'Bullish confirmation',
  },
}

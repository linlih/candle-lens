import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'Windows (Gaps)',
  subtitle: 'Price gaps that signal continuation and define support/resistance',
  explanation: [
    {
      type: 'paragraph',
      text: 'In Western technical analysis, a gap is simply a price area where no trading occurred. Japanese candlestick analysts call these gaps "windows" — and they treat them very differently. Where Western analysts often see gaps as anomalies to be "filled", Japanese traders see windows as meaningful signals about the strength of a trend.',
    },
    {
      type: 'comparison',
      bullish: 'Rising Window (gap up): when the low of the current session is higher than the high of the prior session. The empty space between the candles is the "window". It signals strong bullish momentum — a continuation of the uptrend.',
      bearish: 'Falling Window (gap down): when the high of the current session is lower than the low of the prior session. The empty space below is the window. It signals strong bearish momentum — a continuation of the downtrend.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Windows as Continuation Signals',
    },
    {
      type: 'paragraph',
      text: 'Japanese candlestick theory holds that windows should be traded in the direction of the gap — not against it. A rising window in an uptrend is not a warning but a confirmation of strength. A falling window in a downtrend confirms the bears are in control.',
    },
    {
      type: 'keyPoints',
      points: [
        'Trade in the direction of the window, not against it',
        'A rising window turns into a support zone on future pullbacks',
        'A falling window turns into a resistance zone on future rallies',
        'Price often returns to "test" the window — if it holds, the trend resumes',
        'A window that is fully closed (price fills the gap) negates the signal',
      ],
    },
    { type: 'chart' },
    {
      type: 'callout',
      variant: 'rule',
      text: '"Go in the direction of the window" — Japanese traders use windows to confirm the trend, and use the window\'s price range as a decision zone for entries and stops.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Windows as Support and Resistance',
    },
    {
      type: 'paragraph',
      text: 'Once a window forms, the price zone of the gap becomes a key technical level. If the market pulls back to a rising window and holds above it, the uptrend is intact and the window has confirmed its role as support. If the market rallies back into a falling window but fails to close it, the downtrend is still in effect.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'If price fully returns and closes the window on a daily close basis, the window loses its significance. A partially closed window that holds still has some meaning.',
    },
  ],
  sceneTitles: {
    'scene-rising-window': 'Rising Window (bullish continuation)',
    'scene-falling-window': 'Falling Window (bearish continuation)',
    'scene-window-support': 'Window as support on pullback',
  },
}

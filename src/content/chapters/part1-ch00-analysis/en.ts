import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'How to Analyze a Candlestick Signal',
  subtitle: 'Read trend, location, confirmation, and failure before trusting the shape',
  explanation: [
    {
      type: 'paragraph',
      text: 'Most beginners stop at naming the candle. That is not enough. A candlestick signal becomes useful only after you place it inside a larger decision sequence: trend first, location second, candle shape third, confirmation fourth, and invalidation last.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The 5-Step Checklist',
    },
    {
      type: 'keyPoints',
      points: [
        'Trend: Is the market rising, falling, or chopping sideways?',
        'Location: Is the candle forming at support, resistance, or in the middle of noise?',
        'Signal: What does the body and the shadows actually say about control?',
        'Confirmation: Which next candle proves the signal matters?',
        'Invalidation: Which price behaviour tells you the idea failed?',
      ],
    },
    {
      type: 'callout',
      variant: 'rule',
      text: 'A beautiful pattern in the wrong place is weaker than an imperfect pattern at the right place.',
    },
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: 'Confirmation vs Failure',
    },
    {
      type: 'paragraph',
      text: 'After the candidate signal appears, your job is not to predict. Your job is to observe whether the next candle strengthens the idea or breaks it. Good analysis updates with new evidence instead of defending the first guess.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'No confirmation, no conviction. And if price violates the signal’s key level, treat that as information rather than as a reason to argue with the chart.',
    },
  ],
  sceneTitles: {
    'scene-context': 'Trend and key level come first',
    'scene-candidate': 'A candidate signal at support',
    'scene-confirmed': 'Confirmation upgrades the read',
    'scene-failed': 'Invalidation cancels the idea',
  },
}

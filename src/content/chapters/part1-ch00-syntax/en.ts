import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'Body, Shadows, and Market Psychology',
  subtitle: 'Learn what long bodies, small bodies, and wicks say before memorising patterns',
  explanation: [
    {
      type: 'paragraph',
      text: 'Before you learn named patterns, you need to learn the language underneath them. The real body tells you who controlled the close. The shadows tell you where price was rejected or recovered intraday.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Core Shape Signals',
    },
    {
      type: 'keyPoints',
      points: [
        'Long body: strong directional control during the session',
        'Short body: hesitation or balance between buyers and sellers',
        'Marubozu: little or no shadows; one side controlled almost everything',
        'Spinning Top: small body with visible shadows; indecision after movement',
        'Long upper shadow: buyers pushed up, but could not keep control',
        'Long lower shadow: sellers pushed down, but buyers fought back',
      ],
    },
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: 'Read the Body First, Then the Wick',
    },
    {
      type: 'comparison',
      bullish: 'A long lower shadow becomes bullish only when buyers actually reclaim the close and context supports a reversal.',
      bearish: 'A long upper shadow becomes bearish only when rejection appears after an advance or near resistance.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'The shape is the raw sentence. Trend and location decide how to interpret that sentence.',
    },
  ],
  sceneTitles: {
    'scene-marubozu': 'Long bodies: Marubozu control',
    'scene-spinning-top': 'Short bodies: spinning-top hesitation',
    'scene-upper-shadow': 'Long upper shadow: rejection near highs',
    'scene-lower-shadow': 'Long lower shadow: recovery off the lows',
  },
}

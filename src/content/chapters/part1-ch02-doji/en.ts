import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'The Doji',
  subtitle: 'When the market is in perfect indecision',
  explanation: [
    {
      type: 'paragraph',
      text: 'A Doji forms when the opening and closing prices are at or very near the same level, leaving little or no real body. The word "doji" itself means "at the same time" in Japanese — implying that buyers and sellers ended the session exactly where they began. This equilibrium of power is a powerful signal of indecision.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What a Doji Tells You',
    },
    {
      type: 'paragraph',
      text: 'During the session, price moved — sometimes dramatically — but neither bulls nor bears could hold their gains. The result is a candle shaped like a cross, plus sign, or inverted cross. The meaning of a Doji depends critically on the trend it appears in.',
    },
    {
      type: 'keyPoints',
      points: [
        'Open and Close are equal (or very nearly so) — no real body',
        'The upper and lower shadows show the intraday price range',
        'After a long uptrend, a Doji warns that buyers are losing conviction',
        'After a long downtrend, a Doji hints that selling pressure is fading',
        'A Doji alone is a warning, not a confirmed reversal — look for the next candle',
      ],
    },
    { type: 'chart' },
    {
      type: 'callout',
      variant: 'rule',
      text: 'The longer the shadows relative to the body, the greater the indecision and the more significant the Doji.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Gravestone Doji',
    },
    {
      type: 'paragraph',
      text: 'The Gravestone Doji has a long upper shadow with open, close, and low all at the same level (at or near the session low). Bulls drove prices up during the session, but by the close sellers had pushed prices all the way back down. The "gravestone" imagery reflects a bearish outcome — it appears most often at market tops.',
    },
    {
      type: 'comparison',
      bullish: 'At a downtrend bottom, the Gravestone Doji can occasionally mark a reversal — but this is uncommon and needs strong confirmation.',
      bearish: 'At an uptrend top, the Gravestone Doji is a potent bearish reversal warning. Wait for bearish follow-through the next session.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Dragonfly Doji',
    },
    {
      type: 'paragraph',
      text: 'The Dragonfly Doji is the mirror image: open, close, and high are all at the same level, with a long lower shadow. Bears pushed prices sharply lower during the session, but buyers stepped in and drove price all the way back to the opening level. Appearing at the bottom of a downtrend, the Dragonfly is a bullish reversal signal.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'A Dragonfly Doji at support, or after several bearish sessions, carries more weight than one appearing in the middle of a range.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Never trade a Doji in isolation. Always confirm with the trend context and the following session\'s candle before acting.',
    },
  ],
  sceneTitles: {
    'scene-doji': 'Standard Doji at uptrend top',
    'scene-gravestone': 'Gravestone Doji',
    'scene-dragonfly': 'Dragonfly Doji',
  },
}

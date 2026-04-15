import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'Introduction to Candlestick Charts',
  subtitle: 'Understanding the anatomy and history of Japanese candlesticks',
  explanation: [
    {
      type: 'paragraph',
      text: 'Candlestick charts originated in Japan over 300 years ago, developed by rice traders to track market prices and daily momentum. Introduced to the Western world by Steve Nison in the early 1990s, they have become the dominant charting method used by traders worldwide.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Anatomy of a Candlestick',
    },
    {
      type: 'paragraph',
      text: 'Each candlestick represents one time period (day, hour, etc.) and encodes four key prices: Open, High, Low, and Close (OHLC). The wide portion, called the "real body", shows the range between open and close. The thin lines above and below, called "shadows" or "wicks", show the high and low.',
    },
    {
      type: 'keyPoints',
      points: [
        'Real Body: The rectangular area between Open and Close prices',
        'Upper Shadow (Wick): The line from the top of the body to the High',
        'Lower Shadow (Wick): The line from the bottom of the body to the Low',
        'Bullish candle (green): Close is higher than Open',
        'Bearish candle (red): Close is lower than Open',
      ],
    },
    // ← Chart appears here, after the anatomy explanation
    { type: 'chart' },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Japanese traders gave candlesticks poetic names like "Dark Cloud Cover" and "Evening Star" to reflect the market emotions they represent.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Why Candlesticks?',
    },
    {
      type: 'paragraph',
      text: 'Unlike bar charts, candlesticks make it immediately visually obvious whether bulls or bears dominated a session. The colour and shape of the body — and the relative lengths of the shadows — convey market sentiment at a glance.',
    },
    {
      type: 'callout',
      variant: 'rule',
      text: 'A single candlestick reveals the battle between buyers and sellers within that period. The winner is shown by the direction of the real body.',
    },
  ],
  sceneTitles: {
    'scene-overview': 'A series of candles',
    'scene-anatomy': 'Bullish vs Bearish anatomy',
  },
}

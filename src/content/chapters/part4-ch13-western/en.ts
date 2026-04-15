import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'Combining with Western Techniques',
  subtitle: 'Candlestick signals become most powerful at key Western technical levels',
  explanation: [
    {
      type: 'paragraph',
      text: 'Japanese candlestick analysis does not replace Western technical analysis — it enhances it. Steve Nison\'s key insight is that a candlestick signal occurring at a significant Western technical level (support, resistance, trendline, moving average, Fibonacci retracement) is far more reliable than a candlestick pattern appearing in "neutral" price territory.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The Convergence Principle',
    },
    {
      type: 'paragraph',
      text: 'When multiple technical tools point to the same conclusion at the same price level, the probability of a successful trade increases dramatically. A Bullish Engulfing pattern at a prior swing low support level is a much stronger buy signal than a Bullish Engulfing in the middle of nowhere. The Western technique identifies the zone; the candlestick identifies the moment.',
    },
    {
      type: 'keyPoints',
      points: [
        'Support levels: horizontal support from prior swing lows amplifies bullish candlestick signals',
        'Resistance levels: horizontal resistance from prior swing highs amplifies bearish signals',
        'Trendlines: a bullish reversal candlestick bouncing off an uptrend line confirms the trend',
        'Moving averages: candlestick reversals at the 50-day or 200-day MA carry extra weight',
        'Fibonacci levels: the 38.2%, 50%, and 61.8% retracement zones combined with candlesticks create precise entries',
      ],
    },
    { type: 'chart' },
    {
      type: 'callout',
      variant: 'rule',
      text: 'Never rely on a candlestick signal alone in isolation. Always ask: "Is this signal appearing at a technically significant level?" The more independent tools confirming the same zone, the higher the conviction.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Practical Application',
    },
    {
      type: 'paragraph',
      text: 'The workflow: use Western analysis to identify key support and resistance zones and mark them on your chart. Then watch for candlestick reversal signals as price approaches those zones. When a strong candlestick pattern forms at a key level, that convergence is your trade signal. Use the candlestick\'s shadow or pattern range as your stop-loss reference.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Volume is a key confirming factor. A candlestick reversal signal at support or resistance on above-average volume is significantly more reliable than the same pattern on low volume.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Avoid over-filtering. If you require 5 different indicators to all align perfectly, you will rarely trade. Two to three converging signals at a clear technical level is a practical, actionable standard.',
    },
  ],
  sceneTitles: {
    'scene-at-support': 'Bullish Engulfing at support',
    'scene-at-resistance': 'Shooting Star at resistance',
  },
}

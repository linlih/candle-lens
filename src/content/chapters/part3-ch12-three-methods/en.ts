import type { ChapterLocaleContent } from '@/types/content'

export const en: ChapterLocaleContent = {
  title: 'Rising and Falling Three Methods',
  subtitle: 'Five-candle continuation patterns — the trend rests, then resumes',
  explanation: [
    {
      type: 'paragraph',
      text: 'The Three Methods patterns are continuation formations, not reversals. They signal that the market is pausing to "digest" recent gains or losses before resuming the prevailing trend. Japanese traders liken them to troops who rest before continuing their march.',
    },
    {
      type: 'comparison',
      bullish: 'Rising Three Methods: in an uptrend, a long bullish candle is followed by 2–4 small bearish candles that stay within the first day\'s range, then a final strong bullish candle closes above the first day\'s high. The uptrend resumes.',
      bearish: 'Falling Three Methods: in a downtrend, a long bearish candle is followed by 2–4 small bullish candles that stay within the first day\'s range, then a final strong bearish candle closes below the first day\'s low. The downtrend resumes.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Identification Rules',
    },
    {
      type: 'keyPoints',
      points: [
        'Day 1: a long candle in the direction of the existing trend',
        'Days 2–4: 2 to 4 small candles in the opposite direction, contained within Day 1\'s price range',
        'Day 5: a strong candle in the trend direction that closes beyond Day 1\'s extreme',
        'The small middle candles should not close beyond Day 1\'s body boundaries',
        'Day 5 volume should ideally be the highest of all five candles',
      ],
    },
    { type: 'chart' },
    {
      type: 'callout',
      variant: 'rule',
      text: 'The key distinction from a reversal: the middle candles are restrained within the first candle\'s range. If they break out of that range, the pattern is no longer a Three Methods — it may be a different formation entirely.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Why the Pattern Works',
    },
    {
      type: 'paragraph',
      text: 'The small counter-trend candles in the middle represent normal profit-taking after a strong move. The fact that they remain within the prior range shows that the opposing side lacks conviction — they are not strong enough to reverse the trend. When the final candle breaks out, it proves the original trend is still dominant.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'The Rising and Falling Three Methods work best within a well-defined channel or after the market has shown clear directional conviction. They are less reliable in choppy, sideways markets.',
    },
  ],
  sceneTitles: {
    'scene-rising': 'Rising Three Methods',
    'scene-falling': 'Falling Three Methods',
    'scene-continuation': 'Trend continues after Rising Three Methods',
  },
}

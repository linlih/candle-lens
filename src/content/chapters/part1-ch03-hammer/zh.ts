import type { ChapterLocaleContent } from '@/types/content'

export const zh: ChapterLocaleContent = {
  title: '锤子线与上吊线',
  subtitle: '底部看涨反转信号，顶部看跌反转信号',
  explanation: [
    {
      type: 'paragraph',
      text: '锤子线和上吊线在外形上完全相同——实体位于交易区间顶部，有长下影线，几乎没有上影线。二者的意义完全取决于它们出现的趋势位置。',
    },
    {
      type: 'comparison',
      bullish: '锤子线：出现在下跌趋势后，市场"锤出"底部，是看涨反转信号。',
      bearish: '上吊线：出现在上涨趋势后，市场在顶部"悬挂"，是看跌警告信号。',
    },
    {
      type: 'heading',
      level: 2,
      text: '识别规则',
    },
    {
      type: 'keyPoints',
      points: [
        '实体位于交易区间的上端',
        '下影线长度至少是实体长度的两倍',
        '上影线极短或没有',
        '实体颜色为次要因素——形态才是关键',
        '阳线（绿色）锤子线比阴线锤子线略微更具看涨意义',
      ],
    },
    {
      type: 'callout',
      variant: 'rule',
      text: '下影线越长、实体越小，信号的重要性越强。',
    },
    // ← 图表放在识别规则之后
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: '确认信号',
    },
    {
      type: 'paragraph',
      text: '对于锤子线，应寻找次日出现强势阳线并收盘价高于锤子线实体的确认。对于上吊线，看跌确认来自次日的向下跳空或阴线收盘。上吊线需要比锤子线更多的确认，因为此前的上涨趋势具有强大动量，必须被明确打破。',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: '切勿在没有次日看跌确认的情况下根据上吊线行动——此前的上涨趋势提供了强大动量，必须被清晰打破。',
    },
  ],
  sceneTitles: {
    'scene-downtrend': '下跌趋势背景',
    'scene-hammer': '锤子线出现',
    'scene-confirm': '看涨确认信号',
  },
}

import type { ChapterLocaleContent } from '@/types/content'

export const zh: ChapterLocaleContent = {
  title: '上升三法与下降三法',
  subtitle: '五根蜡烛的持续形态——趋势暂歇后再度延伸',
  explanation: [
    {
      type: 'paragraph',
      text: '三法形态是持续形态，而非反转形态。它们表明市场正在暂时"消化"近期的涨幅或跌幅，随后将恢复原有趋势。日本交易者将其比作军队在继续行军前的休整。',
    },
    {
      type: 'comparison',
      bullish: '上升三法：在上涨趋势中，一根长阳线之后出现2至4根小阴线，价格回调但始终保持在第一天价格区间之内，最后一根强势阳线收盘高于第一天最高价，上涨趋势恢复。',
      bearish: '下降三法：在下跌趋势中，一根长阴线之后出现2至4根小阳线，价格反弹但始终保持在第一天价格区间之内，最后一根强势阴线收盘低于第一天最低价，下跌趋势恢复。',
    },
    {
      type: 'heading',
      level: 2,
      text: '识别规则',
    },
    {
      type: 'keyPoints',
      points: [
        '第一天：一根顺趋势方向的长蜡烛',
        '第2至4天：2至4根反向小蜡烛，价格区间被包含在第一天的价格范围之内',
        '第五天：一根顺趋势方向的强势蜡烛，收盘突破第一天的极端价位',
        '中间小蜡烛的收盘价不应突破第一天实体的边界',
        '第五天的成交量理想情况下应是五根蜡烛中最大的',
      ],
    },
    { type: 'chart' },
    {
      type: 'callout',
      variant: 'rule',
      text: '与反转形态的关键区别在于：中间蜡烛被约束在第一天的价格区间之内。若它们突破该区间，则此形态不再是三法，可能演变成完全不同的形态。',
    },
    {
      type: 'heading',
      level: 2,
      text: '形态有效的原因',
    },
    {
      type: 'paragraph',
      text: '中间的逆势小蜡烛代表强势走势后的正常获利了结。它们始终停留在前期区间之内，说明对手方缺乏信心——尚不足以扭转趋势。当最后一根蜡烛成功突破时，它证明了原有趋势仍然占据主导地位。',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: '上升三法和下降三法在明确通道内或市场已表现出清晰方向性信心之后效果最佳。在震荡横盘的市场中可靠性较低。',
    },
  ],
  sceneTitles: {
    'scene-rising': '上升三法',
    'scene-falling': '下降三法',
    'scene-continuation': '上升三法后趋势延续',
  },
}

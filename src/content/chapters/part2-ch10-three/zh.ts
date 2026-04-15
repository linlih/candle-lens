import type { ChapterLocaleContent } from '@/types/content'

export const zh: ChapterLocaleContent = {
  title: '三白兵与三只乌鸦',
  subtitle: '三根连续蜡烛确认强力趋势反转',
  explanation: [
    {
      type: 'paragraph',
      text: '三白兵与三只乌鸦是蜡烛图分析中视觉冲击力最强的反转形态之一。与需要确认信号的两根蜡烛形态不同，这两种三根蜡烛形态被视为自我确认的——第三根蜡烛本身就是确认信号。',
    },
    {
      type: 'comparison',
      bullish: '三白兵：下跌趋势后出现三根连续的长阳线。每根蜡烛开盘于前一根实体之内或顶部附近，收盘接近自身最高价。买方持续且坚定地夺回主导权。',
      bearish: '三只乌鸦：上涨趋势后出现三根连续的长阴线。每根蜡烛开盘于前一根实体之内或底部附近，收盘接近自身最低价。卖方无情且有条不紊地夺取控制权。',
    },
    {
      type: 'heading',
      level: 2,
      text: '识别规则',
    },
    {
      type: 'keyPoints',
      points: [
        '三根连续蜡烛方向相同',
        '每根蜡烛均有较长的实体，上下影线短小或不存在',
        '每根蜡烛开盘于前一根蜡烛实体之内（或顶部/底部附近）',
        '每根蜡烛收盘价逐步推高（三白兵）或逐步走低（三只乌鸦）',
        '出现在明确的反向趋势之后',
      ],
    },
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: '弱势警示信号',
    },
    {
      type: 'paragraph',
      text: '并非所有三白兵都同样看涨。需注意可能表明涨势后继乏力的警示信号。这些弱化变体仍可能反转，但需要更加谨慎。',
    },
    {
      type: 'keyPoints',
      points: [
        '白兵出现长上影线，说明买方推得过猛后遭遇抛压',
        '实体逐步缩小，意味着买入动能减弱',
        '第三根蜡烛较第二根跳空高开幅度过大，可能意味着行情透支',
        '若形态出现在涨幅已大的市场中，反转风险显著增加',
      ],
    },
    {
      type: 'callout',
      variant: 'rule',
      text: '在较长下跌趋势之后出现的三白兵信号最为可靠。若相同形态出现在已大幅上涨后的反弹末期，则更可能意味着力竭，而非新一轮上涨的开始。',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: '短暂或幅度较小的上涨之后出现的三只乌鸦，可能只是过度反应。此形态在持续且成熟的涨势之后出现时意义最为重大。',
    },
  ],
  sceneTitles: {
    'scene-soldiers': '三白兵',
    'scene-crows': '三只乌鸦',
    'scene-weak': '弱势警示信号',
  },
}

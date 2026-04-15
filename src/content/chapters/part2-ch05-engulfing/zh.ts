import type { ChapterLocaleContent } from '@/types/content'

export const zh: ChapterLocaleContent = {
  title: '吞没形态',
  subtitle: '一根蜡烛完全覆盖前一交易日的信号',
  explanation: [
    {
      type: 'paragraph',
      text: '吞没形态是一种两根蜡烛组成的形态，其中第二根蜡烛的实体完全覆盖（吞没）了前一根蜡烛的实体。它是蜡烛图分析中最可靠的反转信号之一，在市场顶部和底部均会出现。',
    },
    {
      type: 'comparison',
      bullish: '看涨吞没：出现在下跌趋势的底部。一根大阳线的开盘价低于前一根阴线的收盘价，收盘价高于其开盘价，标志着市场主导权从空方决定性地转向多方。',
      bearish: '看跌吞没：出现在上涨趋势的顶部。一根大阴线的开盘价高于前一根阳线的收盘价，收盘价低于其开盘价，标志着空方已压倒多方。',
    },
    {
      type: 'heading',
      level: 2,
      text: '识别规则',
    },
    {
      type: 'keyPoints',
      points: [
        '市场必须处于明确的上涨或下跌趋势中',
        '第二根蜡烛的实体必须完全覆盖第一根蜡烛的实体',
        '两根蜡烛颜色必须相反：第一天阴线 → 第二天阳线（反之亦然）',
        '影线无需被吞没——只有实体才是判断依据',
        '第二根蜡烛的实体相对第一根越大，信号越强',
      ],
    },
    {
      type: 'callout',
      variant: 'rule',
      text: '吞没形态的力量来源于反转的彻底性：前一交易日参与者所取得的一切成果，在单日之内被完全逆转。',
    },
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: '增强信号的因素',
    },
    {
      type: 'keyPoints',
      points: [
        '第一天的实体极小（十字线或接近十字线）——反差更大',
        '第二天在反转方向上跳空开盘',
        '吞没蜡烛成交量放大，确认市场信心',
        '吞没蜡烛的实体同时覆盖了多根前期蜡烛',
        '形态出现在关键支撑位或阻力位附近',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: '在横盘震荡市场中出现的吞没形态预测意义不大。在根据信号采取行动之前，务必先确认趋势的存在。',
    },
  ],
  sceneTitles: {
    'scene-downtrend': '下跌趋势背景',
    'scene-bull-engulf': '看涨吞没形态',
    'scene-bear-engulf': '看跌吞没形态',
  },
}

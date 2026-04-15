import type { ChapterLocaleContent } from '@/types/content'

export const zh: ChapterLocaleContent = {
  title: '孕线形态',
  subtitle: '"孕育"中的蜡烛——小实体被大实体包裹',
  explanation: [
    {
      type: 'paragraph',
      text: '"孕线"（harami）在日语中意为"怀孕"。在孕线形态中，第一天的大蜡烛之后，第二天出现一根小蜡烛，其实体完全被包含在第一天实体之内。大蜡烛是"母亲"，小蜡烛是"婴儿"。这种包含关系表明，原有趋势的动能正在减弱。',
    },
    {
      type: 'comparison',
      bullish: '看涨孕线：出现在下跌趋势之后。一根长阴线之后出现一根小阳线，其实体被包含在阴线实体之内。卖压已被遏制——底部可能正在形成。',
      bearish: '看跌孕线：出现在上涨趋势之后。一根长阳线之后出现一根小阴线，其实体被包含在阳线实体之内。买入动能已经停滞——顶部可能正在形成。',
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
        '第二天：一根小蜡烛，其实体完全位于第一天实体之内',
        '两根蜡烛颜色通常相反，但并非绝对要求',
        '第二天实体相对第一天越小，犹豫不决的信号越强',
        '第二天的影线可以超出第一天实体范围——只有实体才是判断依据',
      ],
    },
    {
      type: 'callout',
      variant: 'rule',
      text: '孕线与吞没形态恰好相反。吞没形态展示的是戏剧性的主导权夺取，而孕线展示的是静默的犹豫——趋势尚未反转，只是暂时停歇。',
    },
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: '孕线十字（十字孕线）',
    },
    {
      type: 'paragraph',
      text: '若第二天为十字线而非小实体蜡烛，则形成"孕线十字"——信号意义显著增强。第二天完全没有实体，表明市场陷入完全的犹豫状态，是趋势即将反转更为紧迫的预警。',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: '孕线是一个预警信号，并非确认的反转。在采取行动前，始终要等待确认信号——一根朝反转方向的强势蜡烛。',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: '孕线通常比吞没形态或星线形态弱。当它出现在成熟的支撑位或阻力位附近时，效果最佳。',
    },
  ],
  sceneTitles: {
    'scene-bull-harami': '看涨孕线',
    'scene-bear-harami': '看跌孕线',
    'scene-harami-cross': '孕线十字（十字线变体）',
  },
}

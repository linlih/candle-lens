import type { ChapterLocaleContent } from '@/types/content'

export const zh: ChapterLocaleContent = {
  title: '实体、影线与市场心理',
  subtitle: '先读懂长实体、小实体和影线，再去背复杂形态',
  explanation: [
    {
      type: 'paragraph',
      text: '在学习复杂形态之前，先要学会它们背后的语言。实体告诉你谁在收盘时占优；影线告诉你盘中哪里发生了拒绝、哪里发生了收复。',
    },
    {
      type: 'heading',
      level: 2,
      text: '最核心的形状信号',
    },
    {
      type: 'keyPoints',
      points: [
        '长实体：单个交易时段里有明确方向控制',
        '短实体：买卖双方更接近平衡或犹豫',
        '光头光脚线（Marubozu）：几乎没有影线，一方几乎全程掌控',
        '纺锤线（Spinning Top）：小实体配合可见影线，说明波动存在但收盘犹豫',
        '长上影线：买方曾推高价格，但没能守住成果',
        '长下影线：卖方曾砸低价格，但买方把价格重新拉回',
      ],
    },
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: '先读实体，再读影线',
    },
    {
      type: 'comparison',
      bullish: '长下影线只有在买方确实把收盘拉回、且位置支持反转时，才更偏多。',
      bearish: '长上影线只有出现在上涨末端或阻力附近时，才更偏空。',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: '形状只是原始语句，趋势和位置决定了这句话到底该怎么解释。',
    },
  ],
  sceneTitles: {
    'scene-marubozu': '长实体：光头光脚线的控制力',
    'scene-spinning-top': '短实体：纺锤线的犹豫',
    'scene-upper-shadow': '长上影线：高位被拒绝',
    'scene-lower-shadow': '长下影线：低位被收复',
  },
}

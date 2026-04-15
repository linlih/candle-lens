import type { ChapterLocaleContent } from '@/types/content'

export const zh: ChapterLocaleContent = {
  title: '蜡烛图简介',
  subtitle: '了解日本蜡烛图的解剖结构与历史背景',
  explanation: [
    {
      type: 'paragraph',
      text: '蜡烛图起源于300多年前的日本，由大米交易商发明，用来追踪市场价格和每日动量。20世纪90年代初，史蒂夫·尼森将其引入西方世界，此后蜡烛图成为全球交易者最广泛使用的图表形式。',
    },
    {
      type: 'heading',
      level: 2,
      text: '蜡烛图的结构',
    },
    {
      type: 'paragraph',
      text: '每根蜡烛代表一个时间周期（如一天、一小时等），包含四个关键价格：开盘价、最高价、最低价和收盘价（OHLC）。宽矩形部分称为"实体"，表示开盘价与收盘价之间的区间。实体上下的细线称为"影线"或"须"，分别表示最高价和最低价。',
    },
    {
      type: 'keyPoints',
      points: [
        '实体：开盘价与收盘价之间的矩形区域',
        '上影线：从实体顶部延伸到最高价的细线',
        '下影线：从实体底部延伸到最低价的细线',
        '阳线（绿色）：收盘价高于开盘价',
        '阴线（红色）：收盘价低于开盘价',
      ],
    },
    // ← 图表放在结构说明之后
    { type: 'chart' },
    {
      type: 'callout',
      variant: 'tip',
      text: '日本交易商为蜡烛图形态起了富有诗意的名字，如"乌云盖顶"和"暮星"，以反映其所代表的市场情绪。',
    },
    {
      type: 'heading',
      level: 2,
      text: '为什么使用蜡烛图？',
    },
    {
      type: 'paragraph',
      text: '与普通柱状图不同，蜡烛图能让人立刻直观地看出某个交易时段内多头还是空头占主导。实体的颜色和形状，以及上下影线的相对长度，能一目了然地传达市场情绪。',
    },
    {
      type: 'callout',
      variant: 'rule',
      text: '一根蜡烛揭示了该时段内买方与卖方之间的博弈。实体的方向显示了最终的胜负。',
    },
  ],
  sceneTitles: {
    'scene-overview': '一组蜡烛',
    'scene-anatomy': '阳线与阴线的结构对比',
  },
}

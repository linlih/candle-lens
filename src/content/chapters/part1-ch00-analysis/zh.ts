import type { ChapterLocaleContent } from '@/types/content'

export const zh: ChapterLocaleContent = {
  title: '如何分析一根蜡烛图信号',
  subtitle: '先看趋势、位置、确认与失效，再去信任形态本身',
  explanation: [
    {
      type: 'paragraph',
      text: '很多初学者只停留在“这根 K 线叫什么名字”。这远远不够。蜡烛图信号只有放进完整判断顺序里才有价值：先看趋势，再看位置，再读形态，然后等确认，最后明确失效条件。',
    },
    {
      type: 'heading',
      level: 2,
      text: '五步判断清单',
    },
    {
      type: 'keyPoints',
      points: [
        '趋势：市场当前是在上涨、下跌，还是横盘？',
        '位置：信号出现在支撑、阻力，还是噪音区间中央？',
        '形态：实体和影线到底传达了什么控制权变化？',
        '确认：下一根或接下来几根 K 线，哪种行为能证明它有效？',
        '失效：出现什么价格行为，说明原判断已经错了？',
      ],
    },
    {
      type: 'callout',
      variant: 'rule',
      text: '位置错误的完美形态，往往不如位置正确但略显粗糙的形态更有价值。',
    },
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: '确认与失败',
    },
    {
      type: 'paragraph',
      text: '候选信号出现后，你的工作不是立刻预测方向，而是观察下一根 K 线究竟是在强化原假设，还是直接把它打破。真正好的分析会随着新证据更新，而不是执着捍卫第一眼判断。',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: '没有确认，就不要有过高信心；而一旦关键价位被破坏，也要把“失效”当成新信息，而不是和图表争辩。',
    },
  ],
  sceneTitles: {
    'scene-context': '先有趋势和关键位',
    'scene-candidate': '支撑位上的候选信号',
    'scene-confirmed': '确认让判断升级',
    'scene-failed': '失效让原判断作废',
  },
}

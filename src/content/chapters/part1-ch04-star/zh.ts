import type { ChapterLocaleContent } from '@/types/content'

export const zh: ChapterLocaleContent = {
  title: '射击之星与倒锤子线',
  subtitle: '相同的形态，截然相反的含义',
  explanation: [
    {
      type: 'paragraph',
      text: '射击之星与倒锤子线拥有完全相同的轮廓：实体小且位于交易区间的低端，上影线长度至少是实体的两倍，下影线极短或不存在。区别它们的不是形状，而是它们出现时所处的趋势背景。',
    },
    {
      type: 'comparison',
      bullish: '倒锤子线：出现在下跌趋势之后。盘中买方曾尝试推高价格——这可能意味着空方正在失去控制力。需要看涨确认信号。',
      bearish: '射击之星：出现在上涨趋势之后。买方将价格大幅推高，但收盘前被卖方压回。是看跌反转的预警信号。',
    },
    {
      type: 'heading',
      level: 2,
      text: '识别规则',
    },
    {
      type: 'keyPoints',
      points: [
        '小实体位于当日交易区间的低端',
        '上影线长度至少是实体长度的2倍',
        '下影线极短或不存在',
        '实体颜色次要——实体位置才是关键',
        '与前一根蜡烛之间存在跳空缺口，信号更强',
      ],
    },
    {
      type: 'callout',
      variant: 'rule',
      text: '射击之星和倒锤子线是锤子线和上吊线旋转180°后的镜像。逻辑完全相同：单看形态本身不够，趋势背景才是一切。',
    },
    { type: 'chart' },
    {
      type: 'heading',
      level: 2,
      text: '射击之星',
    },
    {
      type: 'paragraph',
      text: '在上涨趋势的顶部，市场开盘后大幅拉升（形成长上影线），但收盘前被打回至开盘价附近。空方明显占据主导。上影线越长、实体越小，信号就越看跌。需要等待随后一根看跌蜡烛加以确认。',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: '若射击之星较前一根蜡烛跳空高开，随后又大幅回落，信号尤为重要——跳空说明开盘时买方仍积极入场，随后的逆转因而更具戏剧性。',
    },
    {
      type: 'heading',
      level: 2,
      text: '倒锤子线',
    },
    {
      type: 'paragraph',
      text: '在下跌趋势的底部，倒锤子线表明买方在盘中尝试推高价格，但未能维持涨幅。尽管收盘位置可能令人失望，但这次向上的试探性突破暗示买方力量正在觉醒。必须等到下一根蜡烛确认——即出现一根强力看涨蜡烛，收盘明显高于倒锤子线的实体——才可采取行动。',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: '倒锤子线需要比普通锤子线更多的耐心。在下一根蜡烛以强势收盘确认多头动能之前，不要急于买入。',
    },
  ],
  sceneTitles: {
    'scene-shooting-star': '上涨顶部的射击之星',
    'scene-inv-hammer': '下跌底部的倒锤子线',
    'scene-confirm': '看涨确认信号',
  },
}

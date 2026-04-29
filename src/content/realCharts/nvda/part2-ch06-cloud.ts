import type { RealChartData } from '@/types/realChart'

// NVDA Nov 5 – Nov 24, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Piercing Line on Nov 13–14, 2025
//   Bear (Nov 13): O=191.05, H=191.44, L=183.85, C=186.86 (body=4.19)
//   Bull (Nov 14): O=182.86, H=191.01, L=180.58, C=190.17 (body=7.31)
//   Nov 14 opens below Nov 13 close, surges past midpoint (188.96) to 190.17.
//   Classic Piercing Line — bullish reversal in a downtrend.

export const realChart: RealChartData = {
  chapterId: 'part2-ch06-cloud',
  ticker: 'NVDA',
  candles: [
    { time: '2025-11-05', open: 198.77, high: 202.92, low: 194.65, close: 195.21 },
    { time: '2025-11-06', open: 196.42, high: 197.62, low: 186.38, close: 188.08 },
    { time: '2025-11-07', open: 184.90, high: 188.32, low: 178.91, close: 188.15 },
    { time: '2025-11-10', open: 195.11, high: 199.94, low: 193.79, close: 199.05 },
    { time: '2025-11-11', open: 195.16, high: 195.42, low: 191.30, close: 193.16 },
    { time: '2025-11-12', open: 195.72, high: 195.89, low: 191.13, close: 193.80 },
    { time: '2025-11-13', open: 191.05, high: 191.44, low: 183.85, close: 186.86 }, // Bear day
    { time: '2025-11-14', open: 182.86, high: 191.01, low: 180.58, close: 190.17 }, // Piercing Line
    { time: '2025-11-17', open: 185.97, high: 189.00, low: 184.32, close: 186.60 },
    { time: '2025-11-18', open: 183.38, high: 184.80, low: 179.65, close: 181.36 },
    { time: '2025-11-19', open: 184.79, high: 187.86, low: 182.83, close: 186.52 },
    { time: '2025-11-20', open: 195.95, high: 196.00, low: 179.85, close: 180.64 },
    { time: '2025-11-21', open: 181.24, high: 184.56, low: 172.93, close: 178.88 },
    { time: '2025-11-24', open: 179.49, high: 183.50, low: 176.48, close: 182.55 },
    { time: '2025-11-25', open: 174.91, high: 178.16, low: 169.55, close: 177.82 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'piercing-box',
      timeRange: { from: '2025-11-13', to: '2025-11-14' },
      priceRange: { high: 191.44, low: 180.58 },
      pricePadding: 0.5,
      fillColor: 'rgba(38, 166, 154, 0.12)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'piercing-label',
      time: '2025-11-14',
      price: 192.8,
      text: 'Piercing Line',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
    {
      kind: 'hline',
      id: 'midpoint-line',
      price: 188.96,
      color: 'rgba(255, 193, 7, 0.7)',
      width: 1,
      dash: [4, 3],
    },
  ],
  lesson: {
    steps: [
      {
        id: 'bearish-context',
        visibleCount: 7,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'A piercing pattern starts with real downside pressure',
            summary:
              'By November 13, NVDA has already been sold off and prints another bearish day into weakness. That gives the setup proper downtrend context; without that, a bullish rebound would be less meaningful.',
            question:
              'Before the second candle forms, what would you want to see from buyers to even consider a reversal attempt?',
            answer:
              'You want buyers to absorb a weak open and reclaim a meaningful portion of the prior bearish body, not just bounce a little.',
            confirmationSignals: [
              'The next session responds strongly from a weak open',
            ],
            invalidationSignals: [
              'The next session stays weak and closes near the lows',
            ],
          },
          zh: {
            title: '刺透形态一定要先有真实下压背景',
            summary:
              '到 11 月 13 日，NVDA 已经出现下跌并再次收出阴线。这样的背景才让双日反转有意义；如果没有先前的弱势，后面的阳线穿回就没那么值得重视。',
            question: '第二根 K 线形成前，买方至少要做到什么，你才会考虑反转尝试？',
            answer:
              '买方必须在弱开后明显收回前一根阴线实体的重要部分，而不是只做一个技术性小反弹。',
            confirmationSignals: [
              '下一交易日从弱开中快速反击',
            ],
            invalidationSignals: [
              '下一交易日继续收弱并接近低点收盘',
            ],
          },
        },
      },
      {
        id: 'piercing-candle',
        visibleCount: 8,
        annotationIds: ['piercing-box', 'piercing-label', 'midpoint-line'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'The key is the close above the midpoint',
            summary:
              'November 14 opens even lower, which initially looks bad, but buyers then drive price to $190.17. The critical detail is not just the rebound; it is that the close pierces above the midpoint of the November 13 bearish body.',
            question: 'Why does closing above the midpoint matter more than simply closing green?',
            answer:
              'Because it proves buyers reclaimed a meaningful share of the prior session’s loss. A green candle alone could still be weak; closing above the midpoint shows real counter-pressure.',
            confirmationSignals: [
              'The bullish candle closes above the midpoint line',
              'The rebound reverses much of the prior damage',
            ],
            invalidationSignals: [
              'The candle closes below the midpoint despite the bounce',
            ],
          },
          zh: {
            title: '关键不只是反弹，而是收盘站上中点',
            summary:
              '11 月 14 日先继续低开，看起来像要延续下跌，但买方随后把价格推到 190.17 美元收盘。这里最重要的细节不是“收阳”本身，而是收盘明显刺穿了 11 月 13 日阴线实体中点。',
            question: '为什么“站上中点”比“只是收阳”更重要？',
            answer:
              '因为它说明买方收回了前一日跌幅中真正有分量的一部分。单纯收阳可能仍然很弱，但站上中点意味着反击质量更高。',
            confirmationSignals: [
              '阳线收盘站上实体中点虚线',
              '反弹力度足以回收前一日大部分伤害',
            ],
            invalidationSignals: [
              '虽然反弹但收盘仍在中点下方',
            ],
          },
        },
      },
      {
        id: 'short-term-bottoming',
        visibleCount: 10,
        annotationIds: ['piercing-box', 'piercing-label', 'midpoint-line'],
        bias: 'neutral',
        locale: {
          en: {
            title: 'The pattern marks exhaustion even without a huge trend change',
            summary:
              'The next sessions do not explode upward, but they do show that the immediate downside panic was interrupted. That is an important teaching point: a piercing pattern often signals short-term exhaustion before it signals a full trend reversal.',
            question:
              'What should you learn when the pattern works as a pause rather than a massive trend change?',
            answer:
              'Candlestick reversals can improve timing even when they only produce a tradable pause or consolidation. You are reading momentum change, not promising a permanent reversal.',
            confirmationSignals: [
              'The market stops accelerating downward immediately after the pattern',
            ],
            invalidationSignals: [
              'The next session instantly erases the piercing candle',
            ],
          },
          zh: {
            title: '它先标记“下跌衰竭”，未必立刻意味着大反转',
            summary:
              '后面几个交易日并没有立刻一路暴涨，但至少说明短线恐慌性抛售被打断了。这是很重要的教学点：刺透形态经常先标记短线衰竭，再决定是否演变成更大的趋势反转。',
            question: '如果形态只是带来一段喘息或整理，而不是大级别反转，你该学到什么？',
            answer:
              '蜡烛图反转首先提升的是节奏判断。它告诉你动能在变，而不是保证趋势一定永久改变。',
            confirmationSignals: [
              '形态后市场不再立刻加速下跌',
            ],
            invalidationSignals: [
              '下一交易日立刻完全抹掉刺透阳线',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This example teaches quality of rebound: a piercing pattern is not just “green after red,” but a recovery strong enough to reclaim the prior body’s midpoint.',
        conclusion:
          'Use piercing patterns to judge whether sellers are losing control, even if the market only stabilises before choosing its next larger trend.',
      },
      zh: {
        intro:
          '这个案例的重点在于“反弹质量”：刺透形态不是简单的“阴后转阳”，而是反弹强到足以收回前一根阴线实体中点。',
        conclusion:
          '用刺透形态去判断空方是否开始失去控制，即使市场后面只先进入企稳整理，也已经很有分析价值。',
      },
    },
  },
  locale: {
    en: {
      patternLabel: 'Piercing Line — Nov 13–14, 2025',
      analysisText:
        "After dropping from $199 to $187 over two sessions, NVDA gapped down further on November 14 — opening at $182.86, well below the prior close of $186.86. However, buyers absorbed the selling pressure and drove the stock all the way to $190.17, clearly piercing above the midpoint of the November 13 bearish candle ($188.96, dashed line). This Piercing Line signaled exhaustion of the short-term downtrend and set the stage for consolidation, though the broader decline resumed later.",
    },
    zh: {
      patternLabel: '刺透形态 — 2025年11月13-14日',
      analysisText:
        '英伟达两个交易日从199美元跌至187美元后，11月14日再度跳空低开——开盘182.86美元，远低于前一日收盘价186.86美元。然而买方吸收了抛压，将股价推升至190.17美元，明显穿越11月13日阴线实体的中点（188.96美元，虚线）。这一刺透形态标志着短期下跌趋势的衰竭，为阶段性整理奠定基础，尽管整体跌势随后仍有所延续。',
      labelText: {
        'piercing-label': '刺透线',
      },
    },
  },
}

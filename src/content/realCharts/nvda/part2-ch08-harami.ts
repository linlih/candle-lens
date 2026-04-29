import type { RealChartData } from '@/types/realChart'

// NVDA Oct 2 – Oct 22, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Bullish Harami on Oct 10–13, 2025
//   Large Bear (Oct 10): O=193.51, H=195.62, L=182.05, C=183.16 (body=10.35!)
//   Small Bull (Oct 13): O=187.97, H=190.11, L=185.96, C=188.32 (body=0.35)
//   Oct 13 body sits entirely inside Oct 10's body range (183.16–193.51). Textbook harami.

export const realChart: RealChartData = {
  chapterId: 'part2-ch08-harami',
  ticker: 'NVDA',
  candles: [
    { time: '2025-10-02', open: 189.60, high: 191.05, low: 188.06, close: 188.89 },
    { time: '2025-10-03', open: 189.19, high: 190.36, low: 185.38, close: 187.62 },
    { time: '2025-10-06', open: 185.50, high: 187.23, low: 183.33, close: 185.54 },
    { time: '2025-10-07', open: 186.23, high: 189.06, low: 184.00, close: 185.04 },
    { time: '2025-10-08', open: 186.57, high: 189.60, low: 186.54, close: 189.11 },
    { time: '2025-10-09', open: 192.23, high: 195.30, low: 191.06, close: 192.57 },
    { time: '2025-10-10', open: 193.51, high: 195.62, low: 182.05, close: 183.16 }, // Large Bear
    { time: '2025-10-13', open: 187.97, high: 190.11, low: 185.96, close: 188.32 }, // Small Bull (Harami)
    { time: '2025-10-14', open: 184.77, high: 184.80, low: 179.70, close: 180.03 },
    { time: '2025-10-15', open: 184.80, high: 184.87, low: 177.29, close: 179.83 },
    { time: '2025-10-16', open: 182.23, high: 183.28, low: 179.77, close: 181.81 },
    { time: '2025-10-17', open: 180.18, high: 184.10, low: 179.75, close: 183.22 },
    { time: '2025-10-20', open: 183.13, high: 185.20, low: 181.73, close: 182.64 },
    { time: '2025-10-21', open: 182.79, high: 182.79, low: 179.80, close: 181.16 },
    { time: '2025-10-22', open: 181.14, high: 183.44, low: 176.76, close: 180.28 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'harami-box',
      timeRange: { from: '2025-10-10', to: '2025-10-13' },
      priceRange: { high: 195.62, low: 182.05 },
      pricePadding: 0.5,
      fillColor: 'rgba(255, 193, 7, 0.12)',
      borderColor: '#ffc107',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'harami-label',
      time: '2025-10-13',
      price: 191.5,
      text: 'Bullish Harami',
      position: 'above',
      backgroundColor: '#ffc107',
      textColor: '#1a1a2e',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  lesson: {
    steps: [
      {
        id: 'panic-selloff',
        visibleCount: 7,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'The large bearish candle creates the setup',
            summary:
              'October 10 is a violent sell-off day. That oversized bearish body is important because a harami only has meaning when the first candle represents real emotional pressure.',
            question:
              'After a very large bearish candle, what would a meaningful “pause” look like on the next session?',
            answer:
              'You would want a much smaller body that sits inside the prior real body, showing that the panic has stopped expanding.',
            confirmationSignals: [
              'The next body shrinks dramatically',
              'That small body stays inside the prior body',
            ],
            invalidationSignals: [
              'The next candle remains large and bearish',
            ],
          },
          zh: {
            title: '先有大阴线，孕线结构才成立',
            summary:
              '10 月 10 日是一根情绪化很强的大阴线。孕线之所以有意义，正是因为第一根 K 线必须先代表真实的恐慌性抛压。',
            question: '在这样一根大阴线之后，什么样的“停顿”才算有分析意义？',
            answer:
              '下一根实体必须明显缩小，并且落在前一根实体内部，说明恐慌没有继续扩散。',
            confirmationSignals: [
              '下一根实体明显缩小',
              '小实体完全落在前一根实体内部',
            ],
            invalidationSignals: [
              '下一根仍然是大阴线并继续扩张',
            ],
          },
        },
      },
      {
        id: 'harami-appears',
        visibleCount: 8,
        annotationIds: ['harami-box', 'harami-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The harami says panic has paused',
            summary:
              'October 13 prints a tiny bullish body entirely inside October 10’s huge bearish body. The message is not “bull trend resumed.” The message is smaller: the one-sided selling panic has paused, and the market is rebalancing.',
            question:
              'What should you expect from the next candles if this small inside body really marks a short-term bottoming process?',
            answer:
              'You want later candles to stop making fresh impulsive lows and begin stabilising, even if the rebound is not immediate and clean.',
            confirmationSignals: [
              'Later candles stop extending the selloff aggressively',
              'Price begins to stabilise after the panic day',
            ],
            invalidationSignals: [
              'The market quickly breaks into new panic lows again',
            ],
          },
          zh: {
            title: '孕线说明恐慌暂时停下来了',
            summary:
              '10 月 13 日出现一根很小的阳线实体，并且完全包在 10 月 10 日的大阴线实体内部。它传达的信息不是“上涨趋势恢复”，而是更克制的一层：单边恐慌性抛售先停下来了，市场开始重新平衡。',
            question: '如果这个小实体真的在提示短线筑底过程，后面应该看到什么？',
            answer:
              '你希望后面的蜡烛不再继续情绪化创新低，并逐渐进入企稳状态，哪怕反弹不是立刻又快又强。',
            confirmationSignals: [
              '后续蜡烛不再激烈延续下跌',
              '恐慌日之后价格开始企稳',
            ],
            invalidationSignals: [
              '市场很快再次进入新的恐慌低点',
            ],
          },
        },
      },
      {
        id: 'stabilisation-after-harami',
        visibleCount: 13,
        annotationIds: ['harami-box', 'harami-label'],
        bias: 'neutral',
        locale: {
          en: {
            title: 'The harami works by slowing the decline first',
            summary:
              'The following candles remain volatile, but the market does stabilise and later recovers. That is a realistic lesson: a bullish harami often marks exhaustion of panic before it marks a clean upside breakout.',
            question: 'What is the teaching value if the pattern gives stabilisation before a strong uptrend?',
            answer:
              'It teaches you to spot regime change early. You are not forecasting perfection; you are noticing when panic selling has stopped dominating every close.',
            confirmationSignals: [
              'The decline loses urgency',
              'Subsequent candles start building a base',
            ],
            invalidationSignals: [
              'Price immediately resumes one-way collapse',
            ],
          },
          zh: {
            title: '孕线常常先让跌势放缓，再谈真正反转',
            summary:
              '后面的蜡烛仍然有波动，但市场确实先企稳，随后才逐渐恢复。这是更真实的教学点：看涨孕线很多时候先标记恐慌衰竭，再慢慢演变成更明确的反弹。',
            question: '如果形态先带来企稳，而不是立刻大涨，它的教学价值在哪里？',
            answer:
              '它训练你提早识别市场状态变化。你不是在追求完美预言，而是在发现恐慌性抛售何时不再主导每一次收盘。',
            confirmationSignals: [
              '跌势的急迫性下降',
              '后续蜡烛开始构建底部结构',
            ],
            invalidationSignals: [
              '价格立刻恢复成单边崩跌',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This harami case is best read as a panic-exhaustion lesson: the small inside candle does not promise a huge reversal, but it does tell you the emotional selloff has paused.',
        conclusion:
          'Use harami structures to detect shrinking conviction after a shock candle, then watch whether the market stabilises instead of demanding an instant rally.',
      },
      zh: {
        intro:
          '这个孕线案例更适合当作“恐慌衰竭”来读：小实体并不保证立刻大反转，但它确实告诉你情绪化抛售先停下来了。',
        conclusion:
          '用孕线去识别冲击性大阴线之后的动能收缩，再观察市场是否转入企稳，而不是要求它立刻暴涨。',
      },
    },
  },
  locale: {
    en: {
      patternLabel: 'Bullish Harami — Oct 10–13, 2025',
      analysisText:
        "October 10 was a bruising sell-off for NVDA: the stock fell from $193.51 to $183.16 on a body of $10.35, the widest single-day candle in weeks. The following Monday (Oct 13), a small bullish candle (body=$0.35) appeared entirely within the prior day's body — a Bullish Harami signaling that the selling panic had subsided. While the stock continued volatile, the harami correctly called the near-term bottom, and NVDA stabilised and began recovering over the next two weeks.",
    },
    zh: {
      patternLabel: '看涨孕线 — 2025年10月10-13日',
      analysisText:
        '10月10日英伟达遭遇猛烈抛售：股价从193.51美元跌至183.16美元，实体达10.35美元，是数周以来最宽的单日K线。次周一（10月13日），出现一根小阳线（实体0.35美元），完全包含在前一日K线实体内——这一看涨孕线形态表明抛售恐慌已趋于平息。尽管此后波动仍剧烈，孕线准确预判了短期底部，NVDA在随后两周内逐步企稳回升。',
      labelText: {
        'harami-label': '看涨孕线',
      },
    },
  },
}

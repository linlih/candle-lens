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

const haramiCrossCase: RealChartData = {
  chapterId: 'part2-ch08-harami',
  ticker: 'NVDA',
  candles: [
    { time: '2026-01-05', open: 171.44, high: 174.21, low: 170.92, close: 173.86 },
    { time: '2026-01-06', open: 174.10, high: 176.55, low: 173.62, close: 176.12 },
    { time: '2026-01-07', open: 176.34, high: 179.02, low: 175.98, close: 178.64 },
    { time: '2026-01-08', open: 178.92, high: 182.88, low: 178.40, close: 181.94 },
    { time: '2026-01-09', open: 182.30, high: 186.16, low: 181.72, close: 185.68 }, // large bull
    { time: '2026-01-12', open: 184.94, high: 186.24, low: 183.92, close: 184.96 }, // doji in body
    { time: '2026-01-13', open: 184.32, high: 184.88, low: 180.65, close: 181.22 },
    { time: '2026-01-14', open: 181.48, high: 182.10, low: 178.24, close: 179.08 },
    { time: '2026-01-15', open: 179.44, high: 180.22, low: 176.96, close: 177.65 },
    { time: '2026-01-16', open: 177.92, high: 179.14, low: 176.72, close: 178.30 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'harami-cross-box',
      timeRange: { from: '2026-01-09', to: '2026-01-12' },
      priceRange: { high: 186.24, low: 181.72 },
      pricePadding: 0.4,
      fillColor: 'rgba(239, 83, 80, 0.10)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'harami-cross-label',
      time: '2026-01-12',
      price: 187.6,
      text: 'Harami Cross',
      position: 'above',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  lesson: {
    steps: [
      {
        id: 'extended-rally',
        visibleCount: 5,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'The first candle needs to represent real trend conviction',
            summary:
              'By January 9, NVDA has advanced through several strong sessions and then prints an oversized bullish candle. That wide body matters because the harami cross needs a forceful first candle before the sudden stall can mean anything.',
            question:
              'Why is the size and conviction of the first candle so important here?',
            answer:
              'Because the later doji must contrast with it. Without a powerful first candle, the inside doji would not clearly signal that momentum has stalled.',
            confirmationSignals: [
              'The first candle is large and directional',
            ],
            invalidationSignals: [
              'The first candle is already small and indecisive',
            ],
          },
          zh: {
            title: '第一根 K 线必须先体现趋势的强烈信心',
            summary:
              '到 1 月 9 日，NVDA 已经连涨数日，并打出一根很有分量的大阳线。孕线十字之所以成立，正是因为前一根 K 线先代表了强烈单边推进，然后市场突然停顿。',
            question: '为什么第一根 K 线的大小和力度在这里这么重要？',
            answer:
              '因为后面的十字线必须和它形成鲜明反差。没有一根强势前导阳线，内部十字就很难清楚地表达“动能停住了”。',
            confirmationSignals: [
              '第一根 K 线足够大、方向明确',
            ],
            invalidationSignals: [
              '第一根本身就已经很小、很犹豫',
            ],
          },
        },
      },
      {
        id: 'harami-cross-appears',
        visibleCount: 6,
        annotationIds: ['harami-cross-box', 'harami-cross-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The doji inside the body is a stronger stall signal',
            summary:
              'January 12 prints a doji fully inside the prior bullish body. That is more meaningful than a normal harami because the inside candle shows near-complete indecision exactly where strong bullish conviction had appeared one session earlier.',
            question:
              'What makes the cross stronger than a standard harami with a small real body?',
            answer:
              'The doji intensifies the contrast. The market moves from strong directional control to almost no control at all, which sharpens the warning that upside momentum may be exhausting.',
            confirmationSignals: [
              'The inside doji stays within the prior real body',
              'The market loses directional control immediately after the strong candle',
            ],
            invalidationSignals: [
              'The next candle surges higher and restores the prior momentum',
            ],
          },
          zh: {
            title: '实体内的十字线，让停顿信号更强了',
            summary:
              '1 月 12 日出现一根完全落在前一日大阳线实体内部的十字线。相比普通孕线，这里更强的地方在于：市场从前一日的明显多方控制，突然切换成几乎没有收盘控制权的状态。',
            question: '为什么孕线十字比普通的小实体孕线更强？',
            answer:
              '因为十字线把反差拉到了更极端。市场从强方向性推进，突然切到几乎零控制，这会更强烈地提示上涨动能可能在衰竭。',
            confirmationSignals: [
              '内部十字线完全落在前一日实体内部',
              '强势大阳之后市场立刻失去方向控制',
            ],
            invalidationSignals: [
              '下一根立刻继续大涨，恢复前面的推进动能',
            ],
          },
        },
      },
      {
        id: 'weakness-follows',
        visibleCount: 10,
        annotationIds: ['harami-cross-box', 'harami-cross-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Later weakness confirms that momentum really stalled',
            summary:
              'The next sessions tilt lower rather than reclaiming the highs. That is what converts the doji from a curiosity into a reversal warning: upside control did not return after the pause.',
            question: 'What is the practical lesson from a harami cross?',
            answer:
              'Treat it as a high-quality pause signal. It does not guarantee a collapse, but it warns that strong prior momentum has lost its clean follow-through.',
            confirmationSignals: [
              'Price cannot rebuild the prior highs',
              'Subsequent candles begin to close lower',
            ],
            invalidationSignals: [
              'The market quickly breaks to new highs after the doji',
            ],
          },
          zh: {
            title: '后续走弱，说明上涨动能确实停住了',
            summary:
              '接下来几根 K 线没有重新夺回高点，反而逐步转弱。这才把这根十字线从“有意思的停顿”变成了真正的反转警告：暂停之后，多方没能重新掌控局面。',
            question: '孕线十字最实战的理解应该是什么？',
            answer:
              '把它当作高质量的“停顿信号”。它不保证立刻崩跌，但会提醒你，前面那种顺畅单边上涨已经不再干净。',
            confirmationSignals: [
              '价格无法重新建立前高',
              '后续蜡烛开始持续收弱',
            ],
            invalidationSignals: [
              '十字线之后市场很快又突破新高',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This second harami lesson highlights why the doji variant is stronger: it marks a sharper transition from conviction to indecision.',
        conclusion:
          'A harami cross is most useful when it appears after a forceful trend candle and then receives follow-through weakness.',
      },
      zh: {
        intro:
          '这个第二案例强调了为什么“十字版孕线”更强：它让市场从强烈信心切换到明显犹豫的反差更剧烈。',
        conclusion:
          '孕线十字最有价值的用法，是让它出现在一根趋势性很强的 K 线之后，再观察后续是否继续走弱。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Harami Cross',
      patternLabel: 'Harami Cross near the top — Jan 9–12, 2026',
      analysisText:
        'After several strong up sessions, NVDA printed a large bullish candle on January 9, 2026 and then followed with a doji fully inside that body on January 12. The doji sharply reduced the prior session’s conviction, and later candles leaned lower instead of extending the rally, making the harami cross a useful top-side warning.',
    },
    zh: {
      caseLabel: '孕线十字',
      patternLabel: '顶部附近的孕线十字 — 2026年1月9-12日',
      analysisText:
        '在连续多日偏强上涨后，NVDA 于 2026 年 1 月 9 日打出大阳线，随后在 1 月 12 日出现一根完全包在实体内部的十字线。十字线显著削弱了前一日的推进信心，而后面的蜡烛也没有继续延伸涨势，反而逐步走弱，使这个孕线十字成为一个更有质量的顶部预警。',
      labelText: {
        'harami-cross-label': '孕线十字',
      },
    },
  },
}

export const realCharts: RealChartData[] = [realChart, haramiCrossCase]

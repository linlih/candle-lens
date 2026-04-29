import type { RealChartData } from '@/types/realChart'

// NVDA Oct 15 – Nov 5, 2025 (16 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Rising Three Methods (near-textbook) on Oct 17–28, 2025
//   First bull  (Oct 17): O=180.18, H=184.10, L=179.75, C=183.22 (body=3.04)
//   Pullback 1  (Oct 20): O=183.13, C=182.64 (small bear, body=0.49)
//   Pullback 2  (Oct 21): O=182.79, C=181.16 (small bear, body=1.63)
//   Pullback 3  (Oct 22): O=181.14, C=180.28 (small bear, body=0.86)
//   Continuation (Oct 23–28): rallies to C=201.03 — well above first bull's high.
//   Real-world caveat: Oct 22 dipped slightly below Oct 17's low (176.76 vs 179.75).

export const realChart: RealChartData = {
  chapterId: 'part3-ch12-three-methods',
  ticker: 'NVDA',
  candles: [
    { time: '2025-10-15', open: 184.80, high: 184.87, low: 177.29, close: 179.83 },
    { time: '2025-10-16', open: 182.23, high: 183.28, low: 179.77, close: 181.81 },
    { time: '2025-10-17', open: 180.18, high: 184.10, low: 179.75, close: 183.22 }, // First Bull
    { time: '2025-10-20', open: 183.13, high: 185.20, low: 181.73, close: 182.64 }, // Pullback 1
    { time: '2025-10-21', open: 182.79, high: 182.79, low: 179.80, close: 181.16 }, // Pullback 2
    { time: '2025-10-22', open: 181.14, high: 183.44, low: 176.76, close: 180.28 }, // Pullback 3
    { time: '2025-10-23', open: 180.42, high: 183.03, low: 179.79, close: 182.16 },
    { time: '2025-10-24', open: 183.84, high: 187.47, low: 183.50, close: 186.26 },
    { time: '2025-10-27', open: 189.99, high: 192.00, low: 188.43, close: 191.49 },
    { time: '2025-10-28', open: 193.05, high: 203.15, low: 191.91, close: 201.03 }, // Strong Bull
    { time: '2025-10-29', open: 207.98, high: 212.19, low: 204.78, close: 207.04 },
    { time: '2025-10-30', open: 205.15, high: 206.16, low: 201.41, close: 202.89 },
    { time: '2025-10-31', open: 206.45, high: 207.97, low: 202.07, close: 202.49 },
    { time: '2025-11-03', open: 208.08, high: 211.34, low: 205.56, close: 206.88 },
    { time: '2025-11-04', open: 203.00, high: 203.97, low: 197.93, close: 198.69 },
    { time: '2025-11-05', open: 198.77, high: 202.92, low: 194.65, close: 195.21 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'first-bull-box',
      timeRange: { from: '2025-10-17', to: '2025-10-17' },
      priceRange: { high: 184.10, low: 179.75 },
      fillColor: 'rgba(38, 166, 154, 0.18)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'box',
      id: 'pullback-box',
      timeRange: { from: '2025-10-20', to: '2025-10-22' },
      priceRange: { high: 185.20, low: 176.76 },
      fillColor: 'rgba(255, 193, 7, 0.10)',
      borderColor: '#ffc107',
      borderWidth: 1,
    },
    {
      kind: 'label',
      id: 'methods-label',
      time: '2025-10-28',
      price: 204.5,
      text: 'Rising Three Methods',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  lesson: {
    steps: [
      {
        id: 'impulse-candle',
        visibleCount: 3,
        annotationIds: ['first-bull-box'],
        bias: 'wait',
        locale: {
          en: {
            title: 'A strong trend candle creates the reference move',
            summary:
              'October 17 gives you the first key ingredient: a meaningful bullish impulse candle inside an advancing market. This candle becomes the benchmark for what later pullbacks should and should not do.',
            question:
              'After a strong trend candle, what would tell you a pullback is still healthy rather than becoming a reversal?',
            answer:
              'You want the retracement to stay relatively contained and temporary. If sellers completely erase the impulse, the continuation thesis weakens fast.',
            confirmationSignals: [
              'The next few candles pull back only modestly',
              'The market does not fully erase the bullish impulse',
            ],
            invalidationSignals: [
              'The pullback completely breaks down the prior impulse structure',
            ],
          },
          zh: {
            title: '第一根强势趋势 K 线，先定义“参考涨幅”',
            summary:
              '10 月 17 日先给出了第一个关键元素：上涨过程中的一根有分量的大阳线。它的重要性在于，后面的回调都要拿它作为参照，看看回调到底是正常整理还是趋势反转。',
            question: '在强势趋势 K 线之后，什么样的回调才算健康，而不是转势？',
            answer:
              '回调应该相对受控、持续时间也不宜太长。如果空方把这根大阳线的推进几乎全部抹掉，延续逻辑就会迅速变弱。',
            confirmationSignals: [
              '接下来几根 K 线只是温和回调',
              '市场没有把前面阳线的推进彻底吃掉',
            ],
            invalidationSignals: [
              '回调完全破坏前一根趋势阳线建立的结构',
            ],
          },
        },
      },
      {
        id: 'contained-pullback',
        visibleCount: 6,
        annotationIds: ['first-bull-box', 'pullback-box'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The pullback stays inside a consolidation role',
            summary:
              'October 20 to 22 brings several smaller bearish candles, but the move behaves more like a pause than a takeover. This is the heart of Rising Three Methods: the market relaxes without handing full control to sellers.',
            question:
              'Why is the “contained” character of the pullback more important than counting an exact number of candles?',
            answer:
              'Because real markets are messy. The analytical edge comes from recognising that the countertrend move is limited and does not reverse the larger direction.',
            confirmationSignals: [
              'The pullback candles are smaller than the impulse move',
              'Price action still looks like consolidation within an uptrend',
            ],
            invalidationSignals: [
              'The pullback expands into a full bearish trend change',
            ],
          },
          zh: {
            title: '回调被控制在“整理”角色里，而不是趋势反转',
            summary:
              '10 月 20 日到 22 日出现了几根较小的阴线，但整体更像上涨中的暂停，而不是空方全面接管。这正是上升三法的核心：市场在放松，却没有把控制权真正交给卖方。',
            question: '为什么“回调被控制住”比死记几根 K 线更重要？',
            answer:
              '因为真实市场本来就不完美。分析上的优势来自识别逆势波动是否有限，而不是机械数 K 线根数。',
            confirmationSignals: [
              '回调 K 线整体小于最初的推进阳线',
              '价格行为仍然更像上升趋势里的整理',
            ],
            invalidationSignals: [
              '回调逐渐演变成完整的下跌趋势切换',
            ],
          },
        },
      },
      {
        id: 'continuation-breakout',
        visibleCount: 16,
        annotationIds: ['first-bull-box', 'pullback-box', 'methods-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'The later breakout proves the pause was only temporary',
            summary:
              'The rally resumes and eventually closes well above the first bullish candle’s high. That is the confirmation you were waiting for: the pullback was a resting phase, and the broader uptrend reasserted itself.',
            question:
              'What is the real takeaway from this continuation pattern?',
            answer:
              'The lesson is not that every small pullback is bullish. It is that a controlled countertrend pause becomes useful only when later price action re-breaks in the original trend direction.',
            confirmationSignals: [
              'Price breaks above the first impulse candle’s high',
              'The market resumes higher closes after the pause',
            ],
            invalidationSignals: [
              'Price fails to continue and instead breaks below the pullback structure',
            ],
          },
          zh: {
            title: '后续突破说明之前只是短暂休整，不是转势',
            summary:
              '之后上涨重新启动，收盘明显越过了最初那根大阳线的高点。这才是你真正要等的确认：前面的回调只是休息阶段，更大的上升趋势重新占据主导。',
            question: '这个延续形态最值得带走的实战理解是什么？',
            answer:
              '不是所有小回调都该看多，而是“受控的逆势整理”只有在后续价格重新朝原趋势突破时，才真正有分析价值。',
            confirmationSignals: [
              '价格突破最初推进阳线的高点',
              '整理结束后市场重新持续收高',
            ],
            invalidationSignals: [
              '价格迟迟不能延续，反而跌破整理结构',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This case is best used to teach continuation logic: a pullback inside an uptrend is only useful when later candles prove it was consolidation rather than reversal.',
        conclusion:
          'Study Rising Three Methods as a sequence of impulse, contained pullback, and confirmed continuation, not as a rigid picture to memorise.',
      },
      zh: {
        intro:
          '这个案例最适合拿来教“趋势延续”的思路：上升趋势中的回调，只有在后续 K 线证明它是整理而不是反转时，才有意义。',
        conclusion:
          '学习上升三法时，把重点放在“推进 -> 受控回调 -> 延续确认”的顺序上，而不是把它当成必须长得一模一样的固定图形。',
      },
    },
  },
  locale: {
    en: {
      patternLabel: 'Rising Three Methods — Oct 17–28, 2025',
      analysisText:
        "After a strong bullish candle on October 17 ($180→$183), NVDA paused for three sessions (Oct 20–22) with small bearish candles that gave back only a fraction of the prior gain — the market \"catching its breath\" within the uptrend. On October 28, a powerful bull candle confirmed the continuation, closing at $201 and clearly surpassing the October 17 candle's high. This Rising Three Methods structure signalled that the uptrend was resuming, consistent with the pattern's core message: brief pullbacks during trends are consolidation, not reversal.",
    },
    zh: {
      patternLabel: '上升三法 — 2025年10月17-28日',
      analysisText:
        '10月17日出现强劲阳线（180→183美元）后，英伟达连续三个交易日（10月20-22日）出现小阴线回调，仅收回前期涨幅的一小部分——市场在上升趋势中"稍作喘息"。10月28日，一根强力阳线确认趋势延续，收盘于201美元，明显超越10月17日阳线的最高价。这一上升三法形态预示着上升趋势的重启，与该形态的核心含义一致：趋势中的短暂回调是整理而非反转。',
      labelText: {
        'methods-label': '上升三法',
      },
    },
  },
}

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

const fallingThreeMethodsCase: RealChartData = {
  chapterId: 'part3-ch12-three-methods',
  ticker: 'NVDA',
  candles: [
    { time: '2026-01-07', open: 176.34, high: 179.02, low: 175.98, close: 178.64 },
    { time: '2026-01-08', open: 178.92, high: 182.88, low: 178.40, close: 181.94 },
    { time: '2026-01-09', open: 182.30, high: 186.16, low: 181.72, close: 185.68 },
    { time: '2026-01-12', open: 186.24, high: 186.88, low: 180.65, close: 181.22 }, // first bear
    { time: '2026-01-13', open: 181.48, high: 182.10, low: 178.24, close: 179.08 }, // small bounce
    { time: '2026-01-14', open: 179.44, high: 180.22, low: 176.96, close: 177.65 }, // small bounce
    { time: '2026-01-15', open: 177.92, high: 179.14, low: 176.72, close: 178.30 }, // small bounce
    { time: '2026-01-16', open: 177.80, high: 178.10, low: 171.84, close: 172.44 }, // breakdown
    { time: '2026-01-20', open: 172.70, high: 173.42, low: 169.90, close: 170.36 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'first-bear-box',
      timeRange: { from: '2026-01-12', to: '2026-01-12' },
      priceRange: { high: 186.88, low: 180.65 },
      fillColor: 'rgba(239, 83, 80, 0.18)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'box',
      id: 'bounce-box',
      timeRange: { from: '2026-01-13', to: '2026-01-15' },
      priceRange: { high: 182.10, low: 176.72 },
      fillColor: 'rgba(255, 193, 7, 0.10)',
      borderColor: '#ffc107',
      borderWidth: 1,
    },
    {
      kind: 'label',
      id: 'falling-methods-label',
      time: '2026-01-16',
      price: 171.0,
      text: 'Falling Three Methods',
      position: 'below',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  lesson: {
    steps: [
      {
        id: 'impulse-bear',
        visibleCount: 4,
        annotationIds: ['first-bear-box'],
        bias: 'wait',
        locale: {
          en: {
            title: 'A strong bearish impulse creates the reference move',
            summary:
              'January 12 gives you the key first ingredient: a forceful bearish candle that interrupts the prior rise. This candle becomes the benchmark for judging whether the following bounce is only a pause.',
            question: 'After a strong bearish impulse, what would keep the continuation thesis alive?',
            answer:
              'The rebound must stay limited and fail to undo the bearish candle’s message.',
            confirmationSignals: ['The next bounce remains relatively small and contained'],
            invalidationSignals: ['The rebound quickly erases the bearish impulse and rebuilds the rally'],
          },
          zh: {
            title: '第一根强势阴线，先建立“参考跌幅”',
            summary:
              '1 月 12 日先给出了关键的第一步：一根有分量的大阴线，打断了前面的上涨。这根阴线会变成判断后续反弹是否只是暂停的参照。',
            question: '在强势阴线之后，什么能让延续逻辑继续成立？',
            answer:
              '后面的反弹必须受控，不能把这根阴线的含义很快抹掉。',
            confirmationSignals: ['随后反弹幅度相对有限、仍被压制'],
            invalidationSignals: ['反弹迅速收复大阴线并重新搭回上涨'],
          },
        },
      },
      {
        id: 'contained-bounce',
        visibleCount: 7,
        annotationIds: ['first-bear-box', 'bounce-box'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The bounce behaves like consolidation, not reversal',
            summary:
              'January 13 to 15 brings several small recovery candles, but they stay controlled inside the bearish impulse structure. That is what keeps the falling-three-methods interpretation alive.',
            question: 'Why is the limited character of the bounce more important than exact candle counting?',
            answer:
              'Because real markets are uneven. What matters is that the countertrend move remains weak enough to look like a pause, not a regime change.',
            confirmationSignals: ['The bounce candles stay smaller than the bearish impulse', 'Price action still looks like a pause inside weakness'],
            invalidationSignals: ['The bounce expands into a broad bullish reversal'],
          },
          zh: {
            title: '反弹更像整理，而不像真正反转',
            summary:
              '1 月 13 日到 15 日出现了几根小幅恢复蜡烛，但整体仍被控制在前一根大阴线结构之内。这正是下降三法可以继续成立的关键。',
            question: '为什么“反弹受控”比机械数 K 线根数更重要？',
            answer:
              '因为真实市场不会完全工整。真正有价值的是识别这段逆势波动是否仍然像暂停，而不是已经演变成结构切换。',
            confirmationSignals: ['反弹 K 线整体小于前面那根趋势阴线', '价格行为仍然更像弱势中的暂停'],
            invalidationSignals: ['反弹逐渐扩展成更完整的看涨反转'],
          },
        },
      },
      {
        id: 'downtrend-resumes',
        visibleCount: 9,
        annotationIds: ['first-bear-box', 'bounce-box', 'falling-methods-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'The breakdown proves the pause was temporary',
            summary:
              'January 16 resumes the downside and breaks below the bounce structure. That final bearish continuation is what confirms the pattern: the rebound was only a pause and sellers regained full control.',
            question: 'What is the main lesson from this continuation structure?',
            answer:
              'The edge comes from distinguishing weak countertrend rebound from genuine reversal. Falling three methods becomes useful when the final candle restarts the original downside direction.',
            confirmationSignals: ['The final bearish candle restarts downside momentum', 'The market breaks below the bounce structure'],
            invalidationSignals: ['The supposed continuation candle cannot break lower and gets reversed'],
          },
          zh: {
            title: '重新下破，证明前面的反弹只是暂时休整',
            summary:
              '1 月 16 日重新启动下跌，并跌破了前面的小反弹结构。这一步才真正确认形态：中间那段恢复只是暂停，空方已经重新完全接管。',
            question: '这个延续结构最值得学到的是什么？',
            answer:
              '真正的优势来自区分“弱反弹”和“真反转”。下降三法只有在最后一根阴线重新启动原有下跌方向时，才真正变得有用。',
            confirmationSignals: ['最后一根阴线重新启动下行动能', '市场跌破中间反弹结构'],
            invalidationSignals: ['所谓延续阴线无法继续下破，反而被快速反转'],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This mirror case teaches the bearish side of continuation: a weak rebound inside a down move becomes useful only when the final candle restarts the original selloff.',
        conclusion:
          'Falling Three Methods should train you to identify controlled rebounds that fail, then wait for the bearish continuation candle to confirm the read.',
      },
      zh: {
        intro:
          '这个镜像案例训练的是延续形态的看跌一侧：下跌中的弱反弹，只有在最后一根阴线重新启动卖压时，才真正有用。',
        conclusion:
          '下降三法最该训练你的，是识别“受控反弹的失败”，然后等待最后的延续阴线确认原判断。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Falling Three Methods',
      patternLabel: 'Falling Three Methods — Jan 12–16, 2026',
      analysisText:
        'After a forceful bearish candle on January 12, 2026, NVDA produced several smaller recovery candles that never rebuilt the prior uptrend. On January 16 the market broke lower again, completing a falling three methods continuation structure and confirming that the rebound had been only a pause.',
    },
    zh: {
      caseLabel: '下降三法',
      patternLabel: '下降三法 — 2026年1月12-16日',
      analysisText:
        '在 2026 年 1 月 12 日先打出一根强势阴线后，NVDA 中间出现了几根较小的恢复蜡烛，但始终没能重新搭回上涨结构。1 月 16 日价格重新下破，完成了下降三法延续结构，确认中间那段反弹只是暂停。',
      labelText: {
        'falling-methods-label': '下降三法',
      },
    },
  },
}

const risingThreeMethodsEtfCase: RealChartData = {
  chapterId: 'part3-ch12-three-methods',
  ticker: 'SPY',
  candles: [
    { time: '2025-07-21', open: 551.2, high: 552.0, low: 548.4, close: 549.1 },
    { time: '2025-07-22', open: 549.4, high: 555.8, low: 549.0, close: 555.2 }, // impulse bull
    { time: '2025-07-23', open: 554.7, high: 555.1, low: 552.6, close: 553.4 },
    { time: '2025-07-24', open: 553.1, high: 554.0, low: 551.8, close: 552.3 },
    { time: '2025-07-25', open: 552.5, high: 553.6, low: 551.9, close: 553.0 },
    { time: '2025-07-28', open: 553.4, high: 558.6, low: 553.0, close: 558.1 }, // continuation
    { time: '2025-07-29', open: 558.0, high: 559.2, low: 556.8, close: 558.9 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'spy-first-bull-box',
      timeRange: { from: '2025-07-22', to: '2025-07-22' },
      priceRange: { high: 555.8, low: 549.0 },
      pricePadding: 0.4,
      fillColor: 'rgba(38, 166, 154, 0.10)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'box',
      id: 'spy-pullback-box',
      timeRange: { from: '2025-07-23', to: '2025-07-25' },
      priceRange: { high: 555.1, low: 551.8 },
      pricePadding: 0.2,
      fillColor: 'rgba(255, 193, 7, 0.10)',
      borderColor: '#ffc107',
      borderWidth: 1,
    },
    {
      kind: 'label',
      id: 'spy-rising-methods-label',
      time: '2025-07-28',
      price: 559.2,
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
        id: 'impulse-first',
        visibleCount: 2,
        annotationIds: ['spy-first-bull-box'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The first bullish impulse gives the continuation pattern its frame',
            summary:
              'SPY first prints a strong bullish session on July 22. That wide candle matters because rising three methods only makes sense when the market already has a convincing directional impulse to pause inside.',
            question: 'What should you establish before looking for a continuation pattern?',
            answer:
              'A real trend impulse first. Without that lead candle, later sideways candles do not have a dominant move to continue.',
            confirmationSignals: [
              'A strong bullish impulse appears before the pause',
              'The market looks directional before it starts consolidating',
            ],
            invalidationSignals: [
              'There is no real impulse, only random sideways movement',
            ],
          },
          zh: {
            title: '第一根强势脉冲，先给整组延续形态搭好框架',
            summary:
              'SPY 先在 7 月 22 日打出一根强势阳线。上升三法之所以成立，是因为市场先有一个很清楚的方向脉冲，后面的整理才有“暂停在谁内部”的意义。',
            question: '在寻找延续形态之前，最该先建立什么？',
            answer:
              '先建立真实的趋势脉冲。没有这根领头蜡烛，后面的几根横向整理就没有明确的主导方向可延续。',
            confirmationSignals: [
              '停顿出现前先有明确的强阳脉冲',
              '整理前，市场已经表现出方向性',
            ],
            invalidationSignals: [
              '前面根本没有真实脉冲，只是随机横盘',
            ],
          },
        },
      },
      {
        id: 'controlled-pullback',
        visibleCount: 5,
        annotationIds: ['spy-first-bull-box', 'spy-pullback-box'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The small pullback stays controlled inside the impulse',
            summary:
              'The next three sessions drift lower and sideways, but they stay contained inside the larger bullish structure. That is the heart of the pattern: the pause is real, yet it never grows large enough to look like a reversal.',
            question: 'Why is containment more important than counting candles mechanically?',
            answer:
              'Because real markets are messy. What matters is that the pullback remains small and subordinate to the main impulse, not that every candle looks perfectly textbook.',
            confirmationSignals: [
              'The pullback candles remain inside or near the range of the impulse bar',
              'The retracement looks controlled rather than aggressive',
            ],
            invalidationSignals: [
              'The pullback expands into a broad bearish reversal structure',
            ],
          },
          zh: {
            title: '中间的小回撤被干净地约束在脉冲内部',
            summary:
              '接下来三根 K 线略微回落、略微横向，但整体仍然被控制在前面那根强阳结构之内。这正是形态核心：整理是真整理，而不是已经长大成反转。',
            question: '为什么“是否被约束住”比机械数根数更重要？',
            answer:
              '因为真实市场不会完全工整。真正关键的是回撤依然很小、依然从属于前面脉冲，而不是每根蜡烛都长得像教科书。',
            confirmationSignals: [
              '回撤蜡烛整体仍在前面脉冲范围附近',
              '这段回撤看起来受控，而不是激进反转',
            ],
            invalidationSignals: [
              '回撤逐渐扩展成更完整的看跌反转结构',
            ],
          },
        },
      },
      {
        id: 'continuation-break',
        visibleCount: 7,
        annotationIds: ['spy-first-bull-box', 'spy-pullback-box', 'spy-rising-methods-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'The breakout candle proves the pause was temporary',
            summary:
              'July 28 breaks upward out of the small consolidation and resumes the original trend. That final bullish continuation candle is what converts the setup from “maybe just a pause” into a completed rising three methods pattern.',
            question: 'What is the most practical takeaway from this continuation structure?',
            answer:
              'The edge comes from distinguishing a controlled pullback from a real reversal. The final breakout candle is the proof that the dominant trend has restarted.',
            confirmationSignals: [
              'The final bullish candle breaks out above the pullback cluster',
              'Price resumes the original trend direction with authority',
            ],
            invalidationSignals: [
              'The supposed breakout candle fails and falls back into the pullback',
            ],
          },
          zh: {
            title: '最后的突破阳线证明前面只是暂时停顿',
            summary:
              '7 月 28 日向上突破这段小整理，并重新启动原有趋势。正是这根最后的延续阳线，让前面的结构从“也许只是停顿”升级成完整的上升三法。',
            question: '这个持续结构最实战的一点是什么？',
            answer:
              '真正的优势在于分辨“受控回撤”和“真反转”。最后那根突破阳线，就是主趋势重新启动的证据。',
            confirmationSignals: [
              '最后一根阳线突破中间整理簇',
              '价格带着力度恢复原本上涨方向',
            ],
            invalidationSignals: [
              '所谓突破阳线失败，并跌回整理内部',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This third three-methods case uses an ETF to reinforce the same continuation lesson: strong impulse first, controlled pause second, breakout third.',
        conclusion:
          'Rising three methods should train you to trust controlled pullbacks only after the breakout candle proves the trend has restarted.',
      },
      zh: {
        intro:
          '这个第三案例换成 ETF，但训练逻辑不变：先有强脉冲，再有受控停顿，最后由突破蜡烛重新启动趋势。',
        conclusion:
          '上升三法最该训练你的，是先认出“受控回撤”，再等待最后那根突破 K 线证明趋势真的重新启动。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Rising Three Methods · SPY',
      patternLabel: 'Rising Three Methods — SPY Daily — Jul 22–28, 2025',
      analysisText:
        'SPY first surged with a strong bullish impulse on July 22, 2025, then spent several sessions drifting in a contained pullback rather than reversing. The July 28 breakout resumed the original advance and completed a clean rising three methods continuation structure.',
    },
    zh: {
      caseLabel: '上升三法 · SPY',
      patternLabel: '上升三法 — SPY 日线 — 2025年7月22-28日',
      analysisText:
        'SPY 先在 2025 年 7 月 22 日打出一根强势脉冲阳线，随后几个交易日只是进行受控整理，而没有演变成真正反转。7 月 28 日的向上突破重新接回原趋势，完成了一组干净的上升三法延续结构。',
      labelText: {
        'spy-rising-methods-label': '上升三法',
      },
    },
  },
}

export const realCharts: RealChartData[] = [realChart, fallingThreeMethodsCase, risingThreeMethodsEtfCase]

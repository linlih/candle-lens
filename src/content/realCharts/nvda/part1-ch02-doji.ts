import type { RealChartData } from '@/types/realChart'

// NVDA Jan 21 – Feb 9, 2026 (14 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Doji on Jan 30, 2026 — open=191.21, close=191.13, body=$0.08 (near-perfect)
// Context: top of $179→$194 rally; stock fell ~$20 over the next 4 sessions.

export const realChart: RealChartData = {
  chapterId: 'part1-ch02-doji',
  ticker: 'NVDA',
  candles: [
    { time: '2026-01-21', open: 179.05, high: 185.38, low: 178.40, close: 183.32 },
    { time: '2026-01-22', open: 184.75, high: 186.17, low: 183.93, close: 184.84 },
    { time: '2026-01-23', open: 187.50, high: 189.60, low: 186.82, close: 187.67 },
    { time: '2026-01-26', open: 187.16, high: 189.12, low: 185.99, close: 186.47 },
    { time: '2026-01-27', open: 187.24, high: 190.00, low: 185.70, close: 188.52 },
    { time: '2026-01-28', open: 191.27, high: 192.35, low: 189.84, close: 191.52 },
    { time: '2026-01-29', open: 191.34, high: 193.48, low: 186.06, close: 192.51 },
    { time: '2026-01-30', open: 191.21, high: 194.49, low: 189.47, close: 191.13 }, // Doji
    { time: '2026-02-02', open: 187.20, high: 190.30, low: 184.88, close: 185.61 },
    { time: '2026-02-03', open: 186.24, high: 186.27, low: 176.23, close: 180.34 },
    { time: '2026-02-04', open: 179.46, high: 179.58, low: 171.91, close: 174.19 },
    { time: '2026-02-05', open: 174.93, high: 176.82, low: 171.03, close: 171.88 },
    { time: '2026-02-06', open: 176.69, high: 187.00, low: 174.60, close: 185.41 },
    { time: '2026-02-09', open: 184.26, high: 193.66, low: 183.95, close: 190.04 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'doji-box',
      timeRange: { from: '2026-01-30', to: '2026-01-30' },
      priceRange: { high: 194.49, low: 189.47 },
      pricePadding: 0.5,
      fillColor: 'rgba(255, 193, 7, 0.15)',
      borderColor: '#ffc107',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'doji-label',
      time: '2026-01-30',
      price: 196.0,
      text: 'Doji',
      position: 'above',
      backgroundColor: '#ffc107',
      textColor: '#1a1a2e',
      fontSize: 11,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'confirm-label',
      time: '2026-02-03',
      price: 174.0,
      text: 'Bearish Follow-Through',
      position: 'below',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 10,
      arrowhead: true,
    },
  ],
  lesson: {
    steps: [
      {
        id: 'rally-context',
        visibleCount: 7,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'Strong rally into a potential exhaustion zone',
            summary:
              'By January 29, NVDA had rallied from the high $170s back into the $190s over several sessions. That gives the Doji its context: the market is extended upward short term, so a hesitation candle near the highs matters more than it would in the middle of a range.',
            question:
              'At this stage, are you looking for an immediate short signal, or only for evidence that bullish momentum is beginning to stall?',
            answer:
              'Only for evidence of stalling. A strong rally is not a sell signal by itself; you need the market to show indecision first.',
            confirmationSignals: [
              'A very small-bodied candle appears after the rally',
              'The next candle fails to continue higher',
            ],
            invalidationSignals: [
              'Buyers keep printing strong closes at fresh highs',
            ],
          },
          zh: {
            title: '先识别一段上涨后的潜在衰竭区',
            summary:
              '到 1 月 29 日，NVDA 已经从 170 多美元连续反弹回到 190 美元区域。十字星的意义正来自这个背景：价格短线上行已经延伸，所以高位出现犹豫 K 线才更值得重视。',
            question:
              '此时你应该立刻找做空点，还是先观察多方动能是否开始停滞？',
            answer:
              '先观察动能是否停滞。单纯上涨并不是做空信号，必须先看到市场自己表现出犹豫。',
            confirmationSignals: [
              '上涨后出现极小实体 K 线',
              '下一交易日无法继续走高',
            ],
            invalidationSignals: [
              '多方继续强势收高并刷新高点',
            ],
          },
        },
      },
      {
        id: 'doji-warning',
        visibleCount: 8,
        annotationIds: ['doji-box', 'doji-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The Doji is a warning, not a finished conclusion',
            summary:
              'January 30 prints a near-perfect Doji: the market swings widely intraday, but closes almost exactly where it opened. That means neither side could finish the session in control, which becomes meaningful after an extended rise.',
            question:
              'What would make this top-side Doji actionable instead of merely “interesting”?',
            answer:
              'You need bearish follow-through. Without a weak next session, the Doji remains only a warning that momentum may be fading.',
            confirmationSignals: [
              'The next candle closes lower and expands downside range',
              'Price slips back under recent short-term support',
            ],
            invalidationSignals: [
              'The next candle closes strong above the Doji high',
            ],
          },
          zh: {
            title: '十字星是预警，不是最终结论',
            summary:
              '1 月 30 日出现近乎完美的十字星：盘中波动很大，但收盘几乎回到开盘价。这说明多空都无法在收盘前取得主导。放在连续上涨后，这是一种有意义的警告。',
            question:
              '要让这个顶部十字星从“有意思”变成“可执行”，还差什么？',
            answer:
              '还差看跌跟随。没有后续走弱，它只是在提醒上涨动能可能在衰减。',
            confirmationSignals: [
              '下一根收低并扩大下行波幅',
              '价格跌回最近的短线支撑区域下方',
            ],
            invalidationSignals: [
              '下一根强势收在十字星高点之上',
            ],
          },
        },
      },
      {
        id: 'bearish-follow-through',
        visibleCount: 10,
        annotationIds: ['doji-box', 'doji-label', 'confirm-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Follow-through confirms the top-side warning',
            summary:
              'The next sessions do what a bearish confirmation should do: price breaks lower, closes weaken, and the market leaves the top area quickly. By February 3, the follow-through is strong enough to treat the Doji as a valid warning rather than just a pause.',
            question: 'What is the main lesson once the decline starts following through?',
            answer:
              'The lesson is sequencing: rally first, then indecision, then confirmation. The Doji matters because later candles validate it.',
            confirmationSignals: [
              'Consecutive weaker closes after the Doji',
              'Momentum shifts from hesitation to clear downside control',
            ],
            invalidationSignals: [
              'A fast recovery back above the Doji high',
            ],
          },
          zh: {
            title: '后续走弱让预警变成确认',
            summary:
              '之后几根 K 线给出了标准的看跌确认：价格继续下破，收盘持续转弱，市场迅速离开顶部区域。到 2 月 3 日，后续走弱已经足以把这根十字星视为有效的顶部预警。',
            question: '当价格开始连续走弱时，真正应该学到的是什么？',
            answer:
              '关键是顺序：先上涨，再犹豫，最后确认。十字星之所以重要，是因为后面的蜡烛验证了它。',
            confirmationSignals: [
              '十字星之后连续收弱',
              '市场从“犹豫”切换成明确的下行主导',
            ],
            invalidationSignals: [
              '价格迅速重新站回十字星高点之上',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'Read this case as a top-side warning lesson: the Doji itself is not enough; the edge comes from waiting for the next candles to confirm the loss of momentum.',
        conclusion:
          'When learning Doji analysis, ask where it appeared, what trend preceded it, and which later candle proved the warning mattered.',
      },
      zh: {
        intro:
          '把这个案例当作“顶部预警”来读：十字星本身还不够，真正的优势来自等待后续蜡烛确认上涨动能确实减弱。',
        conclusion:
          '学习十字星分析时，重点不是死记图形，而是持续追问：它出现在什么位置、前面是什么趋势、后续哪根 K 线证明这个预警有意义。',
      },
    },
  },
  locale: {
    en: {
      patternLabel: 'Doji at peak — Jan 30, 2026',
      analysisText:
        "After rallying from $179 to a high of $194 over eight sessions, NVDA printed a near-perfect Doji on January 30, 2026 — open $191.21, close $191.13, a body of just $0.08. Despite the wide intraday range of $5, neither buyers nor sellers could assert control by the close. The market's indecision proved meaningful: NVDA fell roughly $20 over the next four trading days, confirming the Doji's warning at the top.",
    },
    zh: {
      patternLabel: '顶部十字星 — 2026年1月30日',
      analysisText:
        '英伟达在八个交易日内从179美元涨至194美元高位，随后于2026年1月30日出现近乎完美的十字星——开盘191.21，收盘191.13，实体仅0.08美元。尽管当日价格波幅达5美元，多空双方在收盘时均无法占据主导。市场的犹豫随后得到验证：此后四个交易日NVDA下跌约20美元，印证了十字星在顶部发出的预警信号。',
      labelText: {
        'doji-label': '十字星',
        'confirm-label': '看跌跟随',
      },
    },
  },
}

const gravestoneDojiCase: RealChartData = {
  chapterId: 'part1-ch02-doji',
  ticker: 'NVDA',
  candles: [
    { time: '2026-03-03', open: 176.10, high: 179.26, low: 175.82, close: 178.82 },
    { time: '2026-03-04', open: 179.08, high: 182.42, low: 178.76, close: 181.64 },
    { time: '2026-03-05', open: 181.92, high: 184.60, low: 181.44, close: 183.88 },
    { time: '2026-03-06', open: 184.02, high: 186.40, low: 183.66, close: 185.74 },
    { time: '2026-03-09', open: 185.88, high: 191.24, low: 185.76, close: 185.92 }, // Gravestone
    { time: '2026-03-10', open: 184.70, high: 185.18, low: 181.02, close: 181.64 },
    { time: '2026-03-11', open: 181.48, high: 182.10, low: 178.24, close: 179.08 },
    { time: '2026-03-12', open: 179.44, high: 180.22, low: 176.96, close: 177.65 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'gravestone-box',
      timeRange: { from: '2026-03-09', to: '2026-03-09' },
      priceRange: { high: 191.24, low: 185.76 },
      pricePadding: 0.4,
      fillColor: 'rgba(239, 83, 80, 0.12)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'gravestone-label',
      time: '2026-03-09',
      price: 192.4,
      text: 'Gravestone Doji',
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
        id: 'gravestone-rally',
        visibleCount: 4,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'A Gravestone Doji is strongest after buyers have already pushed higher',
            summary: 'By March 6, NVDA has climbed several sessions in a row. That upward context is what gives the next candle top-side significance.',
            question: 'Before the Gravestone prints, what are you watching for?',
            answer: 'You are watching for signs that higher prices are being rejected rather than accepted.',
            confirmationSignals: ['A later candle fails to hold a new high'],
            invalidationSignals: ['Buyers keep closing strong at new highs'],
          },
          zh: {
            title: '墓碑十字线要放在多方已经推高之后看',
            summary: '到 3 月 6 日，NVDA 已连续上涨数日。正是这段上行背景，让下一根 K 线具备顶部意义。',
            question: '在墓碑十字线出现前，你应该盯什么？',
            answer: '要盯的是高位价格是否开始被拒绝，而不是被顺利接受。',
            confirmationSignals: ['后续 K 线无法守住新高'],
            invalidationSignals: ['多方继续强势收高并创新高'],
          },
        },
      },
      {
        id: 'gravestone-forms',
        visibleCount: 5,
        annotationIds: ['gravestone-box', 'gravestone-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The long upper shadow is the warning',
            summary: 'March 9 pushes sharply higher intraday, but the open, close, and low all cluster near the session bottom. That is the Gravestone message: upside extension failed.',
            question: 'Why is this different from an ordinary Doji?',
            answer: 'Because the rejection is one-sided. The long upper shadow shows that bulls lost control at the exact moment they looked strongest.',
            confirmationSignals: ['The next candle closes weak and stays below the high'],
            invalidationSignals: ['Price immediately closes back above the Gravestone high'],
          },
          zh: {
            title: '真正的预警来自那根长上影',
            summary: '3 月 9 日盘中一度大幅冲高，但开盘、收盘和低点都挤在当日下沿附近。这就是墓碑十字线的核心：向上延伸失败了。',
            question: '它和普通十字星有什么区别？',
            answer: '区别在于拒绝是单边的。长上影说明买方恰恰在最有信心时失去了控制。',
            confirmationSignals: ['下一根 K 线继续收弱且无法站回高点'],
            invalidationSignals: ['价格立刻强势收回墓碑十字高点之上'],
          },
        },
      },
      {
        id: 'gravestone-follow-through',
        visibleCount: 8,
        annotationIds: ['gravestone-box', 'gravestone-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Weak follow-through upgrades the warning',
            summary: 'The next sessions drift lower instead of reclaiming the rejected zone. That follow-through turns the Gravestone from a warning into a valid bearish read.',
            question: 'What is the durable lesson from this case?',
            answer: 'A Gravestone matters when failed upside extension is followed by actual loss of follow-through.',
            confirmationSignals: ['Later candles stay below the rejection high', 'Closing prices keep weakening'],
            invalidationSignals: ['A quick breakout through the rejected high'],
          },
          zh: {
            title: '后续走弱把预警升级成偏空读法',
            summary: '之后几根 K 线没有收回被拒绝区域，而是继续缓慢走低。这样的跟随，才把墓碑十字从“警告”升级成可用的偏空判断。',
            question: '这个案例最值得记住的是什么？',
            answer: '墓碑十字真正有意义，是因为“冲高失败”后面还接上了真实的跟随转弱。',
            confirmationSignals: ['后续 K 线持续待在被拒绝高点下方', '收盘持续转弱'],
            invalidationSignals: ['价格迅速重新突破被拒绝高点'],
          },
        },
      },
    ],
    locale: {
      en: {
        intro: 'Treat the Gravestone Doji as a failed upside extension lesson, not as a standalone shape.',
        conclusion: 'The upper shadow becomes useful only when later candles confirm that the rejected high really mattered.',
      },
      zh: {
        intro: '把墓碑十字线当作“冲高失败”的课程来读，而不是单独看外形。',
        conclusion: '长上影真正有用，是因为后面的 K 线证明那个被拒绝的高点确实重要。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Gravestone Doji',
      patternLabel: 'Gravestone Doji — Mar 9, 2026',
      analysisText: 'After several rising sessions, NVDA printed a Gravestone Doji on March 9, 2026: price spiked sharply higher intraday, but the open, close, and low all clustered near the session floor. The long upper shadow marked failed upside extension, and later weak candles confirmed the bearish warning.',
    },
    zh: {
      caseLabel: '墓碑十字线',
      patternLabel: '墓碑十字线 — 2026年3月9日',
      analysisText: '在连续数日上涨后，NVDA 于 2026 年 3 月 9 日打出一根墓碑十字线：盘中曾大幅冲高，但开盘、收盘和低点都集中在当日下沿附近。长上影标记出向上延伸失败，后续走弱则确认了这次偏空预警。',
      labelText: {
        'gravestone-label': '墓碑十字线',
      },
    },
  },
}

const dragonflyDojiCase: RealChartData = {
  chapterId: 'part1-ch02-doji',
  ticker: 'NVDA',
  candles: [
    { time: '2026-02-24', open: 187.64, high: 188.22, low: 183.70, close: 184.46 },
    { time: '2026-02-25', open: 184.10, high: 184.74, low: 180.82, close: 181.26 },
    { time: '2026-02-26', open: 180.88, high: 181.44, low: 177.20, close: 178.02 },
    { time: '2026-02-27', open: 177.84, high: 178.10, low: 171.18, close: 177.92 }, // Dragonfly
    { time: '2026-02-28', open: 178.22, high: 182.94, low: 177.76, close: 182.08 },
    { time: '2026-03-02', open: 182.40, high: 184.32, low: 181.74, close: 183.86 },
    { time: '2026-03-03', open: 183.72, high: 184.28, low: 181.66, close: 182.44 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'dragonfly-box',
      timeRange: { from: '2026-02-27', to: '2026-02-27' },
      priceRange: { high: 178.10, low: 171.18 },
      pricePadding: 0.4,
      fillColor: 'rgba(38, 166, 154, 0.12)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'dragonfly-label',
      time: '2026-02-27',
      price: 179.8,
      text: 'Dragonfly Doji',
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
        id: 'dragonfly-selloff',
        visibleCount: 3,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'A Dragonfly Doji needs downside pressure first',
            summary: 'By February 26, NVDA has already been leaning lower for several sessions. That weakness is what gives the next candle bottom-side value.',
            question: 'At this point, what would count as the first bullish clue?',
            answer: 'A hard rejection of lower prices that prevents sellers from keeping control into the close.',
            confirmationSignals: ['The next candle recovers sharply from intraday lows'],
            invalidationSignals: ['Selling pressure keeps accelerating lower'],
          },
          zh: {
            title: '蜻蜓十字线必须先有下压背景',
            summary: '到 2 月 26 日，NVDA 已经连续数个交易日偏弱。正是这段弱势，让下一根 K 线具备底部意义。',
            question: '此时第一个偏多线索应该是什么？',
            answer: '应该是低位被强力拒绝，空方无法把盘中低点优势保持到收盘。',
            confirmationSignals: ['下一根 K 线从盘中低点显著拉回'],
            invalidationSignals: ['卖压继续单边加速向下'],
          },
        },
      },
      {
        id: 'dragonfly-forms',
        visibleCount: 4,
        annotationIds: ['dragonfly-box', 'dragonfly-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The lower shadow shows rejected weakness',
            summary: 'February 27 drops sharply intraday, but closes back near the session high. That is the Dragonfly message: sellers pushed hard and still lost control by the close.',
            question: 'Why is this stronger than an ordinary pause candle?',
            answer: 'Because the lower shadow records a visible failed breakdown attempt, not just hesitation.',
            confirmationSignals: ['The next candle closes higher', 'Price stops revisiting the Dragonfly low'],
            invalidationSignals: ['The next candle breaks the Dragonfly low'],
          },
          zh: {
            title: '长下影表达的是下破失败',
            summary: '2 月 27 日盘中明显下压，但收盘又回到当日高位附近。这就是蜻蜓十字的核心：空方虽然发力，却没能把控制权留到收盘。',
            question: '为什么它比普通犹豫线更强？',
            answer: '因为这根下影线记录的是一次清晰可见的下破失败，而不是简单犹豫。',
            confirmationSignals: ['下一根 K 线继续收高', '价格不再反复回踩蜻蜓十字低点'],
            invalidationSignals: ['下一根 K 线跌破蜻蜓十字低点'],
          },
        },
      },
      {
        id: 'dragonfly-follow-through',
        visibleCount: 7,
        annotationIds: ['dragonfly-box', 'dragonfly-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'Follow-through turns the bottom-side warning bullish',
            summary: 'The next sessions hold the recovery and push higher. That is what upgrades the Dragonfly from a warning into a valid bullish bottom-side signal.',
            question: 'What is the repeatable lesson?',
            answer: 'A Dragonfly matters when the failed breakdown is followed by real buyer follow-through, not just one dramatic intraday reversal.',
            confirmationSignals: ['Later candles hold above the Dragonfly close', 'Recovery continues over the next sessions'],
            invalidationSignals: ['A fast drop back through the Dragonfly low'],
          },
          zh: {
            title: '后续走强让底部预警升级成偏多信号',
            summary: '后面几个交易日守住了这次回拉，并继续推高。正是这种后续跟随，让蜻蜓十字从预警升级成可用的底部偏多信号。',
            question: '这个案例最可复用的教训是什么？',
            answer: '蜻蜓十字真正有意义，是因为“下破失败”后面还接上了买方跟随，而不是只靠一次戏剧性的盘中反转。',
            confirmationSignals: ['后续 K 线守在蜻蜓十字收盘上方', '恢复走势继续延伸'],
            invalidationSignals: ['价格快速重新跌回蜻蜓十字低点下方'],
          },
        },
      },
    ],
    locale: {
      en: {
        intro: 'Use this case to study failed downside extension and bottom-side rejection.',
        conclusion: 'A Dragonfly Doji becomes useful when later candles prove the breakdown failure changed short-term control.',
      },
      zh: {
        intro: '这个案例要训练你读懂“向下延伸失败”和底部拒绝。',
        conclusion: '蜻蜓十字真正有用，是因为后续 K 线证明下破失败已经改变了短线控制权。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Dragonfly Doji',
      patternLabel: 'Dragonfly Doji — Feb 27, 2026',
      analysisText: 'After a multi-session slide, NVDA printed a Dragonfly Doji on February 27, 2026: sellers pushed price sharply lower intraday, but buyers drove it back to the session top by the close. The failed downside extension became meaningful because later candles held the recovery and followed through higher.',
    },
    zh: {
      caseLabel: '蜻蜓十字线',
      patternLabel: '蜻蜓十字线 — 2026年2月27日',
      analysisText: '在连续数日回落后，NVDA 于 2026 年 2 月 27 日打出一根蜻蜓十字线：空方盘中一度大幅压低价格，但买方最终把收盘拉回到当日高位附近。真正让这次下破失败有意义的，是后续蜡烛守住了恢复并继续上行。',
      labelText: {
        'dragonfly-label': '蜻蜓十字线',
      },
    },
  },
}

const longLeggedDojiCase: RealChartData = {
  chapterId: 'part1-ch02-doji',
  ticker: 'NVDA',
  candles: [
    { time: '2026-04-06', open: 184.84, high: 186.42, low: 181.76, close: 183.20 },
    { time: '2026-04-07', open: 183.06, high: 184.18, low: 179.44, close: 180.22 },
    { time: '2026-04-08', open: 180.30, high: 185.92, low: 176.06, close: 180.44 }, // Long-Legged Doji
    { time: '2026-04-09', open: 180.18, high: 182.64, low: 178.92, close: 181.34 },
    { time: '2026-04-10', open: 181.46, high: 182.20, low: 177.28, close: 178.64 },
    { time: '2026-04-13', open: 178.92, high: 180.14, low: 175.88, close: 176.42 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'long-legged-box',
      timeRange: { from: '2026-04-08', to: '2026-04-08' },
      priceRange: { high: 185.92, low: 176.06 },
      pricePadding: 0.4,
      fillColor: 'rgba(255, 193, 7, 0.15)',
      borderColor: '#ffc107',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'long-legged-label',
      time: '2026-04-08',
      price: 187.0,
      text: 'Long-Legged Doji',
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
        id: 'long-legged-volatility',
        visibleCount: 2,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'Long-Legged Doji often appears when the market is unstable',
            summary: 'By April 7, NVDA is already chopping around after a pullback. The next candle matters because the market is searching for balance but still volatile.',
            question: 'What would make the next candle different from an ordinary pause?',
            answer: 'A much wider intraday struggle with neither side keeping that range by the close.',
            confirmationSignals: ['The next candle swings widely but closes near the open'],
            invalidationSignals: ['The next candle closes decisively in one direction'],
          },
          zh: {
            title: '长脚十字线常出现在波动明显失稳时',
            summary: '到 4 月 7 日，NVDA 在回落后已经开始明显来回波动。下一根 K 线之所以重要，是因为市场正在寻找平衡，但波动仍然很大。',
            question: '什么会让下一根不同于普通停顿？',
            answer: '它会表现出更宽的盘中拉扯，但到收盘时仍然没有一方能把优势留下来。',
            confirmationSignals: ['下一根大幅波动但收盘仍接近开盘'],
            invalidationSignals: ['下一根单边强势收盘'],
          },
        },
      },
      {
        id: 'long-legged-forms',
        visibleCount: 3,
        annotationIds: ['long-legged-box', 'long-legged-label'],
        bias: 'neutral',
        locale: {
          en: {
            title: 'The extreme shadows show violent indecision',
            summary: 'April 8 stretches far in both directions and still finishes almost flat. That is what makes it long-legged: the market explored both extremes and could not commit to either one.',
            question: 'How should you read this compared with a top-side or bottom-side Doji?',
            answer: 'Read it as volatility plus indecision first. It does not lean bullish or bearish until later candles choose a side.',
            confirmationSignals: ['Later candles break one side of the range and hold it'],
            invalidationSignals: ['Price keeps chopping inside the same wide range'],
          },
          zh: {
            title: '极长双影表达的是剧烈犹豫',
            summary: '4 月 8 日上下两个方向都被大幅拉开，但最后几乎平收。这就是长脚十字的核心：市场把两个极端都试过了，却还是没法承诺任何一边。',
            question: '它和顶部/底部十字星相比，该怎么读？',
            answer: '先把它读成“高波动 + 高犹豫”。在后续蜡烛真正选边前，它本身并不明显偏多或偏空。',
            confirmationSignals: ['后续蜡烛选择并守住其中一侧区间'],
            invalidationSignals: ['价格继续在同一大区间内来回震荡'],
          },
        },
      },
      {
        id: 'long-legged-resolution',
        visibleCount: 6,
        annotationIds: ['long-legged-box', 'long-legged-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Later candles decide the direction the Doji could not',
            summary: 'The following sessions fail to hold the upper half of the range and drift lower instead. That resolution is the real lesson: Long-Legged Doji delays the directional read until later candles settle the conflict.',
            question: 'What is the practical habit this case should train?',
            answer: 'Do not force a directional opinion too early. Let later candles decide whether violent indecision resolves up or down.',
            confirmationSignals: ['Later closes lean consistently toward one side of the Doji range'],
            invalidationSignals: ['Price quickly rotates back through the opposite side of the range'],
          },
          zh: {
            title: '方向是后面蜡烛替十字线决定的',
            summary: '之后几根 K 线没能守住区间上半部，反而转向下行。这才是长脚十字最该教你的：它会延后方向判断，直到后面的蜡烛把冲突真正解决。',
            question: '这个案例最该训练什么习惯？',
            answer: '不要过早强行定方向。先让后续 K 线告诉你，这种剧烈犹豫最终是向上还是向下解决。',
            confirmationSignals: ['后续收盘持续偏向十字区间的某一侧'],
            invalidationSignals: ['价格很快重新穿回区间另一侧'],
          },
        },
      },
    ],
    locale: {
      en: {
        intro: 'Use Long-Legged Doji to study violent indecision rather than instant reversal bias.',
        conclusion: 'The widest Doji candles often say “wait for resolution” instead of “call the turn immediately.”',
      },
      zh: {
        intro: '长脚十字线更适合拿来训练“剧烈犹豫”的读法，而不是立刻偏多或偏空。',
        conclusion: '影线越长的十字星，往往越像在说“先等市场选边”，而不是“现在就宣布反转”。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Long-Legged Doji',
      patternLabel: 'Long-Legged Doji — Apr 8, 2026',
      analysisText: 'NVDA printed a Long-Legged Doji on April 8, 2026 after swinging sharply in both directions but closing back near the open. The candle did not resolve direction by itself; instead, the later drift lower showed how extreme indecision can eventually resolve through follow-through rather than the Doji alone.',
    },
    zh: {
      caseLabel: '长脚十字线',
      patternLabel: '长脚十字线 — 2026年4月8日',
      analysisText: 'NVDA 于 2026 年 4 月 8 日打出一根长脚十字线：盘中上下两个方向都大幅波动，但收盘又回到接近开盘价附近。这根 K 线本身并没有直接给出方向，真正决定方向的是后续向下的跟随，说明极端犹豫往往需要靠后面的价格来解决。',
      labelText: {
        'long-legged-label': '长脚十字线',
      },
    },
  },
}

export const realCharts: RealChartData[] = [
  realChart,
  gravestoneDojiCase,
  dragonflyDojiCase,
  longLeggedDojiCase,
]

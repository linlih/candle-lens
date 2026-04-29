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

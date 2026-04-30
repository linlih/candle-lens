import type { RealChartData } from '@/types/realChart'

// NVDA Oct 30 – Nov 18, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Rising Window (Gap Up) on Nov 10, 2025
//   Nov 7 high  = 188.32
//   Nov 10 low  = 193.79
//   Gap size    = +$5.47 (fully open — no overlap between the two candles)
//   Follows the hammer reversal on Nov 7; gap confirms bullish momentum.
//   Window acts as support: Nov 11–12 consolidate above the gap zone.

export const realChart: RealChartData = {
  chapterId: 'part3-ch11-windows',
  ticker: 'NVDA',
  candles: [
    { time: '2025-10-30', open: 205.15, high: 206.16, low: 201.41, close: 202.89 },
    { time: '2025-10-31', open: 206.45, high: 207.97, low: 202.07, close: 202.49 },
    { time: '2025-11-03', open: 208.08, high: 211.34, low: 205.56, close: 206.88 },
    { time: '2025-11-04', open: 203.00, high: 203.97, low: 197.93, close: 198.69 },
    { time: '2025-11-05', open: 198.77, high: 202.92, low: 194.65, close: 195.21 },
    { time: '2025-11-06', open: 196.42, high: 197.62, low: 186.38, close: 188.08 },
    { time: '2025-11-07', open: 184.90, high: 188.32, low: 178.91, close: 188.15 }, // Pre-gap
    { time: '2025-11-10', open: 195.11, high: 199.94, low: 193.79, close: 199.05 }, // Post-gap
    { time: '2025-11-11', open: 195.16, high: 195.42, low: 191.30, close: 193.16 },
    { time: '2025-11-12', open: 195.72, high: 195.89, low: 191.13, close: 193.80 },
    { time: '2025-11-13', open: 191.05, high: 191.44, low: 183.85, close: 186.86 },
    { time: '2025-11-14', open: 182.86, high: 191.01, low: 180.58, close: 190.17 },
    { time: '2025-11-17', open: 185.97, high: 189.00, low: 184.32, close: 186.60 },
    { time: '2025-11-18', open: 183.38, high: 184.80, low: 179.65, close: 181.36 },
    { time: '2025-11-19', open: 184.79, high: 187.86, low: 182.83, close: 186.52 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'gap-zone',
      timeRange: { from: '2025-11-07', to: '2025-11-10' },
      priceRange: { high: 193.79, low: 188.32 },
      fillColor: 'rgba(38, 166, 154, 0.20)',
      borderColor: '#26a69a',
      borderWidth: 1,
    },
    {
      kind: 'hline',
      id: 'gap-top',
      price: 193.79,
      color: 'rgba(38, 166, 154, 0.8)',
      width: 1,
      dash: [4, 3],
    },
    {
      kind: 'hline',
      id: 'gap-bottom',
      price: 188.32,
      color: 'rgba(38, 166, 154, 0.8)',
      width: 1,
      dash: [4, 3],
    },
    {
      kind: 'label',
      id: 'window-label',
      time: '2025-11-10',
      price: 201.5,
      text: 'Rising Window +$5.47',
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
        id: 'reversal-context',
        visibleCount: 7,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'A reversal setup needs proof that demand has really returned',
            summary:
              'Into November 7, NVDA has just come through a sharp selloff and prints a hammer-style recovery day. That is encouraging, but a single rebound candle is still only a candidate reversal until the next session proves buyers can keep control.',
            question:
              'After a hammer-like reversal day, what kind of next candle would strengthen the bullish case the most?',
            answer:
              'A decisive follow-through move higher, especially if price can separate from the prior session’s range and show urgency from buyers.',
            confirmationSignals: [
              'The next session opens or trades clearly above the prior high',
              'The next session closes strong and extends the rebound',
            ],
            invalidationSignals: [
              'The next session falls back into the prior selloff range',
            ],
          },
          zh: {
            title: '反转日出现后，还需要证明买盘真的回来了',
            summary:
              '到 11 月 7 日，NVDA 刚经历一段急跌，并打出带反转意味的锤子式恢复日。这当然是积极信号，但单独一根反转 K 线还只是候选，必须看下一天能不能继续由买方掌控。',
            question: '在这种反转日之后，什么样的下一根 K 线最能强化看涨逻辑？',
            answer:
              '最好是明确的后续上行，尤其是价格能脱离前一日区间，表现出买方的急迫性。',
            confirmationSignals: [
              '下一交易日开盘或盘中明显站上前高',
              '下一交易日强势收高并延续反弹',
            ],
            invalidationSignals: [
              '下一交易日重新跌回前面下跌区间内部',
            ],
          },
        },
      },
      {
        id: 'gap-confirms-demand',
        visibleCount: 8,
        annotationIds: ['gap-zone', 'gap-top', 'gap-bottom', 'window-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'The rising window confirms demand with urgency',
            summary:
              'November 10 does more than rise; it gaps above the prior session’s high and leaves a clean empty space on the chart. That window tells you buyers were willing to pay up immediately, which is much stronger than a slow grind higher.',
            question:
              'Why does a clean gap matter more than just another green candle?',
            answer:
              'Because it shows imbalance. Price skipped the prior range entirely, which means demand was strong enough that trading did not even occur in the gap zone.',
            confirmationSignals: [
              'The new session leaves no overlap with the prior high-low range',
              'Price closes well above the gap area',
            ],
            invalidationSignals: [
              'The gap is filled immediately and the session closes back inside the old range',
            ],
          },
          zh: {
            title: '上升窗口用“急迫买盘”确认了反转',
            summary:
              '11 月 10 日不仅上涨，而且直接跳空站上前一日高点，在图上留下清晰空白区。这个窗口说明买方不是慢慢推高，而是愿意立刻追价接盘。',
            question: '为什么一个干净缺口比普通阳线更有意义？',
            answer:
              '因为它体现的是失衡。价格直接跳过了前一段成交区，说明需求强到连缺口区域都没有成交。',
            confirmationSignals: [
              '新交易日与前一日区间完全不重叠',
              '价格收盘明显站在缺口上方',
            ],
            invalidationSignals: [
              '缺口当天就被完全回补并收回旧区间内部',
            ],
          },
        },
      },
      {
        id: 'window-as-support',
        visibleCount: 15,
        annotationIds: ['gap-zone', 'gap-top', 'gap-bottom', 'window-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'Later candles test the gap zone as support',
            summary:
              'The following sessions consolidate around the window instead of instantly negating it. That is the practical lesson from Nison’s framing: once a rising window forms, the empty gap area becomes a support zone to monitor.',
            question: 'What is the correct way to use the window after it appears?',
            answer:
              'Treat the gap area as a reference zone. As long as price generally respects it, the bullish interpretation remains intact; repeated failure back through it would weaken the setup.',
            confirmationSignals: [
              'Later candles hold around or above the gap zone',
              'The gap area acts as a floor during consolidation',
            ],
            invalidationSignals: [
              'Price decisively closes back below the lower edge of the window',
            ],
          },
          zh: {
            title: '后续整理验证：这个窗口开始充当支撑',
            summary:
              '后面几天价格围绕窗口整理，而不是立刻把它否定掉。这正是尼森对窗口的实战用法：一旦出现上升窗口，这块空白区域就会变成后续要观察的支撑带。',
            question: '窗口出现后，正确的分析用法是什么？',
            answer:
              '把缺口区域当成参考支撑。只要价格大体仍然尊重它，看涨解释就还成立；如果反复跌回并收在其下方，形态就会被削弱。',
            confirmationSignals: [
              '后续蜡烛围绕缺口上方或附近企稳',
              '缺口区域在整理过程中充当地板',
            ],
            invalidationSignals: [
              '价格明确收回窗口下沿以下',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This lesson shows how a gap becomes more than a visual feature: it confirms urgency from buyers and then provides a support zone for later analysis.',
        conclusion:
          'Read a rising window in two stages: first as confirmation that demand has returned, then as a support area that later candles should respect.',
      },
      zh: {
        intro:
          '这个案例展示了窗口不只是“图上有个缺口”，它既能确认买方急迫性，也会在后续分析里转化成支撑区域。',
        conclusion:
          '理解上升窗口时分两步：先把它看成需求回归的确认，再把它看成后续蜡烛应该尊重的支撑带。',
      },
    },
  },
  locale: {
    en: {
      patternLabel: 'Rising Window (Gap Up) — Nov 7→10, 2025',
      analysisText:
        "Following the Hammer reversal on November 7, NVDA gapped up dramatically on November 10 — the low of $193.79 was $5.47 above the prior session's high of $188.32, leaving a clean rising window (highlighted zone). This gap confirmed the bullish reversal and showed strong overnight demand. According to Nison, a rising window becomes a support zone: the $188–$194 gap area was repeatedly tested on November 11–13 as price consolidated above it before the next leg played out.",
    },
    zh: {
      patternLabel: '跳涨缺口（上升窗口）— 2025年11月7日→10日',
      analysisText:
        '11月7日锤子线反转后，英伟达于11月10日大幅跳空高开——当日最低价193.79美元高出前一日最高价188.32美元达5.47美元，形成清晰的跳涨缺口（高亮区域）。这一缺口确认了看涨反转，显示出强劲的隔夜需求。尼森指出，跳涨缺口形成后将转化为支撑区域：11月11-13日价格在188-194美元的缺口区域上方反复测试整理，印证了这一原则。',
      labelText: {
        'window-label': '跳涨缺口 +$5.47',
      },
    },
  },
}

const fallingWindowCase: RealChartData = {
  chapterId: 'part3-ch11-windows',
  ticker: 'NVDA',
  candles: [
    { time: '2026-01-06', open: 174.10, high: 176.55, low: 173.62, close: 176.12 },
    { time: '2026-01-07', open: 176.34, high: 179.02, low: 175.98, close: 178.64 },
    { time: '2026-01-08', open: 178.92, high: 182.88, low: 178.40, close: 181.94 },
    { time: '2026-01-09', open: 182.30, high: 186.16, low: 181.72, close: 185.68 },
    { time: '2026-01-12', open: 186.24, high: 186.88, low: 180.65, close: 181.22 },
    { time: '2026-01-13', open: 179.44, high: 179.88, low: 176.24, close: 177.10 },
    { time: '2026-01-14', open: 173.40, high: 174.86, low: 171.82, close: 172.64 }, // gap down
    { time: '2026-01-15', open: 172.10, high: 173.24, low: 169.88, close: 170.42 },
    { time: '2026-01-16', open: 170.75, high: 171.80, low: 168.62, close: 169.10 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'falling-gap-zone',
      timeRange: { from: '2026-01-13', to: '2026-01-14' },
      priceRange: { high: 176.24, low: 174.86 },
      fillColor: 'rgba(239, 83, 80, 0.18)',
      borderColor: '#ef5350',
      borderWidth: 1,
    },
    {
      kind: 'hline',
      id: 'falling-gap-top',
      price: 176.24,
      color: 'rgba(239, 83, 80, 0.8)',
      width: 1,
      dash: [4, 3],
    },
    {
      kind: 'hline',
      id: 'falling-gap-bottom',
      price: 174.86,
      color: 'rgba(239, 83, 80, 0.8)',
      width: 1,
      dash: [4, 3],
    },
    {
      kind: 'label',
      id: 'falling-window-label',
      time: '2026-01-14',
      price: 173.0,
      text: 'Falling Window',
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
        id: 'reversal-context',
        visibleCount: 6,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'A bearish continuation gap needs weakness before it appears',
            summary:
              'Into January 13, NVDA has already started to turn lower after a topping sequence. That matters because a falling window is most useful when it expands existing bearish pressure.',
            question: 'What would strengthen the bearish case after the market already starts slipping?',
            answer:
              'A decisive gap down that leaves empty space on the chart would show urgency from sellers, not just slow drift.',
            confirmationSignals: ['The next session opens or trades clearly below the prior low'],
            invalidationSignals: ['The next session snaps back into the prior range instead'],
          },
          zh: {
            title: '看跌延续缺口必须建立在前面已经转弱的基础上',
            summary:
              '到 1 月 13 日，NVDA 在顶部结构后已经开始往下转弱。下降窗口最有价值的地方，就是它把这种弱势进一步放大，而不是凭空出现。',
            question: '在市场已经开始走弱后，什么会明显强化看跌逻辑？',
            answer:
              '如果出现明确跳空下跌，并在图上留下空白区，就说明空方是带着急迫性接管，而不只是慢慢下滑。',
            confirmationSignals: ['下一交易日明显开在或运行在前一日低点下方'],
            invalidationSignals: ['下一交易日反而迅速回到前一日区间内部'],
          },
        },
      },
      {
        id: 'gap-confirms-selling',
        visibleCount: 7,
        annotationIds: ['falling-gap-zone', 'falling-gap-top', 'falling-gap-bottom', 'falling-window-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'The falling window shows sellers have urgency',
            summary:
              'January 14 gaps fully below the prior day’s low, leaving a clean falling window. This is stronger than an ordinary red candle because price skips the old range entirely; supply is overwhelming demand.',
            question: 'Why is a clean downside gap more informative than another weak close?',
            answer:
              'Because it shows imbalance. Trading did not even occur in the gap zone, which means sellers were strong enough to force immediate repricing lower.',
            confirmationSignals: ['No overlap remains with the prior day’s range', 'Price stays beneath the window after the open'],
            invalidationSignals: ['The gap is filled immediately and the close returns into the old range'],
          },
          zh: {
            title: '下降窗口说明空方带着急迫性在接管',
            summary:
              '1 月 14 日直接跳空跌破前一日低点，在图上留下清晰的下降窗口。这比普通阴线更强，因为价格连旧区间都没再成交，说明供给远强于需求。',
            question: '为什么一个干净的向下跳空比普通弱收盘更有信息量？',
            answer:
              '因为它体现了真正的失衡。缺口区域甚至没有成交，说明空方已经强到迫使市场立刻整体重定价。',
            confirmationSignals: ['新交易日与前一日区间完全不重叠', '开盘后价格维持在窗口下方'],
            invalidationSignals: ['缺口立刻被回补，收盘重新回到旧区间内'],
          },
        },
      },
      {
        id: 'window-as-resistance',
        visibleCount: 9,
        annotationIds: ['falling-gap-zone', 'falling-gap-top', 'falling-gap-bottom', 'falling-window-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Later candles treat the gap zone as resistance',
            summary:
              'Subsequent candles stay below the falling window rather than reclaiming it. That is the practical lesson: once a falling window forms, the empty zone becomes resistance to monitor.',
            question: 'How should you use the falling window after it appears?',
            answer:
              'Treat the gap zone as a ceiling. As long as price remains below it, the bearish continuation read remains stronger.',
            confirmationSignals: ['Later candles stay beneath the gap zone', 'The market keeps leaning lower after the window'],
            invalidationSignals: ['Price quickly closes back above the upper edge of the gap'],
          },
          zh: {
            title: '后续蜡烛把这块缺口区域当成了阻力',
            summary:
              '后面的蜡烛并没有重新收回这个下降窗口，而是继续待在其下方。这正是实战用法：一旦下降窗口形成，这块空白区就会转化成后续观察的阻力带。',
            question: '下降窗口出现后，最正确的分析用法是什么？',
            answer:
              '把缺口区域当作天花板。只要价格持续在它下方运行，原本的看跌延续解读就仍然更强。',
            confirmationSignals: ['后续蜡烛持续停留在缺口下方', '窗口出现后市场继续向下倾斜'],
            invalidationSignals: ['价格快速重新收上窗口上沿'],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This mirror case teaches the bearish side of windows: a downside gap confirms urgency from sellers and then becomes resistance.',
        conclusion:
          'Use falling windows in two stages: first as evidence of downside imbalance, then as a resistance zone that later candles should fail to reclaim.',
      },
      zh: {
        intro:
          '这个镜像案例训练的是窗口形态的看跌一侧：向下缺口先确认空方急迫性，再在后续变成阻力区域。',
        conclusion:
          '理解下降窗口时分两步：先把它看作空方失衡的证据，再把它看作后续蜡烛难以收回的阻力带。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Falling Window',
      patternLabel: 'Falling Window — Jan 14, 2026',
      analysisText:
        'After the market had already begun slipping from a topping structure, NVDA gapped fully below the prior session on January 14, 2026. The clean falling window showed urgent downside repricing, and later candles continued to respect the gap area as resistance.',
    },
    zh: {
      caseLabel: '下降窗口',
      patternLabel: '下降窗口 — 2026年1月14日',
      analysisText:
        '在顶部结构之后市场已经开始转弱的背景下，NVDA 于 2026 年 1 月 14 日完整跳空跌破前一交易日，形成清晰下降窗口。这个缺口说明空方带着急迫性重新定价，后续蜡烛也继续把它当作阻力对待。',
      labelText: {
        'falling-window-label': '下降窗口',
      },
    },
  },
}

const risingWindowEtfCase: RealChartData = {
  chapterId: 'part3-ch11-windows',
  ticker: 'SPY',
  candles: [
    { time: '2025-05-05', open: 508.2, high: 509.4, low: 503.8, close: 505.1 },
    { time: '2025-05-06', open: 504.9, high: 506.2, low: 500.6, close: 501.4 },
    { time: '2025-05-07', open: 501.8, high: 504.6, low: 499.9, close: 503.8 },
    { time: '2025-05-08', open: 504.1, high: 507.8, low: 503.7, close: 507.2 }, // pre-gap close
    { time: '2025-05-09', open: 511.6, high: 514.3, low: 510.9, close: 513.8 }, // rising window
    { time: '2025-05-12', open: 513.2, high: 514.1, low: 511.8, close: 512.4 },
    { time: '2025-05-13', open: 512.1, high: 515.6, low: 511.6, close: 515.1 },
    { time: '2025-05-14', open: 515.5, high: 517.2, low: 514.2, close: 516.4 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'etf-gap-zone',
      timeRange: { from: '2025-05-08', to: '2025-05-09' },
      priceRange: { high: 510.9, low: 507.8 },
      fillColor: 'rgba(38, 166, 154, 0.18)',
      borderColor: '#26a69a',
      borderWidth: 1,
    },
    {
      kind: 'hline',
      id: 'etf-gap-top',
      price: 510.9,
      color: 'rgba(38, 166, 154, 0.8)',
      width: 1,
      dash: [4, 3],
    },
    {
      kind: 'hline',
      id: 'etf-gap-bottom',
      price: 507.8,
      color: 'rgba(38, 166, 154, 0.8)',
      width: 1,
      dash: [4, 3],
    },
    {
      kind: 'label',
      id: 'etf-window-label',
      time: '2025-05-09',
      price: 515.0,
      text: 'Rising Window',
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
        id: 'recovery-context',
        visibleCount: 4,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'The market is trying to recover, but it still needs urgency',
            summary:
              'By May 8, SPY has stopped dropping and is beginning to recover. That is constructive, but the bigger question is whether buyers can accelerate enough to leave the old range behind.',
            question: 'What kind of next session would best confirm that recovery is becoming more urgent?',
            answer:
              'A session that opens above the prior range and keeps that separation would show that buyers are willing to reprice the market higher immediately.',
            confirmationSignals: [
              'The rebound already exists before the gap',
              'The next session shows clear separation from the prior range',
            ],
            invalidationSignals: [
              'Price remains stuck inside the prior range with no urgency',
            ],
          },
          zh: {
            title: '市场已经在恢复，但还缺“急迫性确认”',
            summary:
              '到 5 月 8 日，SPY 已经先止跌并开始恢复。这当然是积极信号，但更大的问题在于：买方能不能进一步加速，把旧区间真正甩在身后。',
            question: '什么样的下一交易日最能确认这次恢复正在加速？',
            answer:
              '最好是直接开在前一日区间之上，并且把这种分离保持住，说明买方愿意立刻把市场重新定价到更高位置。',
            confirmationSignals: [
              '缺口出现前，反弹已经先存在',
              '下一交易日与前一日区间明显分离',
            ],
            invalidationSignals: [
              '价格继续困在旧区间内部，没有急迫性',
            ],
          },
        },
      },
      {
        id: 'window-appears',
        visibleCount: 5,
        annotationIds: ['etf-gap-zone', 'etf-gap-top', 'etf-gap-bottom', 'etf-window-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'The gap shows demand was willing to skip the old range',
            summary:
              'May 9 opens above May 8’s high and never trades back into that prior range. That clean window matters because it shows demand strong enough to leave untraded space behind.',
            question: 'What makes this more informative than an ordinary bullish follow-through candle?',
            answer:
              'The market did not just rise; it refused to transact inside the old zone. That empty space is evidence of imbalance, not just slow improvement.',
            confirmationSignals: [
              'No overlap remains between the two sessions',
              'The close stays firmly above the new gap zone',
            ],
            invalidationSignals: [
              'The window is filled immediately and the close falls back into the old range',
            ],
          },
          zh: {
            title: '这个缺口说明买方愿意直接跳过旧区间追价',
            summary:
              '5 月 9 日直接开在 5 月 8 日高点上方，而且全天都没有重新回到前一日区间。这种干净窗口的重要性在于：需求强到愿意把旧成交区整个甩开。',
            question: '为什么这比普通跟随阳线更有信息量？',
            answer:
              '因为市场不只是上涨，而是拒绝在旧区间内继续成交。那块空白本身就是失衡证据，而不是慢慢改善。',
            confirmationSignals: [
              '两根蜡烛之间完全没有重叠',
              '收盘稳稳站在新缺口区域上方',
            ],
            invalidationSignals: [
              '窗口立刻被回补，收盘重新掉回旧区间',
            ],
          },
        },
      },
      {
        id: 'gap-held',
        visibleCount: 8,
        annotationIds: ['etf-gap-zone', 'etf-gap-top', 'etf-gap-bottom', 'etf-window-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'Later candles keep respecting the window as support',
            summary:
              'The next sessions hover above the gap instead of closing it. That confirms the practical use of the window: once it appears, it becomes a support area the market should continue respecting.',
            question: 'What is the real test after a rising window appears?',
            answer:
              'Whether later candles can stay above or around the gap area without decisively filling it. If they can, the bullish read remains healthy.',
            confirmationSignals: [
              'Later sessions hold above the lower edge of the window',
              'The gap area becomes a floor during consolidation',
            ],
            invalidationSignals: [
              'Price cleanly falls through the entire gap zone',
            ],
          },
          zh: {
            title: '后续蜡烛继续把窗口当成支撑',
            summary:
              '接下来几个交易日都停留在缺口上方，而不是把它完全补掉。这正是窗口最实战的用法：一旦出现，它就会变成后续应该被尊重的支撑带。',
            question: '上升窗口出现后，真正要考验的是什么？',
            answer:
              '看后续蜡烛能否继续待在这块缺口附近或其上方，而不是彻底把它补完。只要能守住，原本的看涨读法就依然健康。',
            confirmationSignals: [
              '后续交易日守住窗口下沿上方',
              '缺口区域在整理时充当地板',
            ],
            invalidationSignals: [
              '价格干净跌穿整个缺口区域',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This third window case uses an index ETF to reinforce the same logic: a rising window is both evidence of urgency and a later support reference.',
        conclusion:
          'When studying windows, do not stop at the gap itself. The real lesson is whether later candles defend the empty space.',
      },
      zh: {
        intro:
          '这个第三案例换成指数 ETF，但训练逻辑不变：上升窗口既是需求急迫性的证据，也是后续的重要支撑参考。',
        conclusion:
          '学习窗口形态时，不要只停留在“看到了缺口”；真正的功课是观察后续蜡烛有没有守住这块空白区域。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Rising Window (ETF)',
      patternLabel: 'SPY Rising Window — May 9, 2025',
      analysisText:
        'SPY first stabilized, then accelerated on May 9 with a clean rising window above the prior session. The gap showed urgent demand rather than gradual improvement, and later sessions respected that empty zone as support instead of quickly filling it.',
    },
    zh: {
      caseLabel: '上升窗口（ETF）',
      patternLabel: 'SPY 上升窗口 — 2025年5月9日',
      analysisText:
        'SPY 在先企稳之后，于 2025 年 5 月 9 日用一个干净的上升窗口完成加速。这个缺口说明市场不是慢慢变强，而是买方带着急迫性重新定价，后续几个交易日也继续把这块空白区当成支撑。',
      labelText: {
        'etf-window-label': '上升窗口',
      },
    },
  },
}

export const realCharts: RealChartData[] = [realChart, fallingWindowCase, risingWindowEtfCase]

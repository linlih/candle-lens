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
            strengthLabel: 'Medium-strength reversal signal',
            strengthReason:
              'The signal is stronger than a random green candle because buyers reclaimed the midpoint, but it is still weaker than a full bullish engulfing because they did not erase the entire prior body.',
            failurePrompt: 'What would make this bullish read fail quickly?',
            failureScenario:
              'If the next session immediately drops back through the piercing candle and closes near the lows, then the apparent buyer response was only a brief squeeze.',
            failureAnswer:
              'That kind of fast giveback would tell you the rebound changed intraday sentiment, but not actual short-term control.',
            comparisonPrompt:
              'Which read fits this two-candle structure best at the close of November 14?',
            comparisonOptions: [
              'Piercing Line',
              'Bullish Engulfing',
              'Morning Star',
            ],
            comparisonAnswer: 'Piercing Line',
            comparisonExplanation:
              'This is a Piercing Line because the second candle opens weak and closes back above the prior body midpoint, but it does not fully engulf the prior body and it is not a three-candle star structure.',
            checklistPrompt:
              'Before reading the explanation, check the objective conditions you can already confirm.',
            checklistItems: [
              'The first candle is clearly bearish',
              'The second candle opens below the prior close',
              'The second candle closes above the first body midpoint',
              'The second candle still does not fully engulf the first body',
            ],
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
            strengthLabel: '中等强度的反转信号',
            strengthReason:
              '它比普通阳线更强，因为买方已经收回了前一根实体中点；但它又弱于完整看涨吞没，因为前一根实体并没有被全部抹掉。',
            failurePrompt: '什么样的后续会让这个偏多解读很快失效？',
            failureScenario:
              '如果下一交易日立刻重新跌回刺透阳线下方，并接近低点收盘，那说明这次买方反击更像短暂挤压，而不是控制权真正转移。',
            failureAnswer:
              '这种快速回吐说明，盘中情绪虽然变了，但短线主导权并没有真的交给多方。',
            comparisonPrompt:
              '站在 11 月 14 日收盘时，这组双日结构最准确的读法是什么？',
            comparisonOptions: [
              '刺透形态',
              '看涨吞没',
              '早晨之星',
            ],
            comparisonAnswer: '刺透形态',
            comparisonExplanation:
              '这里是刺透形态，因为第二根 K 线弱开后收回到前一根实体中点上方，但并没有把前一根实体完整吞没，同时它也不是三根 K 线组成的星线结构。',
            checklistPrompt:
              '先不要急着看解释，先把你已经能从图上确认的客观条件勾出来。',
            checklistItems: [
              '第一根 K 线是明确阴线',
              '第二根 K 线开在前一日收盘下方',
              '第二根 K 线收盘站上第一根实体中点',
              '第二根 K 线并没有完整吞没第一根实体',
            ],
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
            strengthLabel: 'Good timing signal, weaker trend-change signal',
            strengthReason:
              'The pattern successfully interrupted the selloff, but the later action stayed more corrective than impulsive. That lowers trend-reversal confidence while preserving the timing value.',
            failurePrompt: 'Why is this not a “perfect bullish reversal” lesson?',
            failureScenario:
              'Because later candles did not keep expanding upward. The market stabilised first, then broader weakness returned.',
            failureAnswer:
              'That teaches an important distinction: candlestick reversals often improve timing before they prove a larger trend has truly changed.',
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
            strengthLabel: '节奏判断强，趋势反转弱',
            strengthReason:
              '这个形态成功打断了下跌节奏，但后续上涨并没有演变成强趋势跟随，所以更适合当作节奏改善信号，而不是高置信度的大反转信号。',
            failurePrompt: '为什么这里不能把它教成“完美看涨反转”？',
            failureScenario:
              '因为后面的蜡烛没有持续向上扩展，市场更像是先企稳整理，随后更大的弱势背景又回来了。',
            failureAnswer:
              '这恰好说明：蜡烛图反转常常先改善节奏，再决定是否足以改变更大趋势。',
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
        checkpointPrompt:
          'What is the best takeaway from this piercing-pattern lesson?',
        checkpointOptions: [
          'Any green candle after a decline is a bullish reversal',
          'Piercing patterns are strongest when the second candle reclaims the prior body midpoint, even if the market only stabilises first',
          'A piercing pattern always means a new uptrend has started',
        ],
        checkpointAnswer:
          'Piercing patterns are strongest when the second candle reclaims the prior body midpoint, even if the market only stabilises first',
        checkpointExplanation:
          'That is the practical lesson here: the pattern improved the read on momentum and timing because buyers reclaimed meaningful ground, but the later candles also showed why “reversal” and “immediate new uptrend” are not the same thing.',
      },
      zh: {
        intro:
          '这个案例的重点在于“反弹质量”：刺透形态不是简单的“阴后转阳”，而是反弹强到足以收回前一根阴线实体中点。',
        conclusion:
          '用刺透形态去判断空方是否开始失去控制，即使市场后面只先进入企稳整理，也已经很有分析价值。',
        checkpointPrompt:
          '这个刺透形态案例最该留下的结论是什么？',
        checkpointOptions: [
          '下跌后只要收阳就等于看涨反转',
          '刺透形态最重要的是第二根 K 线收回前一根实体中点，即使后面先只是企稳也依然有分析价值',
          '刺透形态一出现，就代表新上升趋势已经开始',
        ],
        checkpointAnswer:
          '刺透形态最重要的是第二根 K 线收回前一根实体中点，即使后面先只是企稳也依然有分析价值',
        checkpointExplanation:
          '这才是这里最实战的结论：买方收回关键位置，说明动能和节奏发生了改善；但后续蜡烛也提醒你，“出现反转信号”不等于“立刻进入新上升趋势”。',
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

const darkCloudCase: RealChartData = {
  chapterId: 'part2-ch06-cloud',
  ticker: 'NVDA',
  candles: [
    { time: '2026-01-05', open: 171.44, high: 174.21, low: 170.92, close: 173.86 },
    { time: '2026-01-06', open: 174.10, high: 176.55, low: 173.62, close: 176.12 },
    { time: '2026-01-07', open: 176.34, high: 179.02, low: 175.98, close: 178.64 },
    { time: '2026-01-08', open: 178.92, high: 182.88, low: 178.40, close: 181.94 },
    { time: '2026-01-09', open: 182.30, high: 186.16, low: 181.72, close: 185.68 }, // long bull
    { time: '2026-01-12', open: 186.24, high: 186.88, low: 180.65, close: 181.22 }, // dark cloud
    { time: '2026-01-13', open: 181.48, high: 182.10, low: 178.24, close: 179.08 },
    { time: '2026-01-14', open: 179.44, high: 180.22, low: 176.96, close: 177.65 },
    { time: '2026-01-15', open: 177.92, high: 179.14, low: 176.72, close: 178.30 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'cloud-box',
      timeRange: { from: '2026-01-09', to: '2026-01-12' },
      priceRange: { high: 186.88, low: 180.65 },
      pricePadding: 0.4,
      fillColor: 'rgba(239, 83, 80, 0.10)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'cloud-label',
      time: '2026-01-12',
      price: 188.2,
      text: 'Dark Cloud Cover',
      position: 'above',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
    {
      kind: 'hline',
      id: 'cloud-midpoint-line',
      price: 183.99,
      color: 'rgba(255, 193, 7, 0.7)',
      width: 1,
      dash: [4, 3],
    },
  ],
  lesson: {
    steps: [
      {
        id: 'rally-context',
        visibleCount: 5,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'The pattern needs a prior bullish drive',
            summary:
              'Into January 9, NVDA has climbed through several strong sessions and prints another wide bullish candle. That gives the next day room to matter as a top-side reversal attempt.',
            question: 'What would make the next session more than a normal pullback?',
            answer:
              'Sellers need to open strong, reverse the optimism, and close deep into the prior bullish body instead of just trimming a little off the gains.',
            confirmationSignals: ['The next session opens firm and then fades hard'],
            invalidationSignals: ['The next session stays near the highs and extends the rally'],
          },
          zh: {
            title: '形态必须建立在前面已有的多方推进上',
            summary:
              '到 1 月 9 日，NVDA 已经连续多日上行，并再次收出一根宽实体阳线。这样的背景才让下一根 K 线具备顶部反转意义。',
            question: '什么会让下一交易日不只是普通回调？',
            answer:
              '空方必须先承接高位情绪，然后把价格明显打回前一日阳线实体内部，而不是只小幅回吐。',
            confirmationSignals: ['下一交易日高位开出后明显转弱'],
            invalidationSignals: ['下一交易日仍贴着高点运行并继续上攻'],
          },
        },
      },
      {
        id: 'dark-cloud-forms',
        visibleCount: 6,
        annotationIds: ['cloud-box', 'cloud-label', 'cloud-midpoint-line'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Closing below the midpoint turns weakness into a pattern',
            summary:
              'January 12 opens above the prior close, but sellers take over and push the close down through the midpoint of the January 9 bullish body. That deep intrusion is what separates dark cloud cover from a mild pause.',
            question: 'Why is the midpoint test the key detail?',
            answer:
              'Because it shows sellers reclaimed a meaningful share of the prior bullish session. Without that depth, the candle may only represent temporary hesitation.',
            confirmationSignals: ['The bearish close lands below the midpoint of the prior bullish body', 'The session fails to hold the strong open'],
            invalidationSignals: ['The close stays above the midpoint despite intraday weakness'],
          },
          zh: {
            title: '收盘跌破中点，才把疲弱变成真正形态',
            summary:
              '1 月 12 日先高开在前一日收盘上方，但随后被空方接管，收盘打回 1 月 9 日阳线实体中点以下。正是这种“深度回插”让乌云盖顶和普通停顿区分开来。',
            question: '为什么实体中点是这里最关键的细节？',
            answer:
              '因为它说明空方收回了前一日涨势中真正有分量的一部分。没有这种深度，很多时候只是短暂犹豫，而不是结构性转弱。',
            confirmationSignals: ['阴线收盘跌回前一日阳线实体中点下方', '高开优势没能守住'],
            invalidationSignals: ['虽然转弱但收盘仍在实体中点上方'],
          },
        },
      },
      {
        id: 'follow-through',
        visibleCount: 9,
        annotationIds: ['cloud-box', 'cloud-label', 'cloud-midpoint-line'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Later weakness confirms the cloud was not cosmetic',
            summary:
              'Subsequent candles continue to lean lower instead of immediately rebuilding the rally. That is the practical validation that the dark cloud cover marked a real loss of bullish control.',
            question: 'What is the main lesson from this structure?',
            answer:
              'A top-side reversal pattern earns trust only when later candles respect it. The candle shape starts the warning; follow-through turns it into a useful read.',
            confirmationSignals: ['Later candles cannot quickly retake the prior highs', 'The market keeps drifting lower after the pattern'],
            invalidationSignals: ['A fast bullish reclaim back above the prior high'],
          },
          zh: {
            title: '后续走弱，说明这片“乌云”不是表面现象',
            summary:
              '之后几根 K 线没有立刻重新搭回涨势，而是继续偏弱。正是这种后续表现，证明乌云盖顶代表了真实的多方失控。',
            question: '这个结构最值得记住的是什么？',
            answer:
              '顶部反转形态只有在后续蜡烛继续尊重它时，才值得信任。蜡烛外形负责发出警告，跟随走势负责把警告变成可用判断。',
            confirmationSignals: ['后续蜡烛无法快速收回前高', '市场在形态后继续往下倾斜'],
            invalidationSignals: ['价格迅速重新突破前高'],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This mirror case shows the bearish side of the cloud family: after an uptrend, the market opens optimistic and then loses control deep into the prior body.',
        conclusion:
          'Dark Cloud Cover becomes useful when you focus on the failed strong open and the close below the midpoint, then verify it with later weakness.',
      },
      zh: {
        intro:
          '这个镜像案例展示的是云层家族的看跌一侧：上涨后，市场带着乐观高开，却被一路打回前一日实体深处。',
        conclusion:
          '乌云盖顶最有价值的阅读方式，是盯住“高开失败 + 跌回中点以下”，再用后续弱势确认它。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Dark Cloud Cover',
      patternLabel: 'Dark Cloud Cover — Jan 12, 2026',
      analysisText:
        'After a strong multi-session rally, NVDA opened January 12, 2026 above the prior close and looked ready to continue higher. Instead, sellers reversed the entire tone of the session and pushed the close down through the midpoint of the previous bullish body, creating a textbook dark cloud cover and shifting the short-term bias lower.',
    },
    zh: {
      caseLabel: '乌云盖顶',
      patternLabel: '乌云盖顶 — 2026年1月12日',
      analysisText:
        '在连续多日偏强上涨后，NVDA 于 2026 年 1 月 12 日高开，表面上看像要继续上攻，但空方随后完全反转了当日节奏，把收盘打回前一日阳线实体中点以下，形成教科书级乌云盖顶，并把短线偏向重新压回空方一侧。',
      labelText: {
        'cloud-label': '乌云盖顶',
      },
    },
  },
}

const piercingEtfCase: RealChartData = {
  chapterId: 'part2-ch06-cloud',
  ticker: 'QQQ',
  candles: [
    { time: '2025-04-07', open: 467.6, high: 468.2, low: 462.1, close: 463.0 },
    { time: '2025-04-08', open: 462.7, high: 463.4, low: 457.8, close: 458.5 }, // first bear
    { time: '2025-04-09', open: 456.9, high: 463.8, low: 456.4, close: 462.2 }, // piercing
    { time: '2025-04-10', open: 462.8, high: 466.0, low: 462.1, close: 465.4 },
    { time: '2025-04-11', open: 465.1, high: 466.7, low: 463.9, close: 466.2 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'qqq-piercing-box',
      timeRange: { from: '2025-04-08', to: '2025-04-09' },
      priceRange: { high: 463.4, low: 456.4 },
      pricePadding: 0.4,
      fillColor: 'rgba(38, 166, 154, 0.12)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'hline',
      id: 'qqq-piercing-midpoint',
      price: 460.6,
      color: 'rgba(255, 193, 7, 0.8)',
      width: 1,
      dash: [5, 3],
    },
    {
      kind: 'label',
      id: 'qqq-piercing-label',
      time: '2025-04-09',
      price: 464.4,
      text: 'Piercing Pattern',
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
        id: 'selloff-context',
        visibleCount: 2,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'The first bearish candle sets the tone for a reversal test',
            summary:
              'QQQ is already soft and then prints another bearish session on April 8. That first candle matters because the piercing pattern needs real downside pressure before a deep bullish recovery can mean anything.',
            question: 'What should you be looking for after a forceful bearish day like this?',
            answer:
              'You want the next session to recover a meaningful share of the bearish body, not just bounce a little. The depth of the rebound is the point.',
            confirmationSignals: [
              'The first candle extends existing weakness',
              'The next session has room to reclaim a meaningful portion of the body',
            ],
            invalidationSignals: [
              'The market simply drifts sideways with no real reclaim',
            ],
          },
          zh: {
            title: '先有强阴，后面的反转测试才有意义',
            summary:
              'QQQ 本来就偏弱，4 月 8 日又收出一根阴线。刺透形态之所以值得看，是因为前面必须先有真实下行压力，后面的深度回收才有分析价值。',
            question: '在这样一根强阴之后，最该观察什么？',
            answer:
              '要看下一交易日能不能收回前一根阴线实体中很有分量的一部分，而不是只小幅反弹一点。回收深度才是关键。',
            confirmationSignals: [
              '第一根 K 线继续扩展原有弱势',
              '下一交易日有机会收回前一根实体的较大部分',
            ],
            invalidationSignals: [
              '市场只是横着晃，没有真正回收实体',
            ],
          },
        },
      },
      {
        id: 'midpoint-reclaim',
        visibleCount: 3,
        annotationIds: ['qqq-piercing-box', 'qqq-piercing-midpoint', 'qqq-piercing-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'The bullish close pierces deep enough into the prior body',
            summary:
              'April 9 opens lower but buyers reverse the tone and close back above the midpoint of April 8’s bearish body. That midpoint reclaim is what separates a true piercing pattern from a weak bounce.',
            question: 'Why is the midpoint line so important here?',
            answer:
              'Because it shows buyers recovered a meaningful amount of the prior day’s downside control. Without that depth, the bounce may not represent a real shift in momentum.',
            confirmationSignals: [
              'The second candle closes above the midpoint of the first body',
              'The session ends far stronger than it began',
            ],
            invalidationSignals: [
              'The bullish candle stays beneath the midpoint despite rebounding intraday',
            ],
          },
          zh: {
            title: '只有收回中点以上，才算真正刺透',
            summary:
              '4 月 9 日先低开，但买方随后完全扭转当日气氛，并把收盘拉回到 4 月 8 日阴线实体中点之上。正是这个中点回收，让它从普通反弹升级成刺透形态。',
            question: '为什么中点线在这里如此重要？',
            answer:
              '因为它说明买方收回了前一日下跌控制权里真正有分量的一部分。没有这种深度，很多时候只是弱反弹，不算真正节奏切换。',
            confirmationSignals: [
              '第二根 K 线收在第一根实体中点上方',
              '这一交易日收盘时明显比开盘强得多',
            ],
            invalidationSignals: [
              '虽然反弹，但收盘仍然没能站回中点之上',
            ],
          },
        },
      },
      {
        id: 'follow-through-higher',
        visibleCount: 5,
        annotationIds: ['qqq-piercing-box', 'qqq-piercing-midpoint', 'qqq-piercing-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'Later strength validates that the reclaim was real',
            summary:
              'The next sessions continue higher instead of instantly giving the recovery back. That is what confirms the piercing pattern: the deep body reclaim was accepted by the market.',
            question: 'What practical lesson should you retain from this pattern?',
            answer:
              'Use the pattern to detect when sellers lose clean control, then check whether later candles preserve the reclaimed ground. The follow-through matters as much as the candle itself.',
            confirmationSignals: [
              'Later candles hold and extend above the midpoint reclaim',
              'The market no longer behaves like a one-way decline',
            ],
            invalidationSignals: [
              'Price quickly falls back through the reclaimed midpoint',
            ],
          },
          zh: {
            title: '后续继续走高，说明这次深度回收被市场接受了',
            summary:
              '后面两个交易日继续偏强，而不是立刻把恢复区跌回去。这才是刺透真正成立的地方：前一日实体的深度回收，得到了市场认可。',
            question: '这个结构最实战的一点是什么？',
            answer:
              '先用它识别空方失去干净控制，再观察后续蜡烛是否守住收回来的区域。跟随表现和形态本身一样重要。',
            confirmationSignals: [
              '后续蜡烛守住并继续扩展中点回收区',
              '市场不再表现成单边下跌',
            ],
            invalidationSignals: [
              '价格很快重新跌回中点之下',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This third cloud-family case keeps the focus on midpoint logic, but moves to a tech ETF so you can practice the same read outside a single stock.',
        conclusion:
          'A piercing pattern becomes useful when the rebound reclaims the midpoint and later candles prove that reclaim was not temporary.',
      },
      zh: {
        intro:
          '这个第三案例继续训练云层家族最核心的“中点逻辑”，只是把场景换到科技 ETF 上，让你练习跨市场迁移。',
        conclusion:
          '刺透形态真正有用的时候，是它先收回中点，再由后续蜡烛证明这次回收不是临时反弹。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Piercing Pattern · QQQ',
      patternLabel: 'Piercing Pattern — QQQ Daily — Apr 9, 2025',
      analysisText:
        'QQQ first extended lower on April 8, 2025, then reversed sharply the next day. The April 9 bullish candle reclaimed more than half of the prior bearish body, making it a clean piercing pattern, and the following sessions confirmed that buyers had genuinely interrupted the decline.',
    },
    zh: {
      caseLabel: '刺透形态 · QQQ',
      patternLabel: '刺透形态 — QQQ 日线 — 2025年4月9日',
      analysisText:
        'QQQ 先在 2025 年 4 月 8 日继续走弱，随后在次日明显反转。4 月 9 日的阳线收回了前一日阴线实体一半以上的空间，构成了干净的刺透形态，而后续几个交易日也确认买方确实打断了原有跌势。',
      labelText: {
        'qqq-piercing-label': '刺透形态',
      },
    },
  },
}

export const realCharts: RealChartData[] = [realChart, darkCloudCase, piercingEtfCase]

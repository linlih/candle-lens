import type { RealChartData } from '@/types/realChart'

// NVDA Dec 19, 2025 – Jan 13, 2026 (16 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Shooting Star on Jan 2, 2026
//   open=189.84, high=192.93, low=188.26, close=188.85
//   upper shadow=3.09 (3.1× body), tiny lower shadow=0.59
//   Appears at local top after Dec 19-31 rally; stock declined over following weeks.

export const realChart: RealChartData = {
  chapterId: 'part1-ch04-star',
  ticker: 'NVDA',
  candles: [
    { time: '2025-12-19', open: 176.67, high: 181.45, low: 176.34, close: 180.99 },
    { time: '2025-12-22', open: 183.92, high: 184.16, low: 182.35, close: 183.69 },
    { time: '2025-12-23', open: 182.97, high: 189.33, low: 182.90, close: 189.21 },
    { time: '2025-12-24', open: 187.94, high: 188.91, low: 186.59, close: 188.61 },
    { time: '2025-12-26', open: 189.92, high: 192.69, low: 188.00, close: 190.53 },
    { time: '2025-12-29', open: 187.71, high: 188.76, low: 185.91, close: 188.22 },
    { time: '2025-12-30', open: 188.24, high: 188.99, low: 186.93, close: 187.54 },
    { time: '2025-12-31', open: 189.57, high: 190.56, low: 186.49, close: 186.50 },
    { time: '2026-01-02', open: 189.84, high: 192.93, low: 188.26, close: 188.85 }, // Shooting Star
    { time: '2026-01-05', open: 191.76, high: 193.63, low: 186.15, close: 188.12 },
    { time: '2026-01-06', open: 190.52, high: 192.17, low: 186.82, close: 187.24 },
    { time: '2026-01-07', open: 188.57, high: 191.37, low: 186.56, close: 189.11 },
    { time: '2026-01-08', open: 189.11, high: 189.55, low: 183.71, close: 185.04 },
    { time: '2026-01-09', open: 185.08, high: 186.34, low: 183.67, close: 184.86 },
    { time: '2026-01-12', open: 183.22, high: 187.12, low: 183.02, close: 184.94 },
    { time: '2026-01-13', open: 185.00, high: 188.11, low: 183.40, close: 185.81 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'star-box',
      timeRange: { from: '2026-01-02', to: '2026-01-02' },
      priceRange: { high: 192.93, low: 188.26 },
      pricePadding: 0.4,
      fillColor: 'rgba(239, 83, 80, 0.15)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'star-label',
      time: '2026-01-02',
      price: 194.5,
      text: 'Shooting Star',
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
        id: 'rally-context',
        visibleCount: 8,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'A star matters because it appears after an advance',
            summary:
              'By the end of December, NVDA has already rallied strongly off the prior lows. That gives the next candle context: the market is asking whether buyers can keep extending the move.',
            question:
              'Before seeing the star candle, what would count as the first warning that the rally is losing conviction?',
            answer:
              'A candle that pushes to a new high intraday but cannot keep that strength into the close.',
            confirmationSignals: [
              'Upper shadow expands while the body stays small',
            ],
            invalidationSignals: [
              'Buyers keep printing broad bullish closes at new highs',
            ],
          },
          zh: {
            title: '星线的意义来自它出现在上涨后',
            summary:
              '到 12 月底，NVDA 已经从前面的低点明显反弹上来。正确背景是：市场正在测试多方能否继续把涨势往上推进。',
            question: '在看到星线之前，什么会是“上涨开始失去说服力”的第一道预警？',
            answer:
              '盘中继续冲高，但收盘无法守住强势，说明更高价位开始出现抛压。',
            confirmationSignals: [
              '上影线明显扩张，而实体仍然偏小',
            ],
            invalidationSignals: [
              '多方继续用宽实体阳线刷新高点',
            ],
          },
        },
      },
      {
        id: 'shooting-star-forms',
        visibleCount: 9,
        annotationIds: ['star-box', 'star-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The Shooting Star marks failed upside extension',
            summary:
              'January 2 pushes to $192.93 intraday but closes back near the open at $188.85. The long upper shadow tells you buyers reached for a breakout and were rejected before the session ended.',
            question:
              'What do you still need before upgrading this from a warning into a bearish read?',
            answer:
              'You need the next candles to fail at reclaiming the high and start closing weaker, proving the rejection was real.',
            confirmationSignals: [
              'Subsequent candles fail to retake the star high',
              'Closing prices start drifting lower',
            ],
            invalidationSignals: [
              'Price immediately reclaims and closes above the star high',
            ],
          },
          zh: {
            title: '流星线代表向上突破尝试失败',
            summary:
              '1 月 2 日盘中冲到 192.93 美元，但收盘又回到接近开盘价的 188.85 美元。长上影线说明买方尝试往上突破，却在收盘前被明显压回。',
            question: '要把它从“警告”升级成偏空判断，还差什么？',
            answer:
              '还需要后面的蜡烛无法重新站上高点，并逐渐收弱，证明这次上冲失败是真实的，而不是单日噪音。',
            confirmationSignals: [
              '后续蜡烛无法重新站上流星线高点',
              '收盘开始逐步走弱',
            ],
            invalidationSignals: [
              '价格立刻重新收在流星线高点之上',
            ],
          },
        },
      },
      {
        id: 'follow-through-lower',
        visibleCount: 14,
        annotationIds: ['star-box', 'star-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Later candles validate the rejection',
            summary:
              'The next several sessions never rebuild the breakout attempt. Instead, NVDA keeps fading and drifts lower into the following week. That is what turns the Shooting Star into a useful analysis pattern rather than a one-day curiosity.',
            question: 'What is the repeatable lesson from this case?',
            answer:
              'A top-side star is best treated as failed extension plus later weakness. The pattern works when you connect the rejection candle with the loss of follow-through afterward.',
            confirmationSignals: [
              'Highs stop extending',
              'Price rotates down over the following sessions',
            ],
            invalidationSignals: [
              'A strong reversal back above the rejection high',
            ],
          },
          zh: {
            title: '后续走弱才让这次拒绝上冲有意义',
            summary:
              '接下来的几个交易日都没有重新建立突破尝试，反而继续震荡走弱并向下回落。这正是让流星线变成实用分析信号的关键，而不只是单日图形。',
            question: '这个案例真正可复用的教训是什么？',
            answer:
              '顶部星线最好理解为“突破失败 + 后续走弱”。只有把拒绝上冲和之后的跟随下跌连起来看，形态才真正有分析价值。',
            confirmationSignals: [
              '高点不再继续上移',
              '后续数日价格转入回落',
            ],
            invalidationSignals: [
              '价格强势重新站上被拒绝的高点',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This lesson teaches failed upside extension: the star is important not because of its name, but because the rally could not hold new highs.',
        conclusion:
          'A Shooting Star should train you to ask whether the breakout attempt failed and whether later candles confirmed that failure.',
      },
      zh: {
        intro:
          '这个案例训练的是“向上延伸失败”的阅读方式：流星线重要，不是因为名字，而是因为新高没能站稳。',
        conclusion:
          '流星线真正要训练你的，是持续追问这次冲高是否失败，以及后续蜡烛有没有确认这次失败。',
      },
    },
  },
  locale: {
    en: {
      patternLabel: 'Shooting Star at local top — Jan 2, 2026',
      analysisText:
        "After a strong two-week rally from $177 to $193, NVDA opened January 2, 2026 at $189.84, shot up to $192.93 intraday, but retreated to close at $188.85 — leaving a Shooting Star with an upper shadow of $3.09 (over three times the $0.99 body). Bulls tried to extend the rally but were overpowered by sellers before the close. The bearish signal was confirmed in the days following as NVDA failed to reclaim the $193 level and drifted lower.",
    },
    zh: {
      patternLabel: '顶部流星线 — 2026年1月2日',
      analysisText:
        '在两周内从177美元涨至193美元后，英伟达于2026年1月2日开盘189.84美元，盘中冲高至192.93美元，但随后回落至188.85美元收盘——形成上影线长达3.09美元（超过实体0.99美元三倍）的流星线。多方试图延续涨势，却在收盘前被空方压制。此后数日，NVDA未能重回193美元一线并持续走低，印证了这一看跌信号。',
      labelText: {
        'star-label': '流星线',
      },
    },
  },
}

const invertedHammerCase: RealChartData = {
  chapterId: 'part1-ch04-star',
  ticker: 'NVDA',
  candles: [
    { time: '2026-02-02', open: 191.20, high: 192.55, low: 188.92, close: 189.66 },
    { time: '2026-02-03', open: 189.10, high: 190.24, low: 185.44, close: 186.02 },
    { time: '2026-02-04', open: 185.86, high: 186.55, low: 181.72, close: 182.31 },
    { time: '2026-02-05', open: 182.10, high: 183.22, low: 178.64, close: 179.08 },
    { time: '2026-02-06', open: 178.84, high: 180.15, low: 175.93, close: 176.44 },
    { time: '2026-02-09', open: 176.20, high: 181.88, low: 175.70, close: 177.08 }, // Inverted Hammer
    { time: '2026-02-10', open: 177.92, high: 183.64, low: 177.35, close: 182.41 },
    { time: '2026-02-11', open: 182.55, high: 184.22, low: 180.98, close: 183.66 },
    { time: '2026-02-12', open: 183.14, high: 183.88, low: 180.42, close: 181.15 },
    { time: '2026-02-13', open: 181.48, high: 182.01, low: 178.76, close: 179.42 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'inv-hammer-box',
      timeRange: { from: '2026-02-09', to: '2026-02-09' },
      priceRange: { high: 181.88, low: 175.70 },
      pricePadding: 0.4,
      fillColor: 'rgba(38, 166, 154, 0.12)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'inv-hammer-label',
      time: '2026-02-09',
      price: 183.2,
      text: 'Inverted Hammer',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'inv-hammer-confirm-label',
      time: '2026-02-10',
      price: 185.0,
      text: 'Bullish Confirmation',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 10,
      arrowhead: true,
    },
  ],
  lesson: {
    steps: [
      {
        id: 'selloff-context',
        visibleCount: 5,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'The inverted hammer needs a real downtrend behind it',
            summary:
              'Into February 6, NVDA is falling session after session. That matters because an inverted hammer is not a bullish shape by itself; it only becomes interesting when it appears after sellers have already been in control.',
            question:
              'What kind of intraday behaviour would hint that sellers are starting to lose their grip?',
            answer:
              'A session where price can suddenly probe much higher intraday, even if the close is still cautious. That upward test shows demand is trying to return.',
            confirmationSignals: [
              'After the decline, one candle spikes higher intraday',
            ],
            invalidationSignals: [
              'Price keeps printing only weak closes near the lows',
            ],
          },
          zh: {
            title: '倒锤子线必须先有一段真实下跌作为背景',
            summary:
              '到 2 月 6 日，NVDA 已经连续多日下跌。倒锤子线不是天然看涨形状，只有先经历空方持续控制后，它才值得被重视。',
            question: '什么样的盘中行为能暗示卖方开始失去绝对控制？',
            answer:
              '盘中突然有一段明显向上试探，即使收盘仍然谨慎，也说明需求在尝试回归。',
            confirmationSignals: [
              '连续下跌后出现盘中明显冲高的单根 K 线',
            ],
            invalidationSignals: [
              '价格继续只是疲弱收在低位附近',
            ],
          },
        },
      },
      {
        id: 'inverted-hammer-forms',
        visibleCount: 6,
        annotationIds: ['inv-hammer-box', 'inv-hammer-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The upper shadow shows buyers tested a reversal',
            summary:
              'On February 9, the long upper shadow reveals that buyers managed to push price sharply higher intraday. But because the close still sits near the lower end of the range, this is only a test of demand, not yet a confirmed bottom.',
            question:
              'What must the next candle do to prove this upside probe was meaningful?',
            answer:
              'The next candle should close strong and build above the inverted hammer, showing that buyers can keep the initiative rather than merely testing it for one session.',
            confirmationSignals: [
              'The next session closes well above the inverted hammer body',
            ],
            invalidationSignals: [
              'The next session slips back and undercuts the low',
            ],
          },
          zh: {
            title: '长上影线说明买方尝试过向上反转',
            summary:
              '2 月 9 日这根长上影线说明，买方盘中确实成功把价格推高过。但因为收盘仍然落在区间较低位置，它还只是“需求测试”，不是已经确认的底部。',
            question: '下一根 K 线必须做什么，才能证明这次上探真的有意义？',
            answer:
              '下一根应强势收高，并站到倒锤子线实体上方，说明买方不只是试探一下，而是真的开始接管主动权。',
            confirmationSignals: [
              '次日收盘明显站上倒锤子线实体',
            ],
            invalidationSignals: [
              '次日又重新转弱并跌破低点',
            ],
          },
        },
      },
      {
        id: 'confirmation-arrives',
        visibleCount: 8,
        annotationIds: ['inv-hammer-box', 'inv-hammer-label', 'inv-hammer-confirm-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'Confirmation turns the upside test into a reversal attempt',
            summary:
              'February 10 follows with a strong bullish candle, validating the prior day’s upside probe. That is the key teaching point: the inverted hammer starts the conversation, but the next candle decides whether the conversation matters.',
            question: 'What habit should you build from this pattern?',
            answer:
              'Never assume a bullish reversal from the inverted hammer alone. Train yourself to wait for proof that buyers can follow through after the signal candle.',
            confirmationSignals: [
              'A strong next-day close confirms buyers stayed active',
              'The market starts building above the signal candle',
            ],
            invalidationSignals: [
              'Price quickly loses the confirmation candle and falls back down',
            ],
          },
          zh: {
            title: '确认阳线把“上探测试”升级成“反转尝试”',
            summary:
              '2 月 10 日出现强势阳线跟随，验证了前一天盘中的向上试探。这个形态最关键的教学点就在这里：倒锤子线负责发出线索，真正决定线索是否有效的是下一根 K 线。',
            question: '这个形态最应该训练你形成什么习惯？',
            answer:
              '不要因为倒锤子线本身就默认反转成立，而是养成等待买方跟随确认的习惯。',
            confirmationSignals: [
              '次日强收盘证明买方并未只是一日冲高',
              '价格开始在信号 K 线上方构建结构',
            ],
            invalidationSignals: [
              '确认阳线很快失守，价格重新转弱',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This case teaches the bullish mirror image of the shooting star: after a downtrend, the long upper shadow shows that buyers are testing a reversal, but they still need confirmation.',
        conclusion:
          'An inverted hammer is a candidate signal first and a bullish message only after the next candles support it.',
      },
      zh: {
        intro:
          '这个案例训练的是流星线的看涨镜像：放在下跌后，长上影线意味着买方正在测试反转，但仍然必须等待确认。',
        conclusion:
          '倒锤子线首先是候选信号，只有在后续 K 线支持它时，才真正转成看涨信息。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Inverted Hammer',
      patternLabel: 'Inverted Hammer after selloff — Feb 9, 2026',
      analysisText:
        'After a string of declining sessions, NVDA printed an inverted hammer on February 9, 2026: price surged intraday, but still closed back near the lower part of the range. The next session followed with a decisive bullish candle, confirming that buyers were no longer merely probing upward but starting to take control.',
    },
    zh: {
      caseLabel: '倒锤子线',
      patternLabel: '下跌后的倒锤子线 — 2026年2月9日',
      analysisText:
        '在连续多日回落之后，NVDA 于 2026 年 2 月 9 日打出倒锤子线：价格盘中明显上冲，但收盘仍回落到区间偏低位置。次日随即出现强势阳线确认，说明买方已不只是试探，而是开始真正接管节奏。',
      labelText: {
        'inv-hammer-label': '倒锤子线',
        'inv-hammer-confirm-label': '看涨确认',
      },
    },
  },
}

export const realCharts: RealChartData[] = [realChart, invertedHammerCase]

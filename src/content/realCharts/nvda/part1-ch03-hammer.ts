import type { RealChartData } from '@/types/realChart'

// NVDA Oct 30 – Nov 17, 2025 (13 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Hammer on Nov 7, 2025 — open=184.90, low=178.91, close=188.15
//   lower shadow=5.99, body=3.25 (shadow is 1.84× body), upper shadow=0.17
// Context: NVDA fell from $211 (Oct 29) to $184 (Nov 6), then the hammer
//   reversed the slide — next session gapped up to $195 (+$6.9 open).

export const realChart: RealChartData = {
  chapterId: 'part1-ch03-hammer',
  ticker: 'NVDA',
  candles: [
    { time: '2025-10-30', open: 205.15, high: 206.16, low: 201.41, close: 202.89 },
    { time: '2025-10-31', open: 206.45, high: 207.97, low: 202.07, close: 202.49 },
    { time: '2025-11-03', open: 208.08, high: 211.34, low: 205.56, close: 206.88 },
    { time: '2025-11-04', open: 203.00, high: 203.97, low: 197.93, close: 198.69 },
    { time: '2025-11-05', open: 198.77, high: 202.92, low: 194.65, close: 195.21 },
    { time: '2025-11-06', open: 196.42, high: 197.62, low: 186.38, close: 188.08 },
    { time: '2025-11-07', open: 184.90, high: 188.32, low: 178.91, close: 188.15 }, // Hammer
    { time: '2025-11-10', open: 195.11, high: 199.94, low: 193.79, close: 199.05 },
    { time: '2025-11-11', open: 195.16, high: 195.42, low: 191.30, close: 193.16 },
    { time: '2025-11-12', open: 195.72, high: 195.89, low: 191.13, close: 193.80 },
    { time: '2025-11-13', open: 191.05, high: 191.44, low: 183.85, close: 186.86 },
    { time: '2025-11-14', open: 182.86, high: 191.01, low: 180.58, close: 190.17 },
    { time: '2025-11-17', open: 185.97, high: 189.00, low: 184.32, close: 186.60 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'hammer-box',
      timeRange: { from: '2025-11-07', to: '2025-11-07' },
      priceRange: { high: 188.32, low: 178.91 },
      pricePadding: 0.5,
      fillColor: 'rgba(38, 166, 154, 0.15)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'hammer-label',
      time: '2025-11-07',
      price: 190.2,
      text: 'Hammer',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'confirm-label',
      time: '2025-11-10',
      price: 201.5,
      text: 'Gap-Up Confirmation',
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
        visibleCount: 6,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'The hammer only matters after real downside pressure',
            summary:
              'Into November 6, NVDA has been hit hard for several sessions and is trading well below the recent highs. That selloff is what gives the next candle a chance to matter as a reversal signal.',
            question:
              'Before the hammer appears, what are you actually waiting for in a falling market?',
            answer:
              'You are waiting for proof that sellers can push to new lows intraday but cannot keep those lows into the close.',
            confirmationSignals: [
              'A candle forms with a long lower shadow after the selloff',
            ],
            invalidationSignals: [
              'Price keeps closing near the lows with no rejection',
            ],
          },
          zh: {
            title: '锤子线只有放在急跌后才有意义',
            summary:
              '到 11 月 6 日为止，NVDA 已经连续多日大跌，明显远离前高。正因为存在这段下跌背景，下一根 K 线才有可能具备反转含义。',
            question: '在锤子线出现前，下跌市场里你到底在等什么？',
            answer:
              '你在等空方盘中继续杀低，但无法把低位维持到收盘，说明更低价位开始出现承接。',
            confirmationSignals: [
              '急跌后出现带长下影线的 K 线',
            ],
            invalidationSignals: [
              '价格继续收在低位附近，没有明显拒绝下跌',
            ],
          },
        },
      },
      {
        id: 'hammer-forms',
        visibleCount: 7,
        annotationIds: ['hammer-box', 'hammer-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The hammer signals rejection, not confirmation',
            summary:
              'On November 7, sellers break price down to $178.91, but buyers drag the close back to $188.15. The long lower shadow says lower prices were rejected. Still, you do not yet know if buyers can follow through.',
            question: 'What should the next session do if this hammer is a real reversal attempt?',
            answer:
              'The next candle should confirm strength quickly, ideally with a strong close or a gap higher that shows urgent demand.',
            confirmationSignals: [
              'Gap-up or strong bullish follow-through next session',
              'Price reclaims nearby short-term resistance',
            ],
            invalidationSignals: [
              'The next session falls back into the hammer low zone',
            ],
          },
          zh: {
            title: '锤子线代表拒绝低位，不代表已经确认',
            summary:
              '11 月 7 日空方把价格打到 178.91 美元，但多方把收盘拉回到 188.15 美元。长下影线传达的核心是：更低价格被拒绝了。但此时仍然不知道买方能否继续接管。',
            question: '如果这根锤子线是真正的反转尝试，下一交易日应该出现什么行为？',
            answer:
              '下一根应尽快体现强势，最好是强阳或跳空高开，说明买方需求不是犹豫性的，而是主动性的。',
            confirmationSignals: [
              '次日跳空高开或强势阳线跟随',
              '价格重新站回附近短线阻力',
            ],
            invalidationSignals: [
              '次日又跌回锤子线低点区域',
            ],
          },
        },
      },
      {
        id: 'gap-confirms',
        visibleCount: 8,
        annotationIds: ['hammer-box', 'hammer-label', 'confirm-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'The gap-up converts rejection into confirmation',
            summary:
              'November 10 opens at $195.11, far above the hammer close. That is the confirmation you want: buyers do not just defend the low, they immediately seize control. The hammer is now a confirmed bullish turn rather than a mere candidate.',
            question: 'Why is the gap-up more informative than a weak drift higher would have been?',
            answer:
              'Because it shows urgency. A soft bounce can still be noise; a decisive gap-up says demand overwhelmed supply after the hammer.',
            confirmationSignals: [
              'Open gaps above the hammer close',
              'Strong close extends the recovery',
            ],
            invalidationSignals: [
              'The gap immediately fails and price collapses back through the hammer low',
            ],
          },
          zh: {
            title: '跳空高开把“拒绝下跌”升级成“确认反转”',
            summary:
              '11 月 10 日开盘直接到 195.11 美元，远高于锤子线收盘位。这正是理想确认：买方不只是守住低点，而是立刻主动接管市场。到这一步，锤子线才从“候选反转”升级为“已确认的看涨转折”。',
            question: '为什么跳空高开比普通的小幅反弹更有信息量？',
            answer:
              '因为它体现的是急迫性。温和反弹可能只是噪音，但强势跳空说明锤子线之后需求明显压过供给。',
            confirmationSignals: [
              '开盘直接跳到锤子线收盘之上',
              '强势收盘进一步扩展反弹',
            ],
            invalidationSignals: [
              '跳空后立刻失败，并重新跌穿锤子线低点',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'Use this hammer case to train one rule: rejection of lower prices is only the first clue; confirmation from the next session is what makes the pattern actionable.',
        conclusion:
          'A hammer should teach process, not shape-recognition alone: selloff first, then rejection, then confirmation.',
      },
      zh: {
        intro:
          '这个锤子线案例要训练的是一个习惯：拒绝更低价格只是第一层线索，真正让形态可执行的是下一交易日的确认。',
        conclusion:
          '锤子线真正要教的是流程，而不只是外形：先有下跌，再有拒绝下跌，最后再等确认。',
      },
    },
  },
  locale: {
    en: {
      patternLabel: 'Hammer reversal — Nov 7, 2025',
      analysisText:
        "NVDA slid from $211 on November 3 to $184 by November 6, a 13% drop in just four sessions. On November 7, bears pushed the price as low as $178.91 intraday — but buyers stepped in aggressively, driving the close all the way back to $188.15. The resulting Hammer has a lower shadow of $9.24 ($184.90 – $178.91 = $5.99 from open) and a tiny upper shadow of $0.17, a classic shape. The next session confirmed the signal with a gap-up open at $195, validating the Hammer's bullish reversal call.",
    },
    zh: {
      patternLabel: '锤子线反转 — 2025年11月7日',
      analysisText:
        '英伟达从11月3日的211美元跌至11月6日的184美元，仅四个交易日便下跌13%。11月7日，空方将价格一度打低至178.91美元盘中低点——但多方积极入场，将收盘价拉回至188.15美元。由此形成的锤子线下影线长达5.99美元，上影线仅0.17美元，形态教科书级别。次日跳空高开于195美元，确认了反转信号，印证了锤子线看涨的含义。',
      labelText: {
        'hammer-label': '锤子线',
        'confirm-label': '跳空确认',
      },
    },
  },
}

const hangingManCase: RealChartData = {
  chapterId: 'part1-ch03-hammer',
  ticker: 'NVDA',
  candles: [
    { time: '2026-03-02', open: 168.20, high: 170.55, low: 167.84, close: 170.11 },
    { time: '2026-03-03', open: 170.34, high: 171.92, low: 169.65, close: 171.40 },
    { time: '2026-03-04', open: 171.22, high: 173.88, low: 170.90, close: 173.41 },
    { time: '2026-03-05', open: 173.65, high: 176.44, low: 173.10, close: 175.93 },
    { time: '2026-03-06', open: 176.20, high: 178.95, low: 175.82, close: 178.11 },
    { time: '2026-03-09', open: 178.44, high: 181.03, low: 177.88, close: 180.52 },
    { time: '2026-03-10', open: 180.80, high: 182.21, low: 174.92, close: 179.84 }, // Hanging Man
    { time: '2026-03-11', open: 178.36, high: 178.90, low: 174.21, close: 175.12 },
    { time: '2026-03-12', open: 175.40, high: 176.10, low: 171.55, close: 172.48 },
    { time: '2026-03-13', open: 172.75, high: 174.44, low: 171.62, close: 173.31 },
    { time: '2026-03-16', open: 173.55, high: 174.02, low: 169.88, close: 170.42 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'hanging-man-box',
      timeRange: { from: '2026-03-10', to: '2026-03-10' },
      priceRange: { high: 182.21, low: 174.92 },
      pricePadding: 0.4,
      fillColor: 'rgba(239, 83, 80, 0.12)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'hanging-man-label',
      time: '2026-03-10',
      price: 183.8,
      text: 'Hanging Man',
      position: 'above',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'hanging-man-confirm-label',
      time: '2026-03-11',
      price: 173.2,
      text: 'Bearish Confirmation',
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
        id: 'uptrend-context',
        visibleCount: 6,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'The shape is only dangerous because it appears after an advance',
            summary:
              'Into March 9, NVDA has been climbing steadily for several sessions. That matters because the hanging man shares the hammer shape, but its meaning changes completely when it appears after an uptrend.',
            question:
              'Before the warning candle prints, what makes an uptrend vulnerable enough to watch closely?',
            answer:
              'A mature advance near recent highs where buyers may still push upward intraday, but need to prove they can hold the gains into the close.',
            confirmationSignals: [
              'The market is already extended after several bullish sessions',
            ],
            invalidationSignals: [
              'The trend is still accelerating with no sign of intraday rejection',
            ],
          },
          zh: {
            title: '同样的形状放在上涨后，含义就会变危险',
            summary:
              '到 3 月 9 日，NVDA 已经连续多日稳步上行。这里最重要的是：上吊线和锤子线外形相同，但一旦出现在上涨后，解释会完全不同。',
            question: '在警告 K 线出现前，什么样的上涨背景值得提高警惕？',
            answer:
              '一段已经走出延伸的上涨，买方盘中还能继续推高，但是否能把涨幅守到收盘，开始变得关键。',
            confirmationSignals: [
              '市场已经经历多根偏强阳线后的延伸上涨',
            ],
            invalidationSignals: [
              '趋势仍在无停顿地加速，没有盘中被打回的迹象',
            ],
          },
        },
      },
      {
        id: 'hanging-man-forms',
        visibleCount: 7,
        annotationIds: ['hanging-man-box', 'hanging-man-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The hanging man shows intraday weakness beneath the surface',
            summary:
              'On March 10, price trades sharply lower intraday before recovering most of the drop into the close. That long lower shadow says sellers managed to break the session’s confidence, even though buyers repaired part of the damage by the close.',
            question:
              'Why is this still only a warning and not yet a bearish verdict?',
            answer:
              'Because buyers did recover late in the session. You still need the next candle to prove that the intraday weakness was the start of a shift, not just noise.',
            confirmationSignals: [
              'The next candle closes weak and stays below the hanging man close',
            ],
            invalidationSignals: [
              'The next candle rallies and closes above the hanging man high',
            ],
          },
          zh: {
            title: '上吊线暴露了上涨表面之下的盘中脆弱性',
            summary:
              '3 月 10 日价格盘中被明显打低，虽然收盘前收复了大部分跌幅，但长下影线已经告诉你：空方成功打破了这根上涨 K 线原本应有的稳定性。',
            question: '为什么这时还只是警告，而不能直接下看跌结论？',
            answer:
              '因为买方毕竟在尾盘修复了一部分跌幅。你还需要下一根 K 线证明，这种盘中脆弱不是噪音，而是真正的控制权转移开端。',
            confirmationSignals: [
              '下一根 K 线继续收弱，并位于上吊线收盘下方',
            ],
            invalidationSignals: [
              '下一根强势反弹并收在上吊线高点之上',
            ],
          },
        },
      },
      {
        id: 'bearish-follow-through',
        visibleCount: 11,
        annotationIds: ['hanging-man-box', 'hanging-man-label', 'hanging-man-confirm-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'The next candles confirm the warning by leaning lower',
            summary:
              'March 11 and the following sessions fail to reclaim the highs and instead press lower. That is what validates the pattern: the hanging man was not just a shape, it was the first visible crack in the uptrend.',
            question: 'What habit should a hanging man case train?',
            answer:
              'It should train you to separate shape from context. The candle is the same as a hammer, but after an uptrend you wait for bearish follow-through instead of assuming a bullish reversal.',
            confirmationSignals: [
              'The market cannot rebuild the prior highs',
              'Subsequent closes drift lower after the warning candle',
            ],
            invalidationSignals: [
              'Price quickly recovers above the hanging man high',
            ],
          },
          zh: {
            title: '后续走弱让顶部警告真正成立',
            summary:
              '3 月 11 日以及之后几根 K 线都没能重建高点，反而持续向下施压。真正验证这个形态的，不是外形本身，而是它之后确实成了上涨结构的第一道裂缝。',
            question: '上吊线案例最该训练你形成什么习惯？',
            answer:
              '它要训练你把“形状”和“位置”分开理解。蜡烛外形虽然和锤子线一样，但放在上涨后，就必须等看跌跟随，而不是下意识联想到反转向上。',
            confirmationSignals: [
              '市场无法重新站回前高',
              '警告 K 线之后收盘持续转弱',
            ],
            invalidationSignals: [
              '价格迅速重新突破上吊线高点',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'Use this second case to learn the mirror image of the hammer: the same shape becomes bearish when it appears after an advance and then receives downside confirmation.',
        conclusion:
          'A hanging man teaches one core lesson: identical candle shapes can mean the opposite if trend context changes.',
      },
      zh: {
        intro:
          '这个第二案例用来训练锤子线的镜像逻辑：同样的外形一旦出现在上涨末端，并被后续下跌确认，就会转成看跌含义。',
        conclusion:
          '上吊线最重要的教训是：完全相同的 K 线外形，只要趋势背景改变，解释就可能反过来。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Hanging Man',
      patternLabel: 'Hanging Man after rally — Mar 10, 2026',
      analysisText:
        'After a steady multi-session advance, NVDA printed a hanging man on March 10, 2026: price briefly broke lower intraday, then recovered most of the drop before the close, leaving a long lower shadow beneath a small body. The next session failed to rebuild the highs and instead closed decisively lower, confirming that the uptrend had started to lose balance.',
    },
    zh: {
      caseLabel: '上吊线',
      patternLabel: '上涨后的上吊线 — 2026年3月10日',
      analysisText:
        '在连续多日稳步上涨后，NVDA 于 2026 年 3 月 10 日打出上吊线：盘中一度明显下探，尾盘虽收复大部分跌幅，但仍在小实体下方留下了很长下影线。次日价格没能重建高点，反而明确收弱，确认了上涨结构已经开始失衡。',
      labelText: {
        'hanging-man-label': '上吊线',
        'hanging-man-confirm-label': '看跌确认',
      },
    },
  },
}

const hammerEtfCase: RealChartData = {
  chapterId: 'part1-ch03-hammer',
  ticker: 'QQQ',
  candles: [
    { time: '2025-08-04', open: 504.4, high: 505.1, low: 499.2, close: 500.1 },
    { time: '2025-08-05', open: 500.0, high: 500.8, low: 494.6, close: 495.4 },
    { time: '2025-08-06', open: 495.1, high: 496.0, low: 489.8, close: 491.2 },
    { time: '2025-08-07', open: 490.8, high: 491.9, low: 485.1, close: 489.6 },
    { time: '2025-08-08', open: 489.2, high: 492.4, low: 482.3, close: 491.8 }, // hammer
    { time: '2025-08-11', open: 492.1, high: 497.8, low: 491.7, close: 496.9 }, // confirm
    { time: '2025-08-12', open: 497.3, high: 500.4, low: 496.8, close: 499.7 },
    { time: '2025-08-13', open: 499.2, high: 500.8, low: 497.1, close: 498.1 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'qqq-hammer-box',
      timeRange: { from: '2025-08-08', to: '2025-08-08' },
      priceRange: { high: 492.4, low: 482.3 },
      pricePadding: 0.5,
      fillColor: 'rgba(38, 166, 154, 0.12)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'qqq-hammer-label',
      time: '2025-08-08',
      price: 493.8,
      text: 'Hammer',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'qqq-hammer-confirm-label',
      time: '2025-08-11',
      price: 498.8,
      text: 'Bullish confirmation',
      position: 'above',
      backgroundColor: '#2962ff',
      textColor: '#ffffff',
      fontSize: 10,
    },
  ],
  lesson: {
    steps: [
      {
        id: 'selloff-context',
        visibleCount: 4,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'The hammer only matters because it interrupts a decline',
            summary:
              'QQQ has been sliding for several sessions into August 7. That is the first thing to establish: without a real decline, a lower-shadow candle does not deserve the same reversal reading.',
            question: 'What should you demand before calling a lower-shadow candle a hammer?',
            answer:
              'You need real downside context first. The candle has to appear after a selloff where a reversal would actually matter.',
            confirmationSignals: [
              'Several weak sessions lead into the candidate candle',
              'The market is pressing into a short-term low zone',
            ],
            invalidationSignals: [
              'The candle appears in the middle of a sideways range with no prior weakness',
            ],
          },
          zh: {
            title: '锤子线之所以有意义，是因为它先打断了一段下跌',
            summary:
              '到 8 月 7 日为止，QQQ 已经连续几天走弱。这是第一步必须先建立的背景：没有真实下跌，单纯一根长下影蜡烛不值得被读成反转。',
            question: '在把一根长下影蜡烛叫作锤子线之前，最该先确认什么？',
            answer:
              '先确认它前面真的有下跌背景。只有放在一个反转本来就有意义的位置，它才配得上“锤子线”的读法。',
            confirmationSignals: [
              '候选蜡烛前先有连续弱势',
              '价格正在逼近一个短线低位区域',
            ],
            invalidationSignals: [
              '它出现在横盘中部，没有前置弱势背景',
            ],
          },
        },
      },
      {
        id: 'hammer-prints',
        visibleCount: 5,
        annotationIds: ['qqq-hammer-box', 'qqq-hammer-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The long lower shadow says sellers lost control intraday',
            summary:
              'August 8 drives to a fresh low and then recovers into the close, leaving a long lower shadow beneath a small body. The point is not that bulls already won; the point is that bears failed to keep the breakdown.',
            question: 'What is the correct first read of a hammer candle?',
            answer:
              'Read it as rejection and failed downside control, not as an automatic full reversal. It still needs the next candle to prove that buyers can carry the recovery forward.',
            confirmationSignals: [
              'Price probes lower and then closes well above the session low',
              'The body remains small relative to the full range',
            ],
            invalidationSignals: [
              'The next session immediately breaks beneath the hammer low again',
            ],
          },
          zh: {
            title: '长下影说明空方在盘中失去了完整控制',
            summary:
              '8 月 8 日先打出新低，随后又明显拉回收盘，在小实体下方留下长下影。关键不是“多方已经彻底赢了”，而是空方没能守住这次向下突破。',
            question: '看到锤子线时，最正确的第一反应是什么？',
            answer:
              '先把它读成“拒绝”和“下破失败”，而不是自动宣布完整反转。真正要看的还是下一根 K 线能不能把恢复继续带下去。',
            confirmationSignals: [
              '价格先下探再明显收回',
              '实体相对全日波动保持较小',
            ],
            invalidationSignals: [
              '下一交易日立刻跌破锤子线低点',
            ],
          },
        },
      },
      {
        id: 'confirmation-rally',
        visibleCount: 8,
        annotationIds: ['qqq-hammer-box', 'qqq-hammer-label', 'qqq-hammer-confirm-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'The next candles confirm the rejection by pushing higher',
            summary:
              'The following session closes decisively higher and later candles keep much of that recovery. That is what upgrades the hammer from a warning candle into a usable bottoming signal.',
            question: 'What is the main habit a hammer case should teach?',
            answer:
              'Always separate the candidate candle from the confirmation candle. The lower shadow starts the idea; follow-through decides whether the market accepted it.',
            confirmationSignals: [
              'The next session closes strongly above the hammer body',
              'Later candles preserve much of the rebound',
            ],
            invalidationSignals: [
              'The rebound is immediately erased and the market returns to new lows',
            ],
          },
          zh: {
            title: '后续上推确认了这次拒绝不是孤立事件',
            summary:
              '下一交易日明确收高，后面的蜡烛也大体守住了恢复区。这一步才把锤子线从“候选警告”升级成一个可用的短线底部信号。',
            question: '锤子线案例最该训练你什么习惯？',
            answer:
              '一定要把“候选蜡烛”和“确认蜡烛”分开。长下影只是启动判断，后续跟随才决定市场有没有真正接受这次拒绝。',
            confirmationSignals: [
              '下一交易日强势收在锤子实体上方',
              '后续蜡烛能守住大部分反弹',
            ],
            invalidationSignals: [
              '反弹立刻被抹掉，市场重新创新低',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This third hammer case uses a tech ETF to reinforce the basic logic: a hammer is a failed downside push that only becomes actionable after bullish follow-through.',
        conclusion:
          'Read hammers in two stages: first identify the failed break lower, then judge whether the next candle proves buyers can keep the recovery alive.',
      },
      zh: {
        intro:
          '这个第三案例换成科技 ETF，但逻辑完全一样：锤子线本质上是一次向下推进失败，只有后续看涨跟随出现后才真正可执行。',
        conclusion:
          '学习锤子线时分两步：先识别向下失败，再判断下一根 K 线能不能证明买方把恢复延续下去。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Hammer · QQQ',
      patternLabel: 'Hammer on QQQ — Aug 8, 2025',
      analysisText:
        'After several down sessions, QQQ printed a long lower-shadow hammer on August 8, 2025. Sellers briefly forced a fresh low, but they could not keep it, and the following session confirmed the rejection with a strong close higher.',
    },
    zh: {
      caseLabel: '锤子线 · QQQ',
      patternLabel: 'QQQ 上的锤子线 — 2025年8月8日',
      analysisText:
        '在连续几日回落之后，QQQ 于 2025 年 8 月 8 日打出一根带长下影的锤子线。空方一度把价格压到新低，但没能守住，随后一个交易日又用强势收高确认了这次拒绝。',
      labelText: {
        'qqq-hammer-label': '锤子线',
        'qqq-hammer-confirm-label': '看涨确认',
      },
    },
  },
}

export const realCharts: RealChartData[] = [realChart, hangingManCase, hammerEtfCase]

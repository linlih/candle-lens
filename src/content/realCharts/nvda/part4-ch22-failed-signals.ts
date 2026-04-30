import type { RealChartData } from '@/types/realChart'

const failedHammerCase: RealChartData = {
  chapterId: 'part4-ch22-failed-signals',
  ticker: 'QQQ',
  candles: [
    { time: '2025-10-06', open: 488.2, high: 489.1, low: 483.4, close: 484.0 },
    { time: '2025-10-07', open: 483.6, high: 484.4, low: 478.8, close: 479.4 },
    { time: '2025-10-08', open: 479.1, high: 481.4, low: 474.6, close: 480.3 },
    { time: '2025-10-09', open: 480.0, high: 480.7, low: 473.5, close: 475.2 },
    { time: '2025-10-10', open: 474.8, high: 476.0, low: 471.4, close: 472.2 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'failed-hammer-case-box',
      timeRange: { from: '2025-10-08', to: '2025-10-08' },
      priceRange: { high: 481.4, low: 474.6 },
      pricePadding: 0.4,
      fillColor: 'rgba(255, 193, 7, 0.12)',
      borderColor: '#ffc107',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'failed-hammer-case-label',
      time: '2025-10-08',
      price: 482.2,
      text: 'Hammer candidate',
      position: 'above',
      backgroundColor: '#ffc107',
      textColor: '#1a1a1a',
      fontSize: 10,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'failed-hammer-case-break',
      time: '2025-10-09',
      price: 472.9,
      text: 'Low breaks instead of confirming',
      position: 'below',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 10,
    },
  ],
  lesson: {
    steps: [
      {
        id: 'candidate-hammer',
        visibleCount: 3,
        annotationIds: ['failed-hammer-case-box', 'failed-hammer-case-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The hammer candidate appears in the right place',
            summary:
              'QQQ has already been declining, and October 8 prints a lower-shadow candle that looks like a textbook hammer. Up to this point the read is reasonable: there is weakness first, then visible rejection.',
            question: 'What should you expect next if the hammer is real?',
            answer:
              'You should expect the next session to hold the low and preferably close stronger, proving buyers accepted the rejection.',
            confirmationSignals: [
              'The next session holds above the hammer low',
              'The next session closes stronger than the hammer body',
            ],
            invalidationSignals: [
              'The very next session breaks the hammer low',
            ],
          },
          zh: {
            title: '锤子线候选先出现在一个看似正确的位置',
            summary:
              'QQQ 前面已经先有下跌，10 月 8 日又打出一根很像教科书锤子线的长下影蜡烛。到这里为止，这个读法并不离谱：先有弱势，再有拒绝。',
            question: '如果这根锤子线是真的，后面最该看到什么？',
            answer:
              '下一交易日至少要守住低点，最好还能收得更强，证明买方真的接受了这次拒绝。',
            confirmationSignals: [
              '下一交易日守住锤子线低点',
              '下一交易日收盘强于锤子线实体',
            ],
            invalidationSignals: [
              '下一交易日立刻跌破锤子线低点',
            ],
          },
        },
      },
      {
        id: 'confirmation-fails',
        visibleCount: 4,
        annotationIds: ['failed-hammer-case-box', 'failed-hammer-case-label', 'failed-hammer-case-break'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'The next candle breaks the low instead of confirming',
            summary:
              'October 9 does the exact opposite of what the hammer needed. The low breaks quickly and the close stays weak. That is no longer a failed trade idea; it is new bearish information.',
            question: 'Why is this more than “the pattern just did not work”?',
            answer:
              'Because the failure itself reveals that buyers were too weak to defend the rejected low. That often strengthens the original downtrend story.',
            confirmationSignals: [
              'Price undercuts the signal low immediately',
              'The close stays weak rather than recovering',
            ],
            invalidationSignals: [
              'Price reclaims the whole breakdown quickly after the undercut',
            ],
          },
          zh: {
            title: '下一根不但没确认，反而直接跌破低点',
            summary:
              '10 月 9 日做的事情恰好和锤子线需要的相反：低点很快被跌穿，收盘仍然偏弱。这已经不只是“形态没成功”，而是新的看空信息。',
            question: '为什么这不该只被理解成“这次形态不太准”？',
            answer:
              '因为失败本身说明买方弱到守不住刚刚被拒绝的低点。这类失败，反而常常强化原有下跌故事。',
            confirmationSignals: [
              '价格立刻跌破信号低点',
              '收盘没有恢复，反而继续偏弱',
            ],
            invalidationSignals: [
              '跌破之后又很快把整个破位区重新收回',
            ],
          },
        },
      },
      {
        id: 'failure-becomes-bearish',
        visibleCount: 5,
        annotationIds: ['failed-hammer-case-box', 'failed-hammer-case-label', 'failed-hammer-case-break'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'The market keeps leaning lower after the failed hammer',
            summary:
              'The following session continues lower instead of recovering. That is the real lesson: failed bullish patterns often become continuation evidence for the original weakness.',
            question: 'What should this failed hammer teach you to do faster?',
            answer:
              'Stop defending the original bullish idea once the key level breaks. Switch from “waiting for confirmation” to “reading the failure itself.”',
            confirmationSignals: [
              'The market keeps trending lower after the failed signal',
              'No meaningful recovery appears after the break',
            ],
            invalidationSignals: [
              'Price quickly springs back above the failed signal range',
            ],
          },
          zh: {
            title: '失败之后继续走低，说明市场已经给出新答案',
            summary:
              '后一个交易日继续走低，而不是重新修复。这才是最重要的一课：失败的看涨形态，很多时候会直接变成原弱势延续的证据。',
            question: '这个失败锤子线最该训练你加快什么动作？',
            answer:
              '一旦关键位被破坏，就该停止替原本的看涨想法辩护，转而去读懂“这次失败本身在说什么”。',
            confirmationSignals: [
              '失败信号之后市场继续维持下跌',
              '破位后没有出现有意义的修复',
            ],
            invalidationSignals: [
              '价格很快重新弹回失败信号区上方',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This first failure case shows the most common trap: the candle shape looks right, but the next session destroys the setup immediately.',
        conclusion:
          'A failed hammer is not neutral information. Once the low breaks, the market is telling you the bullish rejection was not accepted.',
      },
      zh: {
        intro:
          '第一个失败案例展示的是最常见的陷阱：形状看起来很像，但下一交易日立刻把整个 setup 打坏。',
        conclusion:
          '失败的锤子线不是中性信息。一旦低点被破坏，市场其实是在告诉你：那次看涨拒绝并没有被接受。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Failed Hammer',
      patternLabel: 'Failed Hammer on QQQ — Oct 8, 2025',
      analysisText:
        'QQQ printed a credible hammer-style candle on October 8, 2025 after a decline, but the next session immediately broke the low instead of confirming. That failure mattered more than the original shape: it showed buyers could not defend the rejection and weakness kept extending.',
    },
    zh: {
      caseLabel: '失败锤子线',
      patternLabel: 'QQQ 上的失败锤子线 — 2025年10月8日',
      analysisText:
        'QQQ 在 2025 年 10 月 8 日下跌后打出一根很像锤子线的候选信号，但下一交易日不但没有确认，反而立刻跌破低点。这个失败本身比原来的形状更重要：它说明买方守不住这次拒绝，弱势于是继续延伸。',
      labelText: {
        'failed-hammer-case-label': '锤子线候选',
        'failed-hammer-case-break': '失效：低点被跌破',
      },
    },
  },
}

const failedStarCase: RealChartData = {
  chapterId: 'part4-ch22-failed-signals',
  ticker: 'SPY',
  candles: [
    { time: '2025-11-03', open: 582.4, high: 582.8, low: 577.5, close: 578.1 },
    { time: '2025-11-04', open: 577.8, high: 578.4, low: 576.2, close: 577.6 },
    { time: '2025-11-05', open: 577.9, high: 580.1, low: 577.5, close: 579.4 },
    { time: '2025-11-06', open: 579.1, high: 579.4, low: 574.8, close: 575.6 },
    { time: '2025-11-07', open: 575.2, high: 576.0, low: 571.9, close: 572.4 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'failed-star-case-box',
      timeRange: { from: '2025-11-03', to: '2025-11-05' },
      priceRange: { high: 582.8, low: 576.2 },
      pricePadding: 0.3,
      fillColor: 'rgba(38, 166, 154, 0.10)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'failed-star-case-label',
      time: '2025-11-04',
      price: 578.9,
      text: 'Star pause',
      position: 'right',
      backgroundColor: '#ffc107',
      textColor: '#1a1a1a',
      fontSize: 10,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'failed-star-case-break',
      time: '2025-11-06',
      price: 574.2,
      text: 'Weak third candle fails',
      position: 'below',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 10,
    },
  ],
  lesson: {
    steps: [
      {
        id: 'candidate-sequence',
        visibleCount: 3,
        annotationIds: ['failed-star-case-box', 'failed-star-case-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The sequence looks like it might become a morning star',
            summary:
              'After a bearish first candle, the middle session pauses with a smaller body. At this point the structure is only a candidate. It still has not earned a bullish label.',
            question: 'What still has to happen before calling this a completed reversal?',
            answer:
              'You need a strong third candle that closes high enough into the first body to prove buyers actually took over.',
            confirmationSignals: [
              'The third candle closes strongly back into the first body',
              'The sequence shows clear upside handoff after the pause',
            ],
            invalidationSignals: [
              'The third candle is weak and cannot carry the recovery',
            ],
          },
          zh: {
            title: '这组顺序看起来像是在形成晨星，但还只是候选',
            summary:
              '先有第一根阴线，再有中间一根较小实体停顿。到这里为止，它只是一个候选结构，还没有资格被正式读成看涨反转。',
            question: '在宣布形态完成之前，还必须发生什么？',
            answer:
              '必须等一根足够强的第三根 K 线，把收盘明显打回第一根实体内部，证明买方真的接过了控制权。',
            confirmationSignals: [
              '第三根 K 线强势打回第一根实体内部',
              '停顿之后，出现清晰的向上接力',
            ],
            invalidationSignals: [
              '第三根 K 线太弱，无法把恢复继续带下去',
            ],
          },
        },
      },
      {
        id: 'third-candle-too-weak',
        visibleCount: 4,
        annotationIds: ['failed-star-case-box', 'failed-star-case-label', 'failed-star-case-break'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'The third candle underdelivers and the pattern stays incomplete',
            summary:
              'November 6 tries to bounce, but the candle is too weak and the close remains poor relative to what a real morning star would require. That weak third candle is itself a warning.',
            question: 'Why is a weak third candle often dangerous?',
            answer:
              'Because it traps anyone who promoted the pattern too early. Instead of proving reversal, it shows buyers were unable to convert hesitation into control.',
            confirmationSignals: [
              'The third candle lacks real closing strength',
              'The bounce stalls before reclaiming meaningful territory',
            ],
            invalidationSignals: [
              'The next session rebuilds the whole failed recovery quickly',
            ],
          },
          zh: {
            title: '第三根太弱，整组结构因此停留在“不完整”状态',
            summary:
              '11 月 6 日虽然试图反弹，但这根 K 线明显不够强，收盘位置也达不到一个真实晨星所需要的力度。弱第三根本身，就是新的警告。',
            question: '为什么“第三根不够强”往往很危险？',
            answer:
              '因为它最容易套住那些过早宣布形态成立的人。它没有证明反转，反而说明买方没法把犹豫真正转换成控制权。',
            confirmationSignals: [
              '第三根 K 线收盘力度明显不够',
              '反弹在收回关键区域前就已经停住',
            ],
            invalidationSignals: [
              '下一交易日迅速把这次失败恢复区整个搭回来',
            ],
          },
        },
      },
      {
        id: 'bearish-follow-through',
        visibleCount: 5,
        annotationIds: ['failed-star-case-box', 'failed-star-case-label', 'failed-star-case-break'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Later weakness confirms the sequence failed',
            summary:
              'The next session leans lower again instead of extending the attempted recovery. That is the takeaway: some stars fail not because the middle candle was wrong, but because the third candle never truly completed the handoff.',
            question: 'What is the most important habit from failed star setups?',
            answer:
              'Do not rush to label the pattern complete at the pause candle. If the third candle is weak, treat that weakness as fresh information instead of forcing the bullish story.',
            confirmationSignals: [
              'Later candles resume the original weakness',
              'No real upside handoff develops after the pause',
            ],
            invalidationSignals: [
              'The market springs back and completes the reversal belatedly',
            ],
          },
          zh: {
            title: '后续再次转弱，证明这组星线并没有真正完成',
            summary:
              '下一交易日没有继续恢复，反而再次走弱。这个案例最重要的地方在于：有些星线失败，不是因为中间那根停顿看错了，而是因为第三根从来没有真正完成接力。',
            question: '失败星线最该训练你什么习惯？',
            answer:
              '不要在中间那根停顿蜡烛出现时就急着宣布形态完成。只要第三根明显偏弱，就要把这种偏弱当作新信息，而不是硬把故事往看涨方向解释。',
            confirmationSignals: [
              '后续蜡烛重新回到原有弱势',
              '停顿之后始终没有形成真实向上接力',
            ],
            invalidationSignals: [
              '市场随后又弹起并迟到地完成反转',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This failure case is about incompletion, not shape. The pause candle appears, but the third candle never provides the strength needed to finish the reversal.',
        conclusion:
          'A failed star sequence teaches patience: if the third candle is weak, the market has not accepted the bullish story yet.',
      },
      zh: {
        intro:
          '这个失败案例强调的不是外形，而是“不完整”。中间停顿确实出现了，但第三根始终没有给出足够力度去完成反转。',
        conclusion:
          '失败星线最重要的教训是耐心：只要第三根偏弱，市场就还没有接受那套看涨故事。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Failed Star Sequence',
      patternLabel: 'Weak Morning-Star Attempt on SPY — Nov 3–7, 2025',
      analysisText:
        'SPY showed a bearish first candle and then a pause candle that looked like a possible morning-star setup, but the third candle never delivered enough strength to complete the reversal. Later weakness confirmed that the sequence had remained incomplete rather than bullish.',
    },
    zh: {
      caseLabel: '失败星线结构',
      patternLabel: 'SPY 上的失败晨星尝试 — 2025年11月3-7日',
      analysisText:
        'SPY 先有一根阴线，再有一根看起来像晨星中间停顿的小实体，但第三根 K 线始终没有给出足够力度去完成这次反转。后续再次转弱，确认这组结构始终停留在“不完整尝试”，而不是看涨完成态。',
      labelText: {
        'failed-star-case-label': '星线停顿',
        'failed-star-case-break': '第三根太弱，结构失败',
      },
    },
  },
}

const failedWindowCase: RealChartData = {
  chapterId: 'part4-ch22-failed-signals',
  ticker: 'BTC-USD',
  candles: [
    { time: '2025-12-01', open: 68400, high: 70100, low: 68100, close: 69850 },
    { time: '2025-12-02', open: 71100, high: 72400, low: 70900, close: 72050 },
    { time: '2025-12-03', open: 71700, high: 71950, low: 69300, close: 69840 },
    { time: '2025-12-04', open: 69720, high: 70100, low: 67650, close: 68180 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'failed-window-case-box',
      timeRange: { from: '2025-12-01', to: '2025-12-02' },
      priceRange: { high: 70900, low: 70100 },
      fillColor: 'rgba(38, 166, 154, 0.12)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'failed-window-case-label',
      time: '2025-12-02',
      price: 72600,
      text: 'Rising window',
      position: 'above',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 10,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'failed-window-case-fill',
      time: '2025-12-03',
      price: 69150,
      text: 'Immediate gap fill',
      position: 'below',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 10,
    },
  ],
  lesson: {
    steps: [
      {
        id: 'window-appears',
        visibleCount: 2,
        annotationIds: ['failed-window-case-box', 'failed-window-case-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The rising window initially looks like strong continuation',
            summary:
              'BTC-USD gaps higher on December 2 and leaves a clear empty window behind. At first glance, that looks like demand-driven continuation.',
            question: 'What should happen next if the window is healthy?',
            answer:
              'Price should stay above or around the gap zone. A good rising window usually turns the empty space into support rather than filling it immediately.',
            confirmationSignals: [
              'The next session respects the gap zone',
              'The market stays above the lower edge of the window',
            ],
            invalidationSignals: [
              'The gap is filled almost immediately',
            ],
          },
          zh: {
            title: '这个上升窗口一开始看起来像强势延续',
            summary:
              'BTC-USD 在 12 月 2 日向上跳空，并在图上留下清晰空白。乍一看，这很像需求推动下的趋势延续。',
            question: '如果这个窗口是健康的，后面最该发生什么？',
            answer:
              '价格应该继续待在缺口附近或其上方。一个好的上升窗口，通常会把空白区转成支撑，而不是马上被补完。',
            confirmationSignals: [
              '下一交易日尊重这块缺口区域',
              '市场维持在窗口下沿之上',
            ],
            invalidationSignals: [
              '缺口几乎立刻就被回补',
            ],
          },
        },
      },
      {
        id: 'gap-fills-fast',
        visibleCount: 3,
        annotationIds: ['failed-window-case-box', 'failed-window-case-label', 'failed-window-case-fill'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'The gap fills too quickly and continuation logic weakens',
            summary:
              'December 3 drops back through the entire window instead of defending it. That fast fill is the opposite of what a healthy continuation gap should do.',
            question: 'Why is a fast gap fill a serious warning?',
            answer:
              'Because it says the supposed urgency from buyers was not durable. If the market cannot defend empty space for even one session, the continuation story is much weaker.',
            confirmationSignals: [
              'Price trades right back through the gap zone',
              'The close fails to hold above the support the window was supposed to create',
            ],
            invalidationSignals: [
              'The market springs back above the gap immediately after filling it',
            ],
          },
          zh: {
            title: '缺口被太快补掉，延续逻辑因此大幅减弱',
            summary:
              '12 月 3 日直接回落并穿过整个窗口，而不是在这里防守。对于一个本该代表强势延续的缺口来说，这种快速回补恰恰是反面信号。',
            question: '为什么“回补太快”是严重警告？',
            answer:
              '因为它说明之前买方表现出来的急迫性并不持久。连一个交易日都守不住的空白区，很难继续支撑原本的延续故事。',
            confirmationSignals: [
              '价格直接穿回整个缺口区域',
              '收盘无法守在这个窗口原本应形成的支撑上方',
            ],
            invalidationSignals: [
              '回补之后市场立刻又重新站回缺口上方',
            ],
          },
        },
      },
      {
        id: 'failure-extends',
        visibleCount: 4,
        annotationIds: ['failed-window-case-box', 'failed-window-case-label', 'failed-window-case-fill'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Later weakness confirms the window failed as support',
            summary:
              'The following session continues lower instead of reclaiming the gap. That is the real lesson: when a window fails immediately, it can become evidence that the trend was less stable than it looked.',
            question: 'What should a failed rising window teach you to stop assuming?',
            answer:
              'Stop assuming every gap is bullish by default. A window only deserves continuation respect if the market actually defends it afterward.',
            confirmationSignals: [
              'Later price continues lower after the fill',
              'The market never rebuilds above the failed gap zone',
            ],
            invalidationSignals: [
              'Price quickly reclaims the whole failed window area',
            ],
          },
          zh: {
            title: '后续继续走弱，说明这个窗口没有支撑成功',
            summary:
              '接下来的交易日没有重新站回缺口上方，反而继续走弱。这才是最重要的教学点：一个窗口如果立刻失败，它反而能证明趋势并没有表面看上去那么稳定。',
            question: '失败的上升窗口，最该帮你停止哪种想当然？',
            answer:
              '不要默认所有缺口天然看涨。只有后续市场真的守住它，窗口才配得上“延续”这层解读。',
            confirmationSignals: [
              '回补之后价格继续走低',
              '市场始终没能重新站回失败窗口区域上方',
            ],
            invalidationSignals: [
              '价格很快又重新收回整个失败窗口区',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This last failure case shows that a gap can look strong for one day and still fail if the market will not defend the window afterward.',
        conclusion:
          'A rising window is only bullish if later price respects it. Fast gap fills are not small details; they are the failure signal itself.',
      },
      zh: {
        intro:
          '最后这个失败案例说明：一个缺口就算第一天看起来很强，如果后面守不住，依然会失败。',
        conclusion:
          '上升窗口只有在后续价格尊重它时才真正偏多。快速回补不是小瑕疵，而是形态本身的失败信号。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Failed Rising Window',
      patternLabel: 'Failed Rising Window on BTC-USD — Dec 2, 2025',
      analysisText:
        'BTC-USD first gapped higher on December 2, 2025 and created what looked like a healthy rising window. But the very next session filled the gap and the market kept slipping afterward, showing that the supposed continuation support had failed almost immediately.',
    },
    zh: {
      caseLabel: '失败上升窗口',
      patternLabel: 'BTC-USD 上的失败上升窗口 — 2025年12月2日',
      analysisText:
        'BTC-USD 先在 2025 年 12 月 2 日向上跳空，看起来像一组健康的上升窗口。但下一交易日几乎立刻把缺口回补，随后市场继续走弱，说明这个本该代表延续支撑的窗口几乎立即失效了。',
      labelText: {
        'failed-window-case-label': '上升窗口',
        'failed-window-case-fill': '立刻回补',
      },
    },
  },
}

export const realCharts: RealChartData[] = [
  failedHammerCase,
  failedStarCase,
  failedWindowCase,
]

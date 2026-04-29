import type { RealChartData } from '@/types/realChart'

// NVDA Oct 1 – Oct 21, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Tweezers Top on Oct 9–10, 2025
//   Oct 9 (bull): O=192.23, H=195.30, L=191.06, C=192.57
//   Oct 10 (bear): O=193.51, H=195.62, L=182.05, C=183.16
//   Highs: 195.30 and 195.62 — near-identical resistance at $195 zone.
//   The second session rejected the same ceiling and collapsed, confirming the top.

export const realChart: RealChartData = {
  chapterId: 'part2-ch09-tweezers',
  ticker: 'NVDA',
  candles: [
    { time: '2025-10-01', open: 185.24, high: 188.14, low: 183.90, close: 187.24 },
    { time: '2025-10-02', open: 189.60, high: 191.05, low: 188.06, close: 188.89 },
    { time: '2025-10-03', open: 189.19, high: 190.36, low: 185.38, close: 187.62 },
    { time: '2025-10-06', open: 185.50, high: 187.23, low: 183.33, close: 185.54 },
    { time: '2025-10-07', open: 186.23, high: 189.06, low: 184.00, close: 185.04 },
    { time: '2025-10-08', open: 186.57, high: 189.60, low: 186.54, close: 189.11 },
    { time: '2025-10-09', open: 192.23, high: 195.30, low: 191.06, close: 192.57 }, // Tweezers Top day 1
    { time: '2025-10-10', open: 193.51, high: 195.62, low: 182.05, close: 183.16 }, // Tweezers Top day 2
    { time: '2025-10-13', open: 187.97, high: 190.11, low: 185.96, close: 188.32 },
    { time: '2025-10-14', open: 184.77, high: 184.80, low: 179.70, close: 180.03 },
    { time: '2025-10-15', open: 184.80, high: 184.87, low: 177.29, close: 179.83 },
    { time: '2025-10-16', open: 182.23, high: 183.28, low: 179.77, close: 181.81 },
    { time: '2025-10-17', open: 180.18, high: 184.10, low: 179.75, close: 183.22 },
    { time: '2025-10-20', open: 183.13, high: 185.20, low: 181.73, close: 182.64 },
    { time: '2025-10-21', open: 182.79, high: 182.79, low: 179.80, close: 181.16 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'tweezers-box',
      timeRange: { from: '2025-10-09', to: '2025-10-10' },
      priceRange: { high: 195.62, low: 182.05 },
      pricePadding: 0.5,
      fillColor: 'rgba(239, 83, 80, 0.12)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'hline',
      id: 'resistance-line',
      price: 195.45,
      color: 'rgba(239, 83, 80, 0.7)',
      width: 1,
      dash: [4, 3],
    },
    {
      kind: 'label',
      id: 'tweezers-label',
      time: '2025-10-10',
      price: 197.5,
      text: 'Tweezers Top ≈ $195.4',
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
        id: 'approach-resistance',
        visibleCount: 7,
        annotationIds: ['resistance-line'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The first touch defines the ceiling to watch',
            summary:
              'By October 9, NVDA has pushed back into the $195 area. The first high matters because it marks a level that traders now have to monitor: if the next session revisits that zone and fails, the level becomes much more meaningful.',
            question:
              'After the first test of a high, what would make the next day’s revisit analytically important?',
            answer:
              'A second test that cannot break through and instead reverses hard. That would show the level is not random; it is defended.',
            confirmationSignals: [
              'The next session retests the same price zone',
            ],
            invalidationSignals: [
              'The next session cleanly breaks out and holds above the level',
            ],
          },
          zh: {
            title: '第一次摸到高点，只是先定义观察上限',
            summary:
              '到 10 月 9 日，NVDA 已经重新推到 195 美元区域。第一次高点的重要性在于：它先告诉你这个价位值得盯住。如果下一天再次测试并失败，这个水平才会变得真正有分析意义。',
            question: '第一次冲高之后，什么会让第二天的再次测试变得关键？',
            answer:
              '第二次测试如果突破不了并出现强烈反转，就说明这个位置不是偶然，而是真正有人在防守。',
            confirmationSignals: [
              '下一交易日再次测试相同价位区域',
            ],
            invalidationSignals: [
              '下一交易日干净突破并稳稳站上该区域',
            ],
          },
        },
      },
      {
        id: 'second-failure',
        visibleCount: 8,
        annotationIds: ['tweezers-box', 'resistance-line', 'tweezers-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'The second failure turns the level into a Tweezers Top',
            summary:
              'October 10 probes the same $195 zone again, even slightly higher, but collapses into a very weak close. That second rejection is the essence of the pattern: the market discovered a ceiling and then proved the ceiling mattered.',
            question: 'Why is the nearly identical high more important than the pattern name itself?',
            strengthLabel: 'High-quality level-based warning',
            strengthReason:
              'The signal is strong because the second candle is not failing at a random price. It is rejecting the same visible ceiling the prior session already identified.',
            failurePrompt: 'How would this bearish top read fail?',
            failureScenario:
              'If price quickly reclaimed the $195 area and closed above it, then the repeated highs would stop being resistance and start looking like a failed breakout shakeout instead.',
            failureAnswer:
              'That would flip the interpretation from “shared ceiling” to “temporary rejection inside a larger breakout attempt.”',
            comparisonPrompt:
              'What is the best read once the second day fails from almost the same high?',
            comparisonOptions: [
              'Tweezers Top at resistance',
              'Bullish breakout continuation',
              'Bearish Engulfing',
            ],
            comparisonAnswer: 'Tweezers Top at resistance',
            comparisonExplanation:
              'The repeated high is the main clue. This is not breakout continuation because the second day fails instead of holding above the level, and it is not mainly a bearish engulfing lesson because the shared ceiling is the real structural signal.',
            checklistItems: [
              'Day two retests almost the same high zone as day one',
              'Day two cannot hold above that ceiling',
              'The close is much weaker than the intraday high',
              'The rejection happens at a visible horizontal resistance area',
            ],
            answer:
              'Because it ties the candle to structure. The pattern works here because the repeated highs reveal real resistance, not because two candles merely look similar.',
            confirmationSignals: [
              'The second day rejects the same high zone',
              'The close is dramatically weaker than the intraday high',
            ],
            invalidationSignals: [
              'The second day closes strong near the highs instead of collapsing',
            ],
          },
          zh: {
            title: '第二次冲高失败，才把它变成镊子顶',
            summary:
              '10 月 10 日再次上探同样的 195 美元区域，甚至略微更高，但随后暴跌收弱。第二次拒绝同一高位，才是这个形态的本质：市场先发现天花板，然后又证明这个天花板真的有效。',
            question: '为什么“几乎相同的高点”比形态名字本身更重要？',
            strengthLabel: '高质量的关键位预警',
            strengthReason:
              '这个信号偏强，不是因为两根 K 线外观相似，而是因为第二次失败正好发生在前一天已经显露出来的同一阻力天花板上。',
            failurePrompt: '什么样的后续会让这个顶部解读失效？',
            failureScenario:
              '如果价格很快重新站回 195 美元区域并强势收在其上，那重复高点就不再是阻力，而更像是假突破洗盘中的短暂拒绝。',
            failureAnswer:
              '那时解读重点就会从“共享天花板”转成“更大突破尝试中的中途震荡”。',
            comparisonPrompt:
              '当第二天从几乎相同的高点位置失败时，最准确的读法是什么？',
            comparisonOptions: [
              '阻力位上的镊子顶',
              '看涨突破延续',
              '看跌吞没',
            ],
            comparisonAnswer: '阻力位上的镊子顶',
            comparisonExplanation:
              '这里最重要的是重复高点，不是单根实体大小。它不是突破延续，因为第二天没有站稳高位；它也不该主要读成吞没，因为真正提供结构信息的是共享阻力位上的再次失败。',
            checklistItems: [
              '第二天重新测试了和第一天几乎相同的高位区域',
              '第二天没能稳稳站上这个天花板',
              '收盘相对盘中高点明显偏弱',
              '拒绝动作发生在清晰的水平阻力区',
            ],
            answer:
              '因为它把蜡烛图和价格结构连接起来。这里真正有效的是重复高点揭示了真实阻力，而不只是两根 K 线长得像。',
            confirmationSignals: [
              '第二天再次拒绝同一高位区域',
              '收盘相对盘中高点极度疲弱',
            ],
            invalidationSignals: [
              '第二天不是崩跌，而是接近高点强势收盘',
            ],
          },
        },
      },
      {
        id: 'resistance-holds',
        visibleCount: 15,
        annotationIds: ['tweezers-box', 'resistance-line', 'tweezers-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Later drift lower confirms resistance held',
            summary:
              'Subsequent sessions fail to recapture the $195 area and drift lower over the following days. That follow-through is what tells you the repeated highs really marked a ceiling rather than a one-day anomaly.',
            question: 'What should you take away from this pattern structurally?',
            strengthLabel: 'Confirmed by follow-through',
            strengthReason:
              'The pattern earns more confidence because the market keeps respecting the ceiling afterward. Without that later weakness, the repeated highs would be less trustworthy.',
            failurePrompt: 'What would have reduced confidence even after the pattern printed?',
            failureScenario:
              'A fast bounce back into the resistance band with no hesitation would suggest the second-day collapse was dramatic but not durable.',
            failureAnswer:
              'That is why later respect matters. Follow-through turns a visual pattern into a usable structural read.',
            answer:
              'Tweezers Top is best read as repeated failure at a shared level. The candles matter because they reveal where supply is waiting.',
            confirmationSignals: [
              'Price cannot retake the resistance zone',
              'The market keeps leaning lower after the second rejection',
            ],
            invalidationSignals: [
              'A quick recovery back above the resistance band',
            ],
          },
          zh: {
            title: '后续回落说明阻力位确实生效了',
            summary:
              '之后几个交易日都没能重新收回 195 美元区域，价格继续往下漂移。正是这种后续表现告诉你：重复高点并不是单日巧合，而是真正的顶部区域。',
            question: '从结构角度看，这个形态最值得学的是什么？',
            strengthLabel: '后续跟随让它更可信',
            strengthReason:
              '这个结构之所以越来越有把握，是因为市场后面持续尊重这个天花板。如果没有后续偏弱，重复高点的可信度就会低很多。',
            failurePrompt: '即便形态已经打印出来，什么情况仍会明显降低把握？',
            failureScenario:
              '如果价格很快就重新弹回阻力带，而且几乎没有犹豫，那第二天的大跌就更像戏剧性波动，而不是耐久的结构切换。',
            failureAnswer:
              '这就是为什么要等后续跟随。真正可用的结构，不只是长得像，还得被后面的价格持续尊重。',
            answer:
              '镊子顶最适合被理解为“共享阻力位上的重复失败”。蜡烛图重要，是因为它把供给真正出现的位置显露出来。',
            confirmationSignals: [
              '价格无法重新站回阻力区',
              '第二次拒绝后市场持续偏弱',
            ],
            invalidationSignals: [
              '价格迅速重新突破并站稳阻力带',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This case teaches how to combine candle shapes with horizontal levels: the repeated high matters more than the label “Tweezers Top.”',
        conclusion:
          'Read tweezers as evidence that the same price zone rejected buyers twice, then check whether later candles respect that ceiling.',
        checkpointPrompt:
          'What is the best structural takeaway from this tweezers-top lesson?',
        checkpointOptions: [
          'Two candles with similar highs are automatically bearish',
          'Tweezers Top matters most when repeated highs reveal a defended resistance level and later candles keep respecting it',
          'The second day only matters if it fully engulfs the first day body',
        ],
        checkpointAnswer:
          'Tweezers Top matters most when repeated highs reveal a defended resistance level and later candles keep respecting it',
        checkpointExplanation:
          'That is the durable lesson: the pattern is useful because it exposes supply at a shared ceiling, then later price action confirms that the ceiling is real.',
      },
      zh: {
        intro:
          '这个案例的重点是把蜡烛图和水平阻力位结合起来读：真正重要的是重复高点，而不只是“镊子顶”这个名字。',
        conclusion:
          '把镊子顶理解成“同一价位两次拒绝买方”，再观察后续蜡烛是否继续尊重这个顶部区域。',
        checkpointPrompt:
          '这个镊子顶案例最重要的结构结论是什么？',
        checkpointOptions: [
          '只要两根 K 线高点接近，就天然看跌',
          '镊子顶真正有用，是因为重复高点暴露了被防守的阻力位，而且后续价格继续尊重它',
          '第二天只有在完整吞没第一天实体时才有意义',
        ],
        checkpointAnswer:
          '镊子顶真正有用，是因为重复高点暴露了被防守的阻力位，而且后续价格继续尊重它',
        checkpointExplanation:
          '这才是最耐用的理解：形态之所以可用，不是因为名字本身，而是因为它把供给集中的共享天花板显露出来，并被后续走势进一步验证。',
      },
    },
  },
  locale: {
    en: {
      patternLabel: 'Tweezers Top at $195 — Oct 9–10, 2025',
      analysisText:
        "On October 9 and 10, NVDA tested the same resistance zone twice: the first session reached a high of $195.30, and the next session probed even higher to $195.62 — but the second candle closed at $183.16, a brutal $10.46 reversal. The near-identical highs forming the Tweezers Top (dashed line at $195.45) showed that sellers were firmly entrenched at that level. The pattern accurately identified the short-term ceiling, and NVDA drifted lower for the next two weeks.",
    },
    zh: {
      patternLabel: '高位镊子顶 约$195 — 2025年10月9-10日',
      analysisText:
        '10月9日与10日，英伟达连续两次测试同一阻力区域：第一日高点195.30美元，次日更上探至195.62美元——但第二根K线收盘183.16美元，出现高达10.46美元的残酷反转。两日高点几乎相同（虚线约195.45美元），构成镊子顶形态，表明空方在该区域牢固设防。这一形态准确标识了短期顶部，此后NVDA在两周内持续走低。',
      labelText: {
        'tweezers-label': '镊子顶 ≈ $195.4',
      },
    },
  },
}

const tweezersBottomCase: RealChartData = {
  chapterId: 'part2-ch09-tweezers',
  ticker: 'NVDA',
  candles: [
    { time: '2026-02-03', open: 189.10, high: 190.24, low: 185.44, close: 186.02 },
    { time: '2026-02-04', open: 185.86, high: 186.55, low: 181.72, close: 182.31 },
    { time: '2026-02-05', open: 182.10, high: 183.22, low: 178.64, close: 179.08 },
    { time: '2026-02-06', open: 178.84, high: 180.15, low: 175.93, close: 176.44 },
    { time: '2026-02-09', open: 176.20, high: 177.18, low: 171.92, close: 173.10 }, // first low
    { time: '2026-02-10', open: 171.84, high: 183.64, low: 171.92, close: 182.41 }, // same low + reverse
    { time: '2026-02-11', open: 182.55, high: 184.22, low: 180.98, close: 183.66 },
    { time: '2026-02-12', open: 183.14, high: 183.88, low: 180.42, close: 181.15 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'tweezers-bottom-box',
      timeRange: { from: '2026-02-09', to: '2026-02-10' },
      priceRange: { high: 183.64, low: 171.92 },
      pricePadding: 0.4,
      fillColor: 'rgba(38, 166, 154, 0.10)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'hline',
      id: 'support-line',
      price: 171.92,
      color: 'rgba(38, 166, 154, 0.7)',
      width: 1,
      dash: [4, 3],
    },
    {
      kind: 'label',
      id: 'tweezers-bottom-label',
      time: '2026-02-10',
      price: 170.0,
      text: 'Tweezers Bottom',
      position: 'below',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  lesson: {
    steps: [
      {
        id: 'selloff-into-support',
        visibleCount: 5,
        annotationIds: ['support-line'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The first low defines the floor to watch',
            summary:
              'By February 9, NVDA has sold off into a visible low near $171.9. That first touch matters because it gives the next session a precise support level to retest.',
            question: 'What would make the next session’s retest more meaningful than random volatility?',
            answer:
              'If price revisits the same floor and buyers defend it hard, the shared low begins to look like real support.',
            confirmationSignals: ['The next session retests the same low zone'],
            invalidationSignals: ['The next session cleanly breaks through support and stays there'],
          },
          zh: {
            title: '第一次探低，先定义要观察的支撑位',
            summary:
              '到 2 月 9 日，NVDA 已经跌到接近 171.9 美元的明显低点。第一次低点的重要性在于，它给了下一交易日一个很清楚的支撑测试位置。',
            question: '什么会让下一交易日的再次探底比随机波动更有意义？',
            answer:
              '如果价格再次回到同一低位并被买方强力守住，那么这个共同低点就开始具备真实支撑含义。',
            confirmationSignals: ['下一交易日再次测试相同低点区域'],
            invalidationSignals: ['下一交易日直接跌穿支撑并持续停留其下'],
          },
        },
      },
      {
        id: 'double-defense',
        visibleCount: 6,
        annotationIds: ['tweezers-bottom-box', 'support-line', 'tweezers-bottom-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'The second defense turns the level into a Tweezers Bottom',
            summary:
              'February 10 touches the same low and then reverses sharply higher. That shared low is what matters: buyers defended the level twice, and the second session finished with clear recovery instead of panic.',
            question: 'Why is the repeated low more important than the pattern name?',
            answer:
              'Because the signal comes from structure. The matching low shows actual demand waiting at that price, not just two candles that happen to look similar.',
            confirmationSignals: ['The second day rejects the same low zone', 'The second day closes with clear recovery'],
            invalidationSignals: ['The second day revisits the low but cannot rebound from it'],
          },
          zh: {
            title: '第二次守住低点，才把它变成镊子底',
            summary:
              '2 月 10 日再次碰到同样低点后迅速反转上去。真正重要的不是名字，而是这个共同低点：买方两次守住了同一个价位，而且第二天收出了明确恢复。',
            question: '为什么“重复低点”比形态名字本身更重要？',
            answer:
              '因为信号来自价格结构。相同低点说明这个位置有真实买盘在等，而不只是两根 K 线看起来碰巧相似。',
            confirmationSignals: ['第二天再次拒绝同一低点区域', '第二天收盘明显恢复'],
            invalidationSignals: ['第二天虽然再探低点，但完全没有反弹能力'],
          },
        },
      },
      {
        id: 'support-holds',
        visibleCount: 8,
        annotationIds: ['tweezers-bottom-box', 'support-line', 'tweezers-bottom-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'Later price action confirms that support held',
            summary:
              'The following sessions hold above the defended low rather than collapsing through it. That is what confirms the tweezers-bottom read: the market respected the floor it revealed.',
            question: 'What should you retain structurally from this pattern?',
            answer:
              'Tweezers Bottom is best read as repeated defense of a shared floor. The candles matter because they expose where demand is willing to step in.',
            confirmationSignals: ['Price stays above the shared low', 'The market no longer behaves like one-way panic selling'],
            invalidationSignals: ['Price quickly falls back through the shared low again'],
          },
          zh: {
            title: '后续没有再崩掉，说明支撑确实生效了',
            summary:
              '之后几根 K 线并没有重新跌穿这个共同低点，而是大体守在其上方。这才真正确认了镊子底的结构解读：市场尊重了它自己暴露出来的地板。',
            question: '从结构角度最该带走的理解是什么？',
            answer:
              '镊子底最适合被理解成“共享低点上的重复防守”。蜡烛图有价值，是因为它把真实需求出现的位置显露了出来。',
            confirmationSignals: ['价格维持在共同低点上方', '市场不再表现成单边恐慌抛售'],
            invalidationSignals: ['价格很快再次跌穿这个共同低点'],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This mirror case teaches the bullish side of tweezers: the repeated low matters because it reveals a price floor buyers defended twice.',
        conclusion:
          'Tweezers Bottom works best when you read it as shared support plus recovery, then check that later candles keep respecting the floor.',
      },
      zh: {
        intro:
          '这个镜像案例训练的是镊子形态的看涨一侧：重复低点之所以重要，是因为它暴露了买方两次防守的价格地板。',
        conclusion:
          '镊子底最好的阅读方式，是把它看成“共享支撑 + 恢复反击”，再观察后续蜡烛是否继续尊重这个地板。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Tweezers Bottom',
      patternLabel: 'Tweezers Bottom — Feb 9–10, 2026',
      analysisText:
        'After several weak sessions, NVDA printed nearly identical lows on February 9 and 10, 2026 around $171.9. The second session reversed sharply higher off the same floor, turning that repeated low into a clean tweezers-bottom support signal.',
    },
    zh: {
      caseLabel: '镊子底',
      patternLabel: '镊子底 — 2026年2月9-10日',
      analysisText:
        '在连续多日走弱之后，NVDA 于 2026 年 2 月 9 日与 10 日在约 171.9 美元附近打出几乎相同的低点。第二天从同一地板位置快速反转上行，使这个重复低点变成了一个清晰的镊子底支撑信号。',
      labelText: {
        'tweezers-bottom-label': '镊子底',
      },
    },
  },
}

export const realCharts: RealChartData[] = [realChart, tweezersBottomCase]

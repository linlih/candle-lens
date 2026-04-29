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
      },
      zh: {
        intro:
          '这个案例的重点是把蜡烛图和水平阻力位结合起来读：真正重要的是重复高点，而不只是“镊子顶”这个名字。',
        conclusion:
          '把镊子顶理解成“同一价位两次拒绝买方”，再观察后续蜡烛是否继续尊重这个顶部区域。',
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

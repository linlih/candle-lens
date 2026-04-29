import type { RealChartData } from '@/types/realChart'

// NVDA Feb 27 – Mar 19, 2026 (16 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Doji with Long Upper Shadow at Resistance — Mar 16, 2026
//   O=182.97, H=188.88, L=181.41, C=183.22  body=0.25, upper shadow=5.66
//   Context: NVDA declined from $197 (Feb 25) → $175 (Mar 9), then bounced.
//   On Mar 16 the recovery rally tested prior support-turned-resistance near $188-189.
//   The long upper shadow shows price rejection at that level (western resistance confluence).
//   Bearish follow-through on Mar 17 confirms the candlestick signal.

export const realChart: RealChartData = {
  chapterId: 'part4-ch13-western',
  ticker: 'NVDA',
  candles: [
    { time: '2026-02-27', open: 181.25, high: 182.59, low: 176.38, close: 177.19 },
    { time: '2026-03-02', open: 175.01, high: 183.46, low: 174.64, close: 182.48 },
    { time: '2026-03-03', open: 178.49, high: 180.90, low: 176.92, close: 180.05 },
    { time: '2026-03-04', open: 180.44, high: 184.70, low: 180.06, close: 183.04 },
    { time: '2026-03-05', open: 181.17, high: 184.06, low: 177.88, close: 183.34 },
    { time: '2026-03-06', open: 179.84, high: 182.76, low: 176.82, close: 177.82 },
    { time: '2026-03-09', open: 176.83, high: 182.91, low: 175.56, close: 182.65 },
    { time: '2026-03-10', open: 182.40, high: 186.44, low: 182.01, close: 184.77 },
    { time: '2026-03-11', open: 185.91, high: 187.62, low: 184.45, close: 186.03 },
    { time: '2026-03-12', open: 184.05, high: 184.94, low: 181.75, close: 183.14 },
    { time: '2026-03-13', open: 184.92, high: 186.09, low: 179.94, close: 180.25 },
    { time: '2026-03-16', open: 182.97, high: 188.88, low: 181.41, close: 183.22 }, // Doji at resistance
    { time: '2026-03-17', open: 185.06, high: 185.40, low: 181.68, close: 181.93 }, // Bearish confirm
    { time: '2026-03-18', open: 182.48, high: 183.38, low: 180.33, close: 180.40 },
    { time: '2026-03-19', open: 178.01, high: 179.98, low: 175.79, close: 178.56 },
    { time: '2026-03-20', open: 178.00, high: 178.26, low: 171.72, close: 172.70 },
  ],
  annotations: [
    {
      kind: 'hline',
      id: 'resistance-line',
      price: 188.5,
      color: 'rgba(239, 83, 80, 0.7)',
      width: 1,
      dash: [5, 4],
    },
    {
      kind: 'box',
      id: 'doji-box',
      timeRange: { from: '2026-03-16', to: '2026-03-16' },
      priceRange: { high: 188.88, low: 181.41 },
      pricePadding: 0.3,
      fillColor: 'rgba(255, 193, 7, 0.15)',
      borderColor: '#ffc107',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'resistance-label',
      time: '2026-03-11',
      price: 189.8,
      text: 'Prior Support → Resistance',
      position: 'above',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 10,
      arrowhead: false,
    },
    {
      kind: 'label',
      id: 'doji-label',
      time: '2026-03-16',
      price: 190.5,
      text: 'Doji + Rejection',
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
        id: 'approach-resistance',
        visibleCount: 11,
        annotationIds: ['resistance-line', 'resistance-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The location creates the setup before the candle appears',
            summary:
              'By March 13, NVDA has rebounded into the same $188 to $189 area that used to support price earlier. This is where western chart structure matters: if the rally stalls here, the candlestick signal gains much more weight because it is happening at a known resistance zone.',
            question:
              'Why should resistance be identified before the reversal candle prints?',
            answer:
              'Because structure gives the candle meaning. Without a known level, a rejection candle is weaker; at a clear resistance zone, the same candle becomes part of a larger analytical story.',
            confirmationSignals: [
              'Price pushes into a prior support-turned-resistance zone',
              'The rally begins to hesitate near that ceiling',
            ],
            invalidationSignals: [
              'Price cleanly breaks and holds above resistance',
            ],
          },
          zh: {
            title: '先有关键位置，后有蜡烛图意义',
            summary:
              '到 3 月 13 日，NVDA 已经反弹回到 188 到 189 美元区域，而这里正是之前的支撑转阻力位置。西方结构分析在这里先搭好了舞台：如果反弹在这里停住，随后出现的蜡烛图信号就会更有分量。',
            question: '为什么阻力位应该在反转 K 线出现前就先识别出来？',
            answer:
              '因为位置赋予了蜡烛图含义。没有关键位时，拒绝型 K 线往往偏弱；放在清晰阻力区里，同样的蜡烛图就变成了更完整的分析故事。',
            confirmationSignals: [
              '价格推进到前支撑转阻力区域',
              '反弹在该天花板附近开始犹豫',
            ],
            invalidationSignals: [
              '价格干净突破并稳稳站上阻力位',
            ],
          },
        },
      },
      {
        id: 'doji-rejection',
        visibleCount: 12,
        annotationIds: ['resistance-line', 'resistance-label', 'doji-box', 'doji-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'The Doji rejection ties candlestick logic to resistance',
            summary:
              'March 16 spikes into resistance intraday, then closes back near the open with a long upper shadow. This is the exact confluence you want to teach: the candle shape says rejection, and the western level explains why that rejection matters.',
            question:
              'What makes this stronger than seeing a Doji in the middle of nowhere?',
            answer:
              'Here the Doji is not isolated. The upper shadow shows rejection, and the rejection happens at a pre-identified resistance band. Candle plus structure is stronger than either one alone.',
            confirmationSignals: [
              'Intraday price probes resistance and fails',
              'The close returns near the open after a long upper shadow',
            ],
            invalidationSignals: [
              'The same session closes strongly above the resistance zone',
            ],
          },
          zh: {
            title: '十字星拒绝，把蜡烛图和阻力位真正连了起来',
            summary:
              '3 月 16 日盘中冲进阻力区，但收盘又回到接近开盘价的位置，并留下很长上影线。这正是最值得教学的共振：蜡烛图形态告诉你“被拒绝”，而西方阻力位告诉你“为什么这次拒绝重要”。',
            question: '为什么这比在随机位置看到一根十字星更强？',
            answer:
              '因为这根十字星不是孤立出现的。上影线显示了拒绝，而拒绝又正好发生在事先识别好的阻力带里。蜡烛图加结构，比单独任何一个都更强。',
            confirmationSignals: [
              '盘中上探阻力位后失败',
              '长上影后收盘重新回到开盘价附近',
            ],
            invalidationSignals: [
              '当天强势收在阻力区上方',
            ],
          },
        },
      },
      {
        id: 'downside-confirmation',
        visibleCount: 16,
        annotationIds: ['resistance-line', 'resistance-label', 'doji-box', 'doji-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Later weakness confirms the confluence signal',
            summary:
              'The following sessions fail to reclaim the rejected area and the market rolls lower again. That follow-through validates the combined reading: resistance held, and the candlestick warning was not just cosmetic.',
            question:
              'What is the main teaching point of combining western levels with candlesticks?',
            answer:
              'Candles tell you how price behaved at the level; western structure tells you why the level matters. Together they give you a cleaner framework for confirmation and invalidation.',
            confirmationSignals: [
              'Price cannot recapture the rejected resistance zone',
              'Subsequent candles keep leaning lower',
            ],
            invalidationSignals: [
              'A quick bullish recovery back through resistance',
            ],
          },
          zh: {
            title: '后续继续走弱，证明共振信号不是表面现象',
            summary:
              '之后几个交易日都没能重新收回被拒绝的区域，市场再次往下滑。这种跟随走势验证了前面的组合解读：阻力位确实生效，而蜡烛图预警也不是“看起来像而已”。',
            question: '把西方关键位和蜡烛图结合，最核心的教学点是什么？',
            answer:
              '蜡烛图告诉你价格在这个位置上“怎么表现”，西方结构告诉你这个位置“为什么重要”。两者结合后，确认与失效的判断都会更清晰。',
            confirmationSignals: [
              '价格无法重新站回被拒绝的阻力区',
              '后续蜡烛持续偏弱',
            ],
            invalidationSignals: [
              '价格快速反弹并重新突破阻力位',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This lesson is about confluence: the candlestick signal becomes stronger because it appears exactly where western resistance says sellers should matter.',
        conclusion:
          'Use western levels and candlesticks together: identify the key zone first, read the candle’s behaviour there, then wait for later price action to confirm the rejection.',
      },
      zh: {
        intro:
          '这个案例要教的是“共振”：蜡烛图信号之所以更强，是因为它恰好出现在西方阻力位本该有卖压的地方。',
        conclusion:
          '把西方关键位和蜡烛图一起用：先找出关键区域，再看价格在该区域内的蜡烛表现，最后等待后续走势确认这次拒绝是否成立。',
      },
    },
  },
  locale: {
    en: {
      patternLabel: 'Candlestick + Resistance confluence — Mar 16, 2026',
      analysisText:
        "After breaking down from $197 in late February, NVDA staged a recovery rally into mid-March. On March 16, the stock spiked to $188.88 intraday — probing the prior support zone near $188–189 that had now flipped to resistance (dashed line). The session closed near its open at $183.22, forming a Doji with a long upper shadow ($5.66): a classic candlestick rejection at a western technical level. The Western + Eastern combination produced a high-confidence signal, and NVDA resumed declining sharply, losing $10 over the next four sessions.",
    },
    zh: {
      patternLabel: '蜡烛图信号+阻力位共振 — 2026年3月16日',
      analysisText:
        '2月下旬从197美元大幅下跌后，英伟达在3月中旬展开反弹。3月16日，股价盘中冲高至188.88美元——测试此前已从支撑转为阻力的188-189美元区域（虚线）。当日收于接近开盘价的183.22美元，形成上影线长达5.66美元的十字星：这是价格在西方技术分析关键位遭到拒绝的经典蜡烛图信号。东西方技术共振产生了高可信度的看跌信号，此后四个交易日NVDA持续急跌，下跌约10美元。',
      labelText: {
        'resistance-label': '前支撑 → 阻力',
        'doji-label': '十字星 + 拒绝',
      },
    },
  },
}

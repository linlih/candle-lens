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

const supportConfluenceCase: RealChartData = {
  chapterId: 'part4-ch13-western',
  ticker: 'NVDA',
  candles: [
    { time: '2026-02-03', open: 189.10, high: 190.24, low: 185.44, close: 186.02 },
    { time: '2026-02-04', open: 185.86, high: 186.55, low: 181.72, close: 182.31 },
    { time: '2026-02-05', open: 182.10, high: 183.22, low: 178.64, close: 179.08 },
    { time: '2026-02-06', open: 178.84, high: 180.15, low: 175.93, close: 176.44 },
    { time: '2026-02-09', open: 176.20, high: 177.18, low: 171.92, close: 173.10 },
    { time: '2026-02-10', open: 171.84, high: 183.64, low: 171.42, close: 182.41 }, // bullish reversal at support
    { time: '2026-02-11', open: 182.55, high: 184.22, low: 180.98, close: 183.66 },
    { time: '2026-02-12', open: 183.14, high: 183.88, low: 180.42, close: 181.15 },
    { time: '2026-02-13', open: 181.48, high: 182.01, low: 178.76, close: 179.42 },
  ],
  annotations: [
    {
      kind: 'hline',
      id: 'support-line',
      price: 171.9,
      color: 'rgba(38, 166, 154, 0.7)',
      width: 1,
      dash: [5, 4],
    },
    {
      kind: 'label',
      id: 'support-label',
      time: '2026-02-09',
      price: 170.2,
      text: 'Prior Low Support',
      position: 'below',
      backgroundColor: '#26a69a',
      textColor: '#ffffff',
      fontSize: 10,
      arrowhead: false,
    },
    {
      kind: 'box',
      id: 'support-engulf-box',
      timeRange: { from: '2026-02-09', to: '2026-02-10' },
      priceRange: { high: 183.64, low: 171.42 },
      pricePadding: 0.3,
      fillColor: 'rgba(38, 166, 154, 0.12)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'support-engulf-label',
      time: '2026-02-10',
      price: 185.0,
      text: 'Bullish Reversal + Support',
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
        id: 'approach-support',
        visibleCount: 5,
        annotationIds: ['support-line', 'support-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The support level matters before the reversal candle appears',
            summary:
              'By February 9, NVDA has sold off into a prior low support zone near $171.9. This is the western-structure piece: if a bullish candle appears here, it will matter more because it is happening where buyers should logically defend price.',
            question: 'Why should support be marked before reading the candle?',
            answer:
              'Because the level explains why the signal matters. Without support, a reversal candle is weaker and more isolated.',
            confirmationSignals: ['Price reaches a known support area', 'The selloff starts probing that floor'],
            invalidationSignals: ['Price slices through support with no response'],
          },
          zh: {
            title: '关键支撑位必须先画出来，蜡烛图才有位置意义',
            summary:
              '到 2 月 9 日，NVDA 已经跌到接近 171.9 美元的前低支撑区。西方结构分析先告诉你：如果这里出现看涨蜡烛图，它会更有分量，因为这个位置本来就该有买方防守。',
            question: '为什么支撑位应该在读蜡烛图之前就先标出来？',
            answer:
              '因为位置决定了信号为什么重要。没有支撑背景时，反转 K 线更像孤立现象，力度也更弱。',
            confirmationSignals: ['价格推进到已知支撑区域', '下跌开始测试这块地板'],
            invalidationSignals: ['价格毫无反应地直接跌穿支撑'],
          },
        },
      },
      {
        id: 'reversal-at-support',
        visibleCount: 6,
        annotationIds: ['support-line', 'support-label', 'support-engulf-box', 'support-engulf-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'The reversal candle is stronger because it fires at support',
            summary:
              'February 10 reverses sharply from the same floor and closes with a strong bullish body. This is the bullish mirror image of the resistance case: the candle says reversal, and the support level explains why that reversal deserves more trust.',
            question: 'Why is candle plus support stronger than the candle alone?',
            answer:
              'Because the market is not just reversing anywhere. It is reversing exactly where prior demand had already proved important.',
            confirmationSignals: ['Price rejects the support zone intraday', 'The close finishes strong above the support reaction'],
            invalidationSignals: ['The bullish candle cannot hold and immediately falls back through support'],
          },
          zh: {
            title: '支撑位上的反转蜡烛，会比孤立出现时更强',
            summary:
              '2 月 10 日价格从同一块地板上快速反转，并以强势阳线收盘。这就是阻力案例的看涨镜像：蜡烛图告诉你反转在发生，支撑位告诉你为什么这次反转更值得相信。',
            question: '为什么“蜡烛图 + 支撑位”会比单独蜡烛图更强？',
            answer:
              '因为市场不是随便在哪都反转，而是在此前已经证明有需求的重要位置上反转。',
            confirmationSignals: ['价格盘中拒绝支撑区', '收盘强势站在支撑反应之上'],
            invalidationSignals: ['这根阳线无法守住，很快重新跌穿支撑'],
          },
        },
      },
      {
        id: 'follow-through',
        visibleCount: 9,
        annotationIds: ['support-line', 'support-label', 'support-engulf-box', 'support-engulf-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'Later price action confirms the confluence read',
            summary:
              'The following candles do not immediately collapse back through support. That later respect is what validates the confluence: support held, and the bullish candlestick signal was not just cosmetic.',
            question: 'What is the key lesson from bullish support confluence?',
            answer:
              'Western structure tells you where a bullish response should matter; the candle tells you how buyers behaved there. The combination makes both confirmation and invalidation cleaner.',
            confirmationSignals: ['Price stays above the support zone after the reversal', 'The market no longer behaves like panic selling'],
            invalidationSignals: ['A fast breakdown back below support'],
          },
          zh: {
            title: '后续没有再跌穿，说明这次共振不是表面现象',
            summary:
              '之后几根蜡烛并没有立刻重新跌穿支撑。这种后续尊重，才真正验证了这次共振：支撑位生效了，而看涨蜡烛图也不是“看起来像而已”。',
            question: '看涨支撑共振最核心的教学点是什么？',
            answer:
              '西方结构告诉你“哪里值得期待反应”，蜡烛图告诉你“买方在这里究竟做了什么”。两者结合后，确认和失效都会更清楚。',
            confirmationSignals: ['反转后价格继续停留在支撑之上', '市场不再像恐慌抛售那样单边走弱'],
            invalidationSignals: ['价格很快再次跌破支撑'],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This mirror case teaches the bullish side of western confluence: a reversal signal becomes stronger when it appears exactly where support should matter.',
        conclusion:
          'Use support confluence by identifying the level first, then reading whether the candlestick behaviour there shows genuine buyer defense.',
      },
      zh: {
        intro:
          '这个镜像案例训练的是西方共振的看涨一侧：当反转信号正好出现在本该有支撑的位置时，它会更有说服力。',
        conclusion:
          '支撑位共振的正确用法，是先确定关键位置，再看蜡烛图是否真的显示出买方在这里防守。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Support Confluence',
      patternLabel: 'Candlestick + Support confluence — Feb 10, 2026',
      analysisText:
        'After a multi-session selloff, NVDA reached a prior low support zone around $171.9 and then reversed sharply higher on February 10, 2026. The bullish reversal was stronger because it occurred exactly where prior demand had already mattered, creating a clean support-confluence lesson.',
    },
    zh: {
      caseLabel: '支撑位共振',
      patternLabel: '蜡烛图信号+支撑位共振 — 2026年2月10日',
      analysisText:
        '在连续多日下跌后，NVDA 回到约 171.9 美元的前低支撑区域，并于 2026 年 2 月 10 日快速反转上行。这次看涨反转之所以更强，是因为它恰好发生在此前已经证明有效的需求位置上，形成了一个清晰的支撑位共振教学案例。',
      labelText: {
        'support-label': '前低支撑',
        'support-engulf-label': '看涨反转 + 支撑位',
      },
    },
  },
}

export const realCharts: RealChartData[] = [realChart, supportConfluenceCase]

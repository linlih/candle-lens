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

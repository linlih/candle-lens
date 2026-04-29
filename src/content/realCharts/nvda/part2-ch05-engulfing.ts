import type { RealChartData } from '@/types/realChart'

// NVDA Nov 6 – Nov 25, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Bearish Engulfing on Nov 20, 2025
//   Prev (Nov 19): O=184.79, H=187.86, L=182.83, C=186.52 (bull)
//   Cur  (Nov 20): O=195.95, H=196.00, L=179.85, C=180.64 (bear)
//   Opens $9 above prev close, crashes below prev open — massive bearish engulfing.
//   Driven by news gap-up at open then complete reversal.

export const realChart: RealChartData = {
  chapterId: 'part2-ch05-engulfing',
  ticker: 'NVDA',
  candles: [
    { time: '2025-11-06', open: 196.42, high: 197.62, low: 186.38, close: 188.08 },
    { time: '2025-11-07', open: 184.90, high: 188.32, low: 178.91, close: 188.15 },
    { time: '2025-11-10', open: 195.11, high: 199.94, low: 193.79, close: 199.05 },
    { time: '2025-11-11', open: 195.16, high: 195.42, low: 191.30, close: 193.16 },
    { time: '2025-11-12', open: 195.72, high: 195.89, low: 191.13, close: 193.80 },
    { time: '2025-11-13', open: 191.05, high: 191.44, low: 183.85, close: 186.86 },
    { time: '2025-11-14', open: 182.86, high: 191.01, low: 180.58, close: 190.17 },
    { time: '2025-11-17', open: 185.97, high: 189.00, low: 184.32, close: 186.60 },
    { time: '2025-11-18', open: 183.38, high: 184.80, low: 179.65, close: 181.36 },
    { time: '2025-11-19', open: 184.79, high: 187.86, low: 182.83, close: 186.52 }, // Bull (prev day)
    { time: '2025-11-20', open: 195.95, high: 196.00, low: 179.85, close: 180.64 }, // Bearish Engulfing
    { time: '2025-11-21', open: 181.24, high: 184.56, low: 172.93, close: 178.88 },
    { time: '2025-11-24', open: 179.49, high: 183.50, low: 176.48, close: 182.55 },
    { time: '2025-11-25', open: 174.91, high: 178.16, low: 169.55, close: 177.82 },
    { time: '2025-11-26', open: 181.63, high: 182.91, low: 178.24, close: 180.26 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'engulf-box',
      timeRange: { from: '2025-11-19', to: '2025-11-20' },
      priceRange: { high: 196.00, low: 179.85 },
      pricePadding: 0.5,
      fillColor: 'rgba(239, 83, 80, 0.12)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'engulf-label',
      time: '2025-11-20',
      price: 197.8,
      text: 'Bearish Engulfing',
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
        id: 'rally-before-engulfing',
        visibleCount: 10,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'A bearish engulfing needs prior upward pressure',
            summary:
              'Into November 19, NVDA has already bounced strongly off the earlier hammer low. The market is trying to continue upward, which is exactly why a reversal pattern here matters.',
            question:
              'Before the engulfing candle prints, what would make you suspicious that the rally is vulnerable?',
            answer:
              'A rally becomes vulnerable when buyers cannot hold a strong open or gap-up and sellers start reclaiming the session quickly.',
            confirmationSignals: [
              'The next session opens strong but cannot sustain the strength',
            ],
            invalidationSignals: [
              'The next session keeps extending higher and closes strong',
            ],
          },
          zh: {
            title: '看跌吞没要放在已有上冲背景里看',
            summary:
              '到 11 月 19 日，NVDA 已经从前面的锤子线低点反弹了一段距离。此时市场是在尝试继续上攻，这正是反转形态有意义的位置。',
            question: '在吞没出现前，什么会让你怀疑这段反弹可能撑不住？',
            answer:
              '如果价格在偏高位置继续上冲，却守不住强势开盘或跳空，那就说明上攻质量可能有问题。',
            confirmationSignals: [
              '下一交易日强势开盘，但无法把强势保持到收盘',
            ],
            invalidationSignals: [
              '下一交易日继续上攻并强势收盘',
            ],
          },
        },
      },
      {
        id: 'engulfing-reversal',
        visibleCount: 11,
        annotationIds: ['engulf-box', 'engulf-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'The gap-up failure creates the engulfing reversal',
            summary:
              'November 20 opens almost euphorically at $195.95, far above the prior close, but sellers seize control and drive the session all the way down to $180.64. The candle swallows the previous bullish body and turns optimism into a full-session reversal.',
            question: 'Why is this stronger than a normal bearish candle?',
            answer:
              'Because it reverses sentiment inside one session. Buyers begin with a gap-up advantage and still lose total control by the close.',
            confirmationSignals: [
              'The bearish body fully engulfs the prior bullish body',
              'The close lands near the session low after a strong open',
            ],
            invalidationSignals: [
              'The next session immediately erases the bearish candle',
            ],
          },
          zh: {
            title: '跳空失败让吞没形态具备反转力度',
            summary:
              '11 月 20 日几乎带着亢奋情绪高开到 195.95 美元，远高于前收，但空方随后全面接管，把价格一路砸到 180.64 美元收盘。这根 K 线把前一日阳线实体完全吞没，把多方情绪在一个交易日内彻底反转。',
            question: '为什么这比普通阴线更强？',
            answer:
              '因为它在同一交易日里完成了情绪反转。买方明明带着跳空优势开场，却仍然在收盘前被彻底压制。',
            confirmationSignals: [
              '阴线实体完全包住前一日阳线实体',
              '强势开盘后却接近当日低点收盘',
            ],
            invalidationSignals: [
              '下一交易日立刻把这根大阴线完全吞回去',
            ],
          },
        },
      },
      {
        id: 'post-pattern-weakness',
        visibleCount: 15,
        annotationIds: ['engulf-box', 'engulf-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Later weakness confirms the reversal was genuine',
            summary:
              'Subsequent sessions stay heavy rather than instantly snapping back. That matters because a bearish engulfing is most valuable when the market keeps respecting the reversal instead of treating it as a one-day overreaction.',
            question: 'What habit should this case train?',
            answer:
              'Treat reversal patterns as hypothesis updates. The engulfing candle changed the bias, and later weak candles validated that shift.',
            confirmationSignals: [
              'Follow-through weakness after the engulfing day',
              'No immediate reclaim of the engulfing high',
            ],
            invalidationSignals: [
              'A sharp recovery back through the engulfing candle range',
            ],
          },
          zh: {
            title: '后续持续偏弱，说明这次反转不是假动作',
            summary:
              '之后几个交易日并没有立刻强力收回，而是继续偏弱运行。这样一来，看跌吞没的价值才真正体现出来：市场尊重了这次反转，而不是把它当作单日过度波动。',
            question: '这个案例应该训练你形成什么习惯？',
            answer:
              '把反转形态当作“更新假设”的工具。吞没那天先改变偏向，后面的弱势蜡烛再验证这个偏向是否成立。',
            confirmationSignals: [
              '吞没出现后继续有弱势跟随',
              '价格没有立刻重新站回吞没高点',
            ],
            invalidationSignals: [
              '价格迅速强势收回整根吞没阴线区间',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This case teaches a key reversal idea: a gap-up is not bullish if sellers can completely reverse it before the close.',
        conclusion:
          'A bearish engulfing becomes educational when you read the sentiment shift inside the session, then verify it through later weakness.',
      },
      zh: {
        intro:
          '这个案例要训练的核心是：跳空高开并不天然看涨，如果空方能在收盘前把它完全反转，意义反而更偏空。',
        conclusion:
          '看跌吞没的教学重点，是先读懂单日内的情绪反转，再用后续弱势确认这个变化。',
      },
    },
  },
  locale: {
    en: {
      patternLabel: 'Bearish Engulfing — Nov 20, 2025',
      analysisText:
        "On November 20, 2025, NVDA gapped up at the open to $195.95 — $9 above the prior day's close of $186.52 — but sellers immediately took control. By the close the stock had reversed to $180.64, completely swallowing the previous bullish candle's body in a textbook Bearish Engulfing. The wide-range bearish candle signaled an exhaustion of the rally from the November 7 hammer low, and the stock continued lower in subsequent sessions.",
    },
    zh: {
      patternLabel: '看跌吞没形态 — 2025年11月20日',
      analysisText:
        '2025年11月20日，英伟达跳空高开至195.95美元——高于前一日收盘价186.52美元9美元之多——但空方随即占据主导。收盘时股价反转至180.64美元，将前一根阳线实体完全吞没，形成教科书级别的看跌吞没形态。这根宽幅看跌K线预示着11月7日锤子线低点以来涨势的衰竭，此后股价继续走低。',
      labelText: {
        'engulf-label': '看跌吞没',
      },
    },
  },
}

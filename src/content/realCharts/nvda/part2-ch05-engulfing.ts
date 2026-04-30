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

const bullishEngulfingCase: RealChartData = {
  chapterId: 'part2-ch05-engulfing',
  ticker: 'SPY',
  candles: [
    { time: '2024-04-12', open: 514.10, high: 516.22, low: 512.34, close: 515.48 },
    { time: '2024-04-15', open: 515.02, high: 516.10, low: 511.62, close: 512.74 },
    { time: '2024-04-16', open: 512.38, high: 513.05, low: 507.44, close: 508.26 },
    { time: '2024-04-17', open: 507.94, high: 509.18, low: 503.42, close: 504.66 },
    { time: '2024-04-18', open: 504.20, high: 505.04, low: 497.86, close: 499.12 }, // small bear
    { time: '2024-04-19', open: 498.54, high: 510.82, low: 497.92, close: 509.64 }, // bullish engulfing
    { time: '2024-04-22', open: 510.18, high: 512.26, low: 507.70, close: 511.04 },
    { time: '2024-04-23', open: 511.20, high: 512.48, low: 508.96, close: 509.88 },
    { time: '2024-04-24', open: 509.94, high: 513.14, low: 509.18, close: 512.62 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'bull-engulf-box',
      timeRange: { from: '2024-04-18', to: '2024-04-19' },
      priceRange: { high: 510.82, low: 497.92 },
      pricePadding: 0.5,
      fillColor: 'rgba(38, 166, 154, 0.12)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'bull-engulf-label',
      time: '2024-04-19',
      price: 512.8,
      text: 'Bullish Engulfing',
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
        visibleCount: 5,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'A bullish engulfing only matters after real weakness',
            summary:
              'By April 18, SPY has already been sliding for several sessions and closes near the low of the recent pullback. That gives the next candle the right reversal context.',
            question: 'What would make the next day more than just a normal bounce?',
            answer:
              'Buyers need to take back not just the intraday low, but the entire prior body, showing a real control shift.',
            confirmationSignals: ['The next session reverses the prior body completely'],
            invalidationSignals: ['The next session bounces only weakly and stays inside the prior body'],
          },
          zh: {
            title: '看涨吞没必须先放在真实弱势之后',
            summary:
              '到 4 月 18 日，SPY 已经连续多日走弱，并且再次接近这轮回落的低位收盘。这才让下一根 K 线具备反转背景。',
            question: '什么会让下一天不只是普通反弹？',
            answer:
              '买方不仅要收复盘中低点，还要把前一根实体整个吞掉，才算真正的控制权转移。',
            confirmationSignals: ['下一交易日把前一根实体完整吞回'],
            invalidationSignals: ['下一交易日只弱弱反弹，仍留在前一根实体内部'],
          },
        },
      },
      {
        id: 'engulfing-reversal',
        visibleCount: 6,
        annotationIds: ['bull-engulf-box', 'bull-engulf-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'The second candle engulfs the prior bearish body',
            summary:
              'April 19 opens lower again, but buyers reverse the session aggressively and close above the entire prior bearish body. That is the essence of bullish engulfing: sentiment flips inside one day.',
            question: 'Why is this stronger than a simple green candle after a decline?',
            answer:
              'Because buyers erase the prior session’s body instead of merely stabilising. The market does not just pause the decline; it reverses it.',
            confirmationSignals: ['The bullish body fully swallows the prior bearish body', 'The close lands near the upper end of the range'],
            invalidationSignals: ['Price quickly loses the engulfing body on the next candle'],
          },
          zh: {
            title: '第二根 K 线把前一根阴线实体完整吞掉',
            summary:
              '4 月 19 日先继续低开，但买方随后强力反转，并收在前一根阴线实体上方。看涨吞没的本质就是：情绪在一个交易日内翻转。',
            question: '为什么这比普通反弹阳线更强？',
            answer:
              '因为买方不是简单止跌，而是把前一日的实体完全抹掉。市场不是暂停下跌，而是在主动反转。',
            confirmationSignals: ['阳线实体完整吞没前一根阴线实体', '收盘落在当日区间上端附近'],
            invalidationSignals: ['下一根很快又把吞没阳线的实体跌回去'],
          },
        },
      },
      {
        id: 'follow-through',
        visibleCount: 9,
        annotationIds: ['bull-engulf-box', 'bull-engulf-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'Later strength shows the reversal was respected',
            summary:
              'Subsequent candles hold the recovery rather than collapsing back through it. That is what makes the engulfing pattern useful: the market accepts the new bullish read.',
            question: 'What is the main practical lesson here?',
            answer:
              'Treat engulfing as a control-shift hypothesis. It becomes high quality when later candles continue to respect the reversal instead of instantly undoing it.',
            confirmationSignals: ['Price holds above much of the engulfing body', 'The decline no longer accelerates immediately'],
            invalidationSignals: ['A fast collapse back below the engulfing low'],
          },
          zh: {
            title: '后续守住反弹，说明市场尊重了这次反转',
            summary:
              '后面的蜡烛并没有立刻把反弹全部跌回去，而是大体守住了恢复区。这才让吞没形态真正有用：市场接受了新的偏多解读。',
            question: '这里最实战的教训是什么？',
            answer:
              '把吞没看作“控制权转移”的假设。只有后续 K 线继续尊重这次反转，它才会变成高质量信号。',
            confirmationSignals: ['价格能守住吞没阳线的大部分实体', '下跌节奏没有立刻重新加速'],
            invalidationSignals: ['价格迅速跌破吞没低点'],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This mirror case uses a broad-market ETF to teach the bullish side of the pattern: after a decline, a full-body reversal can mark a real change in control.',
        conclusion:
          'A bullish engulfing is strongest when it appears after real weakness and later candles do not immediately give the reversal back.',
      },
      zh: {
        intro:
          '这个镜像案例换成了宽基 ETF，训练的是看涨版本：下跌之后，整根实体级别的反转往往代表了真实的控制权变化。',
        conclusion:
          '看涨吞没最强的时候，是它出现在真实弱势之后，并且后续蜡烛没有立刻把这次反转还回去。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Bullish Engulfing · SPY',
      patternLabel: 'Bullish Engulfing — SPY Daily — Apr 19, 2024',
      analysisText:
        'After a multi-session pullback, SPY printed a final weak bearish candle on April 18, 2024 and then reversed sharply higher the next day. The April 19 bullish body completely engulfed the prior bearish body, showing that buyers had shifted the short-term balance of control back in their favor.',
    },
    zh: {
      caseLabel: '看涨吞没 · SPY',
      patternLabel: '看涨吞没 — SPY 日线 — 2024年4月19日',
      analysisText:
        '在连续多日回落之后，SPY 于 2024 年 4 月 18 日先收出一根偏弱阴线，次日则强力反转上行。4 月 19 日的阳线实体完整吞没了前一日阴线实体，说明短线控制权重新向买方倾斜。',
      labelText: {
        'bull-engulf-label': '看涨吞没',
      },
    },
  },
}

const bearishEngulfingEtfCase: RealChartData = {
  chapterId: 'part2-ch05-engulfing',
  ticker: 'QQQ',
  candles: [
    { time: '2025-06-02', open: 463.1, high: 465.4, low: 462.8, close: 464.8 },
    { time: '2025-06-03', open: 465.0, high: 468.6, low: 464.5, close: 468.1 },
    { time: '2025-06-04', open: 468.4, high: 471.2, low: 467.9, close: 470.8 },
    { time: '2025-06-05', open: 470.5, high: 472.1, low: 469.8, close: 471.6 }, // small bull
    { time: '2025-06-06', open: 472.0, high: 472.4, low: 466.9, close: 467.1 }, // bear engulf
    { time: '2025-06-09', open: 466.6, high: 467.4, low: 462.5, close: 463.3 },
    { time: '2025-06-10', open: 463.7, high: 464.1, low: 460.8, close: 461.5 },
    { time: '2025-06-11', open: 461.9, high: 464.8, low: 461.2, close: 464.3 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'qqq-bear-engulf-box',
      timeRange: { from: '2025-06-05', to: '2025-06-06' },
      priceRange: { high: 472.4, low: 466.9 },
      pricePadding: 0.4,
      fillColor: 'rgba(239, 83, 80, 0.12)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'qqq-bear-engulf-label',
      time: '2025-06-06',
      price: 473.1,
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
        id: 'extended-push',
        visibleCount: 4,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'An engulfing top matters because buyers were still pushing first',
            summary:
              'QQQ has already rallied for several sessions into June 5 and still prints a positive close. That is the setup you want: buyers look like they still have control before the next session abruptly overturns that confidence.',
            question: 'Why does an engulfing reversal need a strong prior push?',
            answer:
              'Because the reversal only feels meaningful when it destroys a control state that had just looked healthy. Without that contrast, the pattern loses impact.',
            confirmationSignals: [
              'The market is still advancing into the setup',
              'The first candle keeps the prior bullish bias alive',
            ],
            invalidationSignals: [
              'The market was already rolling over before the engulfing day',
            ],
          },
          zh: {
            title: '顶部吞没之所以有意义，是因为前一刻多方还像是在推进',
            summary:
              '到 6 月 5 日，QQQ 已经连续几日上涨，而且当天依然是偏强收盘。理想的吞没前提就是这样：多方看起来还掌控着节奏，下一交易日才会显得格外具有“推翻”意味。',
            question: '为什么吞没反转一定要有一个仍然健康的前置推进？',
            answer:
              '因为它的意义就在于摧毁一个原本看起来还不错的控制状态。没有这种反差，吞没的冲击力就会减弱。',
            confirmationSignals: [
              '形态前市场仍在推进',
              '第一根 K 线继续维持原本的看涨偏向',
            ],
            invalidationSignals: [
              '吞没之前市场其实已经自己在转弱',
            ],
          },
        },
      },
      {
        id: 'engulfing-break',
        visibleCount: 5,
        annotationIds: ['qqq-bear-engulf-box', 'qqq-bear-engulf-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'The second candle erases the prior body and flips control',
            summary:
              'June 6 opens slightly higher, then sells off and closes below the entire prior body. That is the core of the pattern: the market did not merely pause the rally, it reversed the previous session’s control within one day.',
            question: 'What makes a bearish engulfing stronger than a simple red day after a rally?',
            answer:
              'The body takeover. Sellers do not just push price lower; they erase the prior bullish body and reclaim control in one session.',
            confirmationSignals: [
              'The bearish body fully covers the prior bullish body',
              'The close lands near the lower end of the range',
            ],
            invalidationSignals: [
              'The engulfing body is immediately recovered on the next candle',
            ],
          },
          zh: {
            title: '第二根 K 线完整吃掉前一根实体，控制权随之翻转',
            summary:
              '6 月 6 日先小幅高开，随后一路回落，并收在前一根阳线实体下方。这个形态的本质就是：市场不是简单暂停上涨，而是在一个交易日里把前一天的控制权彻底反过来。',
            question: '为什么顶部吞没比上涨后的普通阴线更强？',
            answer:
              '因为它体现的是实体级别的接管。空方不是只把价格压低一点，而是直接把前一根阳线实体整个抹掉。',
            confirmationSignals: [
              '阴线实体完整覆盖前一根阳线实体',
              '收盘落在当日区间下端附近',
            ],
            invalidationSignals: [
              '下一根 K 线立刻把吞没阴线的实体收回',
            ],
          },
        },
      },
      {
        id: 'follow-through-lower',
        visibleCount: 8,
        annotationIds: ['qqq-bear-engulf-box', 'qqq-bear-engulf-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Later weakness proves the reversal was accepted',
            summary:
              'The following sessions continue lower before any meaningful bounce appears. That is the practical use of the pattern: the market accepts the new bearish control state instead of instantly undoing it.',
            question: 'What is the real test after a bearish engulfing top appears?',
            answer:
              'Whether later candles respect the break in bullish control. If price keeps leaning lower, the engulfing day likely marked a real short-term regime shift.',
            confirmationSignals: [
              'Later candles continue to pressure lower',
              'Buyers fail to reclaim the engulfing body quickly',
            ],
            invalidationSignals: [
              'Price immediately closes back above the engulfing high',
            ],
          },
          zh: {
            title: '后续继续走弱，说明市场接受了新的空方控制',
            summary:
              '接下来的几个交易日继续走低，直到更后面才有像样反弹。这正是吞没的实战意义：市场接受了新的看空控制状态，而不是立刻把它抹掉。',
            question: '顶部吞没出现后，真正要考验的是什么？',
            answer:
              '考验的是后续蜡烛会不会继续尊重这次多方控制权被打断。如果价格持续偏弱，这根吞没就很可能标记了短线结构切换。',
            confirmationSignals: [
              '后续蜡烛继续向下施压',
              '多方没能迅速收回吞没阴线实体',
            ],
            invalidationSignals: [
              '价格立刻重新收上吞没高点',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This extra engulfing case keeps the same logic on a tech ETF: a healthy rally gets overturned in one session and later candles respect that shift.',
        conclusion:
          'Treat bearish engulfing patterns as control flips. Their quality depends on both the body takeover and the later follow-through.',
      },
      zh: {
        intro:
          '这个额外吞没案例把同样逻辑放到科技 ETF 上：原本健康的上涨，在一个交易日里被完全推翻，后续蜡烛也继续尊重这次切换。',
        conclusion:
          '把顶部吞没理解成控制权翻转。它的质量既取决于实体接管本身，也取决于后续有没有继续跟随。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Bearish Engulfing · QQQ',
      patternLabel: 'Bearish Engulfing — QQQ Daily — Jun 6, 2025',
      analysisText:
        'QQQ rallied into June 5, 2025 and still looked healthy, then reversed sharply the next day. The June 6 bearish candle fully engulfed the prior bullish body, and the following sessions kept leaning lower, making the pattern a clear short-term control flip.',
    },
    zh: {
      caseLabel: '看跌吞没 · QQQ',
      patternLabel: '看跌吞没 — QQQ 日线 — 2025年6月6日',
      analysisText:
        'QQQ 在 2025 年 6 月 5 日之前仍然保持着健康上涨节奏，但次日突然明显反转。6 月 6 日的阴线实体完整吞没了前一日阳线实体，后续几个交易日也继续偏弱，使这次形态成为一次清晰的短线控制权翻转。',
      labelText: {
        'qqq-bear-engulf-label': '看跌吞没',
      },
    },
  },
}

export const realCharts: RealChartData[] = [realChart, bullishEngulfingCase, bearishEngulfingEtfCase]

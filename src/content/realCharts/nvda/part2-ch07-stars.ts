import type { RealChartData } from '@/types/realChart'

// NVDA Dec 8 – Dec 29, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Morning Star on Dec 17–19, 2025
//   Bear  (Dec 17): O=176.10, H=176.13, L=170.31, C=170.94 (body=5.16)
//   Star  (Dec 18): O=174.53, H=176.15, L=171.82, C=174.14 (body=0.39, tiny!)
//   Bull  (Dec 19): O=176.67, H=181.45, L=176.34, C=180.99 (body=4.32)
//   Dec 19 close (180.99) well above midpoint of Dec 17 body (173.52). Textbook pattern.

export const realChart: RealChartData = {
  chapterId: 'part2-ch07-stars',
  ticker: 'NVDA',
  candles: [
    { time: '2025-12-08', open: 182.64, high: 188.00, low: 182.40, close: 185.55 },
    { time: '2025-12-09', open: 185.56, high: 185.72, low: 183.32, close: 184.97 },
    { time: '2025-12-10', open: 184.97, high: 185.48, low: 182.04, close: 183.78 },
    { time: '2025-12-11', open: 180.28, high: 181.32, low: 176.62, close: 180.93 },
    { time: '2025-12-12', open: 181.11, high: 182.82, low: 174.62, close: 175.02 },
    { time: '2025-12-15', open: 177.94, high: 178.42, low: 175.03, close: 176.29 },
    { time: '2025-12-16', open: 176.26, high: 178.49, low: 174.90, close: 177.72 },
    { time: '2025-12-17', open: 176.10, high: 176.13, low: 170.31, close: 170.94 }, // Bear
    { time: '2025-12-18', open: 174.53, high: 176.15, low: 171.82, close: 174.14 }, // Star
    { time: '2025-12-19', open: 176.67, high: 181.45, low: 176.34, close: 180.99 }, // Bull
    { time: '2025-12-22', open: 183.92, high: 184.16, low: 182.35, close: 183.69 },
    { time: '2025-12-23', open: 182.97, high: 189.33, low: 182.90, close: 189.21 },
    { time: '2025-12-24', open: 187.94, high: 188.91, low: 186.59, close: 188.61 },
    { time: '2025-12-26', open: 189.92, high: 192.69, low: 188.00, close: 190.53 },
    { time: '2025-12-29', open: 187.71, high: 188.76, low: 185.91, close: 188.22 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'morning-star-box',
      timeRange: { from: '2025-12-17', to: '2025-12-19' },
      priceRange: { high: 181.45, low: 170.31 },
      pricePadding: 0.5,
      fillColor: 'rgba(38, 166, 154, 0.12)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'star-label',
      time: '2025-12-18',
      price: 169.0,
      text: 'Star',
      position: 'below',
      backgroundColor: '#ffc107',
      textColor: '#1a1a2e',
      fontSize: 10,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'morning-star-label',
      time: '2025-12-19',
      price: 183.2,
      text: 'Morning Star',
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
        id: 'context-selloff',
        visibleCount: 8,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'Start with the context, not the pattern name',
            summary:
              'By December 17, NVDA had been fading for several sessions and printed a wide bearish candle into fresh short-term lows. At this point, the priority is not to predict a reversal yet, but to note that sellers are still in control and price is extended downward.',
            question:
              'If the next session becomes a small-bodied pause candle, would that prove a reversal or only suggest selling momentum might be slowing?',
            answer:
              'Only a possible loss of bearish momentum. A single pause candle after a selloff is not enough; you still need buyers to reclaim meaningful ground.',
            confirmationSignals: [
              'The selloff starts losing range expansion and closing pressure',
              'A later bullish candle closes back into the December 17 body',
            ],
            invalidationSignals: [
              'The next candle remains strongly bearish',
              'Price keeps making lower lows with no bullish response',
            ],
          },
          zh: {
            title: '先看背景，而不是先给形态命名',
            summary:
              '到 12 月 17 日为止，NVDA 已连续走弱数日，并用一根大阴线打到新的短线低点。此时重点不是立刻判断要反转，而是先确认空方仍在主导，价格处于向下延伸状态。',
            question:
              '如果下一天只出现一根小实体犹豫线，这能直接证明反转，还是只说明空方动能可能在减弱？',
            answer:
              '它只能说明空方动能可能减弱，还不能证明反转。下跌后单独一根犹豫线不够，仍需要后续多方把价格拉回关键位置之上。',
            confirmationSignals: [
              '后续下跌的实体和收盘压制开始减弱',
              '之后出现阳线并重新收回 12 月 17 日阴线实体的重要区域',
            ],
            invalidationSignals: [
              '下一根继续是强阴线',
              '价格继续创新低且没有明显多方反击',
            ],
          },
        },
      },
      {
        id: 'possible-star',
        visibleCount: 9,
        annotationIds: ['star-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'December 18 creates a candidate, not a conclusion',
            summary:
              'The December 18 candle makes a new low intraday, but its body is tiny. That is the key change: sellers could push price lower, yet they could not keep control into the close. This is the moment to label it as a possible star, not a completed Morning Star.',
            question:
              'What would you need from the next candle to upgrade this from “interesting hesitation” to “actionable reversal setup”?',
            answer:
              'You want an assertive bullish response: a wide bullish body, a close above the midpoint of the December 17 bearish candle, and ideally strength off the open rather than another drift session.',
            confirmationSignals: [
              'A bullish candle follows immediately',
              'That bullish candle closes above the midpoint of the December 17 body',
              'The bullish close shows buyers, not just a bounce, are taking control',
            ],
            invalidationSignals: [
              'The next candle stalls or closes weak',
              'Price trades below the star low again before buyers take control',
            ],
          },
          zh: {
            title: '12 月 18 日只是“候选星线”，不是结论',
            summary:
              '12 月 18 日盘中继续创了新低，但实体极小。关键变化在这里：空方能把价格继续压低，却无法在收盘时继续保持优势。这时只能把它视为“候选星线”，还不能直接认定早晨之星已经成立。',
            question:
              '你希望下一根 K 线满足什么条件，才会把这种“有意思的犹豫”升级成“可执行的反转结构”？',
            answer:
              '需要看到明确的多方回应：最好是一根实体较大的阳线，收盘重新站回 12 月 17 日阴线实体中部之上，而且最好不是弱反弹，而是由开盘到收盘都体现出买方主导。',
            confirmationSignals: [
              '下一根立刻出现阳线回应',
              '该阳线收盘站上 12 月 17 日阴线实体中点',
              '收盘强势，说明不是普通反抽而是买方开始接管',
            ],
            invalidationSignals: [
              '下一根继续犹豫或收弱',
              '买方接管前，价格再次跌破星线低点',
            ],
          },
        },
      },
      {
        id: 'confirmation-day',
        visibleCount: 10,
        annotationIds: ['star-label', 'morning-star-box', 'morning-star-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'December 19 supplies the confirmation',
            summary:
              'Now the pattern becomes actionable. December 19 opens higher, trades with conviction, and closes at $180.99, well above the midpoint of the December 17 bearish candle. That changes the read from “watching for a turn” to “buyers have produced a real reversal attempt.”',
            question:
              'At the close of December 19, would you describe the setup as confirmed reversal, early bounce, or still unresolved?',
            answer:
              'Confirmed reversal attempt. It does not guarantee a trend change, but the market has finally printed the confirmation signal the star candle was waiting for.',
            confirmationSignals: [
              'Wide bullish body on December 19',
              'Close above the midpoint of December 17',
              'Three-candle structure now reads as a completed Morning Star',
            ],
            invalidationSignals: [
              'A fast failure back below the star low in the next few sessions',
              'Immediate heavy rejection of the bullish close',
            ],
          },
          zh: {
            title: '12 月 19 日给出了确认',
            summary:
              '到这一步，形态才真正具备可操作性。12 月 19 日高开后强势上行，收盘 180.99 美元，明显站上了 12 月 17 日阴线实体中点。此时判断应从“观察是否要转折”升级成“买方已经发起了真实的反转尝试”。',
            question:
              '站在 12 月 19 日收盘时，你会把它定义为“已确认的反转尝试”、“普通反弹”，还是“仍未解决”？',
            answer:
              '应定义为“已确认的反转尝试”。它不保证趋势必然反转，但星线等待的确认信号在这里已经出现。',
            confirmationSignals: [
              '12 月 19 日出现实体较大的阳线',
              '收盘站上 12 月 17 日阴线实体中点',
              '三根 K 线结构已可读作完整的早晨之星',
            ],
            invalidationSignals: [
              '接下来几个交易日快速跌回星线低点下方',
              '确认阳线立即被强烈反包',
            ],
          },
        },
      },
      {
        id: 'follow-through',
        visibleCount: 13,
        annotationIds: ['star-label', 'morning-star-box', 'morning-star-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'Follow-through tells you the confirmation was meaningful',
            summary:
              'The next several sessions keep lifting: NVDA pushes into the mid-$180s and then to $189.21 by December 23. That follow-through matters because it shows the Morning Star did not merely mark a one-day bounce; it actually shifted short-term control back to buyers.',
            question:
              'What is the teaching point once the post-pattern candles keep following through?',
            answer:
              'The lesson is not “Morning Star always works.” It is that a pattern becomes far more useful when you separate the candidate candle, the confirmation candle, and the later follow-through that validates your read.',
            confirmationSignals: [
              'Subsequent closes continue to hold above the confirmation day',
              'Price expands upward instead of instantly rolling over',
            ],
            invalidationSignals: [
              'A quick collapse back into the original selloff zone',
            ],
          },
          zh: {
            title: '后续跟随决定这次确认有没有意义',
            summary:
              '之后几个交易日价格继续抬高：NVDA 先回到 180 美元中段，随后在 12 月 23 日涨到 189.21 美元。这个跟随很关键，因为它说明早晨之星并不只是带来一天反弹，而是真正把短线控制权逐步交回给了多方。',
            question:
              '当形态后的蜡烛继续跟随时，真正该学到的是什么？',
            answer:
              '真正要学的不是“早晨之星一定有效”，而是把候选星线、确认阳线、以及后续跟随三件事分开看。只有这样，形态才会从死记图形变成动态分析流程。',
            confirmationSignals: [
              '后续收盘继续站在确认阳线之上',
              '价格向上扩展，而不是立刻重新转弱',
            ],
            invalidationSignals: [
              '价格迅速跌回原先空方主导区域',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'Use the chart as if you were watching it unfold in real time: first identify the selloff, then the hesitation, then wait for the confirmation candle before upgrading your bias.',
        conclusion:
          'This is the habit to train: do not memorize “Morning Star = bullish.” Instead, ask what the market has shown so far, what still needs confirmation, and whether later candles actually validate the reversal attempt.',
      },
      zh: {
        intro:
          '把这张图当作实时展开的市场来读：先识别下跌背景，再识别犹豫信号，然后等待确认阳线出现后，才升级你的判断。',
        conclusion:
          '真正要训练的习惯不是死记“早晨之星 = 看涨”，而是持续追问：市场现在已经展示了什么、还差什么确认、以及后续蜡烛是否真的验证了这次反转尝试。',
      },
    },
  },
  locale: {
    en: {
      patternLabel: 'Morning Star — Dec 17–19, 2025',
      analysisText:
        "NVDA dropped sharply on December 17 ($176 → $170.94, body=$5.16), then drifted to a new low of $171.82 on December 18 — but the session's tiny body ($0.39) showed that sellers were losing momentum. On December 19, buyers took control completely, driving a $4.32-body bullish candle that closed at $180.99 — well above the midpoint of the December 17 bearish candle. The Morning Star reversed the short-term downtrend, and NVDA rallied to $192 by late December.",
    },
    zh: {
      patternLabel: '早晨之星 — 2025年12月17-19日',
      analysisText:
        '12月17日英伟达大幅下跌（176美元→170.94美元，实体5.16美元），12月18日再度低开至171.82美元盘中新低——但当日收盘仅小幅变动（实体0.39美元），显示空方动能正在衰竭。12月19日多方全面主导，推出实体4.32美元的阳线，收盘180.99美元——远高于12月17日阴线实体的中点。早晨之星反转了短期下跌趋势，此后NVDA于12月下旬涨至192美元。',
      labelText: {
        'star-label': '星线',
        'morning-star-label': '早晨之星',
      },
    },
  },
}

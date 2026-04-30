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

const eveningStarCase: RealChartData = {
  chapterId: 'part2-ch07-stars',
  ticker: 'BTC-USD',
  candles: [
    { time: '2024-03-04', open: 62100, high: 67600, low: 61850, close: 66840 },
    { time: '2024-03-11', open: 66880, high: 69900, low: 66020, close: 69220 },
    { time: '2024-03-18', open: 69250, high: 71320, low: 68450, close: 70780 },
    { time: '2024-03-25', open: 70820, high: 71880, low: 69920, close: 71540 }, // bull
    { time: '2024-04-01', open: 71620, high: 71980, low: 70980, close: 71490 }, // star
    { time: '2024-04-08', open: 71380, high: 71520, low: 66400, close: 67680 }, // bear confirm
    { time: '2024-04-15', open: 67640, high: 68120, low: 63480, close: 64890 },
    { time: '2024-04-22', open: 64920, high: 66080, low: 62640, close: 63720 },
    { time: '2024-04-29', open: 63780, high: 64550, low: 60820, close: 61840 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'evening-star-box',
      timeRange: { from: '2024-03-25', to: '2024-04-08' },
      priceRange: { high: 71980, low: 66400 },
      pricePadding: 400,
      fillColor: 'rgba(239, 83, 80, 0.10)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'evening-star-star-label',
      time: '2024-04-01',
      price: 72500,
      text: 'Star',
      position: 'above',
      backgroundColor: '#ffc107',
      textColor: '#1a1a2e',
      fontSize: 10,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'evening-star-label',
      time: '2024-04-08',
      price: 65800,
      text: 'Evening Star',
      position: 'below',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  lesson: {
    steps: [
      {
        id: 'uptrend-context',
        visibleCount: 5,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'The first candle needs strong upside confidence',
            summary:
              'Into late March, BTC-USD has advanced through several firm weekly bullish candles. That strong first candle gives the later hesitation and reversal room to matter as a completed structure.',
            question: 'Why is the force of the first bullish candle important in a topping pattern?',
            answer:
              'Because the pattern works by contrasting strong prior confidence with sudden hesitation and then reversal.',
            confirmationSignals: ['The first candle is large and bullish'],
            invalidationSignals: ['The first candle is already weak and indecisive'],
          },
          zh: {
            title: '第一根阳线必须先代表强烈上行动能',
            summary:
              '到 3 月底，BTC-USD 已连续数周偏强上涨。第一根阳线足够强，后面的犹豫和反转才会形成完整顶部结构。',
            question: '为什么顶部形态里，第一根强阳线这么重要？',
            answer:
              '因为这个形态的本质就是：前一刻还很有信心，下一刻突然犹豫，再下一刻开始反转。',
            confirmationSignals: ['第一根 K 线是有分量的大阳线'],
            invalidationSignals: ['第一根本身就已经很弱、很犹豫'],
          },
        },
      },
      {
        id: 'star-hesitation',
        visibleCount: 6,
        annotationIds: ['evening-star-star-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The star pauses the trend but does not finish the top',
            summary:
              'The week of April 1 prints a tiny body after the strong bullish candle. This shows that upside control is no longer clean, but the market still needs one more bearish candle before the structure becomes actionable.',
            question: 'What would the next candle need to do to complete the evening-star read?',
            answer:
              'It should drive down decisively and close back into the prior bullish body, showing that sellers can now reverse the prior optimism.',
            confirmationSignals: ['The next candle closes clearly lower into the first candle’s body'],
            invalidationSignals: ['The next candle resumes higher and restores the uptrend'],
          },
          zh: {
            title: '中间的星线让趋势停顿，但还没完成顶部',
            summary:
              '4 月 1 日这一周在强阳线之后出现了一根很小的实体，这说明上行动能已经不再干净，但结构还差最后一根看跌确认，才具备可执行性。',
            question: '下一根 K 线必须做什么，才能把暮星结构补完整？',
            answer:
              '它需要明显向下推进，并重新打回第一根阳线实体内部，说明空方开始把前面的乐观情绪反转掉。',
            confirmationSignals: ['下一根 K 线明确收低并重新打回第一根阳线实体内部'],
            invalidationSignals: ['下一根重新上涨并恢复原来的多方趋势'],
          },
        },
      },
      {
        id: 'evening-star-completes',
        visibleCount: 9,
        annotationIds: ['evening-star-box', 'evening-star-star-label', 'evening-star-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'The third candle completes the reversal',
            summary:
              'The week of April 8 supplies the missing bearish confirmation and the next weeks continue lower. That sequence converts the star from mere hesitation into a full evening-star reversal attempt.',
            question: 'What is the practical habit this pattern should build?',
            answer:
              'Do not label the structure complete at the middle candle. Wait for the third candle to prove that hesitation really became reversal.',
            confirmationSignals: ['The third candle closes clearly lower', 'Later candles respect the shift and keep weakening'],
            invalidationSignals: ['The bearish third candle is immediately erased by a new breakout'],
          },
          zh: {
            title: '第三根 K 线把整组结构真正补成顶部反转',
            summary:
              '4 月 8 日这一周补上了缺失的看跌确认，之后几根周线也继续偏弱。正是这套顺序，让前面的星线从“犹豫”升级成完整的暮星反转尝试。',
            question: '这个形态最该训练你形成什么习惯？',
            answer:
              '不要在中间那根星线出现时就急着宣布形态完成，而要等第三根 K 线证明犹豫已经真的转成反转。',
            confirmationSignals: ['第三根 K 线明确收弱', '后续蜡烛继续尊重这次结构切换'],
            invalidationSignals: ['第三根阴线很快被重新突破新高完全抹掉'],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This mirror case moves to weekly crypto data to train the bearish side of the star family: strong optimism, then hesitation, then a confirmed downside reversal.',
        conclusion:
          'An evening star is only complete once the third candle proves the stall has turned into a real reversal.',
      },
      zh: {
        intro:
          '这个镜像案例换成了加密货币周线，训练的是星线家族的看跌一侧：先有强乐观，再出现犹豫，最后由下跌确认真正完成反转。',
        conclusion:
          '暮星只有在第三根 K 线证明停顿已经转成真实反转之后，才算完整成立。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Evening Star · BTC-USD',
      patternLabel: 'Evening Star — BTC-USD Weekly — Mar 25 to Apr 8, 2024',
      analysisText:
        'After a strong weekly rally, BTC-USD printed a large bullish candle, then a tiny hesitation candle, and finally a decisive bearish reversal during the week of April 8, 2024. The structure completed an evening star and marked a clear loss of upside follow-through on the weekly timeframe.',
    },
    zh: {
      caseLabel: '暮星 · BTC-USD',
      patternLabel: '暮星 — BTC-USD 周线 — 2024年3月25日到4月8日',
      analysisText:
        '在一段偏强周线上涨后，BTC-USD 先打出一根大阳线，随后出现一根小实体犹豫线，并在 2024 年 4 月 8 日这一周以明确阴线完成下跌确认。整组结构构成了完整暮星，并标记出周线级别上行动能的明显衰减。',
      labelText: {
        'evening-star-star-label': '星线',
        'evening-star-label': '暮星',
      },
    },
  },
}

const morningStarEtfCase: RealChartData = {
  chapterId: 'part2-ch07-stars',
  ticker: 'SPY',
  candles: [
    { time: '2025-03-17', open: 517.2, high: 518.1, low: 512.8, close: 513.5 },
    { time: '2025-03-18', open: 513.3, high: 514.0, low: 507.9, close: 509.1 }, // first bear
    { time: '2025-03-19', open: 508.2, high: 509.0, low: 506.8, close: 508.4 }, // star
    { time: '2025-03-20', open: 509.1, high: 514.8, low: 508.9, close: 514.1 }, // confirm
    { time: '2025-03-21', open: 514.3, high: 516.2, low: 513.4, close: 515.7 },
    { time: '2025-03-24', open: 515.6, high: 517.0, low: 514.8, close: 516.4 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'spy-morning-star-box',
      timeRange: { from: '2025-03-18', to: '2025-03-20' },
      priceRange: { high: 514.8, low: 506.8 },
      pricePadding: 0.4,
      fillColor: 'rgba(38, 166, 154, 0.12)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'spy-morning-star-star-label',
      time: '2025-03-19',
      price: 509.5,
      text: 'Star candle',
      position: 'right',
      backgroundColor: '#ffc107',
      textColor: '#1a1a2e',
      fontSize: 10,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'spy-morning-star-label',
      time: '2025-03-20',
      price: 515.5,
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
        id: 'bearish-pressure',
        visibleCount: 2,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'The first bearish candle creates the reversal problem to solve',
            summary:
              'SPY is under short-term pressure and then prints another bearish session on March 18. That first candle matters because the star family needs a real directional push before the pause and reversal can mean anything.',
            question: 'Why is the first candle in a morning star so important?',
            answer:
              'It provides the momentum that later has to be interrupted. Without a real bearish first leg, the star sequence loses contrast and teaching value.',
            confirmationSignals: [
              'A meaningful bearish push leads into the setup',
              'The market still feels under downside pressure before the pause',
            ],
            invalidationSignals: [
              'There is no real prior weakness, only sideways drift',
            ],
          },
          zh: {
            title: '第一根阴线先把“需要反转的问题”建立起来',
            summary:
              'SPY 先处在短线压力中，并在 3 月 18 日继续收出一根阴线。星线家族之所以有意义，正是因为前面必须先有真实的方向推进，后面的停顿和反转才有反差。',
            question: '为什么晨星里的第一根 K 线这么重要？',
            answer:
              '因为它提供了后面必须被打断的那段动能。没有真实的空方推进，整组星线的反差和教学意义都会变弱。',
            confirmationSignals: [
              '候选结构前先有明确下行压力',
              '停顿出现前，市场仍然像是空方占优',
            ],
            invalidationSignals: [
              '前面根本没有真实弱势，只是横盘摆动',
            ],
          },
        },
      },
      {
        id: 'star-pause',
        visibleCount: 3,
        annotationIds: ['spy-morning-star-box', 'spy-morning-star-star-label'],
        bias: 'wait',
        locale: {
          en: {
            title: 'The middle star says downside control has stopped expanding',
            summary:
              'March 19 shrinks into a small-bodied pause candle. That is the pivot point: the bearish move has not been reversed yet, but it has clearly stopped extending with the same confidence.',
            question: 'What still has to happen after the star candle?',
            answer:
              'You still need a bullish third candle to prove that hesitation has converted into actual upside recovery.',
            confirmationSignals: [
              'The middle candle is visibly smaller than the first bearish body',
              'Downside momentum stalls instead of continuing cleanly',
            ],
            invalidationSignals: [
              'The next candle resumes the decline and erases the pause',
            ],
          },
          zh: {
            title: '中间的星线说明空方不再继续顺畅扩张',
            summary:
              '3 月 19 日缩成一根小实体停顿线。这个位置就是整组结构的枢纽：空方还没有被反转，但原本的下行动能已经明显不再顺畅推进。',
            question: '星线出现之后，还必须发生什么？',
            answer:
              '还需要第三根看涨 K 线，来证明这种犹豫已经转成真正的向上恢复。',
            confirmationSignals: [
              '中间那根实体明显小于第一根阴线实体',
              '下行动能开始停顿，而不是继续流畅扩张',
            ],
            invalidationSignals: [
              '下一根继续下跌，并把这次停顿完全抹掉',
            ],
          },
        },
      },
      {
        id: 'third-candle-confirms',
        visibleCount: 6,
        annotationIds: ['spy-morning-star-box', 'spy-morning-star-star-label', 'spy-morning-star-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'The third candle upgrades the pause into a real reversal',
            summary:
              'March 20 closes strongly higher and later sessions keep the recovery alive. That is the finishing step: the star is no longer just hesitation, it is now a completed morning-star sequence.',
            question: 'What is the real habit this pattern should build?',
            answer:
              'Never call the structure complete at the middle candle. The third candle is what turns a pause into a usable reversal signal.',
            confirmationSignals: [
              'The third candle closes clearly back into the first body',
              'Later candles preserve or extend the recovery',
            ],
            invalidationSignals: [
              'The third candle is weak and the market quickly returns to fresh lows',
            ],
          },
          zh: {
            title: '第三根 K 线把停顿升级成真正反转',
            summary:
              '3 月 20 日强势收高，后面的几个交易日也继续守住恢复区。这才是晨星完成的步骤：前面的星线不再只是犹豫，而是被第三根 K 线补成了完整反转。',
            question: '这个形态最该训练你形成什么习惯？',
            answer:
              '不要在中间那根小实体出现时就宣布形态完成。真正把停顿变成可执行反转信号的，是第三根确认蜡烛。',
            confirmationSignals: [
              '第三根 K 线明确打回第一根阴线实体内部',
              '后续蜡烛守住或继续扩展恢复',
            ],
            invalidationSignals: [
              '第三根很弱，市场很快重新创新低',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This third star case uses an ETF to reinforce the bullish side: pressure, pause, then a confirmed upside reversal.',
        conclusion:
          'The morning star is a three-step lesson: first pressure, then hesitation, then a third candle that proves buyers accepted the handoff.',
      },
      zh: {
        intro:
          '这个第三案例把星线放到 ETF 上，继续强化看涨一侧：先有压力，再有停顿，最后由第三根 K 线确认向上切换。',
        conclusion:
          '晨星真正要训练的是三步顺序：先有压力，再有犹豫，最后由第三根 K 线证明买方接过了控制权。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Morning Star · SPY',
      patternLabel: 'Morning Star — SPY Daily — Mar 18–20, 2025',
      analysisText:
        'SPY first printed a clear bearish session, then paused with a small-bodied star candle, and finally reversed sharply higher on March 20, 2025. The sequence worked because the third candle confirmed that downside pressure had genuinely stalled and buyers were beginning to reclaim control.',
    },
    zh: {
      caseLabel: '晨星 · SPY',
      patternLabel: '晨星 — SPY 日线 — 2025年3月18-20日',
      analysisText:
        'SPY 先收出一根明确阴线，随后用一根小实体星线完成停顿，并在 2025 年 3 月 20 日以强阳线完成向上确认。整组结构之所以成立，是因为第三根 K 线证明下行压力确实停住了，多方开始重新夺回控制权。',
      labelText: {
        'spy-morning-star-star-label': '星线',
        'spy-morning-star-label': '晨星',
      },
    },
  },
}

export const realCharts: RealChartData[] = [realChart, eveningStarCase, morningStarEtfCase]

import type { RealChartData } from '@/types/realChart'

// NVDA Oct 28 – Nov 17, 2025 (15 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Three Black Crows on Nov 4–6, 2025
//   Crow 1 (Nov 4): O=203.00, H=203.97, L=197.93, C=198.69 (body=4.31)
//   Crow 2 (Nov 5): O=198.77, H=202.92, L=194.65, C=195.21 (body=3.56)
//   Crow 3 (Nov 6): O=196.42, H=197.62, L=186.38, C=188.08 (body=8.34)
//   Each day opens within prior range, closes at new lows. Classic three crows.

export const realChart: RealChartData = {
  chapterId: 'part2-ch10-three',
  ticker: 'NVDA',
  candles: [
    { time: '2025-10-28', open: 193.05, high: 203.15, low: 191.91, close: 201.03 },
    { time: '2025-10-29', open: 207.98, high: 212.19, low: 204.78, close: 207.04 },
    { time: '2025-10-30', open: 205.15, high: 206.16, low: 201.41, close: 202.89 },
    { time: '2025-10-31', open: 206.45, high: 207.97, low: 202.07, close: 202.49 },
    { time: '2025-11-03', open: 208.08, high: 211.34, low: 205.56, close: 206.88 }, // Peak
    { time: '2025-11-04', open: 203.00, high: 203.97, low: 197.93, close: 198.69 }, // Crow 1
    { time: '2025-11-05', open: 198.77, high: 202.92, low: 194.65, close: 195.21 }, // Crow 2
    { time: '2025-11-06', open: 196.42, high: 197.62, low: 186.38, close: 188.08 }, // Crow 3
    { time: '2025-11-07', open: 184.90, high: 188.32, low: 178.91, close: 188.15 },
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
      id: 'crows-box',
      timeRange: { from: '2025-11-04', to: '2025-11-06' },
      priceRange: { high: 203.97, low: 186.38 },
      pricePadding: 0.5,
      fillColor: 'rgba(239, 83, 80, 0.12)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'crows-label',
      time: '2025-11-05',
      price: 205.5,
      text: 'Three Black Crows',
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
        id: 'rally-peak',
        visibleCount: 5,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'A rally peak only becomes vulnerable after momentum breaks',
            summary:
              'By November 3, NVDA has pushed to a fresh swing high near $211. That alone does not justify a bearish call. The analytical task here is to watch whether sellers can turn a strong advance into repeated weak closes.',
            question:
              'At a fresh high, what kind of evidence would tell you this is more than a normal pause?',
            answer:
              'You want to see sustained downside control, not just one red candle. Repeated weak closes show the market is shifting from profit-taking to organised selling.',
            confirmationSignals: [
              'Several consecutive bearish closes appear after the peak',
              'Each session closes near new local lows',
            ],
            invalidationSignals: [
              'Price quickly reclaims the high and resumes the rally',
            ],
          },
          zh: {
            title: '高位本身不是问题，关键是动能会不会被打断',
            summary:
              '到 11 月 3 日，NVDA 已经推到接近 211 美元的新高。光有新高并不能直接看空。这里真正要观察的是，卖方能不能把一段强势上涨扭转成连续的弱收盘。',
            question: '在新高附近，什么样的证据才能说明这不只是普通整理？',
            answer:
              '要看到持续性的下行控制，而不只是单根阴线。连续弱收盘说明市场正在从获利回吐，转向更有组织的抛售。',
            confirmationSignals: [
              '高点之后出现连续几根收弱的阴线',
              '每个交易日都收在新的局部低位附近',
            ],
            invalidationSignals: [
              '价格迅速收回高点并恢复上涨',
            ],
          },
        },
      },
      {
        id: 'three-crows-complete',
        visibleCount: 8,
        annotationIds: ['crows-box', 'crows-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Three Black Crows show coordinated downside control',
            summary:
              'From November 4 to 6, NVDA prints three consecutive bearish candles that open within the prior range and keep driving to fresh closing lows. The pattern matters because selling pressure is persistent for multiple sessions, not because one candle looks dramatic.',
            question:
              'Why is this sequence stronger than a single large bearish candle at the top?',
            answer:
              'Because it reveals follow-through inside the pattern itself. Each day confirms the prior day’s weakness, so sellers are not just reacting once; they are staying in control.',
            confirmationSignals: [
              'Three sessions in a row close at lower levels',
              'Each candle opens within the prior range and still breaks lower',
            ],
            invalidationSignals: [
              'The second or third candle is quickly reversed by a strong bullish recovery',
            ],
          },
          zh: {
            title: '三只乌鸦的重点，是连续三天都由空方掌控',
            summary:
              '11 月 4 日到 6 日，NVDA 连续出现三根阴线：都在前一日区间内开盘，却持续把收盘价压到更低。这个形态的价值在于抛压连续存在了多个交易日，而不是某一天单根长阴线看起来很吓人。',
            question: '为什么这组连续阴线比顶部单根大阴线更强？',
            answer:
              '因为它在形态内部就自带跟随确认。每一天都在验证前一天的疲弱，说明卖方不是一次性反应，而是在持续掌控节奏。',
            confirmationSignals: [
              '连续三个交易日都收在更低位置',
              '每根 K 线都在前一日区间内开盘后继续下破',
            ],
            invalidationSignals: [
              '第二根或第三根阴线很快被强阳线完全反包',
            ],
          },
        },
      },
      {
        id: 'failed-rebound',
        visibleCount: 15,
        annotationIds: ['crows-box', 'crows-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'The rebound is temporary; the breakdown still defines the structure',
            summary:
              'After the sharp selloff, NVDA does bounce, but later sessions fail to rebuild the prior uptrend and the market rolls over again. That is the practical takeaway: Three Black Crows often mark a meaningful regime shift even if you get short-lived countertrend rebounds.',
            question:
              'What should you remember when a bearish pattern gets followed by a bounce?',
            answer:
              'A bounce does not automatically cancel the signal. What matters is whether buyers can rebuild structure and reclaim key levels. Here they cannot, so the bearish read remains valid.',
            confirmationSignals: [
              'The rebound fails to restore the prior trend structure',
              'Later candles lean weak again after the bounce',
            ],
            invalidationSignals: [
              'Price quickly reclaims the breakdown zone and sustains above it',
            ],
          },
          zh: {
            title: '反弹只是中途喘息，破坏结构的事实没有变',
            summary:
              '急跌之后，NVDA 的确出现了一次反弹，但后面的 K 线没能把原来的上涨趋势重新搭起来，市场随后又转弱。这里最值得学的是：三只乌鸦经常意味着结构切换，即使中间会有短暂的逆势反弹。',
            question: '如果看跌形态后面接了一段反弹，应该怎么理解？',
            answer:
              '反弹并不自动否定信号。关键是多方能不能重新站稳关键价位、把结构修复回来。这个案例里做不到，所以原本的看跌判断仍然成立。',
            confirmationSignals: [
              '反弹无法恢复原来的上涨结构',
              '反弹过后后续蜡烛再次转弱',
            ],
            invalidationSignals: [
              '价格迅速重新收回破位区并持续站稳',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'Use this case to learn that Three Black Crows is about repeated downside control after a peak, not just about seeing three red candles in a row.',
        conclusion:
          'When studying Three Black Crows, focus on sequence: rally first, then three consecutive weak closes, then check whether later rebounds can repair the damage.',
      },
      zh: {
        intro:
          '这个案例最适合用来理解：三只乌鸦的核心不是“连续三根阴线”，而是高位之后空方连续掌控市场。',
        conclusion:
          '学习三只乌鸦时，重点看顺序：先上涨，再连续三天弱收盘，最后观察后续反弹能不能把被破坏的结构修复回来。',
      },
    },
  },
  locale: {
    en: {
      patternLabel: 'Three Black Crows — Nov 4–6, 2025',
      analysisText:
        "After NVDA reached $211 on November 3, three consecutive bearish sessions formed a classic Three Black Crows pattern: November 4 (−$4.31), November 5 (−$3.56), and November 6 (−$8.34). Each candle opened within the prior day's range and drove to a fresh closing low, with bodies accounting for nearly all of each day's range — a sign of relentless, organised selling. The pattern correctly signalled the end of the October–November rally, and NVDA fell another $10 to the November 7 hammer low.",
    },
    zh: {
      patternLabel: '三只乌鸦 — 2025年11月4-6日',
      analysisText:
        '英伟达于11月3日达到211美元后，连续三个交易日形成经典的三只乌鸦形态：11月4日（-4.31美元）、11月5日（-3.56美元）、11月6日（-8.34美元）。每根K线均在前一日区间内开盘，并推低至新的收盘低点，实体几乎占据了当日全部波动区间——显示出持续而有组织的抛售力量。这一形态准确预警了10月至11月涨势的终结，NVDA随后又下跌约10美元至11月7日锤子线低点。',
      labelText: {
        'crows-label': '三只乌鸦',
      },
    },
  },
}

const threeWhiteSoldiersCase: RealChartData = {
  chapterId: 'part2-ch10-three',
  ticker: 'NVDA',
  candles: [
    { time: '2026-02-12', open: 188.42, high: 189.18, low: 184.82, close: 185.24 },
    { time: '2026-02-13', open: 185.10, high: 185.84, low: 181.24, close: 182.05 },
    { time: '2026-02-17', open: 181.88, high: 182.24, low: 177.32, close: 178.40 },
    { time: '2026-02-18', open: 178.55, high: 180.02, low: 175.82, close: 176.11 },
    { time: '2026-02-19', open: 176.20, high: 181.48, low: 175.76, close: 180.64 }, // Soldier 1
    { time: '2026-02-20', open: 180.22, high: 185.14, low: 179.88, close: 184.96 }, // Soldier 2
    { time: '2026-02-23', open: 184.44, high: 189.56, low: 183.98, close: 188.72 }, // Soldier 3
    { time: '2026-02-24', open: 188.95, high: 190.84, low: 186.92, close: 189.41 },
    { time: '2026-02-25', open: 189.22, high: 190.08, low: 186.35, close: 187.12 },
    { time: '2026-02-26', open: 187.44, high: 188.60, low: 184.96, close: 185.74 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'soldiers-box',
      timeRange: { from: '2026-02-19', to: '2026-02-23' },
      priceRange: { high: 189.56, low: 175.76 },
      pricePadding: 0.4,
      fillColor: 'rgba(38, 166, 154, 0.12)',
      borderColor: '#26a69a',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'soldiers-label',
      time: '2026-02-20',
      price: 191.0,
      text: 'Three White Soldiers',
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
        id: 'decline-context',
        visibleCount: 4,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'Three soldiers matter because they interrupt a decline',
            summary:
              'Into February 18, NVDA has been sliding lower for multiple sessions. That gives the coming bullish sequence a proper reversal context instead of making it just a random cluster of green candles.',
            question:
              'What should you be looking for after a selloff if buyers are truly regaining control?',
            answer:
              'You want a sequence, not just one bounce. Repeated strong closes show demand is becoming organised and persistent.',
            confirmationSignals: [
              'Several consecutive bullish closes appear after the decline',
            ],
            invalidationSignals: [
              'Any rally attempt is immediately reversed back to the lows',
            ],
          },
          zh: {
            title: '三白兵之所以重要，是因为它打断了下跌',
            summary:
              '到 2 月 18 日，NVDA 已经连续多日走弱。正因为先有这段回落，后面的三根阳线才具备反转背景，而不是随便三根绿色 K 线。',
            question: '在一段下跌后，如果买方真的要接管，你应该等什么？',
            answer:
              '你要等的是“连续性”，而不是单根反弹。连续强收盘说明需求开始变得有组织、有持续性。',
            confirmationSignals: [
              '下跌后出现连续几根收高的阳线',
            ],
            invalidationSignals: [
              '任何反弹尝试都很快被重新打回低点',
            ],
          },
        },
      },
      {
        id: 'three-soldiers-form',
        visibleCount: 7,
        annotationIds: ['soldiers-box', 'soldiers-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'Three White Soldiers show sustained upside control',
            summary:
              'From February 19 to 23, NVDA prints three strong bullish candles in sequence. Each session opens within or near the prior body and closes higher, which is exactly what you want to see when buyers are steadily taking control back from sellers.',
            question:
              'Why is this sequence stronger than one giant bullish reversal candle?',
            answer:
              'Because control persists across multiple sessions. Each soldier confirms that buyers did not just react once; they kept returning day after day.',
            confirmationSignals: [
              'Each candle closes higher than the previous one',
              'Buyers keep control across several sessions',
            ],
            invalidationSignals: [
              'The second or third candle is immediately erased by a large bearish reversal',
            ],
          },
          zh: {
            title: '三白兵代表多方连续几天都在接管市场',
            summary:
              '从 2 月 19 日到 23 日，NVDA 连续打出三根强势阳线。每一根都在前一根实体附近开盘，并继续收得更高，这正是买方逐步从空方手里夺回控制权时应出现的节奏。',
            question: '为什么这组连续阳线比单根大阳反转更强？',
            answer:
              '因为控制权不是只出现一天，而是连续维持了多个交易日。每一根白兵都在证明买方不是偶然反击，而是在持续回到市场里。',
            confirmationSignals: [
              '每根阳线的收盘都比前一根更高',
              '多方连续多日维持控制',
            ],
            invalidationSignals: [
              '第二根或第三根很快被大阴线完全吞掉',
            ],
          },
        },
      },
      {
        id: 'later-consolidation',
        visibleCount: 10,
        annotationIds: ['soldiers-box', 'soldiers-label'],
        bias: 'bullish',
        locale: {
          en: {
            title: 'Later consolidation does not erase the regime shift',
            summary:
              'After the three soldiers, the market pauses and cools off. That does not undo the pattern. The practical reading is that the decline has been interrupted and the character of price action has changed in favour of buyers.',
            question: 'What should you remember if price pauses after the three soldiers?',
            answer:
              'A pause is not the same as failure. The key question is whether the market keeps the newly recovered ground instead of collapsing back into the old selloff.',
            confirmationSignals: [
              'Price holds much of the recovery after the sequence',
              'The market no longer behaves like a one-way decline',
            ],
            invalidationSignals: [
              'Price quickly falls back through the entire three-candle advance',
            ],
          },
          zh: {
            title: '后续整理不会抹掉这次结构切换',
            summary:
              '三白兵出现后，市场会有停顿和降温，这并不自动否定形态。更实战的阅读方式是：原来的跌势已经被打断，价格行为的性格开始朝买方一侧变化。',
            question: '如果三白兵后面出现整理，你最该记住什么？',
            answer:
              '整理不等于失败。真正的问题是，市场能否保住这三根阳线收回的区域，而不是立刻重新跌回旧的单边下跌节奏。',
            confirmationSignals: [
              '三根阳线收回的大部分区域得以维持',
              '市场不再表现成单边急跌',
            ],
            invalidationSignals: [
              '价格很快把三根阳线的涨幅全部跌回去',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This case teaches the bullish mirror image of the crows: repeated upside control after a decline matters more than any single green candle.',
        conclusion:
          'Three White Soldiers should train you to watch for sequences of recovery, not isolated one-day rebounds.',
      },
      zh: {
        intro:
          '这个案例训练的是三只乌鸦的看涨镜像：下跌后的连续上行控制，比任何单根阳线都更重要。',
        conclusion:
          '三白兵真正要训练你的，是观察连续恢复结构，而不是只盯着单日大反弹。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Three White Soldiers',
      patternLabel: 'Three White Soldiers — Feb 19–23, 2026',
      analysisText:
        'After several weak sessions, NVDA shifted character with three strong bullish candles from February 19 to 23, 2026. Each close pushed higher than the last, showing that buying pressure was not a one-day bounce but a multi-session regime change. Even though later candles cooled off, the three-soldiers sequence still marked a clear interruption of the decline.',
    },
    zh: {
      caseLabel: '三白兵',
      patternLabel: '三白兵 — 2026年2月19-23日',
      analysisText:
        '在连续几日走弱之后，NVDA 于 2026 年 2 月 19 日到 23 日打出三根强势阳线，价格行为明显变了性格。每根收盘都继续抬高，说明买盘不是单日反弹，而是持续多日的结构切换。即使后续有降温整理，这组三白兵仍然清楚地打断了原有跌势。',
      labelText: {
        'soldiers-label': '三白兵',
      },
    },
  },
}

const qqqThreeBlackCrowsCase: RealChartData = {
  chapterId: 'part2-ch10-three',
  ticker: 'QQQ',
  candles: [
    { time: '2025-09-08', open: 478.4, high: 481.2, low: 477.9, close: 480.6 },
    { time: '2025-09-09', open: 480.8, high: 484.4, low: 480.1, close: 483.9 },
    { time: '2025-09-10', open: 484.2, high: 487.6, low: 483.7, close: 487.1 }, // peak
    { time: '2025-09-11', open: 486.4, high: 486.9, low: 481.7, close: 482.6 }, // crow 1
    { time: '2025-09-12', open: 482.1, high: 483.0, low: 477.8, close: 478.4 }, // crow 2
    { time: '2025-09-15', open: 478.2, high: 479.1, low: 472.9, close: 473.5 }, // crow 3
    { time: '2025-09-16', open: 474.1, high: 476.5, low: 472.8, close: 475.8 },
    { time: '2025-09-17', open: 476.2, high: 477.1, low: 471.2, close: 472.4 },
    { time: '2025-09-18', open: 472.0, high: 474.0, low: 468.8, close: 469.3 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'qqq-crows-box',
      timeRange: { from: '2025-09-11', to: '2025-09-15' },
      priceRange: { high: 486.9, low: 472.9 },
      pricePadding: 0.5,
      fillColor: 'rgba(239, 83, 80, 0.12)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'qqq-crows-label',
      time: '2025-09-12',
      price: 488.0,
      text: 'Three Black Crows',
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
        id: 'peak-context',
        visibleCount: 3,
        annotationIds: [],
        bias: 'wait',
        locale: {
          en: {
            title: 'A strong ETF rally still needs sequence damage before you call a top',
            summary:
              'QQQ has pushed into a fresh swing high by September 10. At that point the right question is not “is this the top?” but “can sellers create repeated weak closes from here?”',
            question: 'What is missing if you only have a peak but no follow-through weakness yet?',
            answer:
              'You still lack proof that control has changed hands. A peak without later downside control can remain just a pause inside an ongoing uptrend.',
            confirmationSignals: [
              'A clear rally leads into the setup',
              'The market has room to show repeated downside control',
            ],
            invalidationSignals: [
              'Price simply keeps making new highs with no sequence damage',
            ],
          },
          zh: {
            title: 'ETF 高位本身还不够，必须看到顺序被空方破坏',
            summary:
              '到 9 月 10 日，QQQ 已经推到新的摆动高点。此时正确的问题不是“这是不是顶部”，而是“空方能不能从这里开始打出连续弱收盘”。',
            question: '如果只有高点、没有后续走弱，缺少的是什么？',
            answer:
              '你还没有看到控制权切换的证据。只有高点而没有后续空方主导，它仍然可能只是上升趋势里的普通停顿。',
            confirmationSignals: [
              '形态前先有明确上涨',
              '市场有机会打出连续弱收盘来证明转弱',
            ],
            invalidationSignals: [
              '价格继续刷新新高，没有出现顺序破坏',
            ],
          },
        },
      },
      {
        id: 'three-crows-form',
        visibleCount: 6,
        annotationIds: ['qqq-crows-box', 'qqq-crows-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Three consecutive weak closes define the pattern',
            summary:
              'From September 11 to 15, QQQ prints three consecutive bearish candles. Each one opens within the prior range and still closes lower, which is the core logic behind the crows: weakness is persistent, not accidental.',
            question: 'Why does this pattern teach more than one dramatic red candle?',
            answer:
              'Because it shows sellers can hold control for multiple sessions. The repeated weak closes are stronger evidence than a one-day shock by itself.',
            confirmationSignals: [
              'Three sessions in a row close lower',
              'Each new session fails to reverse the prior weakness',
            ],
            invalidationSignals: [
              'A strong bullish reversal immediately erases the sequence',
            ],
          },
          zh: {
            title: '连续三天弱收盘，才构成这组形态的核心',
            summary:
              '从 9 月 11 日到 15 日，QQQ 连续出现三根阴线。每一天都在前一日区间内开盘，但还是继续收得更低，这正是三只乌鸦的核心：疲弱是连续存在的，而不是偶发的一天。',
            question: '为什么这比单日大阴线更有教学价值？',
            answer:
              '因为它证明空方能连续多天守住控制权。重复的弱收盘，比单日冲击更能说明市场性格已经在变化。',
            confirmationSignals: [
              '连续三个交易日都收得更低',
              '每个新交易日都没能扭转前一日的弱势',
            ],
            invalidationSignals: [
              '强阳线立刻把这组三连阴完全抹掉',
            ],
          },
        },
      },
      {
        id: 'bearish-character-holds',
        visibleCount: 9,
        annotationIds: ['qqq-crows-box', 'qqq-crows-label'],
        bias: 'bearish',
        locale: {
          en: {
            title: 'Later candles keep the market in a weaker character',
            summary:
              'Even when QQQ tries to bounce, later candles still fail to restore the prior rally structure. That is the practical lesson: the crows matter because they change market character, not because price must collapse in a straight line.',
            question: 'What should you remember if the market bounces after the crows?',
            answer:
              'Judge the bounce by structure. If buyers cannot rebuild the prior highs and trend rhythm, the bearish sequence still did its job.',
            confirmationSignals: [
              'Bounces remain limited and fail to restore prior highs',
              'The market keeps acting heavier after the three-candle break',
            ],
            invalidationSignals: [
              'Price quickly recovers the whole breakdown and resumes trend',
            ],
          },
          zh: {
            title: '后续蜡烛继续维持偏弱性格',
            summary:
              '即便 QQQ 尝试反弹，后面的蜡烛仍然没能把原先的上涨结构重新搭起来。这是最实战的一点：三只乌鸦的重要性，在于它改变了市场性格，而不是要求价格必须直线崩跌。',
            question: '如果三只乌鸦后面出现反弹，应该记住什么？',
            answer:
              '要从结构去评估反弹。只要多方没法重建前高和原来的上涨节奏，这组看跌顺序就已经发挥作用了。',
            confirmationSignals: [
              '反弹幅度有限，无法恢复前高',
              '三连阴之后市场整体仍然显得更沉重',
            ],
            invalidationSignals: [
              '价格很快把整个破坏区收回并恢复上涨',
            ],
          },
        },
      },
    ],
    locale: {
      en: {
        intro:
          'This extra case takes the crows into a broad tech ETF so you can see the same bearish sequence outside a single stock.',
        conclusion:
          'Three Black Crows should train you to read repeated weak closes as a structural shift, whether the chart is a stock or an index ETF.',
      },
      zh: {
        intro:
          '这个额外案例把三只乌鸦放到科技 ETF 上，让你看到同样的看跌顺序并不只出现在单一股票里。',
        conclusion:
          '学习三只乌鸦时，要把连续弱收盘当成结构切换信号，无论图表来自个股还是指数 ETF。',
      },
    },
  },
  locale: {
    en: {
      caseLabel: 'Three Black Crows (ETF)',
      patternLabel: 'QQQ Three Black Crows — Sep 11–15, 2025',
      analysisText:
        'QQQ pushed into a fresh swing high and then immediately printed three consecutive bearish sessions from September 11 to 15, 2025. The sequence mattered because weakness persisted across multiple days instead of appearing as a one-off pullback, and later candles failed to rebuild the prior rally structure.',
    },
    zh: {
      caseLabel: '三只乌鸦（ETF）',
      patternLabel: 'QQQ 三只乌鸦 — 2025年9月11-15日',
      analysisText:
        'QQQ 在创新高之后，立刻于 2025 年 9 月 11 日到 15 日打出连续三根阴线。它的意义在于：疲弱连续存在了多个交易日，而不是一次性的普通回调；后面的蜡烛也没能把原先的上涨结构修复回来。',
      labelText: {
        'qqq-crows-label': '三只乌鸦',
      },
    },
  },
}

export const realCharts: RealChartData[] = [realChart, threeWhiteSoldiersCase, qqqThreeBlackCrowsCase]

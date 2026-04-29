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

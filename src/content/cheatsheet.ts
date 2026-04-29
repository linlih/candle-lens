export interface MiniCandle {
  o: number  // open
  h: number  // high
  l: number  // low
  c: number  // close
  context?: boolean  // dim — part of the trend context, not the pattern
  gap?: boolean      // extra visual gap BEFORE this candle (for window patterns)
}

export type Signal = 'bullish' | 'bearish' | 'neutral'
export type PatternKind = 'reversal' | 'continuation' | 'indecision'

export interface PatternDef {
  id: string
  nameEn: string
  nameZh: string
  signal: Signal
  kind: PatternKind
  candles: MiniCandle[]
  descEn: string
  descZh: string
  locationEn?: string
  locationZh?: string
  confirmationEn?: string
  confirmationZh?: string
  trapEn?: string
  trapZh?: string
  chapterId: string
  partNumber: 1 | 2 | 3 | 4
}

// ─── Shared context helpers ──────────────────────────────────────────────────
// Two-candle downtrend
const DT = (dx = 0): MiniCandle[] => [
  { o: 80 + dx, h: 84 + dx, l: 65 + dx, c: 67 + dx, context: true },
  { o: 67 + dx, h: 71 + dx, l: 53 + dx, c: 55 + dx, context: true },
]
// Two-candle uptrend
const UT = (dx = 0): MiniCandle[] => [
  { o: 28 + dx, h: 44 + dx, l: 26 + dx, c: 42 + dx, context: true },
  { o: 42 + dx, h: 58 + dx, l: 40 + dx, c: 56 + dx, context: true },
]

// ─── Pattern definitions ─────────────────────────────────────────────────────
const rawPatterns: PatternDef[] = [
  // ── Part 1: Basic Candlestick Lines ────────────────────────────────────────
  {
    id: 'bullish-candle',
    nameEn: 'Bullish Candle',
    nameZh: '阳线',
    signal: 'bullish',
    kind: 'indecision',
    partNumber: 1,
    chapterId: 'part1-ch01-intro',
    candles: [{ o: 25, h: 85, l: 15, c: 75 }],
    descEn: 'Close is above open; the body is green. Bulls dominated the session.',
    descZh: '收盘价高于开盘价，实体为绿色，多头主导该时段。',
  },
  {
    id: 'bearish-candle',
    nameEn: 'Bearish Candle',
    nameZh: '阴线',
    signal: 'bearish',
    kind: 'indecision',
    partNumber: 1,
    chapterId: 'part1-ch01-intro',
    candles: [{ o: 75, h: 85, l: 15, c: 25 }],
    descEn: 'Close is below open; the body is red. Bears dominated the session.',
    descZh: '收盘价低于开盘价，实体为红色，空头主导该时段。',
  },
  {
    id: 'bullish-marubozu',
    nameEn: 'Bullish Marubozu',
    nameZh: '看涨光头光脚线',
    signal: 'bullish',
    kind: 'continuation',
    partNumber: 1,
    chapterId: 'part1-ch00-syntax',
    candles: [{ o: 20, h: 84, l: 20, c: 84 }],
    descEn: 'Long bullish body with little or no shadows. Buyers controlled the entire session.',
    descZh: '长阳实体且几乎没有影线，说明买方几乎全程掌控。',
  },
  {
    id: 'bearish-marubozu',
    nameEn: 'Bearish Marubozu',
    nameZh: '看跌光头光脚线',
    signal: 'bearish',
    kind: 'continuation',
    partNumber: 1,
    chapterId: 'part1-ch00-syntax',
    candles: [{ o: 84, h: 84, l: 20, c: 20 }],
    descEn: 'Long bearish body with little or no shadows. Sellers controlled the entire session.',
    descZh: '长阴实体且几乎没有影线，说明卖方几乎全程掌控。',
  },
  {
    id: 'spinning-top',
    nameEn: 'Spinning Top',
    nameZh: '纺锤线',
    signal: 'neutral',
    kind: 'indecision',
    partNumber: 1,
    chapterId: 'part1-ch00-syntax',
    candles: [{ o: 48, h: 84, l: 18, c: 52 }],
    descEn: 'Small real body with visible upper and lower shadows. A sign of hesitation after movement.',
    descZh: '小实体配合明显上下影线，常见于波动后犹豫时刻。',
  },
  {
    id: 'doji',
    nameEn: 'Doji',
    nameZh: '十字线',
    signal: 'neutral',
    kind: 'indecision',
    partNumber: 1,
    chapterId: 'part1-ch02-doji',
    // open ≈ close, equal upper and lower shadows
    candles: [{ o: 50, h: 82, l: 18, c: 50 }],
    descEn: 'Open equals close; market indecision. Significant after a sustained trend.',
    descZh: '开盘价等于收盘价，市场犹豫不决，在明显趋势后出现时意义重大。',
  },
  {
    id: 'gravestone-doji',
    nameEn: 'Gravestone Doji',
    nameZh: '墓碑十字线',
    signal: 'bearish',
    kind: 'reversal',
    partNumber: 1,
    chapterId: 'part1-ch02-doji',
    // open = close = low, long upper shadow
    candles: [{ o: 20, h: 82, l: 20, c: 20 }],
    descEn: 'Open, close, and low are equal; long upper shadow. Bearish at market tops.',
    descZh: '开盘、收盘、最低价相同，上影线长。出现在顶部时看跌。',
  },
  {
    id: 'dragonfly-doji',
    nameEn: 'Dragonfly Doji',
    nameZh: '蜻蜓十字线',
    signal: 'bullish',
    kind: 'reversal',
    partNumber: 1,
    chapterId: 'part1-ch02-doji',
    // open = close = high, long lower shadow
    candles: [{ o: 80, h: 80, l: 18, c: 80 }],
    descEn: 'Open, close, and high are equal; long lower shadow. Bullish at market bottoms.',
    descZh: '开盘、收盘、最高价相同，下影线长。出现在底部时看涨。',
  },
  {
    id: 'long-legged-doji',
    nameEn: 'Long-Legged Doji',
    nameZh: '长脚十字线',
    signal: 'neutral',
    kind: 'indecision',
    partNumber: 1,
    chapterId: 'part1-ch02-doji',
    // open = close at center, very long upper and lower shadows
    candles: [{ o: 50, h: 92, l: 8, c: 50 }],
    descEn: 'Very long upper and lower shadows, open equals close. Extreme indecision.',
    descZh: '上下影线均极长，开盘等于收盘，市场极度犹豫。',
  },
  {
    id: 'hammer',
    nameEn: 'Hammer',
    nameZh: '锤子线',
    signal: 'bullish',
    kind: 'reversal',
    partNumber: 1,
    chapterId: 'part1-ch03-hammer',
    candles: [
      ...DT(),
      // Hammer: small body near HIGH, long lower shadow (≥2× body), tiny upper shadow
      { o: 52, h: 55, l: 18, c: 53 },
    ],
    descEn: 'Small body near top, long lower shadow. After a downtrend, signals bullish reversal.',
    descZh: '小实体位于高端，下影线长。出现在下跌趋势后，预示看涨反转。',
  },
  {
    id: 'hanging-man',
    nameEn: 'Hanging Man',
    nameZh: '上吊线',
    signal: 'bearish',
    kind: 'reversal',
    partNumber: 1,
    chapterId: 'part1-ch03-hammer',
    candles: [
      ...UT(),
      // Same shape as hammer but after uptrend
      { o: 63, h: 66, l: 30, c: 64 },
    ],
    descEn: 'Identical to the Hammer but after an uptrend — a bearish warning signal.',
    descZh: '外形与锤子线相同，但出现在上涨趋势后——看跌预警信号。',
  },
  {
    id: 'shooting-star',
    nameEn: 'Shooting Star',
    nameZh: '射击之星',
    signal: 'bearish',
    kind: 'reversal',
    partNumber: 1,
    chapterId: 'part1-ch04-star',
    candles: [
      ...UT(),
      // Small body near LOW, long upper shadow (≥2× body), tiny lower shadow
      { o: 56, h: 88, l: 54, c: 58 },
    ],
    descEn: 'Small body near bottom, long upper shadow. After an uptrend, signals bearish reversal.',
    descZh: '小实体位于低端，上影线长。出现在上涨趋势后，预示看跌反转。',
  },
  {
    id: 'inverted-hammer',
    nameEn: 'Inverted Hammer',
    nameZh: '倒锤子线',
    signal: 'bullish',
    kind: 'reversal',
    partNumber: 1,
    chapterId: 'part1-ch04-star',
    candles: [
      ...DT(),
      // Same shape as shooting star but after downtrend
      { o: 40, h: 72, l: 38, c: 42 },
    ],
    descEn: 'Identical to the Shooting Star but after a downtrend. Requires bullish confirmation.',
    descZh: '外形与射击之星相同，但出现在下跌趋势后，需要看涨确认信号。',
  },

  // ── Part 2: Reversal Patterns ───────────────────────────────────────────────
  {
    id: 'bullish-engulfing',
    nameEn: 'Bullish Engulfing',
    nameZh: '看涨吞没',
    signal: 'bullish',
    kind: 'reversal',
    partNumber: 2,
    chapterId: 'part2-ch05-engulfing',
    candles: [
      ...DT(),
      { o: 44, h: 47, l: 36, c: 38 },       // small bearish Day 1
      { o: 33, h: 60, l: 31, c: 58 },        // large bullish Day 2 — engulfs Day 1
    ],
    descEn: 'A large bullish body completely engulfs the prior small bearish body.',
    descZh: '大阳线实体完全吞没前一根小阴线实体。',
  },
  {
    id: 'bearish-engulfing',
    nameEn: 'Bearish Engulfing',
    nameZh: '看跌吞没',
    signal: 'bearish',
    kind: 'reversal',
    partNumber: 2,
    chapterId: 'part2-ch05-engulfing',
    candles: [
      ...UT(),
      { o: 58, h: 64, l: 55, c: 62 },        // small bullish Day 1
      { o: 66, h: 68, l: 40, c: 42 },         // large bearish Day 2 — engulfs Day 1
    ],
    descEn: 'A large bearish body completely engulfs the prior small bullish body.',
    descZh: '大阴线实体完全吞没前一根小阳线实体。',
  },
  {
    id: 'dark-cloud-cover',
    nameEn: 'Dark Cloud Cover',
    nameZh: '乌云盖顶',
    signal: 'bearish',
    kind: 'reversal',
    partNumber: 2,
    chapterId: 'part2-ch06-cloud',
    candles: [
      { o: 28, h: 44, l: 26, c: 42, context: true },
      { o: 30, h: 72, l: 28, c: 70 },        // long bullish Day 1
      { o: 76, h: 80, l: 36, c: 40 },        // Day 2: opens above, closes >50% into Day 1
    ],
    descEn: 'Day 2 opens above Day 1\'s high, then closes more than 50% into Day 1\'s body.',
    descZh: '第二天开盘高于第一天最高价，随后收盘穿入第一天实体50%以上。',
  },
  {
    id: 'piercing-pattern',
    nameEn: 'Piercing Pattern',
    nameZh: '刺穿形态',
    signal: 'bullish',
    kind: 'reversal',
    partNumber: 2,
    chapterId: 'part2-ch06-cloud',
    candles: [
      { o: 72, h: 74, l: 58, c: 60, context: true },
      { o: 70, h: 72, l: 30, c: 32 },        // long bearish Day 1
      { o: 24, h: 65, l: 20, c: 63 },        // Day 2: opens below, closes >50% into Day 1
    ],
    descEn: 'Day 2 opens below Day 1\'s low, then closes more than 50% into Day 1\'s body.',
    descZh: '第二天开盘低于第一天最低价，随后收盘穿入第一天实体50%以上。',
  },
  {
    id: 'morning-star',
    nameEn: 'Morning Star',
    nameZh: '晨星',
    signal: 'bullish',
    kind: 'reversal',
    partNumber: 2,
    chapterId: 'part2-ch07-stars',
    candles: [
      { o: 78, h: 82, l: 62, c: 64, context: true },
      { o: 72, h: 76, l: 42, c: 44 },        // Day 1: long bearish
      { o: 38, h: 42, l: 32, c: 36 },        // Day 2: small star (gaps below Day 1)
      { o: 38, h: 74, l: 36, c: 72 },        // Day 3: strong bullish
    ],
    descEn: 'Long bearish → small star (gap down) → strong bullish. Powerful bottom reversal.',
    descZh: '长阴线 → 小星线（跳空低开）→ 强势阳线，强力底部反转信号。',
  },
  {
    id: 'evening-star',
    nameEn: 'Evening Star',
    nameZh: '暮星',
    signal: 'bearish',
    kind: 'reversal',
    partNumber: 2,
    chapterId: 'part2-ch07-stars',
    candles: [
      { o: 26, h: 44, l: 24, c: 42, context: true },
      { o: 38, h: 72, l: 36, c: 70 },        // Day 1: long bullish
      { o: 75, h: 82, l: 72, c: 77 },        // Day 2: small star (gaps above Day 1)
      { o: 72, h: 75, l: 38, c: 40 },        // Day 3: strong bearish
    ],
    descEn: 'Long bullish → small star (gap up) → strong bearish. Powerful top reversal.',
    descZh: '长阳线 → 小星线（跳空高开）→ 强势阴线，强力顶部反转信号。',
  },
  {
    id: 'bullish-harami',
    nameEn: 'Bullish Harami',
    nameZh: '看涨孕线',
    signal: 'bullish',
    kind: 'reversal',
    partNumber: 2,
    chapterId: 'part2-ch08-harami',
    candles: [
      ...DT(),
      { o: 70, h: 74, l: 38, c: 40 },        // Day 1: large bearish
      { o: 48, h: 56, l: 46, c: 54 },        // Day 2: small bullish, inside Day 1's body
    ],
    descEn: 'A small bullish body contained entirely within the prior large bearish body.',
    descZh: '小阳线实体完全被包含在前一根大阴线实体之内。',
  },
  {
    id: 'bearish-harami',
    nameEn: 'Bearish Harami',
    nameZh: '看跌孕线',
    signal: 'bearish',
    kind: 'reversal',
    partNumber: 2,
    chapterId: 'part2-ch08-harami',
    candles: [
      ...UT(),
      { o: 38, h: 72, l: 36, c: 70 },        // Day 1: large bullish
      { o: 60, h: 67, l: 55, c: 57 },        // Day 2: small bearish, inside Day 1's body
    ],
    descEn: 'A small bearish body contained entirely within the prior large bullish body.',
    descZh: '小阴线实体完全被包含在前一根大阳线实体之内。',
  },
  {
    id: 'harami-cross',
    nameEn: 'Harami Cross',
    nameZh: '孕线十字',
    signal: 'bearish',
    kind: 'reversal',
    partNumber: 2,
    chapterId: 'part2-ch08-harami',
    candles: [
      ...UT(),
      { o: 38, h: 72, l: 36, c: 70 },        // Day 1: large bullish
      { o: 58, h: 65, l: 52, c: 58 },        // Day 2: Doji inside Day 1 (open=close=58)
    ],
    descEn: 'Like a Harami but Day 2 is a Doji — a stronger reversal signal.',
    descZh: '与孕线相同，但第二天为十字线，反转信号更强。',
  },
  {
    id: 'tweezers-top',
    nameEn: 'Tweezers Top',
    nameZh: '镊子顶',
    signal: 'bearish',
    kind: 'reversal',
    partNumber: 2,
    chapterId: 'part2-ch09-tweezers',
    candles: [
      ...UT(),
      { o: 55, h: 80, l: 53, c: 77 },        // Day 1: bullish, high=80
      { o: 77, h: 80, l: 54, c: 57 },        // Day 2: bearish, same high=80
    ],
    descEn: 'Two consecutive sessions with matching highs — sellers defended that level twice.',
    descZh: '连续两个交易日最高价相同，卖方两次守住该价位。',
  },
  {
    id: 'tweezers-bottom',
    nameEn: 'Tweezers Bottom',
    nameZh: '镊子底',
    signal: 'bullish',
    kind: 'reversal',
    partNumber: 2,
    chapterId: 'part2-ch09-tweezers',
    candles: [
      ...DT(),
      { o: 54, h: 56, l: 24, c: 27 },        // Day 1: bearish, low=24
      { o: 27, h: 55, l: 24, c: 52 },        // Day 2: bullish, same low=24
    ],
    descEn: 'Two consecutive sessions with matching lows — buyers defended that level twice.',
    descZh: '连续两个交易日最低价相同，买方两次守住该价位。',
  },
  {
    id: 'three-white-soldiers',
    nameEn: 'Three White Soldiers',
    nameZh: '三白兵',
    signal: 'bullish',
    kind: 'reversal',
    partNumber: 2,
    chapterId: 'part2-ch10-three',
    candles: [
      { o: 70, h: 74, l: 58, c: 60, context: true },
      { o: 60, h: 64, l: 48, c: 50, context: true },
      { o: 48, h: 62, l: 46, c: 60 },         // Soldier 1
      { o: 60, h: 72, l: 58, c: 70 },         // Soldier 2
      { o: 70, h: 84, l: 68, c: 82 },         // Soldier 3
    ],
    descEn: 'Three consecutive long bullish candles, each closing progressively higher.',
    descZh: '三根连续长阳线，每根收盘价逐步升高。',
  },
  {
    id: 'three-black-crows',
    nameEn: 'Three Black Crows',
    nameZh: '三只乌鸦',
    signal: 'bearish',
    kind: 'reversal',
    partNumber: 2,
    chapterId: 'part2-ch10-three',
    candles: [
      { o: 30, h: 50, l: 28, c: 48, context: true },
      { o: 48, h: 66, l: 46, c: 64, context: true },
      { o: 64, h: 66, l: 52, c: 54 },         // Crow 1
      { o: 54, h: 56, l: 40, c: 42 },         // Crow 2
      { o: 42, h: 44, l: 28, c: 30 },         // Crow 3
    ],
    descEn: 'Three consecutive long bearish candles, each closing progressively lower.',
    descZh: '三根连续长阴线，每根收盘价逐步走低。',
  },

  // ── Part 3: Continuation Patterns ──────────────────────────────────────────
  {
    id: 'rising-window',
    nameEn: 'Rising Window',
    nameZh: '上升窗口',
    signal: 'bullish',
    kind: 'continuation',
    partNumber: 3,
    chapterId: 'part3-ch11-windows',
    candles: [
      { o: 28, h: 45, l: 26, c: 43, context: true },
      { o: 43, h: 58, l: 41, c: 56 },         // Last candle before gap, high=58
      { o: 63, h: 74, l: 61, c: 72, gap: true }, // Gap up: low(63) > high(58)
      { o: 72, h: 84, l: 70, c: 82 },
    ],
    descEn: 'A price gap upward: the session\'s low is above the prior session\'s high. Bullish continuation.',
    descZh: '价格向上跳空：当日最低价高于前日最高价，看涨持续信号。',
  },
  {
    id: 'falling-window',
    nameEn: 'Falling Window',
    nameZh: '下降窗口',
    signal: 'bearish',
    kind: 'continuation',
    partNumber: 3,
    chapterId: 'part3-ch11-windows',
    candles: [
      { o: 72, h: 74, l: 58, c: 60, context: true },
      { o: 60, h: 64, l: 48, c: 50 },         // Last candle before gap, low=48
      { o: 40, h: 43, l: 28, c: 30, gap: true }, // Gap down: high(43) < low(48)
      { o: 30, h: 33, l: 18, c: 20 },
    ],
    descEn: 'A price gap downward: the session\'s high is below the prior session\'s low. Bearish continuation.',
    descZh: '价格向下跳空：当日最高价低于前日最低价，看跌持续信号。',
  },
  {
    id: 'rising-three-methods',
    nameEn: 'Rising Three Methods',
    nameZh: '上升三法',
    signal: 'bullish',
    kind: 'continuation',
    partNumber: 3,
    chapterId: 'part3-ch12-three-methods',
    candles: [
      { o: 24, h: 70, l: 22, c: 68 },         // Day 1: long bullish
      { o: 66, h: 70, l: 58, c: 60 },         // Small bear 1 (inside Day 1 range)
      { o: 60, h: 63, l: 54, c: 56 },         // Small bear 2
      { o: 56, h: 59, l: 51, c: 53 },         // Small bear 3
      { o: 55, h: 82, l: 53, c: 80 },         // Day 5: strong bullish
    ],
    descEn: 'Long bullish → 2–4 small bearish within its range → strong bullish closing above Day 1\'s high.',
    descZh: '长阳线 → 2-4根小阴线（区间内）→ 强势阳线收盘突破第一天最高价。',
  },
  {
    id: 'falling-three-methods',
    nameEn: 'Falling Three Methods',
    nameZh: '下降三法',
    signal: 'bearish',
    kind: 'continuation',
    partNumber: 3,
    chapterId: 'part3-ch12-three-methods',
    candles: [
      { o: 78, h: 80, l: 34, c: 36 },         // Day 1: long bearish
      { o: 38, h: 46, l: 36, c: 44 },         // Small bull 1 (inside Day 1 range)
      { o: 44, h: 50, l: 42, c: 48 },         // Small bull 2
      { o: 48, h: 53, l: 46, c: 51 },         // Small bull 3
      { o: 50, h: 52, l: 20, c: 22 },         // Day 5: strong bearish
    ],
    descEn: 'Long bearish → 2–4 small bullish within its range → strong bearish closing below Day 1\'s low.',
    descZh: '长阴线 → 2-4根小阳线（区间内）→ 强势阴线收盘突破第一天最低价。',
  },
]

type PatternGuideFields = Pick<
  PatternDef,
  'locationEn' | 'locationZh' | 'confirmationEn' | 'confirmationZh' | 'trapEn' | 'trapZh'
>

const patternGuides: Partial<Record<string, PatternGuideFields>> = {
  'bullish-candle': {
    locationEn: 'Inside trend continuation or early reversal confirmation.',
    locationZh: '常见于趋势延续中，或作为反转后的早期确认。',
    confirmationEn: 'Judge it together with trend and whether price can hold the close.',
    confirmationZh: '结合趋势与收盘能否守住高位一起判断。',
    trapEn: 'Do not treat every green candle as a bullish setup.',
    trapZh: '不要把任何一根阳线都当成看涨信号。',
  },
  'bearish-candle': {
    locationEn: 'Inside trend continuation or as a warning after failed rallies.',
    locationZh: '常见于趋势延续中，或作为反弹失败后的警告。',
    confirmationEn: 'Check whether later candles continue lower instead of snapping back.',
    confirmationZh: '看后续是否继续走低，而不是立刻被拉回。',
    trapEn: 'A single red candle near support may only be noise.',
    trapZh: '支撑位附近单根阴线，很多时候只是噪音。',
  },
  'bullish-marubozu': {
    locationEn: 'Best after breakout, reversal confirmation, or strong trend continuation.',
    locationZh: '最适合出现在突破、反转确认或强趋势延续中。',
    confirmationEn: 'Watch whether the next candles can hold most of the body.',
    confirmationZh: '观察后续能否守住这根大实体收回的区域。',
    trapEn: 'A late vertical marubozu can also mark exhaustion near resistance.',
    trapZh: '阻力位附近的垂直拉升，也可能是衰竭而不是继续。',
  },
  'bearish-marubozu': {
    locationEn: 'Best after breakdown, top reversal, or strong downside continuation.',
    locationZh: '最适合出现在跌破、顶部反转或强势下跌延续中。',
    confirmationEn: 'Check whether later candles stay below the body instead of rebounding fast.',
    confirmationZh: '看后续是否维持在实体下方，而不是快速反弹。',
    trapEn: 'A panic marubozu into support can be close to capitulation.',
    trapZh: '支撑位附近的恐慌长阴，也可能接近宣泄末端。',
  },
  'spinning-top': {
    locationEn: 'Most useful after a visible trend move or at key levels.',
    locationZh: '最适合出现在明确趋势后，或关键位置附近。',
    confirmationEn: 'Wait for the next candle to decide which side gains control.',
    confirmationZh: '等下一根 K 线决定控制权偏向哪一边。',
    trapEn: 'In the middle of a noisy range, it often means very little.',
    trapZh: '如果出现在横盘噪音区中央，意义通常很小。',
  },
  'doji': {
    locationEn: 'Most meaningful after extended trends or at support/resistance.',
    locationZh: '最有价值的是出现在趋势延伸后或支撑阻力附近。',
    confirmationEn: 'Need the next candle to confirm loss of momentum or reversal.',
    confirmationZh: '需要下一根 K 线确认动能衰减或反转。',
    trapEn: 'A doji alone is indecision, not a full reversal signal.',
    trapZh: '十字线本身只是犹豫，不是完整反转信号。',
  },
  'gravestone-doji': {
    locationEn: 'Best near highs or resistance after an advance.',
    locationZh: '最适合出现在上涨后的高位或阻力附近。',
    confirmationEn: 'Look for the next candle to close weak and reject the high again.',
    confirmationZh: '观察次日是否继续收弱并再次拒绝高位。',
    trapEn: 'Without top-side context, it may only show temporary intraday rejection.',
    trapZh: '如果没有顶部背景，它可能只是盘中短暂拒绝。',
  },
  'dragonfly-doji': {
    locationEn: 'Best near lows or support after a decline.',
    locationZh: '最适合出现在下跌后的低位或支撑附近。',
    confirmationEn: 'Need buyers to follow through with a stronger next close.',
    confirmationZh: '需要多方在下一根 K 线继续跟进确认。',
    trapEn: 'Do not assume a bottom if later candles keep breaking lower.',
    trapZh: '如果后续继续下破，不要把它误判成见底。',
  },
  'long-legged-doji': {
    locationEn: 'Useful when the market becomes unstable after a strong move.',
    locationZh: '适合出现在强趋势后波动突然放大的阶段。',
    confirmationEn: 'Let the next candle decide whether volatility resolves up or down.',
    confirmationZh: '交给下一根 K 线决定波动最终向上还是向下解决。',
    trapEn: 'High volatility does not automatically mean reversal.',
    trapZh: '高波动不自动等于反转。',
  },
  'hammer': {
    locationEn: 'After a selloff or near support where lower prices get rejected.',
    locationZh: '出现在下跌后，或支撑位附近被明显拒绝时。',
    confirmationEn: 'Need a strong next candle or gap-up confirmation.',
    confirmationZh: '需要强势次日阳线或跳空确认。',
    trapEn: 'A hammer in the middle of a range is much weaker.',
    trapZh: '如果锤子线出现在区间中央，力度会明显下降。',
  },
  'hanging-man': {
    locationEn: 'After an uptrend or near resistance where the market looks extended.',
    locationZh: '出现在上涨末端或阻力附近、市场已有延伸时。',
    confirmationEn: 'Need bearish follow-through; the warning candle alone is not enough.',
    confirmationZh: '必须等待看跌跟随确认，单根警告不够。',
    trapEn: 'Do not mistake it for a hammer just because the shape is identical.',
    trapZh: '不要因为外形一样，就把它误看成锤子线。',
  },
  'shooting-star': {
    locationEn: 'Best after rallies and near overhead resistance.',
    locationZh: '最适合出现在上涨后和上方阻力附近。',
    confirmationEn: 'Need later candles to fail at reclaiming the high.',
    confirmationZh: '需要后续 K 线无法重新收回高点。',
    trapEn: 'A long upper shadow in isolation is only a warning, not a verdict.',
    trapZh: '单独的长上影线只是预警，不是最终结论。',
  },
  'inverted-hammer': {
    locationEn: 'After a decline when buyers first test an upside reversal.',
    locationZh: '出现在下跌后，买方首次测试向上反转时。',
    confirmationEn: 'Need a strong next bullish candle to confirm buyers kept control.',
    confirmationZh: '需要下一根强阳线确认买方接力。',
    trapEn: 'Without confirmation it can be just a failed intraday bounce.',
    trapZh: '没有确认时，它可能只是盘中反抽失败。',
  },
  'bullish-engulfing': {
    locationEn: 'After a decline or near support where sellers lose control.',
    locationZh: '出现在下跌后或支撑附近，空方开始失控时。',
    confirmationEn: 'Look for the next candles to hold above the engulfing body.',
    confirmationZh: '观察后续能否站稳在吞没阳线实体上方。',
    trapEn: 'A large green candle after no prior decline is not the same signal.',
    trapZh: '如果前面没有下跌背景，大阳线不等于看涨吞没。',
  },
  'bearish-engulfing': {
    locationEn: 'After a rally or near resistance where buyers fail abruptly.',
    locationZh: '出现在反弹后或阻力附近，多方突然失守时。',
    confirmationEn: 'Need follow-through weakness instead of an instant rebound.',
    confirmationZh: '需要后续继续偏弱，而不是立刻强力反抽。',
    trapEn: 'Do not overrate it if the candle appears in a sideways mess.',
    trapZh: '如果出现在横盘噪音中，不要高估它的意义。',
  },
  'dark-cloud-cover': {
    locationEn: 'Best after an uptrend or at resistance.',
    locationZh: '最适合出现在上涨后或阻力位附近。',
    confirmationEn: 'The second candle should close deep into the prior body and later candles stay weak.',
    confirmationZh: '第二根要深插入前一日实体，后续还应保持偏弱。',
    trapEn: 'A shallow pullback after a gap-up is not enough.',
    trapZh: '如果只是高开后浅回落，不能算有效乌云盖顶。',
  },
  'piercing-pattern': {
    locationEn: 'Best after a decline or panic selloff into support.',
    locationZh: '最适合出现在下跌后或支撑附近的恐慌抛售中。',
    confirmationEn: 'The rebound should close above the prior body midpoint and then stabilise.',
    confirmationZh: '反弹应站上前一日实体中点，并在后续企稳。',
    trapEn: 'Just closing green is weaker than piercing the midpoint.',
    trapZh: '只是收阳远不如站上实体中点有意义。',
  },
  'morning-star': {
    locationEn: 'After a decline when selling pressure is stretched.',
    locationZh: '出现在下跌后、空方压力已经延伸时。',
    confirmationEn: 'Need the third candle to close strongly back into the first candle’s body.',
    confirmationZh: '需要第三根强阳线重新收回第一根阴线的重要区域。',
    trapEn: 'Do not call it complete before the confirmation candle appears.',
    trapZh: '确认阳线没出现前，不要急着判定形态完成。',
  },
  'evening-star': {
    locationEn: 'After an uptrend when buyers start losing follow-through.',
    locationZh: '出现在上涨后，多方推进开始失去连续性时。',
    confirmationEn: 'Need the third candle to drive back into the first candle’s body.',
    confirmationZh: '需要第三根阴线明显打回第一根阳线实体内部。',
    trapEn: 'A small middle candle alone is only hesitation, not a full top.',
    trapZh: '中间那根小实体单独只代表犹豫，不是完整顶部。',
  },
  'bullish-harami': {
    locationEn: 'After a large bearish candle when panic begins to slow.',
    locationZh: '出现在大阴线之后，恐慌开始放缓时。',
    confirmationEn: 'Look for later candles to stop accelerating lower and start stabilising.',
    confirmationZh: '观察后续是否不再加速下跌，并开始企稳。',
    trapEn: 'It often marks exhaustion before it marks a full reversal.',
    trapZh: '它常常先标记衰竭，不一定立刻带来大反转。',
  },
  'bearish-harami': {
    locationEn: 'After a large bullish candle when upside conviction starts shrinking.',
    locationZh: '出现在大阳线之后，多方信心开始收缩时。',
    confirmationEn: 'Need later candles to stop extending higher and begin weakening.',
    confirmationZh: '需要后续停止创新高并逐步收弱。',
    trapEn: 'The small inside candle alone does not guarantee a top.',
    trapZh: '内部小实体本身并不保证就是顶部。',
  },
  'harami-cross': {
    locationEn: 'Best after a forceful trend candle when the market suddenly stalls.',
    locationZh: '最适合出现在强趋势 K 线之后，市场突然停顿时。',
    confirmationEn: 'Need the next candles to lean against the prior direction.',
    confirmationZh: '需要后续 K 线朝原趋势反方向跟随。',
    trapEn: 'The doji makes the warning stronger, but still needs confirmation.',
    trapZh: '十字线会加强警告，但仍然需要确认。',
  },
  'tweezers-top': {
    locationEn: 'Near repeated highs or a visible resistance zone.',
    locationZh: '最适合出现在重复高点或清晰阻力位附近。',
    confirmationEn: 'Need the second rejection to be followed by continued weakness.',
    confirmationZh: '需要第二次拒绝之后继续有弱势跟随。',
    trapEn: 'Matching highs matter only if price structure makes that level important.',
    trapZh: '相同高点只有在结构上重要时才有意义。',
  },
  'tweezers-bottom': {
    locationEn: 'Near repeated lows or visible support after a decline.',
    locationZh: '最适合出现在重复低点或下跌后的支撑附近。',
    confirmationEn: 'Need the second defense to be followed by stronger closes.',
    confirmationZh: '需要第二次守低后继续收强确认。',
    trapEn: 'Matching lows without a rebound attempt are not enough.',
    trapZh: '只有相同低点、没有后续反击，不足以形成强信号。',
  },
  'three-white-soldiers': {
    locationEn: 'After a decline or base when buyers regain multi-session control.',
    locationZh: '出现在下跌后或底部整理后，多方重新连续接管时。',
    confirmationEn: 'Watch whether the market can hold most of the three-candle advance.',
    confirmationZh: '看后续能否守住这三根阳线收回的大部分区域。',
    trapEn: 'A vertical late-stage surge can also be exhaustion, not continuation.',
    trapZh: '末端垂直拉升也可能是衰竭，而非继续。',
  },
  'three-black-crows': {
    locationEn: 'After a rally or topping zone when sellers take over for several sessions.',
    locationZh: '出现在上涨末端或顶部区域，空方连续接管数日时。',
    confirmationEn: 'Need later price to fail at rebuilding the prior uptrend.',
    confirmationZh: '需要后续价格无法重新搭回上涨结构。',
    trapEn: 'One rebound after the pattern does not automatically negate it.',
    trapZh: '形态后出现一次反弹，并不自动否定它。',
  },
  'rising-window': {
    locationEn: 'After bullish reversal or inside a strong uptrend.',
    locationZh: '适合出现在看涨反转后，或强势上涨趋势中。',
    confirmationEn: 'Best when later candles keep respecting the gap as support.',
    confirmationZh: '最好后续蜡烛继续把缺口区域当支撑。',
    trapEn: 'A gap that gets filled immediately loses much of its message.',
    trapZh: '如果缺口很快被回补，信号意义会明显减弱。',
  },
  'falling-window': {
    locationEn: 'After bearish reversal or inside a strong downtrend.',
    locationZh: '适合出现在看跌反转后，或强势下跌趋势中。',
    confirmationEn: 'Best when later candles keep respecting the gap as resistance.',
    confirmationZh: '最好后续蜡烛继续把缺口区域当阻力。',
    trapEn: 'A fast full gap-fill weakens the bearish continuation read.',
    trapZh: '如果很快完全回补，延续性会被削弱。',
  },
  'rising-three-methods': {
    locationEn: 'Inside an uptrend where pullbacks remain controlled.',
    locationZh: '出现在上涨趋势中，回调仍然受控时。',
    confirmationEn: 'Need the final breakout candle to resume the trend cleanly.',
    confirmationZh: '需要最后的突破阳线重新明确启动趋势。',
    trapEn: 'If the pullback destroys the first candle’s structure, it is not healthy continuation.',
    trapZh: '如果回调破坏了第一根趋势阳线结构，就不再是健康延续。',
  },
  'falling-three-methods': {
    locationEn: 'Inside a downtrend where rebounds stay limited.',
    locationZh: '出现在下跌趋势中，反弹幅度仍受限时。',
    confirmationEn: 'Need the final bearish candle to restart downside control.',
    confirmationZh: '需要最后一根阴线重新启动下行控制。',
    trapEn: 'A rebound that turns into full trend change is not continuation.',
    trapZh: '如果反弹已经演变成完整转势，就不能再算延续。',
  },
}

export const patterns: PatternDef[] = rawPatterns.map((pattern) => ({
  ...pattern,
  ...patternGuides[pattern.id],
}))

// Grouped by part number for section rendering
export const patternsByPart = (
  [1, 2, 3] as Array<1 | 2 | 3>
).map((part) => ({
  part,
  patterns: patterns.filter((p) => p.partNumber === part),
}))

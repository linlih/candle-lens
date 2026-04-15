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
export const patterns: PatternDef[] = [
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

// Grouped by part number for section rendering
export const patternsByPart = (
  [1, 2, 3] as Array<1 | 2 | 3>
).map((part) => ({
  part,
  patterns: patterns.filter((p) => p.partNumber === part),
}))

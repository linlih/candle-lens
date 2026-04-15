import type { MiniCandle } from '@/content/cheatsheet'

interface MiniChartProps {
  candles: MiniCandle[]
  width?: number
  height?: number
}

const BULL = '#26a69a'
const BEAR = '#ef5350'
const PAD_X = 5
const PAD_Y = 4
const GAP = 2       // gap between candles
const GAP_EXTRA = 6 // extra space before gap:true candles (window gap)
const MIN_BODY = 1.5

export function MiniChart({ candles, width = 150, height = 72 }: MiniChartProps) {
  const n = candles.length
  const usableW = width - PAD_X * 2
  const usableH = height - PAD_Y * 2

  // Count extra gaps
  const extraGaps = candles.filter(c => c.gap).length
  const totalGapSpace = (n - 1) * GAP + extraGaps * GAP_EXTRA
  const candleW = Math.min(40, Math.max(4, (usableW - totalGapSpace) / n))
  const bodyW = Math.max(1, candleW - 2)

  // Price range
  const allH = candles.map(c => c.h)
  const allL = candles.map(c => c.l)
  const minP = Math.min(...allL)
  const maxP = Math.max(...allH)
  const range = maxP - minP || 1

  const py = (price: number) =>
    PAD_Y + ((maxP - price) / range) * usableH

  // Compute x positions
  const positions: number[] = []
  let x = PAD_X
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      x += GAP
      if (candles[i].gap) x += GAP_EXTRA
    }
    positions.push(x)
    x += candleW
  }

  // Center if total width less than usable
  const totalUsed = x - PAD_X
  const offset = totalUsed < usableW ? (usableW - totalUsed) / 2 : 0

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      {candles.map((c, i) => {
        const isBull = c.c >= c.o
        const color = isBull ? BULL : BEAR
        const opacity = c.context ? 0.35 : 1

        const cx = positions[i] + offset + candleW / 2
        const bodyTop = py(Math.max(c.o, c.c))
        const bodyBot = py(Math.min(c.o, c.c))
        const bodyH = Math.max(MIN_BODY, bodyBot - bodyTop)
        const bodyY = bodyTop

        const wickX = cx

        return (
          <g key={i} opacity={opacity}>
            {/* Upper wick */}
            <line
              x1={wickX}
              y1={py(c.h)}
              x2={wickX}
              y2={bodyY}
              stroke={color}
              strokeWidth={1}
            />
            {/* Lower wick */}
            <line
              x1={wickX}
              y1={bodyY + bodyH}
              x2={wickX}
              y2={py(c.l)}
              stroke={color}
              strokeWidth={1}
            />
            {/* Body */}
            <rect
              x={positions[i] + offset}
              y={bodyY}
              width={bodyW}
              height={bodyH}
              fill={isBull ? color : color}
              stroke={color}
              strokeWidth={0.5}
            />
          </g>
        )
      })}
    </svg>
  )
}

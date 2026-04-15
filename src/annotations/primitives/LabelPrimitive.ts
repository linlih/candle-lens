import type {
  ISeriesPrimitive,
  IPrimitivePaneView,
  IPrimitivePaneRenderer,
  PrimitivePaneViewZOrder,
  IChartApi,
  ISeriesApi,
  Time,
} from 'lightweight-charts'
import type { CanvasRenderingTarget2D, BitmapCoordinatesRenderingScope } from 'fancy-canvas'
import type { LabelAnnotation } from '@/types/annotation'

const PADDING_X = 8
const PADDING_Y = 5
const RADIUS    = 4
const GAP       = 10   // gap between anchor-side arrowhead tip and label box
const ARROW_LEN = 8    // arrowhead length
const ARROW_W   = 5    // arrowhead half-width

class LabelRenderer implements IPrimitivePaneRenderer {
  constructor(
    private def: LabelAnnotation,
    private chart: IChartApi,
    private series: ISeriesApi<'Candlestick'>,
  ) {}

  draw(target: CanvasRenderingTarget2D): void {
    target.useBitmapCoordinateSpace((scope: BitmapCoordinatesRenderingScope) => {
      const { context: ctx, horizontalPixelRatio: hpr, verticalPixelRatio: vpr } = scope
      const ratio = Math.min(hpr, vpr)

      const x = this.chart.timeScale().timeToCoordinate(this.def.time as Time)
      const y = this.series.priceToCoordinate(this.def.price)
      if (x === null || y === null) return

      const text = this.def.text ?? ''
      if (!text) return

      const fontSize = (this.def.fontSize ?? 11) * ratio
      ctx.font = `600 ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

      const textWidth = ctx.measureText(text).width
      const boxW = textWidth + PADDING_X * 2 * hpr
      const boxH = fontSize + PADDING_Y * 2 * vpr

      const cx = x * hpr
      const cy = y * vpr

      const barSpacing = (this.chart.timeScale().options().barSpacing ?? 8) * hpr
      const halfBar    = barSpacing / 2

      const gap      = GAP      * ratio
      const arrowLen = ARROW_LEN * ratio
      const arrowW   = ARROW_W  * ratio

      const hasArrow = this.def.arrowhead ?? false

      // ── Compute geometry ──────────────────────────────────────────────────
      // anchorX/Y: tip of arrow (touching candle wick/body)
      // lineStart: where the dashed line begins (after the arrowhead)
      // lineEnd:   where the dashed line ends (touching label box)
      // boxX/Y:    top-left of label box
      let anchorX: number, anchorY: number
      let lineStartX: number, lineStartY: number
      let lineEndX: number, lineEndY: number
      let boxX: number, boxY: number

      switch (this.def.position) {
        case 'right':
          anchorX    = cx + halfBar
          anchorY    = cy
          lineStartX = anchorX + (hasArrow ? arrowLen : 0)
          lineStartY = cy
          boxX       = lineStartX + gap
          boxY       = cy - boxH / 2
          lineEndX   = boxX
          lineEndY   = cy
          break

        case 'left':
          anchorX    = cx - halfBar
          anchorY    = cy
          lineStartX = anchorX - (hasArrow ? arrowLen : 0)
          lineStartY = cy
          boxX       = lineStartX - gap - boxW
          boxY       = cy - boxH / 2
          lineEndX   = boxX + boxW
          lineEndY   = cy
          break

        case 'above':
          anchorX    = cx
          anchorY    = cy - halfBar * 0.3   // just above the candle top
          lineStartX = cx
          lineStartY = anchorY - (hasArrow ? arrowLen : 0)
          boxX       = cx - boxW / 2
          boxY       = lineStartY - gap - boxH
          lineEndX   = cx
          lineEndY   = boxY + boxH
          break

        case 'below':
        default:
          anchorX    = cx
          anchorY    = cy + halfBar * 0.3
          lineStartX = cx
          lineStartY = anchorY + (hasArrow ? arrowLen : 0)
          boxX       = cx - boxW / 2
          boxY       = lineStartY + gap
          lineEndX   = cx
          lineEndY   = boxY
          break
      }

      ctx.save()

      // ── Arrowhead (filled triangle, pointing toward the candle) ───────────
      if (hasArrow) {
        ctx.fillStyle = this.def.backgroundColor
        ctx.globalAlpha = 0.9
        ctx.beginPath()
        switch (this.def.position) {
          case 'right':
            // Arrow points LEFT (←)
            ctx.moveTo(anchorX, anchorY)
            ctx.lineTo(anchorX + arrowLen, anchorY - arrowW)
            ctx.lineTo(anchorX + arrowLen, anchorY + arrowW)
            break
          case 'left':
            // Arrow points RIGHT (→)
            ctx.moveTo(anchorX, anchorY)
            ctx.lineTo(anchorX - arrowLen, anchorY - arrowW)
            ctx.lineTo(anchorX - arrowLen, anchorY + arrowW)
            break
          case 'above':
            // Arrow points DOWN (↓)
            ctx.moveTo(anchorX, anchorY)
            ctx.lineTo(anchorX - arrowW, anchorY - arrowLen)
            ctx.lineTo(anchorX + arrowW, anchorY - arrowLen)
            break
          case 'below':
            // Arrow points UP (↑)
            ctx.moveTo(anchorX, anchorY)
            ctx.lineTo(anchorX - arrowW, anchorY + arrowLen)
            ctx.lineTo(anchorX + arrowW, anchorY + arrowLen)
            break
        }
        ctx.closePath()
        ctx.fill()
        ctx.globalAlpha = 1
      }

      // ── Dashed connector line ─────────────────────────────────────────────
      if (lineStartX !== lineEndX || lineStartY !== lineEndY) {
        ctx.strokeStyle = this.def.backgroundColor
        ctx.lineWidth   = 1 * ratio
        ctx.globalAlpha = 0.5
        ctx.setLineDash([3 * ratio, 3 * ratio])
        ctx.beginPath()
        ctx.moveTo(lineStartX, lineStartY)
        ctx.lineTo(lineEndX, lineEndY)
        ctx.stroke()
        ctx.setLineDash([])
        ctx.globalAlpha = 1
      }

      // ── Label background ──────────────────────────────────────────────────
      ctx.fillStyle = this.def.backgroundColor
      ctx.beginPath()
      ctx.roundRect(boxX, boxY, boxW, boxH, RADIUS * ratio)
      ctx.fill()

      // ── Label text ────────────────────────────────────────────────────────
      ctx.fillStyle = this.def.textColor
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(text, boxX + boxW / 2, boxY + boxH / 2)

      ctx.restore()
    })
  }
}

class LabelPaneView implements IPrimitivePaneView {
  constructor(
    private def: LabelAnnotation,
    private chart: IChartApi,
    private series: ISeriesApi<'Candlestick'>,
  ) {}
  renderer(): IPrimitivePaneRenderer { return new LabelRenderer(this.def, this.chart, this.series) }
  zOrder(): PrimitivePaneViewZOrder { return 'top' }
}

export class LabelPrimitive implements ISeriesPrimitive<Time> {
  private _view: LabelPaneView
  constructor(def: LabelAnnotation, chart: IChartApi, series: ISeriesApi<'Candlestick'>) {
    this._view = new LabelPaneView(def, chart, series)
  }
  paneViews(): readonly IPrimitivePaneView[] { return [this._view] }
}

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
import type { BoxAnnotation } from '@/types/annotation'
import type { CandleBar } from '@/types/content'

class BoxRenderer implements IPrimitivePaneRenderer {
  constructor(
    private def: BoxAnnotation,
    private chart: IChartApi,
    private series: ISeriesApi<'Candlestick'>,
    private candles: CandleBar[],
  ) {}

  draw(target: CanvasRenderingTarget2D): void {
    target.useBitmapCoordinateSpace((scope: BitmapCoordinatesRenderingScope) => {
      const { context: ctx, horizontalPixelRatio: hpr, verticalPixelRatio: vpr } = scope

      const ts = this.chart.timeScale()
      const x1 = ts.timeToCoordinate(this.def.timeRange.from as Time)
      const x2 = ts.timeToCoordinate(this.def.timeRange.to as Time)
      if (x1 === null || x2 === null) return

      let priceHigh: number
      let priceLow: number
      if (this.def.priceRange) {
        priceHigh = this.def.priceRange.high
        priceLow = this.def.priceRange.low
      } else {
        const inRange = this.candles.filter(
          (c) => c.time >= this.def.timeRange.from && c.time <= this.def.timeRange.to,
        )
        if (!inRange.length) return
        priceHigh = Math.max(...inRange.map((c) => c.high))
        priceLow = Math.min(...inRange.map((c) => c.low))
      }

      const pad = this.def.pricePadding ?? 1
      const y1 = this.series.priceToCoordinate(priceHigh + pad)
      const y2 = this.series.priceToCoordinate(priceLow - pad)
      if (y1 === null || y2 === null) return

      const barSpacing = ts.options().barSpacing ?? 6
      const halfBar = (barSpacing / 2) * hpr

      const rx = Math.min(x1, x2) * hpr - halfBar
      const rw = (Math.abs(x2 - x1) + barSpacing) * hpr
      const ry = Math.min(y1, y2) * vpr
      const rh = Math.abs(y2 - y1) * vpr

      ctx.save()
      ctx.fillStyle = this.def.fillColor
      ctx.fillRect(rx, ry, rw, rh)
      ctx.strokeStyle = this.def.borderColor
      ctx.lineWidth = (this.def.borderWidth ?? 1) * hpr
      ctx.strokeRect(rx, ry, rw, rh)
      ctx.restore()
    })
  }
}

class BoxPaneView implements IPrimitivePaneView {
  constructor(
    private def: BoxAnnotation,
    private chart: IChartApi,
    private series: ISeriesApi<'Candlestick'>,
    private candles: CandleBar[],
  ) {}

  renderer(): IPrimitivePaneRenderer {
    return new BoxRenderer(this.def, this.chart, this.series, this.candles)
  }

  zOrder(): PrimitivePaneViewZOrder {
    return 'normal'
  }
}

export class BoxPrimitive implements ISeriesPrimitive<Time> {
  private _view: BoxPaneView

  constructor(
    def: BoxAnnotation,
    candles: CandleBar[],
    chart: IChartApi,
    series: ISeriesApi<'Candlestick'>,
  ) {
    this._view = new BoxPaneView(def, chart, series, candles)
  }

  paneViews(): readonly IPrimitivePaneView[] {
    return [this._view]
  }
}

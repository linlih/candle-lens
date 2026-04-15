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
import type { HorizontalLineAnnotation } from '@/types/annotation'

class HLineRenderer implements IPrimitivePaneRenderer {
  constructor(
    private def: HorizontalLineAnnotation,
    private chart: IChartApi,
    private series: ISeriesApi<'Candlestick'>,
  ) {}

  draw(target: CanvasRenderingTarget2D): void {
    target.useBitmapCoordinateSpace((scope: BitmapCoordinatesRenderingScope) => {
      const { context: ctx, horizontalPixelRatio: hpr, verticalPixelRatio: vpr } = scope

      const y = this.series.priceToCoordinate(this.def.price)
      if (y === null) return

      const width = this.chart.timeScale().width()

      ctx.save()
      ctx.strokeStyle = this.def.color
      ctx.lineWidth = (this.def.width ?? 1) * vpr
      if (this.def.dash) ctx.setLineDash(this.def.dash.map((d) => d * hpr))

      ctx.beginPath()
      ctx.moveTo(0, y * vpr)
      ctx.lineTo(width * hpr, y * vpr)
      ctx.stroke()
      ctx.restore()
    })
  }
}

class HLinePaneView implements IPrimitivePaneView {
  constructor(
    private def: HorizontalLineAnnotation,
    private chart: IChartApi,
    private series: ISeriesApi<'Candlestick'>,
  ) {}

  renderer(): IPrimitivePaneRenderer {
    return new HLineRenderer(this.def, this.chart, this.series)
  }

  zOrder(): PrimitivePaneViewZOrder {
    return 'normal'
  }
}

export class HLinePrimitive implements ISeriesPrimitive<Time> {
  private _view: HLinePaneView

  constructor(
    def: HorizontalLineAnnotation,
    chart: IChartApi,
    series: ISeriesApi<'Candlestick'>,
  ) {
    this._view = new HLinePaneView(def, chart, series)
  }

  paneViews(): readonly IPrimitivePaneView[] {
    return [this._view]
  }
}

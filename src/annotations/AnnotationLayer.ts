import type { IChartApi, ISeriesApi } from 'lightweight-charts'
import type { AnnotationDef } from '@/types/annotation'
import type { CandleBar } from '@/types/content'
import { BoxPrimitive } from './primitives/BoxPrimitive'
import { LabelPrimitive } from './primitives/LabelPrimitive'
import { HLinePrimitive } from './primitives/HLinePrimitive'

type AnyPrimitive = BoxPrimitive | LabelPrimitive | HLinePrimitive

// ISeriesApi.attachPrimitive / detachPrimitive accepts the base interface
type AttachableParam = Parameters<ISeriesApi<'Candlestick'>['attachPrimitive']>[0]

export class AnnotationLayer {
  private primitives = new Map<string, AnyPrimitive>()

  constructor(
    private chart: IChartApi,
    private series: ISeriesApi<'Candlestick'>,
  ) {}

  setAnnotations(defs: AnnotationDef[], candles: CandleBar[]): void {
    // Always detach all existing primitives and rebuild from scratch.
    // This ensures that content changes (e.g. i18n text updates) are
    // always reflected — primitives hold a reference to the def at
    // creation time, so they must be recreated to pick up new text.
    this._detachAll()

    for (const def of defs) {
      if (def.kind === 'arrow') continue
      const prim = this.createPrimitive(def, candles)
      if (prim) {
        this.series.attachPrimitive(prim as AttachableParam)
        this.primitives.set(def.id, prim)
      }
    }
  }

  private _detachAll(): void {
    for (const prim of this.primitives.values()) {
      try { this.series.detachPrimitive(prim as AttachableParam) } catch { /* ignore */ }
    }
    this.primitives.clear()
  }

  private createPrimitive(def: AnnotationDef, candles: CandleBar[]): AnyPrimitive | null {
    switch (def.kind) {
      case 'box':
        return new BoxPrimitive(def, candles, this.chart, this.series)
      case 'label':
        return new LabelPrimitive(def, this.chart, this.series)
      case 'hline':
        return new HLinePrimitive(def, this.chart, this.series)
      case 'trendline':
        return null
      case 'arrow':
        return null
    }
  }

  destroy(): void {
    for (const prim of this.primitives.values()) {
      try {
        this.series.detachPrimitive(prim as AttachableParam)
      } catch {
        // ignore if chart is already destroyed
      }
    }
    this.primitives.clear()
  }
}

import { useRef, useEffect } from 'react'
import {
  createChart,
  CandlestickSeries,
  createSeriesMarkers,
  type IChartApi,
  type ISeriesApi,
  type ISeriesMarkersPluginApi,
  type SeriesMarker,
  type Time,
  type DeepPartial,
  type ChartOptions,
} from 'lightweight-charts'
import type { CandleBar } from '@/types/content'
import type { AnnotationDef } from '@/types/annotation'
import { useAppStore } from '@/store/appStore'
import { darkTheme, lightTheme, type ChartTheme } from '@/types/chart'
import { AnnotationLayer } from '@/annotations/AnnotationLayer'
import { useTranslation } from 'react-i18next'
import { useLocale } from '@/hooks/useLocale'
import { resolveCandleColors } from '@/lib/candlestickColors'

interface Props {
  candles: CandleBar[]
  annotations: AnnotationDef[]
}

function themeToOptions(theme: ChartTheme): DeepPartial<ChartOptions> {
  return {
    layout: {
      background: { color: theme.background },
      textColor: theme.textColor,
    },
    grid: {
      vertLines: { color: theme.gridColor },
      horzLines: { color: theme.gridColor },
    },
    crosshair: {
      vertLine: { color: theme.crosshairColor },
      horzLine: { color: theme.crosshairColor },
    },
    timeScale: { borderColor: theme.gridColor, timeVisible: true },
    rightPriceScale: { borderColor: theme.gridColor },
  }
}

export default function CandleChart({ candles, annotations }: Props) {
  const appTheme = useAppStore((s) => s.theme)
  const candleColorMode = useAppStore((s) => s.candleColorMode)
  const { locale } = useLocale()
  const chartTheme = {
    ...(appTheme === 'dark' ? darkTheme : lightTheme),
    ...resolveCandleColors(candleColorMode, locale),
  } satisfies ChartTheme
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation('patterns')

  // Keep latest props in refs so update effects don't recreate the chart
  const candlesRef = useRef(candles)
  const annotationsRef = useRef(annotations)
  const tRef = useRef(t)
  const chartThemeRef = useRef(chartTheme)

  candlesRef.current = candles
  annotationsRef.current = annotations
  tRef.current = t
  chartThemeRef.current = chartTheme

  // Refs to chart internals — set by the init effect
  const chartRef = useRef<IChartApi | null>(null)
  const seriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null)
  const layerRef = useRef<AnnotationLayer | null>(null)
  const markersPluginRef = useRef<ISeriesMarkersPluginApi<Time> | null>(null)

  // ── Init effect: create chart + series + annotation layer (once) ──────────
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const chart = createChart(container, {
      ...themeToOptions(chartThemeRef.current),
      autoSize: true,
    })

    const series = chart.addSeries(CandlestickSeries, {
      upColor: chartThemeRef.current.bullColor,
      downColor: chartThemeRef.current.bearColor,
      borderUpColor: chartThemeRef.current.bullColor,
      borderDownColor: chartThemeRef.current.bearColor,
      wickUpColor: chartThemeRef.current.wickBullColor,
      wickDownColor: chartThemeRef.current.wickBearColor,
    })

    const markersPlugin = createSeriesMarkers<Time>(series, [])
    const layer = new AnnotationLayer(chart, series)

    chartRef.current = chart
    seriesRef.current = series
    markersPluginRef.current = markersPlugin
    layerRef.current = layer

    // Set initial data
    applyCandles(series, chart, candlesRef.current)
    applyAnnotations(layer, markersPlugin, annotationsRef.current, candlesRef.current, tRef.current)

    return () => {
      layer.destroy()
      try { markersPlugin.detach() } catch { /* ignore */ }
      chart.remove()
      chartRef.current = null
      seriesRef.current = null
      markersPluginRef.current = null
      layerRef.current = null
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Update effect: sync candles & annotations when props change ───────────
  useEffect(() => {
    const chart = chartRef.current
    const series = seriesRef.current
    const layer = layerRef.current
    const markersPlugin = markersPluginRef.current
    if (!chart || !series || !layer || !markersPlugin) return

    applyCandles(series, chart, candles)
    applyAnnotations(layer, markersPlugin, annotations, candles, t)
  }, [candles, annotations, t])

  // ── Update effect: sync theme ─────────────────────────────────────────────
  useEffect(() => {
    const chart = chartRef.current
    const series = seriesRef.current
    if (!chart || !series) return

    chart.applyOptions(themeToOptions(chartTheme))
    series.applyOptions({
      upColor: chartTheme.bullColor,
      downColor: chartTheme.bearColor,
      borderUpColor: chartTheme.bullColor,
      borderDownColor: chartTheme.bearColor,
      wickUpColor: chartTheme.wickBullColor,
      wickDownColor: chartTheme.wickBearColor,
    })
  }, [chartTheme])

  return (
    <div ref={containerRef} className="w-full h-full" style={{ minHeight: '300px' }} />
  )
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function applyCandles(
  series: ISeriesApi<'Candlestick'>,
  chart: IChartApi,
  candles: CandleBar[],
) {
  if (!candles.length) return
  series.setData(
    candles.map((c) => ({
      time: c.time as Time,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
    })),
  )
  chart.timeScale().fitContent()
}

function applyAnnotations(
  layer: AnnotationLayer,
  markersPlugin: ISeriesMarkersPluginApi<Time>,
  annotations: AnnotationDef[],
  candles: CandleBar[],
  t: (key: string) => string,
) {
  const resolved = annotations.map((def) => {
    if (def.kind === 'label' && def.textKey) return { ...def, text: t(def.textKey) }
    if (def.kind === 'arrow' && def.labelKey) return { ...def, label: t(def.labelKey) }
    return def
  })

  layer.setAnnotations(resolved.filter((d) => d.kind !== 'arrow'), candles)

  const markers: SeriesMarker<Time>[] = resolved
    .filter((d) => d.kind === 'arrow')
    .map((d) => {
      if (d.kind !== 'arrow') return null as never
      return {
        time: d.time as Time,
        position: d.direction === 'up' ? ('belowBar' as const) : ('aboveBar' as const),
        color: d.color,
        shape: d.direction === 'up' ? ('arrowUp' as const) : ('arrowDown' as const),
        text: d.label ?? '',
      }
    })
  markersPlugin.setMarkers(markers)
}

import { useState, useEffect } from 'react'
import type { RealChartData } from '@/types/realChart'
import { realChartLoaders } from '@/content/realCharts/index'

interface State {
  data: RealChartData | null
  loading: boolean
  error: string | null
}

const cache = new Map<string, RealChartData>()

export function useRealChartData(chapterId: string): State {
  const [state, setState] = useState<State>(() => {
    const cached = cache.get(chapterId)
    const hasLoader = chapterId in realChartLoaders
    return { data: cached ?? null, loading: hasLoader && !cached, error: null }
  })

  useEffect(() => {
    if (cache.has(chapterId)) {
      setState({ data: cache.get(chapterId)!, loading: false, error: null })
      return
    }

    const loader = realChartLoaders[chapterId]
    if (!loader) {
      setState({ data: null, loading: false, error: null })
      return
    }

    setState((s) => ({ ...s, loading: true, error: null }))

    loader()
      .then(({ realChart }) => {
        cache.set(chapterId, realChart)
        setState({ data: realChart, loading: false, error: null })
      })
      .catch((err: unknown) => {
        const msg = err instanceof Error ? err.message : String(err)
        setState({ data: null, loading: false, error: msg })
      })
  }, [chapterId])

  return state
}

import type { RealChartData, RealChartModule } from '../types/realChart.js'

export function normalizeRealCharts(module: RealChartModule): RealChartData[] {
  if (module.realCharts?.length) return module.realCharts
  if (module.realChart) return [module.realChart]
  return []
}

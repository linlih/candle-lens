import { useTranslation } from 'react-i18next'
import CandleChart from '@/components/chart/CandleChart'
import { useRealChartData } from './useRealChartData'

interface Props {
  chapterId: string
  locale: 'en' | 'zh'
}

export default function RealChartSection({ chapterId, locale }: Props) {
  const { data, loading } = useRealChartData(chapterId)
  const { t } = useTranslation('ui')

  if (loading) {
    return (
      <div className="mt-8 flex items-center gap-2 text-gray-400 dark:text-[#787b86] text-sm">
        <div className="w-4 h-4 border-2 border-[#2962ff] border-t-transparent rounded-full animate-spin" />
        <span>{t('realChart.sectionTitle')}</span>
      </div>
    )
  }

  if (!data) return null

  const localeContent = data.locale[locale]

  // Apply locale-specific label text overrides (Chinese charts need Chinese annotation labels)
  const annotations = localeContent.labelText
    ? data.annotations.map(a =>
        a.kind === 'label' && a.id in localeContent.labelText!
          ? { ...a, text: localeContent.labelText![a.id] }
          : a
      )
    : data.annotations

  return (
    <div className="mt-8">
      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-[#363a45] mb-6" />

      {/* Section header */}
      <div className="flex items-center gap-2 mb-1">
        <h2 className="text-base font-semibold text-gray-900 dark:text-[#d1d4dc]">
          {t('realChart.sectionTitle')}
        </h2>
        <span className="px-2 py-0.5 rounded text-xs font-medium bg-[#2962ff]/10 text-[#2962ff] dark:bg-[#2962ff]/20 dark:text-[#5c8fff]">
          {data.ticker}
        </span>
      </div>
      <p className="text-xs text-gray-400 dark:text-[#787b86] mb-3">
        {localeContent.patternLabel}
      </p>

      {/* Chart */}
      <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-[#363a45] mb-3">
        <div style={{ height: '320px' }}>
          <CandleChart candles={data.candles} annotations={annotations} />
        </div>
      </div>

      {/* Analysis text */}
      <p className="text-sm text-gray-600 dark:text-[#9598a1] leading-relaxed mb-1">
        {localeContent.analysisText}
      </p>
      <p className="text-xs text-gray-400 dark:text-[#4c525e]">
        {t('realChart.dataNote')}
      </p>
    </div>
  )
}

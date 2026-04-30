import { useTranslation } from 'react-i18next'
import { useLocale } from '@/hooks/useLocale'
import { useAppStore } from '@/store/appStore'
import { resolveCandleColorMode, type CandleColorMode } from '@/lib/candlestickColors'

export default function CandleColorToggle() {
  const { t } = useTranslation('ui')
  const { locale } = useLocale()
  const candleColorMode = useAppStore((s) => s.candleColorMode)
  const setCandleColorMode = useAppStore((s) => s.setCandleColorMode)

  const resolvedMode = resolveCandleColorMode(candleColorMode, locale)
  const nextMode: Exclude<CandleColorMode, 'auto'> = resolvedMode === 'red-up' ? 'green-up' : 'red-up'

  return (
    <button
      onClick={() => setCandleColorMode(nextMode)}
      className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-[#2a2e39] dark:hover:bg-[#363a45] text-gray-700 dark:text-[#d1d4dc] border border-gray-200 dark:border-[#363a45]"
      title={t(`chartColors.switchTo.${nextMode}`)}
      aria-label={t(`chartColors.switchTo.${nextMode}`)}
    >
      <span className="text-xs">🕯️</span>
      <span>{t('chartColors.label')}</span>
      <span className="hidden sm:inline text-xs text-gray-500 dark:text-[#9598a1]">
        {t(`chartColors.current.${resolvedMode}`)}
      </span>
    </button>
  )
}

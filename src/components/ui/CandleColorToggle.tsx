import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocale } from '@/hooks/useLocale'
import { useAppStore } from '@/store/appStore'
import { resolveCandleColorMode, type CandleColorMode } from '@/lib/candlestickColors'

export default function CandleColorToggle() {
  const { t } = useTranslation('ui')
  const { locale } = useLocale()
  const candleColorMode = useAppStore((s) => s.candleColorMode)
  const setCandleColorMode = useAppStore((s) => s.setCandleColorMode)
  const [noticeMode, setNoticeMode] = useState<Exclude<CandleColorMode, 'auto'> | null>(null)
  const hideTimerRef = useRef<number | null>(null)

  const resolvedMode = resolveCandleColorMode(candleColorMode, locale)
  const nextMode: Exclude<CandleColorMode, 'auto'> = resolvedMode === 'red-up' ? 'green-up' : 'red-up'

  useEffect(() => {
    return () => {
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current)
      }
    }
  }, [])

  function handleToggle() {
    setCandleColorMode(nextMode)
    setNoticeMode(nextMode)

    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current)
    }

    hideTimerRef.current = window.setTimeout(() => {
      setNoticeMode(null)
      hideTimerRef.current = null
    }, 1800)
  }

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
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

      <div className="sr-only" aria-live="polite">
        {noticeMode ? t(`chartColors.switchedTo.${noticeMode}`) : ''}
      </div>

      {noticeMode && (
        <div className="absolute right-0 top-full mt-2 whitespace-nowrap rounded-md border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-lg dark:border-[#363a45] dark:bg-[#1e222d] dark:text-[#d1d4dc]">
          {t(`chartColors.switchedTo.${noticeMode}`)}
        </div>
      )}
    </div>
  )
}

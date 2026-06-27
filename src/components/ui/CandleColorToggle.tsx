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
        className="flex h-9 items-center gap-2 rounded-md border border-gray-200 bg-gray-100 px-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:border-[#363a45] dark:bg-[#2a2e39] dark:text-[#d1d4dc] dark:hover:bg-[#363a45] sm:px-3"
        title={t(`chartColors.switchTo.${nextMode}`)}
        aria-label={t(`chartColors.switchTo.${nextMode}`)}
      >
        <span className="flex h-4 w-4 items-end justify-center gap-0.5" aria-hidden="true">
          <span className={`h-3 w-1 rounded-sm ${resolvedMode === 'red-up' ? 'bg-[#ef5350]' : 'bg-[#26a69a]'}`} />
          <span className={`h-4 w-1 rounded-sm ${resolvedMode === 'red-up' ? 'bg-[#26a69a]' : 'bg-[#ef5350]'}`} />
          <span className={`h-2.5 w-1 rounded-sm ${resolvedMode === 'red-up' ? 'bg-[#ef5350]' : 'bg-[#26a69a]'}`} />
        </span>
        <span className="hidden min-[420px]:inline">{t('chartColors.label')}</span>
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

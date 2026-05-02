import { useState, useEffect, useRef } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useChapterContent } from '@/hooks/useChapterContent'
import { useAppStore } from '@/store/appStore'
import { useLocale } from '@/hooks/useLocale'
import CandleChart from '@/components/chart/CandleChart'
import ExplanationPanel from './ExplanationPanel'
import SceneControls from './SceneControls'
import PatternBadge from './PatternBadge'
import RealChartSection from '@/components/realChart/RealChartSection'
import { usePageTitle } from '@/hooks/usePageTitle'
import { chapterGuides } from '@/content/chapterGuides'
import { trackEvent } from '@/lib/analytics'

const desktopReadingWidth = 1080

export default function ChapterView() {
  const { chapterId } = useParams<{ chapterId: string }>()
  const { content, loading, error } = useChapterContent(chapterId ?? '')
  const markComplete = useAppStore((s) => s.markChapterComplete)
  const { locale } = useLocale()
  const { t } = useTranslation()
  const [sceneIndex, setSceneIndex] = useState(0)
  const [isDesktopLayout, setIsDesktopLayout] = useState(false)
  const layoutRef = useRef<HTMLDivElement>(null)
  const trackedCompletionsRef = useRef(new Set<string>())

  const chapterTitle = content?.locale[locale]?.title
  usePageTitle(chapterTitle)

  useEffect(() => { setSceneIndex(0) }, [chapterId])

  useEffect(() => {
    const element = layoutRef.current
    if (!element) return

    const updateLayout = () => {
      setIsDesktopLayout(element.getBoundingClientRect().width >= desktopReadingWidth)
    }

    updateLayout()

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(updateLayout)
      observer.observe(element)
      return () => observer.disconnect()
    }

    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  useEffect(() => {
    if (content && sceneIndex === content.scenes.length - 1) {
      markComplete(content.id)
      if (!trackedCompletionsRef.current.has(content.id)) {
        trackedCompletionsRef.current.add(content.id)
        trackEvent('chapter_completed', {
          chapter_id: content.id,
          scene_count: content.scenes.length,
        })
      }
    }
  }, [content, sceneIndex, markComplete])

  if (!chapterId) return <Navigate to="/" replace />

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 dark:text-[#787b86]">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#2962ff] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm">{t('chapter.loading')}</p>
        </div>
      </div>
    )
  }

  if (error || !content) {
    return (
      <div className="flex items-center justify-center h-full min-h-[40vh] text-gray-500 dark:text-[#787b86] text-center px-6">
        <div>
          <p className="text-sm mb-3">{t('chapter.notFound')}</p>
          <p className="text-xs mb-4 text-gray-400 dark:text-[#787b86]">{t('chapter.notFoundHint')}</p>
          <Link
            to="/"
            className="text-sm text-[#2962ff] hover:underline"
          >
            ← {t('chapter.backToHome')}
          </Link>
        </div>
      </div>
    )
  }

  const localeContent = content.locale[locale]
  const currentScene = content.scenes[sceneIndex]
  const sceneTitle = localeContent.sceneTitles[currentScene.titleKey] ?? currentScene.titleKey
  const chapterGuide = chapterGuides[content.id]?.[locale]

  const chartBlock = (
    <div className="my-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-[#363a45] dark:bg-[#131722] lg:my-0">
      {/* Scene title bar */}
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-[#363a45] dark:bg-[#1e222d]">
        <p className="text-xs font-medium text-gray-500 dark:text-[#787b86] lg:text-sm">{sceneTitle}</p>
      </div>
      {/* Chart */}
      <div className="h-[320px] min-[1360px]:h-[420px] min-[1540px]:h-[460px]">
        <CandleChart
          candles={currentScene.candles}
          annotations={currentScene.annotations}
        />
      </div>
      {/* Scene navigation */}
      <SceneControls
        sceneIndex={sceneIndex}
        sceneCount={content.scenes.length}
        sceneTitle={sceneTitle}
        onPrev={() => setSceneIndex((i) => Math.max(0, i - 1))}
        onNext={() => setSceneIndex((i) => Math.min(content.scenes.length - 1, i + 1))}
      />
    </div>
  )

  return (
    <div ref={layoutRef} className="mx-auto w-full max-w-[1440px] px-4 py-6 lg:px-8 lg:py-8">
      <div
        className={[
          'grid gap-8',
          isDesktopLayout
            ? 'grid-cols-[minmax(0,640px)_minmax(360px,1fr)] items-start min-[1540px]:grid-cols-[minmax(0,720px)_minmax(480px,1fr)]'
            : '',
        ].join(' ')}
      >
        <article className="min-w-0 lg:pb-4">
          {/* Chapter header */}
          <div className="mb-6 lg:mb-8">
            <div className="mb-3 flex flex-wrap gap-1.5">
              {content.patternNames.map((name) => (
                <PatternBadge key={name} name={name} />
              ))}
            </div>
            <h1 className="mb-2 text-2xl font-bold leading-snug text-gray-900 dark:text-[#d1d4dc] lg:text-3xl">
              {localeContent.title}
            </h1>
            <p className="text-sm leading-6 text-gray-500 dark:text-[#787b86] lg:text-base">
              {localeContent.subtitle}
            </p>
          </div>

          {/* Explanation blocks with inline chart on smaller screens */}
          <ExplanationPanel
            blocks={localeContent.explanation}
            chartBlock={isDesktopLayout ? null : chartBlock}
          />

          {chapterGuide && (
            <div className="mt-8 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-[#363a45] dark:bg-[#1e222d] lg:mt-10">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#2962ff]">
                  {t('chapter.analysisGuide')}
                </p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-[#9598a1] lg:text-[15px] lg:leading-7">
                  {chapterGuide.whyNotMemorize}
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-[#363a45] dark:bg-[#131722]">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-[#787b86]">
                    {t('chapter.templateTrend')}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-[#d1d4dc]">
                    {chapterGuide.trend}
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-[#363a45] dark:bg-[#131722]">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-[#787b86]">
                    {t('chapter.templateLocation')}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-[#d1d4dc]">
                    {chapterGuide.location}
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-[#363a45] dark:bg-[#131722]">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-[#787b86]">
                    {t('chapter.templateSignal')}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-[#d1d4dc]">
                    {chapterGuide.signal}
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-[#363a45] dark:bg-[#131722]">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-[#787b86]">
                    {t('chapter.templateConfirmation')}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-[#d1d4dc]">
                    {chapterGuide.confirmation}
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-[#363a45] dark:bg-[#131722] md:col-span-2">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-[#787b86]">
                    {t('chapter.templateInvalidation')}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-[#d1d4dc]">
                    {chapterGuide.invalidation}
                  </p>
                </div>
              </div>

              {chapterGuide.confusion && (
                <div className="rounded-lg border border-[#f5a623]/20 bg-[#f5a623]/8 p-4">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#c58618] dark:text-[#f5c76b]">
                    {t('chapter.commonConfusion')}
                  </p>
                  <p className="mb-1 text-sm font-semibold text-gray-900 dark:text-[#d1d4dc]">
                    {chapterGuide.confusion.pattern}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-[#d1d4dc]">
                    {chapterGuide.confusion.reason}
                  </p>
                </div>
              )}

              <div className="rounded-lg border border-[#26a69a]/20 bg-[#26a69a]/8 p-4">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#26a69a]">
                  {t('chapter.keyTakeaway')}
                </p>
                <p className="text-sm font-medium leading-relaxed text-gray-800 dark:text-[#d1d4dc]">
                  {chapterGuide.takeaway}
                </p>
              </div>
            </div>
          )}
        </article>

        {isDesktopLayout && (
          <aside className="sticky top-6 min-w-0">
            <div className="space-y-3">
              {chartBlock}
              <p className="px-1 text-xs leading-relaxed text-gray-400 dark:text-[#787b86]">
                {content.patternNames.join(' / ')}
              </p>
            </div>
          </aside>
        )}
      </div>

      {/* Real-world candlestick analysis (NVDA) */}
      <div className="mt-10 lg:mt-12 lg:max-w-[1180px] xl:max-w-[1240px]">
        <RealChartSection chapterId={content.id} />
      </div>
    </div>
  )
}

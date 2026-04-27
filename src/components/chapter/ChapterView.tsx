import { useState, useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useChapterContent } from '@/hooks/useChapterContent'
import { useAppStore } from '@/store/appStore'
import CandleChart from '@/components/chart/CandleChart'
import ExplanationPanel from './ExplanationPanel'
import SceneControls from './SceneControls'
import PatternBadge from './PatternBadge'
import RealChartSection from '@/components/realChart/RealChartSection'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function ChapterView() {
  const { chapterId } = useParams<{ chapterId: string }>()
  const { content, loading, error } = useChapterContent(chapterId ?? '')
  const locale = useAppStore((s) => s.locale)
  const markComplete = useAppStore((s) => s.markChapterComplete)
  const { t } = useTranslation()
  const [sceneIndex, setSceneIndex] = useState(0)

  const chapterTitle = content?.locale[locale]?.title
  usePageTitle(chapterTitle)

  useEffect(() => { setSceneIndex(0) }, [chapterId])

  useEffect(() => {
    if (content && sceneIndex === content.scenes.length - 1) {
      markComplete(content.id)
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

  const chartBlock = (
    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-[#363a45] my-2">
      {/* Scene title bar */}
      <div className="px-4 py-2 bg-gray-50 dark:bg-[#131722] border-b border-gray-200 dark:border-[#363a45]">
        <p className="text-xs font-medium text-gray-500 dark:text-[#787b86]">{sceneTitle}</p>
      </div>
      {/* Chart */}
      <div style={{ height: '320px' }}>
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
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Chapter header */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {content.patternNames.map((name) => (
            <PatternBadge key={name} name={name} />
          ))}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-[#d1d4dc] leading-snug mb-1">
          {localeContent.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-[#787b86]">{localeContent.subtitle}</p>
      </div>

      {/* Explanation blocks with inline chart */}
      <ExplanationPanel
        blocks={localeContent.explanation}
        chartBlock={chartBlock}
      />

      {/* Real-world candlestick analysis (NVDA) */}
      <RealChartSection chapterId={content.id} locale={locale} />
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { catalog, partLabels } from '@/content/catalog'
import ChapterCard from './ChapterCard'
import type { ChapterMeta } from '@/types/content'
import { useLocale } from '@/hooks/useLocale'
import { usePageTitle } from '@/hooks/usePageTitle'
import { trackEvent } from '@/lib/analytics'

const learningPath = [
  'part1-ch00-analysis',
  'part1-ch00-syntax',
  'part1-ch02-doji',
  'part1-ch03-hammer',
  'part2-ch05-engulfing',
  'part4-ch13-western',
] as const

const recognitionPath = [
  'part1-ch01-intro',
  'part1-ch02-doji',
  'part1-ch03-hammer',
  'part1-ch04-star',
  'part2-ch05-engulfing',
  'part2-ch07-stars',
] as const

const analysisPath = [
  'part1-ch00-analysis',
  'part1-ch00-syntax',
  'part2-ch06-cloud',
  'part2-ch09-tweezers',
  'part3-ch11-windows',
  'part4-ch13-western',
] as const

function groupByPart(chapters: ChapterMeta[]) {
  const parts = new Map<number, ChapterMeta[]>()
  for (const ch of chapters) {
    const arr = parts.get(ch.partNumber) ?? []
    arr.push(ch)
    parts.set(ch.partNumber, arr)
  }
  return parts
}

export default function HomePage() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  const grouped = groupByPart(catalog)
  const firstChapter = catalog[0]
  const recommendedChapters = learningPath
    .map((id) => catalog.find((chapter) => chapter.id === id))
    .filter((chapter): chapter is ChapterMeta => !!chapter)
  const recognitionChapters = recognitionPath
    .map((id) => catalog.find((chapter) => chapter.id === id))
    .filter((chapter): chapter is ChapterMeta => !!chapter)
  const analysisChapters = analysisPath
    .map((id) => catalog.find((chapter) => chapter.id === id))
    .filter((chapter): chapter is ChapterMeta => !!chapter)
  const faviconUrl = `${import.meta.env.BASE_URL}favicon.svg`
  usePageTitle()

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Hero */}
      <div className="mb-10 text-center">
        <div className="flex justify-center mb-4">
          <img src={faviconUrl} alt="logo" className="w-16 h-16" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-[#d1d4dc] mb-3">
          {t('home.title')}
        </h1>
        <p className="text-gray-500 dark:text-[#787b86] text-base max-w-xl mx-auto mb-6">
          {t('home.subtitle')}
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            to={`/chapter/${firstChapter.id}`}
            onClick={() => trackEvent('start_learning_clicked', {
              entry: 'home_hero',
              chapter_id: firstChapter.id,
            })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2962ff] hover:bg-[#1a4fcc] text-white font-semibold text-sm transition-colors"
          >
            {t('home.startLearning')} →
          </Link>
          <Link
            to="/cheat-sheet"
            onClick={() => trackEvent('cheat_sheet_opened', {
              entry: 'home_hero',
            })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-[#363a45] text-gray-700 dark:text-[#d1d4dc] hover:bg-gray-100 dark:hover:bg-[#2a2e39] font-semibold text-sm transition-colors"
          >
            📋 {t('nav.cheatSheet')}
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-8 mb-10 text-center">
        <div>
          <p className="text-2xl font-bold text-gray-900 dark:text-[#d1d4dc]">{catalog.length}</p>
          <p className="text-xs text-gray-500 dark:text-[#787b86] mt-0.5">{t('home.chapters')}</p>
        </div>
        <div className="w-px bg-gray-200 dark:bg-[#363a45]" />
        <div>
          <p className="text-2xl font-bold text-gray-900 dark:text-[#d1d4dc]">
            {catalog.reduce((sum, c) => sum + c.sceneCount, 0)}
          </p>
          <p className="text-xs text-gray-500 dark:text-[#787b86] mt-0.5">{t('home.scenes')}</p>
        </div>
        <div className="w-px bg-gray-200 dark:bg-[#363a45]" />
        <div>
          <p className="text-2xl font-bold text-gray-900 dark:text-[#d1d4dc]">
            {catalog.reduce((sum, c) => sum + c.patternNames.length, 0)}
          </p>
          <p className="text-xs text-gray-500 dark:text-[#787b86] mt-0.5">{t('home.patterns')}</p>
        </div>
      </div>

      <section className="mb-10 rounded-2xl border border-[#2962ff]/20 bg-[#2962ff]/6 p-5">
        <div className="flex flex-col gap-2 mb-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#2962ff]">
            {t('home.pathLabel')}
          </p>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-[#d1d4dc]">
            {t('home.pathTitle')}
          </h2>
          <p className="text-sm text-gray-600 dark:text-[#9598a1] max-w-2xl">
            {t('home.pathDescription')}
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {recommendedChapters.map((chapter, index) => (
            <Link
              key={chapter.id}
              to={`/chapter/${chapter.id}`}
              onClick={() => trackEvent('learning_path_clicked', {
                entry: 'recommended_path',
                chapter_id: chapter.id,
                step_number: index + 1,
              })}
              className="rounded-xl border border-gray-200 dark:border-[#363a45] bg-white dark:bg-[#131722] p-4 hover:border-[#2962ff]/50 transition-colors"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#2962ff] mb-1">
                {t('home.pathStep', { number: index + 1 })}
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-[#d1d4dc] mb-1">
                {chapter.patternNames.join(' / ')}
              </p>
              <p className="text-xs text-gray-500 dark:text-[#787b86]">
                {t(`parts.${chapter.partNumber}`)} · {t('home.scenes')}: {chapter.sceneCount}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 dark:border-[#363a45] bg-white dark:bg-[#131722] p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#26a69a] mb-1">
            {t('home.recognitionPathLabel')}
          </p>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-[#d1d4dc] mb-2">
            {t('home.recognitionPathTitle')}
          </h2>
          <p className="text-sm text-gray-600 dark:text-[#9598a1] mb-4">
            {t('home.recognitionPathDescription')}
          </p>
          <div className="flex flex-wrap gap-2">
            {recognitionChapters.map((chapter) => (
              <Link
                key={chapter.id}
                to={`/chapter/${chapter.id}`}
                onClick={() => trackEvent('learning_path_clicked', {
                  entry: 'recognition_path',
                  chapter_id: chapter.id,
                })}
                className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#26a69a]/30 text-[#1d8f85] dark:text-[#55cfc2] bg-[#26a69a]/8 hover:border-[#26a69a]/50"
              >
                {chapter.patternNames[0]}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-[#363a45] bg-white dark:bg-[#131722] p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#ef5350] mb-1">
            {t('home.analysisPathLabel')}
          </p>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-[#d1d4dc] mb-2">
            {t('home.analysisPathTitle')}
          </h2>
          <p className="text-sm text-gray-600 dark:text-[#9598a1] mb-4">
            {t('home.analysisPathDescription')}
          </p>
          <div className="flex flex-wrap gap-2">
            {analysisChapters.map((chapter) => (
              <Link
                key={chapter.id}
                to={`/chapter/${chapter.id}`}
                onClick={() => trackEvent('learning_path_clicked', {
                  entry: 'analysis_path',
                  chapter_id: chapter.id,
                })}
                className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#ef5350]/30 text-[#d14a47] dark:text-[#ff8b88] bg-[#ef5350]/8 hover:border-[#ef5350]/50"
              >
                {chapter.patternNames[0]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter sections by Part */}
      <div className="space-y-8">
        {[1, 2, 3, 4].map((part) => {
          const chapters = grouped.get(part as 1 | 2 | 3 | 4)
          if (!chapters?.length) return null
          const label = partLabels[part as 1 | 2 | 3 | 4][locale]

          return (
            <section key={part}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-[#787b86] mb-3 pb-2 border-b border-gray-200 dark:border-[#363a45]">
                {label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {chapters.map((ch) => (
                  <ChapterCard key={ch.id} chapter={ch} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

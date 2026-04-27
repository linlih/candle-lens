import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { catalog, partLabels } from '@/content/catalog'
import ChapterCard from './ChapterCard'
import type { ChapterMeta } from '@/types/content'
import { useLocale } from '@/hooks/useLocale'
import { usePageTitle } from '@/hooks/usePageTitle'

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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2962ff] hover:bg-[#1a4fcc] text-white font-semibold text-sm transition-colors"
          >
            {t('home.startLearning')} →
          </Link>
          <Link
            to="/cheat-sheet"
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

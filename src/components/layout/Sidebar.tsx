import { NavLink, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { catalog, partLabels } from '@/content/catalog'
import { useLocale } from '@/hooks/useLocale'
import { useAppStore } from '@/store/appStore'
import type { ChapterMeta } from '@/types/content'

function groupByPart(chapters: ChapterMeta[]) {
  const parts = new Map<number, ChapterMeta[]>()
  for (const ch of chapters) {
    const arr = parts.get(ch.partNumber) ?? []
    arr.push(ch)
    parts.set(ch.partNumber, arr)
  }
  return parts
}

interface Props {
  onClose: () => void
}

export default function Sidebar({ onClose }: Props) {
  const { t } = useTranslation()
  const { chapterId: activeId } = useParams()
  const completedChapters = useAppStore((s) => s.completedChapters)
  const { locale } = useLocale()

  const grouped = groupByPart(catalog)

  return (
    <nav className="w-64 h-full border-r border-gray-200 dark:border-[#363a45] bg-white dark:bg-[#1e222d] overflow-y-auto flex flex-col">
      <div className="p-3 space-y-1">
        <NavLink
          to="/"
          onClick={onClose}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-500 dark:text-[#787b86] hover:text-gray-900 dark:hover:text-[#d1d4dc] hover:bg-gray-100 dark:hover:bg-[#2a2e39] transition-colors"
        >
          ← {t('chapter.backToHome')}
        </NavLink>
        <NavLink
          to="/cheat-sheet"
          onClick={onClose}
          className={({ isActive }) =>
            [
              'flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors',
              isActive
                ? 'bg-[#2962ff] text-white'
                : 'text-gray-500 dark:text-[#787b86] hover:text-gray-900 dark:hover:text-[#d1d4dc] hover:bg-gray-100 dark:hover:bg-[#2a2e39]',
            ].join(' ')
          }
        >
          📋 {t('nav.cheatSheet')}
        </NavLink>
      </div>

      <div className="flex-1 px-2 pb-4 space-y-4">
        {[1, 2, 3, 4].map((part) => {
          const chapters = grouped.get(part as 1 | 2 | 3 | 4)
          if (!chapters?.length) return null
          const partLabel = partLabels[part as 1 | 2 | 3 | 4][locale]

          return (
            <div key={part}>
              <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-[#787b86]">
                {partLabel}
              </p>
              <ul className="space-y-0.5">
                {chapters.map((ch) => {
                  const isCompleted = completedChapters.has(ch.id)
                  const isActive = ch.id === activeId
                  return (
                    <li key={ch.id}>
                      <NavLink
                        to={`/chapter/${ch.id}`}
                        onClick={onClose}
                        className={[
                          'flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors',
                          isActive
                            ? 'bg-[#2962ff] text-white'
                            : 'text-gray-500 dark:text-[#787b86] hover:text-gray-900 dark:hover:text-[#d1d4dc] hover:bg-gray-100 dark:hover:bg-[#2a2e39]',
                        ].join(' ')}
                      >
                        <span className="flex-1 leading-snug">
                          {ch.patternNames[0]}
                          {ch.patternNames.length > 1 && (
                            <span className="text-xs opacity-70">
                              {' '}+{ch.patternNames.length - 1}
                            </span>
                          )}
                        </span>
                        {isCompleted && (
                          <span className="text-[#26a69a] text-xs">✓</span>
                        )}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </nav>
  )
}

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAppStore } from '@/store/appStore'
import type { ChapterMeta } from '@/types/content'
import { partLabels } from '@/content/catalog'

interface Props {
  chapter: ChapterMeta
}

export default function ChapterCard({ chapter }: Props) {
  const { t, i18n } = useTranslation()
  const completedChapters = useAppStore((s) => s.completedChapters)
  const isCompleted = completedChapters.has(chapter.id)
  const locale = i18n.language as 'en' | 'zh'
  const partLabel = partLabels[chapter.partNumber][locale]

  return (
    <Link
      to={`/chapter/${chapter.id}`}
      className="group flex flex-col p-4 rounded-xl border border-gray-200 dark:border-[#363a45] bg-white dark:bg-[#1e222d] hover:border-[#2962ff] hover:bg-gray-50 dark:hover:bg-[#2a2e39] transition-all duration-150"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs text-gray-500 dark:text-[#787b86] font-medium">{partLabel}</span>
        {isCompleted && (
          <span className="flex items-center gap-1 text-xs text-[#26a69a] font-medium">
            <span>✓</span>
            <span>{locale === 'zh' ? '已完成' : 'Done'}</span>
          </span>
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-[#d1d4dc] group-hover:text-[#2962ff] dark:group-hover:text-white transition-colors leading-snug mb-2">
          {chapter.patternNames.join(' · ')}
        </h3>
        <div className="flex flex-wrap gap-1">
          {chapter.patternNames.slice(0, 3).map((name) => (
            <span
              key={name}
              className="text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-[#131722] text-gray-500 dark:text-[#787b86] border border-gray-200 dark:border-[#363a45]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-200 dark:border-[#363a45]">
        <span className="text-xs text-gray-500 dark:text-[#787b86]">
          {chapter.sceneCount} {t('home.scenes')}
        </span>
        <span className="text-xs text-[#2962ff] group-hover:text-[#6d9eeb] font-medium ml-auto transition-colors">
          {locale === 'zh' ? '开始学习 →' : 'Start →'}
        </span>
      </div>
    </Link>
  )
}

import { useTranslation } from 'react-i18next'

interface Props {
  sceneIndex: number
  sceneCount: number
  sceneTitle: string
  onPrev: () => void
  onNext: () => void
}

export default function SceneControls({
  sceneIndex,
  sceneCount,
  sceneTitle,
  onPrev,
  onNext,
}: Props) {
  const { t } = useTranslation()

  return (
    <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-200 dark:border-[#363a45] bg-gray-50 dark:bg-[#1e222d]">
      <button
        onClick={onPrev}
        disabled={sceneIndex === 0}
        className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-gray-100 hover:bg-gray-200 dark:bg-[#2a2e39] dark:hover:bg-[#363a45] text-gray-700 dark:text-[#d1d4dc] border border-gray-200 dark:border-[#363a45]"
      >
        ← {t('chapter.prev')}
      </button>

      <div className="flex-1 flex flex-col items-center gap-1.5">
        {/* Scene dots */}
        <div className="flex gap-1.5">
          {Array.from({ length: sceneCount }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === sceneIndex ? 'bg-[#2962ff]' : 'bg-gray-300 dark:bg-[#363a45]'
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-gray-500 dark:text-[#787b86]">
          {t('chapter.scene')} {sceneIndex + 1} {t('chapter.of')} {sceneCount}
          {sceneTitle ? ` — ${sceneTitle}` : ''}
        </p>
      </div>

      <button
        onClick={onNext}
        disabled={sceneIndex === sceneCount - 1}
        className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-[#2962ff] hover:bg-[#1a4fcc] text-white"
      >
        {t('chapter.next')} →
      </button>
    </div>
  )
}

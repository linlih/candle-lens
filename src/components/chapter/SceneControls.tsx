import { useTranslation } from 'react-i18next'

interface Props {
  sceneIndex: number
  sceneCount: number
  sceneTitle: string
  onPrev: () => void
  onNext: () => void
  onJump: (index: number) => void
}

export default function SceneControls({
  sceneIndex,
  sceneCount,
  sceneTitle,
  onPrev,
  onNext,
  onJump,
}: Props) {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-t border-gray-200 bg-gray-50 px-3 py-3 dark:border-[#363a45] dark:bg-[#1e222d] sm:px-4">
      <button
        onClick={onPrev}
        disabled={sceneIndex === 0}
        className="inline-flex h-9 w-10 items-center justify-center rounded-md border border-gray-200 bg-gray-100 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-30 dark:border-[#363a45] dark:bg-[#2a2e39] dark:text-[#d1d4dc] dark:hover:bg-[#363a45] sm:w-28"
        aria-label={t('chapter.prev')}
      >
        <span aria-hidden="true">←</span>
        <span className="ml-1 hidden sm:inline">{t('chapter.prev')}</span>
      </button>

      <div className="flex min-w-0 flex-col items-center gap-1.5">
        <div className="flex gap-1.5">
          {Array.from({ length: sceneCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => onJump(i)}
              className={`h-2 rounded-full transition-all ${
                i === sceneIndex
                  ? 'w-6 bg-[#2962ff]'
                  : 'w-2 bg-gray-300 hover:bg-gray-400 dark:bg-[#363a45] dark:hover:bg-[#4c525e]'
              }`}
              aria-label={`${t('chapter.scene')} ${i + 1}`}
              aria-current={i === sceneIndex ? 'step' : undefined}
            />
          ))}
        </div>
        <p className="truncate text-center text-xs text-gray-500 dark:text-[#787b86]">
          {t('chapter.scene')} {sceneIndex + 1} {t('chapter.of')} {sceneCount}
          {sceneTitle ? ` · ${sceneTitle}` : ''}
        </p>
      </div>

      <button
        onClick={onNext}
        disabled={sceneIndex === sceneCount - 1}
        className="inline-flex h-9 w-10 items-center justify-center rounded-md bg-[#2962ff] text-sm font-semibold text-white transition-colors hover:bg-[#1a4fcc] disabled:cursor-not-allowed disabled:opacity-30 sm:w-28"
        aria-label={t('chapter.next')}
      >
        <span className="mr-1 hidden sm:inline">{t('chapter.next')}</span>
        <span aria-hidden="true">→</span>
      </button>
    </div>
  )
}

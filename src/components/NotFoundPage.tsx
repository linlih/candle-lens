import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function NotFoundPage() {
  const { t } = useTranslation()
  usePageTitle(t('notFound.title'))

  return (
    <div className="flex items-center justify-center h-full min-h-[60vh] text-center px-6">
      <div>
        <p className="text-5xl font-bold text-gray-200 dark:text-[#2a2e39] mb-4">404</p>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-[#d1d4dc] mb-2">
          {t('notFound.title')}
        </h1>
        <p className="text-sm text-gray-500 dark:text-[#787b86] mb-6">
          {t('notFound.message')}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2962ff] hover:bg-[#1a4fcc] text-white font-semibold text-sm transition-colors"
        >
          ← {t('notFound.backToHome')}
        </Link>
      </div>
    </div>
  )
}

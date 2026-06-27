import { useLocale } from '@/hooks/useLocale'

export default function LanguageToggle() {
  const { locale, setLocale } = useLocale()

  return (
    <button
      onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
      className="flex h-9 min-w-9 items-center justify-center rounded-md border border-gray-200 bg-gray-100 px-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200 dark:border-[#363a45] dark:bg-[#2a2e39] dark:text-[#d1d4dc] dark:hover:bg-[#363a45] sm:min-w-11 sm:px-3"
      title={locale === 'en' ? 'Switch to Chinese' : 'Switch to English'}
      aria-label={locale === 'en' ? 'Switch to Chinese' : 'Switch to English'}
    >
      {locale === 'en' ? '中' : 'EN'}
    </button>
  )
}

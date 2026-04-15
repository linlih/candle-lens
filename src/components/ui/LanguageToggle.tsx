import { useLocale } from '@/hooks/useLocale'

export default function LanguageToggle() {
  const { locale, setLocale } = useLocale()

  return (
    <button
      onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
      className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-[#2a2e39] dark:hover:bg-[#363a45] text-gray-700 dark:text-[#d1d4dc] border border-gray-200 dark:border-[#363a45]"
      title={locale === 'en' ? 'Switch to Chinese' : '切换到英文'}
    >
      {locale === 'en' ? '中文' : 'EN'}
    </button>
  )
}

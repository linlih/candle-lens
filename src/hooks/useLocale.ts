import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppStore } from '@/store/appStore'

export function useLocale() {
  const locale = useAppStore((s) => s.locale)
  const setLocale = useAppStore((s) => s.setLocale)
  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [locale, i18n])

  return { locale, setLocale }
}

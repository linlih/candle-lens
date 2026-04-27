import { useTranslation } from 'react-i18next'
import { resolveLocale, type Locale } from '@/lib/locale'

export function useLocale() {
  const { i18n } = useTranslation()
  const language = i18n.resolvedLanguage ?? i18n.language
  const locale: Locale = resolveLocale(language)

  const setLocale = (nextLocale: Locale) => {
    if (locale !== nextLocale) {
      void i18n.changeLanguage(nextLocale)
    }
  }

  return { locale, setLocale }
}

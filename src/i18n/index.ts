import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enUi from './locales/en/ui.json'
import zhUi from './locales/zh/ui.json'
import enPatterns from './locales/en/patterns.json'
import zhPatterns from './locales/zh/patterns.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        ui: enUi,
        patterns: enPatterns,
      },
      zh: {
        ui: zhUi,
        patterns: zhPatterns,
      },
    },
    defaultNS: 'ui',
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n

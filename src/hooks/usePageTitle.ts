import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const APP_NAME = 'Candle Lens'

export function usePageTitle(pageTitle?: string) {
  const { i18n } = useTranslation()

  useEffect(() => {
    const base = i18n.language.startsWith('zh') ? '蜡烛图镜' : APP_NAME
    document.title = pageTitle ? `${pageTitle} — ${base}` : base
  }, [pageTitle, i18n.language])
}

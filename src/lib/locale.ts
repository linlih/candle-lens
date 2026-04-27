export type Locale = 'en' | 'zh'

export function resolveLocale(language?: string): Locale {
  return language?.startsWith('zh') ? 'zh' : 'en'
}

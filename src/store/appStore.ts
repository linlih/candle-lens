import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Locale = 'en' | 'zh'
type Theme = 'dark' | 'light'

interface AppState {
  locale: Locale
  theme: Theme
  completedChapters: Set<string>
  setLocale: (locale: Locale) => void
  setTheme: (theme: Theme) => void
  markChapterComplete: (chapterId: string) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      locale: 'en',
      theme: 'dark',
      completedChapters: new Set(),
      setLocale: (locale) => set({ locale }),
      setTheme: (theme) => set({ theme }),
      markChapterComplete: (chapterId) =>
        set((state) => ({
          completedChapters: new Set([...state.completedChapters, chapterId]),
        })),
    }),
    {
      name: 'candle-lens-store',
      partialize: (state) => ({
        locale: state.locale,
        theme: state.theme,
        completedChapters: [...state.completedChapters],
      }),
      merge: (persisted, current) => {
        const p = persisted as { locale?: Locale; theme?: Theme; completedChapters?: string[] }
        return {
          ...current,
          locale: p.locale ?? current.locale,
          theme: p.theme ?? current.theme,
          completedChapters: new Set(p.completedChapters ?? []),
        }
      },
    },
  ),
)

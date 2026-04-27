import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'dark' | 'light'

interface AppState {
  theme: Theme
  completedChapters: Set<string>
  setTheme: (theme: Theme) => void
  markChapterComplete: (chapterId: string) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      completedChapters: new Set(),
      setTheme: (theme) => set({ theme }),
      markChapterComplete: (chapterId) =>
        set((state) => ({
          completedChapters: new Set([...state.completedChapters, chapterId]),
        })),
    }),
    {
      name: 'candle-lens-store',
      partialize: (state) => ({
        theme: state.theme,
        completedChapters: [...state.completedChapters],
      }),
      merge: (persisted, current) => {
        const p = persisted as { theme?: Theme; completedChapters?: string[] }
        return {
          ...current,
          theme: p.theme ?? current.theme,
          completedChapters: new Set(p.completedChapters ?? []),
        }
      },
    },
  ),
)

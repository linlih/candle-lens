import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { normalizeCandleColorMode, type CandleColorMode } from '@/lib/candlestickColors'

type Theme = 'dark' | 'light'

interface AppState {
  theme: Theme
  candleColorMode: CandleColorMode
  completedChapters: Set<string>
  setTheme: (theme: Theme) => void
  setCandleColorMode: (mode: CandleColorMode) => void
  markChapterComplete: (chapterId: string) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      candleColorMode: 'auto',
      completedChapters: new Set(),
      setTheme: (theme) => set({ theme }),
      setCandleColorMode: (candleColorMode) => set({ candleColorMode }),
      markChapterComplete: (chapterId) =>
        set((state) => ({
          completedChapters: new Set([...state.completedChapters, chapterId]),
        })),
    }),
    {
      name: 'candle-lens-store',
      partialize: (state) => ({
        theme: state.theme,
        candleColorMode: state.candleColorMode,
        completedChapters: [...state.completedChapters],
      }),
      merge: (persisted, current) => {
        const p = persisted as {
          theme?: Theme
          candleColorMode?: CandleColorMode
          completedChapters?: string[]
        }
        return {
          ...current,
          theme: p.theme ?? current.theme,
          candleColorMode: normalizeCandleColorMode(p.candleColorMode),
          completedChapters: new Set(p.completedChapters ?? []),
        }
      },
    },
  ),
)

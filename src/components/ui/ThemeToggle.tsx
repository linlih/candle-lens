import { useAppStore } from '@/store/appStore'

export default function ThemeToggle() {
  const theme = useAppStore((s) => s.theme)
  const setTheme = useAppStore((s) => s.setTheme)

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-gray-100 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200 dark:border-[#363a45] dark:bg-[#2a2e39] dark:text-[#d1d4dc] dark:hover:bg-[#363a45]"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

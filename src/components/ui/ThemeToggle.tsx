import { useAppStore } from '@/store/appStore'

export default function ThemeToggle() {
  const theme = useAppStore((s) => s.theme)
  const setTheme = useAppStore((s) => s.setTheme)

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-[#2a2e39] dark:hover:bg-[#363a45] text-gray-700 dark:text-[#d1d4dc] border border-gray-200 dark:border-[#363a45]"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

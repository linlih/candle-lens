import { Link, Outlet, useLocation } from 'react-router-dom'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import { useAppStore } from '@/store/appStore'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAnalytics } from '@/hooks/useAnalytics'

export default function AppShell() {
  const theme = useAppStore((s) => s.theme)
  const location = useLocation()
  const { t } = useTranslation()
  const isChapterPage = location.pathname.startsWith('/chapter/')
  useAnalytics()

  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 768)

  useEffect(() => {
    if (window.innerWidth < 768) setSidebarOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#131722] text-gray-900 dark:text-[#d1d4dc]">
      <TopBar
        showSidebarToggle={isChapterPage}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
      />

      <div className="flex flex-1 overflow-hidden">
        {isChapterPage && (
          <>
            {/* Mobile backdrop */}
            {sidebarOpen && (
              <div
                className="md:hidden fixed inset-0 z-20 bg-black/60"
                onClick={closeSidebar}
              />
            )}

            {/* Sidebar: fixed overlay on mobile, inline on desktop */}
            <aside
              className={[
                'fixed top-14 left-0 bottom-0 z-30 w-64',
                'transition-transform duration-200 ease-in-out',
                sidebarOpen ? 'translate-x-0' : '-translate-x-full',
                'md:relative md:top-auto md:bottom-auto md:z-auto',
                'md:translate-x-0 md:transition-none',
                sidebarOpen ? 'md:w-64 md:shrink-0' : 'md:w-0 md:overflow-hidden',
              ].join(' ')}
            >
              <Sidebar onClose={closeSidebar} />
            </aside>
          </>
        )}

        <main className="flex-1 min-w-0 overflow-y-auto flex flex-col">
          <div className="flex-1">
            <Outlet />
          </div>
          <footer className="border-t border-gray-200 dark:border-[#363a45] px-6 py-3 flex items-center justify-center gap-4 text-xs text-gray-400 dark:text-[#787b86]">
            <Link to="/privacy" className="hover:text-gray-600 dark:hover:text-[#d1d4dc] transition-colors">
              {t('footer.privacy')}
            </Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-gray-600 dark:hover:text-[#d1d4dc] transition-colors">
              {t('footer.terms')}
            </Link>
          </footer>
        </main>
      </div>
    </div>
  )
}

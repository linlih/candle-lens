import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CandleColorToggle from '@/components/ui/CandleColorToggle'
import LanguageToggle from '@/components/ui/LanguageToggle'
import ThemeToggle from '@/components/ui/ThemeToggle'

interface Props {
  showSidebarToggle?: boolean
  sidebarOpen?: boolean
  onToggleSidebar?: () => void
}

export default function TopBar({ showSidebarToggle, sidebarOpen, onToggleSidebar }: Props) {
  const { t } = useTranslation()
  const faviconUrl = `${import.meta.env.BASE_URL}favicon.svg`

  return (
    <header className="h-14 flex items-center justify-between px-4 border-b border-gray-200 dark:border-[#363a45] bg-white dark:bg-[#1e222d] shrink-0 z-10 gap-2">
      <div className="flex items-center gap-2">
        {/* Sidebar toggle button — shown only on chapter pages */}
        {showSidebarToggle && (
          <button
            onClick={onToggleSidebar}
            className="flex items-center justify-center w-8 h-8 rounded-md transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-[#2a2e39] dark:hover:bg-[#363a45] text-gray-700 dark:text-[#d1d4dc] border border-gray-200 dark:border-[#363a45]"
            title={sidebarOpen ? 'Hide chapters' : 'Show chapters'}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? (
              // X / close icon
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            ) : (
              // Hamburger / menu icon
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 3h12M1 7h12M1 11h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        )}

        <Link to="/" className="flex items-center gap-2 group">
          <img src={faviconUrl} alt="logo" className="w-7 h-7" />
          <span className="font-bold text-gray-900 dark:text-[#d1d4dc] text-base tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors hidden sm:inline">
            {t('appName')}
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <LanguageToggle />
        <CandleColorToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}

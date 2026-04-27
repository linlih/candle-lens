import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initAnalytics, trackPageview } from '@/lib/analytics'

let initialized = false

export function useAnalytics() {
  const location = useLocation()

  useEffect(() => {
    if (!initialized) {
      initAnalytics()
      initialized = true
    }
  }, [])

  useEffect(() => {
    trackPageview(location.pathname + location.search)
  }, [location.pathname, location.search])
}

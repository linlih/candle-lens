import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen text-center px-6 bg-white dark:bg-[#131722]">
          <div>
            <p className="text-4xl mb-4">⚠️</p>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-[#d1d4dc] mb-2">
              Something went wrong
            </h1>
            <p className="text-sm text-gray-500 dark:text-[#787b86] mb-6">
              An unexpected error occurred. Please try reloading the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2962ff] hover:bg-[#1a4fcc] text-white font-semibold text-sm transition-colors"
            >
              Reload
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

import { useState, useEffect } from 'react'
import type { ChapterContent } from '@/types/content'
import { chapterLoaders } from '@/content/index'

interface State {
  content: ChapterContent | null
  loading: boolean
  error: string | null
}

const cache = new Map<string, ChapterContent>()

export function useChapterContent(chapterId: string): State {
  const [state, setState] = useState<State>(() => {
    const cached = cache.get(chapterId)
    return { content: cached ?? null, loading: !cached, error: null }
  })

  useEffect(() => {
    if (cache.has(chapterId)) {
      setState({ content: cache.get(chapterId)!, loading: false, error: null })
      return
    }

    const loader = chapterLoaders[chapterId]
    if (!loader) {
      setState({ content: null, loading: false, error: `Chapter "${chapterId}" not found` })
      return
    }

    setState((s) => ({ ...s, loading: true, error: null }))

    loader()
      .then(({ chapter }) => {
        cache.set(chapterId, chapter)
        setState({ content: chapter, loading: false, error: null })
      })
      .catch((err: unknown) => {
        const msg = err instanceof Error ? err.message : String(err)
        setState({ content: null, loading: false, error: msg })
      })
  }, [chapterId])

  return state
}

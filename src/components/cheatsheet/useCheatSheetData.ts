import { useEffect, useState } from 'react'
import type { PatternDef } from '@/content/cheatsheet'

interface PatternGroup {
  part: 1 | 2 | 3
  patterns: PatternDef[]
}

interface CheatSheetDataState {
  patterns: PatternDef[]
  patternsByPart: PatternGroup[]
  loading: boolean
  error: string | null
}

type CheatSheetModule = typeof import('@/content/cheatsheet')

let cache: CheatSheetDataState | null = null

export function useCheatSheetData(): CheatSheetDataState {
  const [state, setState] = useState<CheatSheetDataState>(() => cache ?? {
    patterns: [],
    patternsByPart: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    if (cache) {
      setState(cache)
      return
    }

    let cancelled = false
    setState({
      patterns: [],
      patternsByPart: [],
      loading: true,
      error: null,
    })

    void import('@/content/cheatsheet')
      .then((mod: CheatSheetModule) => {
        if (cancelled) return

        const nextState: CheatSheetDataState = {
          patterns: mod.patterns,
          patternsByPart: mod.patternsByPart,
          loading: false,
          error: null,
        }
        cache = nextState
        setState(nextState)
      })
      .catch((err: unknown) => {
        if (cancelled) return
        const msg = err instanceof Error ? err.message : String(err)
        setState({
          patterns: [],
          patternsByPart: [],
          loading: false,
          error: msg,
        })
      })

    return () => {
      cancelled = true
    }
  }, [])

  return state
}

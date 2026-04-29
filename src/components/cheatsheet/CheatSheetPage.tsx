import { useState } from 'react'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import type { Signal } from '@/content/cheatsheet'
import { useLocale } from '@/hooks/useLocale'
import { PatternCard } from './PatternCard'
import { useCheatSheetData } from './useCheatSheetData'
import { usePageTitle } from '@/hooks/usePageTitle'

type FilterSignal = Signal | 'all'

const partTitles = {
  en: {
    1: 'Part 1 — Single & Dual Candle Patterns',
    2: 'Part 2 — Multi-Candle Patterns',
    3: 'Part 3 — Gaps & Continuation',
  },
  zh: {
    1: '第一部分 — 单根与双根蜡烛形态',
    2: '第二部分 — 多根蜡烛形态',
    3: '第三部分 — 跳空与延续形态',
  },
}

export function CheatSheetPage() {
  const { t } = useTranslation('ui')
  const { locale } = useLocale()
  const [filter, setFilter] = useState<FilterSignal>('all')
  const { patterns, patternsByPart, loading, error } = useCheatSheetData()
  usePageTitle(t('cheatSheet.title'))

  const filterButtons: { key: FilterSignal; labelEn: string; labelZh: string }[] = [
    { key: 'all', labelEn: 'All', labelZh: '全部' },
    { key: 'bullish', labelEn: 'Bullish', labelZh: '看涨' },
    { key: 'bearish', labelEn: 'Bearish', labelZh: '看跌' },
    { key: 'neutral', labelEn: 'Neutral', labelZh: '中性' },
  ]

  const activeCount =
    filter === 'all' ? patterns.length : patterns.filter(p => p.signal === filter).length

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#0f1117]/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            ← {t('cheatSheet.backToHome')}
          </Link>
          <div className="h-4 w-px bg-white/20" />
          <h1 className="text-lg font-bold text-white">
            {t('cheatSheet.title')}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Intro */}
        <div className="mb-8">
          <p className="text-slate-400 text-sm max-w-2xl">
            {loading && locale === 'zh'
              ? '正在加载形态速查表...'
              : loading
                ? 'Loading candlestick patterns...'
                : locale === 'zh'
              ? `共 ${patterns.length} 种形态 · 快速参考所有蜡烛图形态的定义和示意图`
              : `${patterns.length} patterns · Quick reference for all candlestick pattern definitions and diagrams`}
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-[#2962ff]/20 bg-[#2962ff]/8 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#8eb1ff] mb-1">
            {t('cheatSheet.pathLabel')}
          </p>
          <p className="text-sm text-slate-200 leading-relaxed mb-3">
            {t('cheatSheet.pathDescription')}
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/chapter/part1-ch00-analysis"
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/8 text-white border border-white/10 hover:border-[#2962ff]/50"
            >
              1. {locale === 'zh' ? '先学分析框架' : 'Start with analysis'}
            </Link>
            <Link
              to="/chapter/part1-ch00-syntax"
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/8 text-white border border-white/10 hover:border-[#2962ff]/50"
            >
              2. {locale === 'zh' ? '再学实体与影线' : 'Then learn candle syntax'}
            </Link>
            <Link
              to="/chapter/part4-ch13-western"
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/8 text-white border border-white/10 hover:border-[#2962ff]/50"
            >
              3. {locale === 'zh' ? '最后看位置共振' : 'Finish with confluence'}
            </Link>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {filterButtons.map(btn => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                filter === btn.key
                  ? 'bg-[#2962ff] border-[#2962ff] text-white'
                  : 'border-white/20 text-slate-400 hover:text-white hover:border-white/40'
              }`}
            >
              {locale === 'zh' ? btn.labelZh : btn.labelEn}
            </button>
          ))}
          <span className="text-slate-500 text-sm ml-2">
            {loading
              ? ''
              : locale === 'zh'
                ? `${activeCount} 种`
                : `${activeCount} patterns`}
          </span>
        </div>

        {error && (
          <div className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {locale === 'zh' ? '速查表加载失败，请刷新后重试。' : 'Failed to load the cheat sheet. Please refresh and try again.'}
          </div>
        )}

        {loading && (
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <div className="w-4 h-4 border-2 border-[#2962ff] border-t-transparent rounded-full animate-spin" />
            <span>{locale === 'zh' ? '正在加载...' : 'Loading...'}</span>
          </div>
        )}

        {/* Patterns grouped by part */}
        {!loading && !error && patternsByPart.map(group => {
          const filtered = group.patterns.filter(
            p => filter === 'all' || p.signal === filter
          )
          if (filtered.length === 0) return null

          const partTitle = partTitles[locale][group.part as keyof typeof partTitles.en]

          return (
            <section key={group.part} className="mb-12">
              <h2 className="text-base font-semibold text-slate-300 mb-4 pb-2 border-b border-white/10">
                {partTitle}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {filtered.map(pattern => (
                  <PatternCard key={pattern.id} pattern={pattern} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

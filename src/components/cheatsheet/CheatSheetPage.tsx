import { useState } from 'react'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { patterns, patternsByPart, type Signal } from '@/content/cheatsheet'
import { PatternCard } from './PatternCard'

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
  const { i18n } = useTranslation('ui')
  const lang = i18n.language.startsWith('zh') ? 'zh' : 'en'
  const [filter, setFilter] = useState<FilterSignal>('all')

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
            ← {lang === 'zh' ? '返回主页' : 'Back to Home'}
          </Link>
          <div className="h-4 w-px bg-white/20" />
          <h1 className="text-lg font-bold text-white">
            {lang === 'zh' ? '蜡烛图速查表' : 'Candlestick Cheat Sheet'}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Intro */}
        <div className="mb-8">
          <p className="text-slate-400 text-sm max-w-2xl">
            {lang === 'zh'
              ? `共 ${patterns.length} 种形态 · 快速参考所有蜡烛图形态的定义和示意图`
              : `${patterns.length} patterns · Quick reference for all candlestick pattern definitions and diagrams`}
          </p>
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
              {lang === 'zh' ? btn.labelZh : btn.labelEn}
            </button>
          ))}
          <span className="text-slate-500 text-sm ml-2">
            {lang === 'zh' ? `${activeCount} 种` : `${activeCount} patterns`}
          </span>
        </div>

        {/* Patterns grouped by part */}
        {patternsByPart.map(group => {
          const filtered = group.patterns.filter(
            p => filter === 'all' || p.signal === filter
          )
          if (filtered.length === 0) return null

          const partTitle = partTitles[lang][group.part as keyof typeof partTitles.en]

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

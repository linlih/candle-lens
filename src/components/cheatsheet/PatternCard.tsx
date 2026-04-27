import { Link } from 'react-router'
import type { PatternDef } from '@/content/cheatsheet'
import { useLocale } from '@/hooks/useLocale'
import { MiniChart } from './MiniChart'

interface PatternCardProps {
  pattern: PatternDef
}

const signalColors = {
  bullish: 'text-[#26a69a] bg-[#26a69a]/10 border-[#26a69a]/30',
  bearish: 'text-[#ef5350] bg-[#ef5350]/10 border-[#ef5350]/30',
  neutral: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30',
}

const kindColors = {
  reversal: 'text-purple-400 bg-purple-400/10',
  continuation: 'text-blue-400 bg-blue-400/10',
  indecision: 'text-slate-400 bg-slate-400/10',
}

const signalLabels = {
  en: { bullish: 'Bullish', bearish: 'Bearish', neutral: 'Neutral' },
  zh: { bullish: '看涨', bearish: '看跌', neutral: '中性' },
}

const kindLabels = {
  en: { reversal: 'Reversal', continuation: 'Continuation', indecision: 'Indecision' },
  zh: { reversal: '反转', continuation: '延续', indecision: '中立' },
}

export function PatternCard({ pattern }: PatternCardProps) {
  const { locale } = useLocale()

  const name = locale === 'zh' ? pattern.nameZh : pattern.nameEn
  const desc = locale === 'zh' ? pattern.descZh : pattern.descEn
  const sigLabel = signalLabels[locale][pattern.signal]
  const kindLabel = kindLabels[locale][pattern.kind]

  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-colors">
      {/* Chart area */}
      <div className="flex items-center justify-center py-3 px-2 bg-black/20">
        <MiniChart candles={pattern.candles} width={150} height={72} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-3 flex-1">
        {/* Badges */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${signalColors[pattern.signal]}`}>
            {sigLabel}
          </span>
          <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${kindColors[pattern.kind]}`}>
            {kindLabel}
          </span>
        </div>

        {/* Name */}
        <div>
          <p className="text-sm font-semibold text-white leading-tight">{name}</p>
          {locale === 'zh' && (
            <p className="text-[11px] text-slate-400 mt-0.5">{pattern.nameEn}</p>
          )}
          {locale === 'en' && pattern.nameZh && (
            <p className="text-[11px] text-slate-400 mt-0.5">{pattern.nameZh}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-[12px] text-slate-300 leading-relaxed flex-1">{desc}</p>

        {/* Link */}
        <Link
          to={`/chapter/${pattern.chapterId}`}
          className="text-[11px] text-[#2962ff] hover:text-blue-400 transition-colors mt-auto"
        >
          {locale === 'zh' ? '查看章节 →' : 'Learn more →'}
        </Link>
      </div>
    </div>
  )
}

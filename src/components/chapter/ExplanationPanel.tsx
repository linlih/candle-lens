import type { ReactNode } from 'react'
import type { ExplanationBlock } from '@/types/content'

interface Props {
  blocks: ExplanationBlock[]
  /** Rendered in place of any { type: 'chart' } block */
  chartBlock?: ReactNode
}

const calloutStyles = {
  tip: {
    border: 'border-l-[#2962ff]',
    bg: 'bg-[#2962ff]/10',
    icon: '💡',
  },
  warning: {
    border: 'border-l-[#f5a623]',
    bg: 'bg-[#f5a623]/10',
    icon: '⚠️',
  },
  rule: {
    border: 'border-l-[#26a69a]',
    bg: 'bg-[#26a69a]/10',
    icon: '📐',
  },
}

function Block({ block, chartBlock }: { block: ExplanationBlock; chartBlock?: ReactNode }) {
  switch (block.type) {
    case 'chart':
      return <>{chartBlock ?? null}</>

    case 'paragraph':
      return (
        <p className="text-sm leading-relaxed text-gray-700 dark:text-[#d1d4dc] lg:text-[15px] lg:leading-7">
          {block.text}
        </p>
      )

    case 'heading':
      return block.level === 2 ? (
        <h2 className="mt-3 text-base font-semibold text-gray-900 dark:text-[#d1d4dc] lg:mt-4 lg:text-lg">
          {block.text}
        </h2>
      ) : (
        <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-[#d1d4dc] lg:text-base">
          {block.text}
        </h3>
      )

    case 'callout': {
      const style = calloutStyles[block.variant]
      return (
        <div className={`flex gap-3 rounded-r-md border-l-4 p-3 lg:p-4 ${style.border} ${style.bg}`}>
          <span className="text-base shrink-0">{style.icon}</span>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-[#d1d4dc] lg:text-[15px] lg:leading-7">{block.text}</p>
        </div>
      )
    }

    case 'keyPoints':
      return (
        <ul className="space-y-1.5">
          {block.points.map((pt, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-[#d1d4dc] lg:text-[15px]">
              <span className="text-[#26a69a] shrink-0 mt-0.5">›</span>
              <span className="leading-relaxed lg:leading-7">{pt}</span>
            </li>
          ))}
        </ul>
      )

    case 'comparison':
      return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-md border border-[#26a69a]/30 bg-[#26a69a]/10 p-3 lg:p-4">
            <p className="text-xs font-semibold text-[#26a69a] mb-1.5">Bullish</p>
            <p className="text-xs leading-relaxed text-gray-700 dark:text-[#d1d4dc] lg:text-sm">{block.bullish}</p>
          </div>
          <div className="rounded-md border border-[#ef5350]/30 bg-[#ef5350]/10 p-3 lg:p-4">
            <p className="text-xs font-semibold text-[#ef5350] mb-1.5">Bearish</p>
            <p className="text-xs leading-relaxed text-gray-700 dark:text-[#d1d4dc] lg:text-sm">{block.bearish}</p>
          </div>
        </div>
      )
  }
}

export default function ExplanationPanel({ blocks, chartBlock }: Props) {
  return (
    <div className="space-y-4 lg:space-y-5">
      {blocks.map((block, i) => (
        <Block key={i} block={block} chartBlock={chartBlock} />
      ))}
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import CandleChart from '@/components/chart/CandleChart'
import { useLocale } from '@/hooks/useLocale'
import { useRealChartData } from './useRealChartData'
import type { AnnotationDef } from '@/types/annotation'
import type { RealChartBias } from '@/types/realChart'

interface Props {
  chapterId: string
}

const biasStyles: Record<RealChartBias, string> = {
  bullish: 'bg-[#26a69a]/12 text-[#26a69a] border border-[#26a69a]/30',
  bearish: 'bg-[#ef5350]/12 text-[#ef5350] border border-[#ef5350]/30',
  neutral: 'bg-[#ffc107]/12 text-[#b58100] border border-[#ffc107]/30',
  wait: 'bg-gray-200 text-gray-600 border border-gray-300 dark:bg-[#2a2e39] dark:text-[#9598a1] dark:border-[#363a45]',
}

function localizeAnnotations(
  annotations: AnnotationDef[],
  labelText?: Record<string, string>,
): AnnotationDef[] {
  if (!labelText) return annotations

  return annotations.map((annotation) =>
    annotation.kind === 'label' && annotation.id in labelText
      ? { ...annotation, text: labelText[annotation.id] }
      : annotation,
  )
}

export default function RealChartSection({ chapterId }: Props) {
  const { data, loading } = useRealChartData(chapterId)
  const { t } = useTranslation('ui')
  const { locale } = useLocale()
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    setStepIndex(0)
  }, [chapterId])

  if (loading) {
    return (
      <div className="mt-8 flex items-center gap-2 text-gray-400 dark:text-[#787b86] text-sm">
        <div className="w-4 h-4 border-2 border-[#2962ff] border-t-transparent rounded-full animate-spin" />
        <span>{t('realChart.sectionTitle')}</span>
      </div>
    )
  }

  if (!data) return null

  const localeContent = data.locale[locale]
  const lesson = data.lesson
  const lessonLocale = lesson?.locale[locale]
  const steps = lesson?.steps ?? []
  const currentStep = steps[stepIndex]
  const allowedAnnotationIds = currentStep?.annotationIds
    ? new Set(currentStep.annotationIds)
    : null

  const localizedAnnotations = localizeAnnotations(data.annotations, localeContent.labelText)
  const annotations = allowedAnnotationIds
    ? localizedAnnotations.filter((annotation) => {
      return allowedAnnotationIds.has(annotation.id)
    })
    : localizedAnnotations

  const visibleCandles = currentStep
    ? data.candles.slice(0, currentStep.visibleCount)
    : data.candles

  const stepLocale = currentStep?.locale[locale]

  return (
    <div className="mt-8">
      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-[#363a45] mb-6" />

      {/* Section header */}
      <div className="flex items-center gap-2 mb-1">
        <h2 className="text-base font-semibold text-gray-900 dark:text-[#d1d4dc]">
          {t('realChart.sectionTitle')}
        </h2>
        <span className="px-2 py-0.5 rounded text-xs font-medium bg-[#2962ff]/10 text-[#2962ff] dark:bg-[#2962ff]/20 dark:text-[#5c8fff]">
          {data.ticker}
        </span>
      </div>
      <p className="text-xs text-gray-400 dark:text-[#787b86] mb-3">
        {localeContent.patternLabel}
      </p>

      {lesson && lessonLocale && currentStep && stepLocale && (
        <div className="mb-4 rounded-xl border border-gray-200 dark:border-[#363a45] bg-gray-50 dark:bg-[#1e222d] p-4 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 dark:text-[#787b86] mb-1">
                {t('realChart.lessonLabel')}
              </p>
              <p className="text-sm text-gray-600 dark:text-[#9598a1] leading-relaxed">
                {lessonLocale.intro}
              </p>
            </div>
            <span className={`px-2 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap ${biasStyles[currentStep.bias]}`}>
              {t(`realChart.bias.${currentStep.bias}`)}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-gray-400 dark:text-[#787b86] mb-1">
                {t('realChart.stepCounter', {
                  current: stepIndex + 1,
                  total: steps.length,
                })}
              </p>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#d1d4dc]">
                {stepLocale.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setStepIndex((index) => Math.max(0, index - 1))}
                disabled={stepIndex === 0}
                className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-gray-100 hover:bg-gray-200 dark:bg-[#2a2e39] dark:hover:bg-[#363a45] text-gray-700 dark:text-[#d1d4dc] border border-gray-200 dark:border-[#363a45]"
              >
                ← {t('realChart.prevStep')}
              </button>
              <button
                onClick={() => setStepIndex((index) => Math.min(steps.length - 1, index + 1))}
                disabled={stepIndex === steps.length - 1}
                className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-[#2962ff] hover:bg-[#1a4fcc] text-white"
              >
                {t('realChart.nextStep')} →
              </button>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm text-gray-700 dark:text-[#d1d4dc] leading-relaxed">
                {stepLocale.summary}
              </p>
              {stepLocale.question && (
                <div className="rounded-lg border border-[#2962ff]/20 bg-[#2962ff]/8 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#2962ff] mb-1">
                    {t('realChart.questionLabel')}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-[#d1d4dc] leading-relaxed">
                    {stepLocale.question}
                  </p>
                </div>
              )}
              {stepLocale.answer && (
                <div className="rounded-lg border border-gray-200 dark:border-[#363a45] bg-white dark:bg-[#131722] p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-[#787b86] mb-1">
                    {t('realChart.answerLabel')}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-[#d1d4dc] leading-relaxed">
                    {stepLocale.answer}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-3">
              {!!stepLocale.confirmationSignals?.length && (
                <div className="rounded-lg border border-[#26a69a]/20 bg-[#26a69a]/8 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#26a69a] mb-2">
                    {t('realChart.confirmationLabel')}
                  </p>
                  <ul className="space-y-1.5">
                    {stepLocale.confirmationSignals.map((signal) => (
                      <li key={signal} className="text-sm text-gray-700 dark:text-[#d1d4dc] leading-relaxed flex gap-2">
                        <span className="text-[#26a69a] mt-0.5">•</span>
                        <span>{signal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {!!stepLocale.invalidationSignals?.length && (
                <div className="rounded-lg border border-[#ef5350]/20 bg-[#ef5350]/8 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#ef5350] mb-2">
                    {t('realChart.invalidationLabel')}
                  </p>
                  <ul className="space-y-1.5">
                    {stepLocale.invalidationSignals.map((signal) => (
                      <li key={signal} className="text-sm text-gray-700 dark:text-[#d1d4dc] leading-relaxed flex gap-2">
                        <span className="text-[#ef5350] mt-0.5">•</span>
                        <span>{signal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Chart */}
      <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-[#363a45] mb-3">
        <div style={{ height: '320px' }}>
          <CandleChart candles={visibleCandles} annotations={annotations} />
        </div>
      </div>

      {lesson && lessonLocale && currentStep && stepLocale ? (
        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-[#9598a1] leading-relaxed">
            {lessonLocale.conclusion}
          </p>
        </div>
      ) : (
        <p className="text-sm text-gray-600 dark:text-[#9598a1] leading-relaxed mb-1">
          {localeContent.analysisText}
        </p>
      )}
      <p className="text-xs text-gray-400 dark:text-[#4c525e]">
        {t('realChart.dataNote')}
      </p>
    </div>
  )
}

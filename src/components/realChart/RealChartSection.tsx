import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import CandleChart from '@/components/chart/CandleChart'
import { useLocale } from '@/hooks/useLocale'
import { useRealChartData } from './useRealChartData'
import type { AnnotationDef } from '@/types/annotation'
import type { RealChartBias } from '@/types/realChart'
import { trackEvent } from '@/lib/analytics'

interface Props {
  chapterId: string
}

interface StepInteractionState {
  selectedBias: RealChartBias | null
  submittedBias: RealChartBias | null
  selectedComparison: string | null
  submittedComparison: string | null
  checkedChecklist: string[]
}

interface LessonCheckpointState {
  selectedOption: string | null
  submittedOption: string | null
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

function createDefaultInteractionState(): StepInteractionState {
  return {
    selectedBias: null,
    submittedBias: null,
    selectedComparison: null,
    submittedComparison: null,
    checkedChecklist: [],
  }
}

function createDefaultCheckpointState(): LessonCheckpointState {
  return {
    selectedOption: null,
    submittedOption: null,
  }
}

export default function RealChartSection({ chapterId }: Props) {
  const { data, loading } = useRealChartData(chapterId)
  const { t } = useTranslation('ui')
  const { locale } = useLocale()
  const [stepIndex, setStepIndex] = useState(0)
  const [caseIndex, setCaseIndex] = useState(0)
  const [practiceResponses, setPracticeResponses] = useState<
    Record<string, StepInteractionState>
  >({})
  const [checkpointResponses, setCheckpointResponses] = useState<
    Record<string, LessonCheckpointState>
  >({})

  useEffect(() => {
    setStepIndex(0)
    setCaseIndex(0)
    setPracticeResponses({})
    setCheckpointResponses({})
  }, [chapterId])

  useEffect(() => {
    setStepIndex(0)
    setPracticeResponses({})
    setCheckpointResponses({})
  }, [caseIndex])

  if (loading) {
    return (
      <div className="mt-8 flex items-center gap-2 text-gray-400 dark:text-[#787b86] text-sm">
        <div className="w-4 h-4 border-2 border-[#2962ff] border-t-transparent rounded-full animate-spin" />
        <span>{t('realChart.sectionTitle')}</span>
      </div>
    )
  }

  if (!data?.length) return null

  const currentChart = data[caseIndex] ?? data[0]
  const localeContent = currentChart.locale[locale]
  const lesson = currentChart.lesson
  const lessonLocale = lesson?.locale[locale]
  const steps = lesson?.steps ?? []
  const currentStep = steps[stepIndex]
  const allowedAnnotationIds = currentStep?.annotationIds
    ? new Set(currentStep.annotationIds)
    : null

  const localizedAnnotations = localizeAnnotations(currentChart.annotations, localeContent.labelText)
  const annotations = allowedAnnotationIds
    ? localizedAnnotations.filter((annotation) => {
      return allowedAnnotationIds.has(annotation.id)
    })
    : localizedAnnotations

  const visibleCandles = currentStep
    ? currentChart.candles.slice(0, currentStep.visibleCount)
    : currentChart.candles

  const stepLocale = currentStep?.locale[locale]
  const dataNote = localeContent.dataNote ?? t('realChart.dataNote')
  const practiceChoices = currentStep
    ? (stepLocale?.practiceChoices ?? {
      bullish: t('realChart.bias.bullish'),
      bearish: t('realChart.bias.bearish'),
      neutral: t('realChart.bias.neutral'),
      wait: t('realChart.bias.wait'),
    })
    : null
  const responseKey = currentStep ? `${caseIndex}:${currentStep.id}` : null
  const practiceResponse = responseKey
    ? practiceResponses[responseKey] ?? createDefaultInteractionState()
    : createDefaultInteractionState()
  const selectedBias = practiceResponse.selectedBias
  const submittedBias = practiceResponse.submittedBias
  const selectedComparison = practiceResponse.selectedComparison
  const submittedComparison = practiceResponse.submittedComparison
  const checkedChecklist = practiceResponse.checkedChecklist
  const hasPractice = !!(currentStep && stepLocale?.answer && practiceChoices)
  const showSolution = !hasPractice || submittedBias !== null
  const solvedCorrectly = submittedBias !== null && submittedBias === currentStep?.bias
  const nextStepLocked = hasPractice && submittedBias === null
  const hasComparison = !!(
    stepLocale?.comparisonPrompt &&
    stepLocale.comparisonOptions?.length &&
    stepLocale.comparisonAnswer
  )
  const comparisonSolvedCorrectly = submittedComparison !== null
    && submittedComparison === stepLocale?.comparisonAnswer
  const checkpointKey = `case:${caseIndex}`
  const checkpointState = checkpointResponses[checkpointKey] ?? createDefaultCheckpointState()
  const hasCheckpoint = !!(
    lessonLocale?.checkpointPrompt &&
    lessonLocale.checkpointOptions?.length &&
    lessonLocale.checkpointAnswer
  )
  const checkpointSolvedCorrectly = checkpointState.submittedOption !== null
    && checkpointState.submittedOption === lessonLocale?.checkpointAnswer

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
          {currentChart.ticker}
        </span>
      </div>
      <p className="text-xs text-gray-400 dark:text-[#787b86] mb-3">
        {localeContent.patternLabel}
      </p>

      {data.length > 1 && (
        <div className="mb-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 dark:text-[#787b86] mb-2">
            {t('realChart.caseLabel')}
          </p>
          <div className="inline-flex max-w-full flex-wrap gap-1 rounded-lg border border-gray-200 bg-gray-100 p-1 dark:border-[#363a45] dark:bg-[#131722]">
            {data.map((chart, index) => {
              const label = chart.locale[locale].caseLabel ?? chart.locale[locale].patternLabel
              const isActive = index === caseIndex
              return (
                <button
                  key={`${chart.chapterId}-${index}`}
                  onClick={() => setCaseIndex(index)}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-white text-[#2962ff] shadow-sm dark:bg-[#2a2e39] dark:text-[#7aa2ff]'
                      : 'text-gray-500 hover:text-gray-900 dark:text-[#787b86] dark:hover:text-[#d1d4dc]'
                  }`}
                  aria-pressed={isActive}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Chart */}
      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-[#363a45] mb-3">
        <div style={{ height: '320px' }}>
          <CandleChart candles={visibleCandles} annotations={annotations} />
        </div>
      </div>

      {lesson && lessonLocale && currentStep && stepLocale && (
        <div className="mb-4 rounded-lg border border-gray-200 dark:border-[#363a45] bg-gray-50 dark:bg-[#1e222d] p-4 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 dark:text-[#787b86] mb-1">
                {t('realChart.lessonLabel')}
              </p>
              <p className="text-sm text-gray-600 dark:text-[#9598a1] leading-relaxed">
                {lessonLocale.intro}
              </p>
            </div>
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap ${biasStyles[currentStep.bias]}`}>
              {t(`realChart.bias.${currentStep.bias}`)}
            </span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
                disabled={stepIndex === steps.length - 1 || nextStepLocked}
                className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-[#2962ff] hover:bg-[#1a4fcc] text-white"
              >
                {t('realChart.nextStep')} →
              </button>
            </div>
          </div>

          {nextStepLocked && (
            <p className="rounded-md bg-[#2962ff]/8 px-3 py-2 text-xs text-[#2962ff] dark:bg-[#2962ff]/12 dark:text-[#7aa2ff]">
              {t('realChart.submitToContinue')}
            </p>
          )}

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
              {hasPractice && (
                <div className="rounded-lg border border-gray-200 dark:border-[#363a45] bg-white dark:bg-[#131722] p-3 space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-[#787b86]">
                    {t('realChart.practiceLabel')}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-[#d1d4dc] leading-relaxed">
                    {stepLocale.practicePrompt ?? t('realChart.practicePrompt')}
                  </p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {(Object.keys(practiceChoices) as RealChartBias[]).map((bias) => {
                      const label = practiceChoices[bias]
                      if (!label) return null
                      const isSelected = selectedBias === bias
                      const isSubmitted = submittedBias !== null
                      const isCorrect = isSubmitted && bias === currentStep.bias
                      const isWrongPick = isSubmitted && isSelected && bias !== currentStep.bias
                      return (
                        <button
                          key={bias}
                          onClick={() => {
                            if (!responseKey) return
                            setPracticeResponses((responses) => ({
                              ...responses,
                              [responseKey]: {
                                ...(responses[responseKey] ?? createDefaultInteractionState()),
                                selectedBias: bias,
                                submittedBias: responses[responseKey]?.submittedBias ?? null,
                              },
                            }))
                          }}
                          disabled={submittedBias !== null}
                          className={`min-h-11 rounded-lg border px-3 py-2 text-left text-sm transition-colors disabled:cursor-default ${
                            isCorrect
                              ? 'border-[#26a69a] bg-[#26a69a]/10 text-[#1d8f85] dark:text-[#55cfc2]'
                              : isWrongPick
                                ? 'border-[#ef5350] bg-[#ef5350]/10 text-[#ef5350]'
                                : isSelected
                                  ? 'border-[#2962ff] bg-[#2962ff]/10 text-[#2962ff]'
                                  : 'border-gray-200 text-gray-700 hover:border-[#2962ff]/50 dark:border-[#363a45] dark:text-[#d1d4dc]'
                          }`}
                          aria-pressed={isSelected}
                        >
                          <span className="flex items-center justify-between gap-2">
                            <span>{label}</span>
                            {isCorrect && <span aria-hidden="true">✓</span>}
                            {isWrongPick && <span aria-hidden="true">×</span>}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => {
                        if (!responseKey || !selectedBias) return
                        trackEvent('real_chart_practice_submitted', {
                          chapter_id: chapterId,
                          case_index: caseIndex,
                          step_id: currentStep.id,
                          selected_bias: selectedBias,
                          expected_bias: currentStep.bias,
                          correct: selectedBias === currentStep.bias,
                        })
                        setPracticeResponses((responses) => ({
                          ...responses,
                          [responseKey]: {
                            ...(responses[responseKey] ?? createDefaultInteractionState()),
                            selectedBias,
                            submittedBias: selectedBias,
                          },
                        }))
                      }}
                      disabled={!selectedBias || submittedBias !== null}
                      className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-[#2962ff] hover:bg-[#1a4fcc] text-white"
                    >
                      {t('realChart.submitAnswer')}
                    </button>
                  </div>
                  {submittedBias !== null && (
                    <div className={`rounded-lg border px-3 py-2 text-sm ${
                      solvedCorrectly
                        ? 'border-[#26a69a]/30 bg-[#26a69a]/10 text-[#1d8f85] dark:text-[#55cfc2]'
                        : 'border-[#ef5350]/30 bg-[#ef5350]/10 text-[#ef5350]'
                    }`}
                    >
                      {solvedCorrectly ? t('realChart.correctAnswer') : t('realChart.revealAnswer')}
                    </div>
                  )}
                </div>
              )}
              {hasComparison && (
                <div className="rounded-lg border border-gray-200 dark:border-[#363a45] bg-white dark:bg-[#131722] p-3 space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-[#787b86]">
                    {t('realChart.comparisonLabel')}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-[#d1d4dc] leading-relaxed">
                    {stepLocale.comparisonPrompt}
                  </p>
                  <div className="space-y-2">
                    {stepLocale.comparisonOptions?.map((option) => {
                      const isSelected = selectedComparison === option
                      const isCorrect = submittedComparison !== null && option === stepLocale.comparisonAnswer
                      const isWrongPick = submittedComparison === option && option !== stepLocale.comparisonAnswer
                      return (
                        <button
                          key={option}
                          onClick={() => {
                            if (!responseKey || submittedComparison !== null) return
                            setPracticeResponses((responses) => ({
                              ...responses,
                              [responseKey]: {
                                ...(responses[responseKey] ?? createDefaultInteractionState()),
                                selectedComparison: option,
                                submittedComparison: responses[responseKey]?.submittedComparison ?? null,
                              },
                            }))
                          }}
                          className={`w-full px-3 py-2 rounded-lg text-sm border transition-colors text-left ${
                            isCorrect
                              ? 'border-[#26a69a] bg-[#26a69a]/10 text-[#26a69a]'
                              : isWrongPick
                                ? 'border-[#ef5350] bg-[#ef5350]/10 text-[#ef5350]'
                                : isSelected
                                  ? 'border-[#2962ff] bg-[#2962ff]/10 text-[#2962ff]'
                                  : 'border-gray-200 dark:border-[#363a45] text-gray-700 dark:text-[#d1d4dc] hover:border-[#2962ff]/50'
                          }`}
                        >
                          {option}
                        </button>
                      )
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (!responseKey || !selectedComparison) return
                        trackEvent('real_chart_comparison_submitted', {
                          chapter_id: chapterId,
                          case_index: caseIndex,
                          step_id: currentStep.id,
                          correct: selectedComparison === stepLocale.comparisonAnswer,
                        })
                        setPracticeResponses((responses) => ({
                          ...responses,
                          [responseKey]: {
                            ...(responses[responseKey] ?? createDefaultInteractionState()),
                            selectedComparison,
                            submittedComparison: selectedComparison,
                          },
                        }))
                      }}
                      disabled={!selectedComparison || submittedComparison !== null}
                      className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-[#2962ff] hover:bg-[#1a4fcc] text-white"
                    >
                      {t('realChart.submitComparison')}
                    </button>
                    {submittedComparison !== null && (
                      <span className={`text-xs font-medium ${comparisonSolvedCorrectly ? 'text-[#26a69a]' : 'text-[#ef5350]'}`}>
                        {comparisonSolvedCorrectly ? t('realChart.correctComparison') : t('realChart.revealComparison')}
                      </span>
                    )}
                  </div>
                  {submittedComparison !== null && stepLocale.comparisonExplanation && (
                    <div className="rounded-lg border border-gray-200 dark:border-[#363a45] bg-gray-50 dark:bg-[#1e222d] p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-[#787b86] mb-1">
                        {t('realChart.comparisonAnswerLabel')}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-[#d1d4dc] leading-relaxed">
                        {stepLocale.comparisonExplanation}
                      </p>
                    </div>
                  )}
                </div>
              )}
              {showSolution && stepLocale.answer && (
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
              {!!stepLocale.checklistItems?.length && (
                <div className="rounded-lg border border-gray-200 dark:border-[#363a45] bg-white dark:bg-[#131722] p-3">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-[#787b86] mb-1">
                        {t('realChart.checklistLabel')}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-[#d1d4dc] leading-relaxed">
                        {stepLocale.checklistPrompt ?? t('realChart.checklistPrompt')}
                      </p>
                    </div>
                    <span className="text-[11px] text-gray-400 dark:text-[#787b86] whitespace-nowrap">
                      {t('realChart.checklistProgress', {
                        checked: checkedChecklist.length,
                        total: stepLocale.checklistItems.length,
                      })}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {stepLocale.checklistItems.map((item) => {
                      const checked = checkedChecklist.includes(item)
                      return (
                        <button
                          key={item}
                          onClick={() => {
                            if (!responseKey) return
                            setPracticeResponses((responses) => {
                              const current = responses[responseKey] ?? createDefaultInteractionState()
                              const nextChecklist = current.checkedChecklist.includes(item)
                                ? current.checkedChecklist.filter((entry) => entry !== item)
                                : [...current.checkedChecklist, item]
                              return {
                                ...responses,
                                [responseKey]: {
                                  ...current,
                                  checkedChecklist: nextChecklist,
                                },
                              }
                            })
                          }}
                          className={`w-full px-3 py-2 rounded-lg text-sm border transition-colors text-left flex items-start gap-2 ${
                            checked
                              ? 'border-[#26a69a] bg-[#26a69a]/10 text-[#26a69a]'
                              : 'border-gray-200 dark:border-[#363a45] text-gray-700 dark:text-[#d1d4dc] hover:border-[#26a69a]/40'
                          }`}
                        >
                          <span className="mt-0.5">{checked ? '☑' : '☐'}</span>
                          <span>{item}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
              {showSolution && (stepLocale.strengthLabel || stepLocale.strengthReason) && (
                <div className="rounded-lg border border-[#2962ff]/20 bg-[#2962ff]/8 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#2962ff] mb-1">
                    {t('realChart.strengthLabel')}
                  </p>
                  {stepLocale.strengthLabel && (
                    <p className="text-sm font-semibold text-gray-900 dark:text-[#d1d4dc] mb-1">
                      {stepLocale.strengthLabel}
                    </p>
                  )}
                  {stepLocale.strengthReason && (
                    <p className="text-sm text-gray-700 dark:text-[#d1d4dc] leading-relaxed">
                      {stepLocale.strengthReason}
                    </p>
                  )}
                </div>
              )}
              {showSolution && (stepLocale.failureScenario || stepLocale.failureAnswer) && (
                <div className="rounded-lg border border-[#ef5350]/20 bg-white dark:bg-[#131722] p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#ef5350] mb-1">
                    {t('realChart.failureLabel')}
                  </p>
                  {stepLocale.failurePrompt && (
                    <p className="text-sm font-medium text-gray-700 dark:text-[#d1d4dc] leading-relaxed mb-1">
                      {stepLocale.failurePrompt}
                    </p>
                  )}
                  {stepLocale.failureScenario && (
                    <p className="text-sm text-gray-700 dark:text-[#d1d4dc] leading-relaxed mb-2">
                      {stepLocale.failureScenario}
                    </p>
                  )}
                  {stepLocale.failureAnswer && (
                    <p className="text-sm text-gray-600 dark:text-[#9598a1] leading-relaxed">
                      {stepLocale.failureAnswer}
                    </p>
                  )}
                </div>
              )}
              {showSolution && !!stepLocale.confirmationSignals?.length && (
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

              {showSolution && !!stepLocale.invalidationSignals?.length && (
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

      {lesson && lessonLocale && currentStep && stepLocale ? (
        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-[#9598a1] leading-relaxed">
            {lessonLocale.conclusion}
          </p>
          {stepIndex === steps.length - 1 && hasCheckpoint && (
            <div className="rounded-xl border border-gray-200 dark:border-[#363a45] bg-white dark:bg-[#131722] p-4 space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-[#787b86]">
                {t('realChart.checkpointTitle')}
              </p>
              <p className="text-sm text-gray-700 dark:text-[#d1d4dc] leading-relaxed">
                {lessonLocale.checkpointPrompt}
              </p>
              <div className="space-y-2">
                {lessonLocale.checkpointOptions?.map((option) => {
                  const isSelected = checkpointState.selectedOption === option
                  const isCorrect = checkpointState.submittedOption !== null && option === lessonLocale.checkpointAnswer
                  const isWrongPick = checkpointState.submittedOption === option && option !== lessonLocale.checkpointAnswer
                  return (
                    <button
                      key={option}
                      onClick={() => {
                        if (checkpointState.submittedOption !== null) return
                        setCheckpointResponses((responses) => ({
                          ...responses,
                          [checkpointKey]: {
                            ...(responses[checkpointKey] ?? createDefaultCheckpointState()),
                            selectedOption: option,
                          },
                        }))
                      }}
                      className={`w-full px-3 py-2 rounded-lg text-sm border transition-colors text-left ${
                        isCorrect
                          ? 'border-[#26a69a] bg-[#26a69a]/10 text-[#26a69a]'
                          : isWrongPick
                            ? 'border-[#ef5350] bg-[#ef5350]/10 text-[#ef5350]'
                            : isSelected
                              ? 'border-[#2962ff] bg-[#2962ff]/10 text-[#2962ff]'
                              : 'border-gray-200 dark:border-[#363a45] text-gray-700 dark:text-[#d1d4dc] hover:border-[#2962ff]/50'
                      }`}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (!checkpointState.selectedOption) return
                    trackEvent('real_chart_checkpoint_submitted', {
                      chapter_id: chapterId,
                      case_index: caseIndex,
                      correct: checkpointState.selectedOption === lessonLocale.checkpointAnswer,
                    })
                    setCheckpointResponses((responses) => ({
                      ...responses,
                      [checkpointKey]: {
                        ...(responses[checkpointKey] ?? createDefaultCheckpointState()),
                        selectedOption: checkpointState.selectedOption,
                        submittedOption: checkpointState.selectedOption,
                      },
                    }))
                  }}
                  disabled={!checkpointState.selectedOption || checkpointState.submittedOption !== null}
                  className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-[#2962ff] hover:bg-[#1a4fcc] text-white"
                >
                  {t('realChart.submitCheckpoint')}
                </button>
                {checkpointState.submittedOption !== null && (
                  <span className={`text-xs font-medium ${checkpointSolvedCorrectly ? 'text-[#26a69a]' : 'text-[#ef5350]'}`}>
                    {checkpointSolvedCorrectly ? t('realChart.correctCheckpoint') : t('realChart.revealCheckpoint')}
                  </span>
                )}
              </div>
              {checkpointState.submittedOption !== null && lessonLocale.checkpointExplanation && (
                <div className="rounded-lg border border-gray-200 dark:border-[#363a45] bg-gray-50 dark:bg-[#1e222d] p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-[#787b86] mb-1">
                    {t('realChart.checkpointAnswerLabel')}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-[#d1d4dc] leading-relaxed">
                    {lessonLocale.checkpointExplanation}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <p className="text-sm text-gray-600 dark:text-[#9598a1] leading-relaxed mb-1">
          {localeContent.analysisText}
        </p>
      )}
      <p className="text-xs text-gray-400 dark:text-[#4c525e]">
        {dataNote}
      </p>
    </div>
  )
}

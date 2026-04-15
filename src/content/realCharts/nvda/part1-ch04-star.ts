import type { RealChartData } from '@/types/realChart'

// NVDA Dec 19, 2025 – Jan 13, 2026 (16 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Shooting Star on Jan 2, 2026
//   open=189.84, high=192.93, low=188.26, close=188.85
//   upper shadow=3.09 (3.1× body), tiny lower shadow=0.59
//   Appears at local top after Dec 19-31 rally; stock declined over following weeks.

export const realChart: RealChartData = {
  chapterId: 'part1-ch04-star',
  ticker: 'NVDA',
  candles: [
    { time: '2025-12-19', open: 176.67, high: 181.45, low: 176.34, close: 180.99 },
    { time: '2025-12-22', open: 183.92, high: 184.16, low: 182.35, close: 183.69 },
    { time: '2025-12-23', open: 182.97, high: 189.33, low: 182.90, close: 189.21 },
    { time: '2025-12-24', open: 187.94, high: 188.91, low: 186.59, close: 188.61 },
    { time: '2025-12-26', open: 189.92, high: 192.69, low: 188.00, close: 190.53 },
    { time: '2025-12-29', open: 187.71, high: 188.76, low: 185.91, close: 188.22 },
    { time: '2025-12-30', open: 188.24, high: 188.99, low: 186.93, close: 187.54 },
    { time: '2025-12-31', open: 189.57, high: 190.56, low: 186.49, close: 186.50 },
    { time: '2026-01-02', open: 189.84, high: 192.93, low: 188.26, close: 188.85 }, // Shooting Star
    { time: '2026-01-05', open: 191.76, high: 193.63, low: 186.15, close: 188.12 },
    { time: '2026-01-06', open: 190.52, high: 192.17, low: 186.82, close: 187.24 },
    { time: '2026-01-07', open: 188.57, high: 191.37, low: 186.56, close: 189.11 },
    { time: '2026-01-08', open: 189.11, high: 189.55, low: 183.71, close: 185.04 },
    { time: '2026-01-09', open: 185.08, high: 186.34, low: 183.67, close: 184.86 },
    { time: '2026-01-12', open: 183.22, high: 187.12, low: 183.02, close: 184.94 },
    { time: '2026-01-13', open: 185.00, high: 188.11, low: 183.40, close: 185.81 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'star-box',
      timeRange: { from: '2026-01-02', to: '2026-01-02' },
      priceRange: { high: 192.93, low: 188.26 },
      pricePadding: 0.4,
      fillColor: 'rgba(239, 83, 80, 0.15)',
      borderColor: '#ef5350',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'star-label',
      time: '2026-01-02',
      price: 194.5,
      text: 'Shooting Star',
      position: 'above',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 11,
      arrowhead: true,
    },
  ],
  locale: {
    en: {
      patternLabel: 'Shooting Star at local top — Jan 2, 2026',
      analysisText:
        "After a strong two-week rally from $177 to $193, NVDA opened January 2, 2026 at $189.84, shot up to $192.93 intraday, but retreated to close at $188.85 — leaving a Shooting Star with an upper shadow of $3.09 (over three times the $0.99 body). Bulls tried to extend the rally but were overpowered by sellers before the close. The bearish signal was confirmed in the days following as NVDA failed to reclaim the $193 level and drifted lower.",
    },
    zh: {
      patternLabel: '顶部流星线 — 2026年1月2日',
      analysisText:
        '在两周内从177美元涨至193美元后，英伟达于2026年1月2日开盘189.84美元，盘中冲高至192.93美元，但随后回落至188.85美元收盘——形成上影线长达3.09美元（超过实体0.99美元三倍）的流星线。多方试图延续涨势，却在收盘前被空方压制。此后数日，NVDA未能重回193美元一线并持续走低，印证了这一看跌信号。',
      labelText: {
        'star-label': '流星线',
      },
    },
  },
}

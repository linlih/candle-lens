import type { RealChartData } from '@/types/realChart'

// NVDA Jan 21 – Feb 9, 2026 (14 trading days)
// Source: Yahoo Finance (auto_adjust=True)
// Pattern: Doji on Jan 30, 2026 — open=191.21, close=191.13, body=$0.08 (near-perfect)
// Context: top of $179→$194 rally; stock fell ~$20 over the next 4 sessions.

export const realChart: RealChartData = {
  chapterId: 'part1-ch02-doji',
  ticker: 'NVDA',
  candles: [
    { time: '2026-01-21', open: 179.05, high: 185.38, low: 178.40, close: 183.32 },
    { time: '2026-01-22', open: 184.75, high: 186.17, low: 183.93, close: 184.84 },
    { time: '2026-01-23', open: 187.50, high: 189.60, low: 186.82, close: 187.67 },
    { time: '2026-01-26', open: 187.16, high: 189.12, low: 185.99, close: 186.47 },
    { time: '2026-01-27', open: 187.24, high: 190.00, low: 185.70, close: 188.52 },
    { time: '2026-01-28', open: 191.27, high: 192.35, low: 189.84, close: 191.52 },
    { time: '2026-01-29', open: 191.34, high: 193.48, low: 186.06, close: 192.51 },
    { time: '2026-01-30', open: 191.21, high: 194.49, low: 189.47, close: 191.13 }, // Doji
    { time: '2026-02-02', open: 187.20, high: 190.30, low: 184.88, close: 185.61 },
    { time: '2026-02-03', open: 186.24, high: 186.27, low: 176.23, close: 180.34 },
    { time: '2026-02-04', open: 179.46, high: 179.58, low: 171.91, close: 174.19 },
    { time: '2026-02-05', open: 174.93, high: 176.82, low: 171.03, close: 171.88 },
    { time: '2026-02-06', open: 176.69, high: 187.00, low: 174.60, close: 185.41 },
    { time: '2026-02-09', open: 184.26, high: 193.66, low: 183.95, close: 190.04 },
  ],
  annotations: [
    {
      kind: 'box',
      id: 'doji-box',
      timeRange: { from: '2026-01-30', to: '2026-01-30' },
      priceRange: { high: 194.49, low: 189.47 },
      pricePadding: 0.5,
      fillColor: 'rgba(255, 193, 7, 0.15)',
      borderColor: '#ffc107',
      borderWidth: 2,
    },
    {
      kind: 'label',
      id: 'doji-label',
      time: '2026-01-30',
      price: 196.0,
      text: 'Doji',
      position: 'above',
      backgroundColor: '#ffc107',
      textColor: '#1a1a2e',
      fontSize: 11,
      arrowhead: true,
    },
    {
      kind: 'label',
      id: 'confirm-label',
      time: '2026-02-03',
      price: 174.0,
      text: 'Bearish Follow-Through',
      position: 'below',
      backgroundColor: '#ef5350',
      textColor: '#ffffff',
      fontSize: 10,
      arrowhead: true,
    },
  ],
  locale: {
    en: {
      patternLabel: 'Doji at peak — Jan 30, 2026',
      analysisText:
        "After rallying from $179 to a high of $194 over eight sessions, NVDA printed a near-perfect Doji on January 30, 2026 — open $191.21, close $191.13, a body of just $0.08. Despite the wide intraday range of $5, neither buyers nor sellers could assert control by the close. The market's indecision proved meaningful: NVDA fell roughly $20 over the next four trading days, confirming the Doji's warning at the top.",
    },
    zh: {
      patternLabel: '顶部十字星 — 2026年1月30日',
      analysisText:
        '英伟达在八个交易日内从179美元涨至194美元高位，随后于2026年1月30日出现近乎完美的十字星——开盘191.21，收盘191.13，实体仅0.08美元。尽管当日价格波幅达5美元，多空双方在收盘时均无法占据主导。市场的犹豫随后得到验证：此后四个交易日NVDA下跌约20美元，印证了十字星在顶部发出的预警信号。',
    },
  },
}

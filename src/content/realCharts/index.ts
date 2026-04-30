import type { RealChartModule } from '@/types/realChart'

type RealChartLoader = () => Promise<RealChartModule>

export const realChartLoaders: Record<string, RealChartLoader> = {
  'part1-ch02-doji':          () => import('./nvda/part1-ch02-doji'),
  'part1-ch03-hammer':        () => import('./nvda/part1-ch03-hammer'),
  'part1-ch04-star':          () => import('./nvda/part1-ch04-star'),
  'part2-ch05-engulfing':     () => import('./nvda/part2-ch05-engulfing'),
  'part2-ch06-cloud':         () => import('./nvda/part2-ch06-cloud'),
  'part2-ch07-stars':         () => import('./nvda/part2-ch07-stars'),
  'part2-ch08-harami':        () => import('./nvda/part2-ch08-harami'),
  'part2-ch09-tweezers':      () => import('./nvda/part2-ch09-tweezers'),
  'part2-ch10-three':         () => import('./nvda/part2-ch10-three'),
  'part3-ch11-windows':       () => import('./nvda/part3-ch11-windows'),
  'part3-ch12-three-methods': () => import('./nvda/part3-ch12-three-methods'),
  'part4-ch13-western':       () => import('./nvda/part4-ch13-western'),
  'part4-ch22-failed-signals': () => import('./nvda/part4-ch22-failed-signals'),
}

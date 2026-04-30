import type { ChapterContent } from '@/types/content'

type ChapterLoader = () => Promise<{ chapter: ChapterContent }>

export const chapterLoaders: Record<string, ChapterLoader> = {
  'part1-ch00-analysis': () => import('./chapters/part1-ch00-analysis/index'),
  'part1-ch00-syntax': () => import('./chapters/part1-ch00-syntax/index'),
  'part1-ch01-intro': () => import('./chapters/part1-ch01-intro/index'),
  'part1-ch02-doji': () => import('./chapters/part1-ch02-doji/index'),
  'part1-ch03-hammer': () => import('./chapters/part1-ch03-hammer/index'),
  'part1-ch04-star': () => import('./chapters/part1-ch04-star/index'),
  'part2-ch05-engulfing': () => import('./chapters/part2-ch05-engulfing/index'),
  'part2-ch06-cloud': () => import('./chapters/part2-ch06-cloud/index'),
  'part2-ch07-stars': () => import('./chapters/part2-ch07-stars/index'),
  'part2-ch08-harami': () => import('./chapters/part2-ch08-harami/index'),
  'part2-ch09-tweezers': () => import('./chapters/part2-ch09-tweezers/index'),
  'part2-ch10-three': () => import('./chapters/part2-ch10-three/index'),
  'part2-ch14-special-reversals': () => import('./chapters/part2-ch14-special-reversals/index'),
  'part2-ch15-line-reversals': () => import('./chapters/part2-ch15-line-reversals/index'),
  'part2-ch16-neck-and-breakaway': () => import('./chapters/part2-ch16-neck-and-breakaway/index'),
  'part2-ch17-advanced-structures': () => import('./chapters/part2-ch17-advanced-structures/index'),
  'part3-ch11-windows': () => import('./chapters/part3-ch11-windows/index'),
  'part3-ch12-three-methods': () => import('./chapters/part3-ch12-three-methods/index'),
  'part3-ch18-gap-continuations': () => import('./chapters/part3-ch18-gap-continuations/index'),
  'part4-ch13-western': () => import('./chapters/part4-ch13-western/index'),
  'part4-ch19-volume': () => import('./chapters/part4-ch19-volume/index'),
  'part4-ch20-context-comparisons': () => import('./chapters/part4-ch20-context-comparisons/index'),
  'part4-ch21-confluence-lab': () => import('./chapters/part4-ch21-confluence-lab/index'),
  'part4-ch22-failed-signals': () => import('./chapters/part4-ch22-failed-signals/index'),
}

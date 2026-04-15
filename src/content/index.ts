import type { ChapterContent } from '@/types/content'

type ChapterLoader = () => Promise<{ chapter: ChapterContent }>

export const chapterLoaders: Record<string, ChapterLoader> = {
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
  'part3-ch11-windows': () => import('./chapters/part3-ch11-windows/index'),
  'part3-ch12-three-methods': () => import('./chapters/part3-ch12-three-methods/index'),
  'part4-ch13-western': () => import('./chapters/part4-ch13-western/index'),
}

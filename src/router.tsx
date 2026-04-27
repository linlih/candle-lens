import { createBrowserRouter } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import { catalog } from '@/content/catalog'

const basename = import.meta.env.BASE_URL === '/'
  ? '/'
  : import.meta.env.BASE_URL.replace(/\/$/, '')

function validateChapterId({ params }: { params: Record<string, string | undefined> }) {
  const id = params.chapterId
  if (!id || !catalog.find((c) => c.id === id)) {
    return null
  }
  return { chapterId: id }
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('@/components/home/HomePage')).default,
        }),
      },
      {
        path: 'cheat-sheet',
        lazy: async () => ({
          Component: (await import('@/components/cheatsheet/CheatSheetPage')).CheatSheetPage,
        }),
      },
      {
        path: 'chapter/:chapterId',
        loader: validateChapterId,
        lazy: async () => ({
          Component: (await import('@/components/chapter/ChapterView')).default,
        }),
      },
      {
        path: 'privacy',
        lazy: async () => ({
          Component: (await import('@/components/legal/PrivacyPage')).default,
        }),
      },
      {
        path: 'terms',
        lazy: async () => ({
          Component: (await import('@/components/legal/TermsPage')).default,
        }),
      },
      {
        path: '*',
        lazy: async () => ({
          Component: (await import('@/components/NotFoundPage')).default,
        }),
      },
    ],
  },
], { basename })

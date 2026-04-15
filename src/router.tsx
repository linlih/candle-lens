import { createBrowserRouter } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import HomePage from '@/components/home/HomePage'
import ChapterView from '@/components/chapter/ChapterView'
import { CheatSheetPage } from '@/components/cheatsheet/CheatSheetPage'
import { catalog } from '@/content/catalog'

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
      { index: true, element: <HomePage /> },
      { path: 'cheat-sheet', element: <CheatSheetPage /> },
      {
        path: 'chapter/:chapterId',
        element: <ChapterView />,
        loader: validateChapterId,
      },
    ],
  },
])

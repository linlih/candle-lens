import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import {
  buildAppRoutes,
  buildSitemapXml,
  readChapterIds,
  repositoryRoot,
} from './catalog-routes.mjs'

const distDir = path.join(repositoryRoot, 'dist')
const indexPath = path.join(distDir, 'index.html')

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html does not exist. Run the Vite build before creating static routes.')
}

const chapterIds = readChapterIds(repositoryRoot)
const routes = buildAppRoutes(chapterIds)

copyFileSync(indexPath, path.join(distDir, '404.html'))

for (const route of routes) {
  const routeDir = path.join(distDir, route)
  mkdirSync(routeDir, { recursive: true })
  copyFileSync(indexPath, path.join(routeDir, 'index.html'))
}

writeFileSync(path.join(distDir, 'sitemap.xml'), buildSitemapXml({ chapterIds }))

console.log(`Created ${routes.length} static route entries and refreshed dist/sitemap.xml.`)

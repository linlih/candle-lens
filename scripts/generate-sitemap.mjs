import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import {
  buildSitemapXml,
  readChapterIds,
  repositoryRoot,
} from './catalog-routes.mjs'

const outputArg = process.argv[2]
const outputPath = path.resolve(repositoryRoot, outputArg || 'public/sitemap.xml')
const chapterIds = readChapterIds(repositoryRoot)
const sitemap = buildSitemapXml({ chapterIds })

mkdirSync(path.dirname(outputPath), { recursive: true })
writeFileSync(outputPath, sitemap)

console.log(`Generated ${path.relative(repositoryRoot, outputPath)} with ${chapterIds.length} chapters.`)

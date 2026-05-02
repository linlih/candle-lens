import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export const repositoryRoot = path.resolve(__dirname, '..')

export const defaultSiteUrl = 'https://candle-lens.lightpixels.tech/'

export function normalizeSiteUrl(siteUrl = defaultSiteUrl) {
  return siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`
}

function propertyNameText(name) {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text
  }
  return null
}

export function readChapterIds(root = repositoryRoot) {
  const catalogPath = path.join(root, 'src/content/catalog.ts')
  const source = readFileSync(catalogPath, 'utf8')
  const sourceFile = ts.createSourceFile(
    catalogPath,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  )
  const ids = []

  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === 'catalog' &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      for (const element of node.initializer.elements) {
        if (!ts.isObjectLiteralExpression(element)) continue
        const idProperty = element.properties.find((property) => {
          return (
            ts.isPropertyAssignment(property) &&
            propertyNameText(property.name) === 'id'
          )
        })
        if (
          !idProperty ||
          !ts.isPropertyAssignment(idProperty) ||
          !ts.isStringLiteral(idProperty.initializer)
        ) {
          throw new Error('Every catalog chapter must define a string id.')
        }
        ids.push(idProperty.initializer.text)
      }
    }

    ts.forEachChild(node, visit)
  }

  visit(sourceFile)

  if (!ids.length) {
    throw new Error(`No chapter ids found in ${catalogPath}`)
  }

  return ids
}

export function buildAppRoutes(chapterIds) {
  return [
    'cheat-sheet',
    ...chapterIds.map((id) => `chapter/${id}`),
    'privacy',
    'terms',
  ]
}

function sitemapEntry(loc, changefreq, priority) {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n')
}

export function buildSitemapXml({ siteUrl = process.env.VITE_SITE_URL, chapterIds }) {
  const normalizedSiteUrl = normalizeSiteUrl(siteUrl || defaultSiteUrl)
  const entries = [
    sitemapEntry(normalizedSiteUrl, 'monthly', '1.0'),
    sitemapEntry(`${normalizedSiteUrl}cheat-sheet/`, 'monthly', '0.8'),
    ...chapterIds.map((id) =>
      sitemapEntry(`${normalizedSiteUrl}chapter/${id}/`, 'monthly', '0.7'),
    ),
    sitemapEntry(`${normalizedSiteUrl}privacy/`, 'yearly', '0.3'),
    sitemapEntry(`${normalizedSiteUrl}terms/`, 'yearly', '0.3'),
  ]

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries.join('\n'),
    '</urlset>',
    '',
  ].join('\n')
}

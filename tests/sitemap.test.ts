import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const testDir = path.dirname(fileURLToPath(import.meta.url))
const repositoryRoot = path.resolve(testDir, '../..')
const siteUrl = 'https://candle-lens.lightpixels.tech/'

function propertyNameText(name: ts.PropertyName): string | null {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text
  }
  return null
}

function readCatalogChapterIds(): string[] {
  const catalogPath = path.join(repositoryRoot, 'src/content/catalog.ts')
  const sourceFile = ts.createSourceFile(
    catalogPath,
    readFileSync(catalogPath, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  )
  const ids: string[] = []

  function visit(node: ts.Node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === 'catalog' &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      for (const element of node.initializer.elements) {
        assert.ok(ts.isObjectLiteralExpression(element))
        const idProperty = element.properties.find((property) => {
          return (
            ts.isPropertyAssignment(property) &&
            propertyNameText(property.name) === 'id'
          )
        })
        assert.ok(idProperty && ts.isPropertyAssignment(idProperty))
        assert.ok(ts.isStringLiteral(idProperty.initializer))
        ids.push(idProperty.initializer.text)
      }
    }

    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  return ids
}

function readSitemapLocations(): string[] {
  const sitemap = readFileSync(path.join(repositoryRoot, 'public/sitemap.xml'), 'utf8')
  return Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1])
}

test('sitemap includes every catalog chapter route', () => {
  const chapterIds = readCatalogChapterIds()
  const locations = readSitemapLocations()
  const expectedChapterLocations = chapterIds.map((id) => `${siteUrl}chapter/${id}/`)
  const actualChapterLocations = locations.filter((location) =>
    location.startsWith(`${siteUrl}chapter/`),
  )

  assert.deepEqual(actualChapterLocations, expectedChapterLocations)
})

test('sitemap includes the main app entry routes', () => {
  assert.deepEqual(readSitemapLocations().slice(0, 2), [
    siteUrl,
    `${siteUrl}cheat-sheet/`,
  ])
  assert.ok(readSitemapLocations().includes(`${siteUrl}privacy/`))
  assert.ok(readSitemapLocations().includes(`${siteUrl}terms/`))
})

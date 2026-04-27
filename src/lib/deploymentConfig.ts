export function normalizeBasePath(basePath: string): string {
  const withLeadingSlash = basePath.startsWith('/') ? basePath : `/${basePath}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

export function normalizeSiteUrl(siteUrl: string): string {
  return siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`
}

export function normalizeProjectPath(projectPath: string): string {
  if (!projectPath || projectPath === '/') return '/'
  const withLeadingSlash = projectPath.startsWith('/') ? projectPath : `/${projectPath}`
  return withLeadingSlash.endsWith('/')
    ? withLeadingSlash.slice(0, -1) || '/'
    : withLeadingSlash
}

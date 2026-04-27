import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import {
  normalizeBasePath,
  normalizeProjectPath,
  normalizeSiteUrl,
} from './src/lib/deploymentConfig'

/**
 * Prevents Vite HMR from reloading the page when the WebSocket disconnects
 * because the mobile browser was backgrounded.
 *
 * Vite calls `location.reload()` whenever the HMR WebSocket drops and
 * reconnects — even if the disconnect was simply the OS suspending the
 * browser tab. This plugin patches the injected client to capture
 * `document.hidden` at the moment of disconnect and skip the reload when
 * the disconnect happened in the background.
 */
function suppressHmrBackgroundReload(): Plugin {
  return {
    name: 'suppress-hmr-background-reload',
    apply: 'serve',
    transform(code, id) {
      if (!id.includes('/vite/dist/client/client')) return null

      let patched = code
      // 1. Record document.hidden at the moment the socket drops.
      patched = patched.replace(
        'console.log(`[vite] server connection lost. Polling for restart...`);',
        'const _viteHiddenOnDrop = document.hidden;\n          console.log(`[vite] server connection lost. Polling for restart...`);',
      )
      // 2. Only reload when the disconnect did NOT happen in the background.
      patched = patched.replace(
        /await waitForSuccessfulPing\(url\.href\);\s*location\.reload\(\);/,
        'await waitForSuccessfulPing(url.href);\n          if (!_viteHiddenOnDrop) location.reload();',
      )
      return patched === code ? null : { code: patched, map: null }
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = normalizeBasePath(env.VITE_APP_BASE_PATH || '/')
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL || 'https://candle-lens.lightpixels.tech/')
  const projectPath = normalizeProjectPath(env.VITE_GITHUB_PROJECT_PATH || '/candle-lens')
  const projectHost = env.VITE_GITHUB_PROJECT_HOST || 'linlih.github.io'

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      suppressHmrBackgroundReload(),
      {
        name: 'inject-site-meta',
        transformIndexHtml(html) {
          return html
            .replaceAll('__BASE_URL__', base)
            .replaceAll('__SITE_URL__', siteUrl)
            .replaceAll('__PROJECT_HOST__', projectHost)
            .replaceAll('__PROJECT_PATH__', projectPath)
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  }
})

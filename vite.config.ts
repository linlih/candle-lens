import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

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

export default defineConfig({
  base: '/candle-lens/',
  plugins: [
    react(),
    tailwindcss(),
    suppressHmrBackgroundReload(),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
})

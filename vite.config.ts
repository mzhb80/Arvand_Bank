import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'
import UnoCSS from 'unocss/vite'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    vue({
      template: {
        transformAssetUrls: {
          BaseIcon: ['src'],
          img: ['src']
        },
      },
    }),
    svgLoader({
      defaultImport: 'raw',
    }),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      injectRegister: 'auto',
      manifest: {
        theme_color: '#4c6ef5'
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

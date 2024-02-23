import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    UnoCSS(),
    Vue(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dirs: ['src/**/components'],
    }),
  ],
  resolve: {
    alias: {
      '@': aliasResolve('./src'),
      '#': aliasResolve('./src/modules'),
    },
  },
})

function aliasResolve(dir: string) {
  return fileURLToPath(new URL(dir, import.meta.url))
}

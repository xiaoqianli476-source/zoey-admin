import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import unocss from 'unocss/vite'
import { presetUno } from 'unocss' // 引入默认预设（兼容主流语法）

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss({
      presets: [presetUno()], // 启用预设
    }),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

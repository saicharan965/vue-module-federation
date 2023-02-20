import { fileURLToPath, URL } from 'node:url'
import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  federation({
    name: 'remote_one',
    filename: 'remoteEntry.js',

    exposes: {
      './vPract': './src/components/vPract.vue',
    },
    shared: ['vue']
  })
  ],
  server: {
    port: 3000
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
})

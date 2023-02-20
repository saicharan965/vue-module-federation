import { fileURLToPath, URL } from 'node:url'
import federation from "@originjs/vite-plugin-federation";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    federation({
      name: 'host-app',
      remotes: {
        remote_one: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: ['vue']
  }) 
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

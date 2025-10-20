
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    // vueJsx(),
    react(),
    eslint({
    include: ['src/**/*.ts', 'src/**/*.vue'],
    fix: true
  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/unit/**/*.spec.{js,ts}'],
    setupFiles: './tests/setup.js',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,cache,temp}/**'
    ]
  }
})
// function vueJsx(): import("vite").PluginOption {
  // throw new Error('Function not implemented.')
// }
// 

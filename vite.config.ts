import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
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

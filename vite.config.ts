import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [vue(), eslint({
     include: ['src/**/*.ts', 'src/**/*.vue'],
      fix: true 
  })],
   resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals: true,            // 允许使用全局 test / expect
    environment: 'jsdom',     // 模拟浏览器环境
   include: ['tests/unit/**/*.spec.{js,ts}'],  // 测试文件路径
    setupFiles: './tests/setup.js',       // 可选，初始化测试环境
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,cache,temp}/**'
    ]
  }
})

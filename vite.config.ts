import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.vue'],
      fix: true,
    }),
  ],
  resolve: {
    extensions: ['.vue', '.js', '.ts', '.tsx'],
  },
});

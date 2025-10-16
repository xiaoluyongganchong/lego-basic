declare module 'vite-plugin-eslint' {
  import type { Plugin } from 'vite'

  interface Options {
    include?: string | string[]
    exclude?: string | string[]
    fix?: boolean
    cache?: boolean
  }

  export default function eslintPlugin(options?: Options): Plugin
}

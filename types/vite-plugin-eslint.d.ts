declare module 'vite-plugin-eslint' {
  import type { Plugin } from 'vite';

  interface Options {
    include?: string | string[];
    exclude?: string | string[];
    cache?: boolean;
    fix?: boolean;
  }

  function eslintPlugin(options?: Options): Plugin;
  export default eslintPlugin;
}

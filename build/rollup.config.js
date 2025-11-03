import typescript from 'rollup-plugin-typescript2'
import pkg from '../package.json' with { type: 'json' }
import {nodeResolve } from '@rollup/plugin-node-resolve'
const { name } = pkg

const file = type =>  `dist/${name}.${type}.js`
const overrides = {
  compilerOptions: {
    declaration: true
  },
  include: ['src/**/*.ts'],
  exclude: [
    "node_modules",
    "src/App.vue"
  ]
}
export {name,file}
export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es',
    sourcemap: true
  },
  external: ['vue', /\.vue$/, 'lodash-es'],
  plugins: [
     nodeResolve(),
    typescript({
      tsconfig: './tsconfig.json',
      clean: true,
      tsconfigOverride: overrides
    })
  ]
}

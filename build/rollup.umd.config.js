
import basicConfig, { file } from './rollup.config.js'
export default {
  ...basicConfig,
  external:['vue', /\.vue$/, 'lodash-es'],
  output: {
    name:'LegoComponent',
    file: file('umd'),
    format: 'umd',
     globals: {
      'vue': 'Vue',
      'lodash-es': '_'
    },
     exports: 'named'
  }

}
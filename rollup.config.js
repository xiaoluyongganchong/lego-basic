import { dataToEsm } from '@rollup/pluginutils'
function Example() {
  return {
    name: 'my-example',
    buildStart(options) { 
      console.log('buildStart', options)
    },
    load(id) {
      console.log('load', id)
      return null
    },
    transform(code, id) {
      if (id.slice(-5) !== '.json') return null
      try {
        const parsed = JSON.parse(code)
        // eslint-disable-next-line no-undef
        const transformCode = dataToEsm(parsed)
        console.log(transformCode)
      
        return {
          code: transformCode,
        }
      } catch (err) {
        console.error('Error parsing JSON:', err)
      }
    },
    buildEnd() {
      console.log('buildEnd')
    }
    }
}
export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'es'
  },
  plugins: [Example()]
}
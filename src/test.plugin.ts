import { App } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const plugins = {
  install: (app: App) => {
    app.config.globalProperties.$echo = () => {
      console.log('Hello from plugin!')
    }
    app.component('test', HelloWorld)
    app.provide('hi',{message:'hello from provide'})
}
  }
export default plugins
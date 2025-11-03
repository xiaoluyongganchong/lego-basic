import { App } from 'vue'
import LText from './components/LText'

const components = [LText]

const install = (app: App) => {
  components.forEach((component) => { 
     const componentName = component.name || component.__name || 'DefaultComponentName'
    app.component(componentName, component)
  })
}

export {
  LText,
  install
}
export default { install }
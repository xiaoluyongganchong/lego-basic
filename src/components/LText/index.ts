import { App } from 'vue'
import LText from './LText.vue'

LText.install = (app: App) => {
   const componentName = LText.name || 'LTextDefaultName'
  app.component(componentName, LText)
}

export default LText
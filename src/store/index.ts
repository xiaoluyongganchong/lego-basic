import { createStore } from 'vuex'
import editor, { EditorProps } from './editor'
import user, { UserProps } from './user'
import templates, { TemplatesProps } from './templates'
export interface GloabalProps {
  user: UserProps
  templates: TemplatesProps
  editor:EditorProps
}

const store = createStore({
  modules: {
    user,
    editor,
    templates
  }
})
export default store
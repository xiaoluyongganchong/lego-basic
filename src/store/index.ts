import { createStore, Store } from 'vuex'
import editor, { EditorProps } from './editor.ts'
import user, { UserProps } from './user.ts'
import templates, { TemplatesProps } from './templates.ts'
export interface GlobalProps {
  user: UserProps
  templates: TemplatesProps
  editor:EditorProps
}

const store = createStore<GlobalProps>({
    modules: {
        user,
        editor,
        templates
    }
})
export default store
export const typedStore = store as Store<GlobalProps> & {
  state: GlobalProps
}
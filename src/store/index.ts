import { createStore } from 'vuex'
import templates,{ TemplatesProps } from './templates'
import user, { UserProps } from './user'
export interface GloabalProps {
  user: UserProps
  templates: TemplatesProps
}

const store = createStore({
    modules: {
        user,
        templates
    }
})

export default store
export type Store = typeof store

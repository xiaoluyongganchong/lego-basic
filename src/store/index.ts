import { createStore } from 'vuex'
import templates,{ TemplateProps } from './templates'
import user, { UserProps } from './user'
export interface GloabalProps {
  user: UserProps
  templates: TemplateProps
}

const store = createStore<GloabalProps>({
    modules: {
        user,
        templates
    }
})

export default store

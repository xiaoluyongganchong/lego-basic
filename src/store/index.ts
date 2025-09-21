import { createStore } from 'vuex'
export interface UserProps {
  isLogin: boolean,
  userName?:string
}
export interface TemplateProps {
  id: number
  title: string
  coverImg: string
  author: string
  copieCount:number
}
export interface GloabalProps {
  user: UserProps
  templates: TemplateProps[]
}
const testData : TemplateProps[] = [
    { id:1, coverImg: '../src/assets/list(1).webp',title:'前端架构师直播海报' , author:'xioaming',copieCount:1},
    { id: 2, coverImg: '../src/assets/list(2).webp', title: '前端架构师直播海报', author:'xioaming',copieCount:1},
    { id: 3, coverImg: '../src/assets/list(3).webp', title: '前端架构师直播海报', author:'xioaming',copieCount:1},
    { id: 4, coverImg: '../src/assets/list(3).webp', title: '前端架构师直播海报', author:'xioaming',copieCount:1},
    { id: 5, coverImg: '../src/assets/list(4).webp', title: '前端架构师直播海报', author:'xioaming',copieCount:1}, 
    { id: 6, coverImg: '../src/assets/list(3).webp', title: '前端架构师直播海报', author:'xioaming',copieCount:1}
]

const store = createStore<GloabalProps>({
    state: {
        user: { isLogin: false },
        templates:testData
    },
    mutations: {
        login(state) {
            state.user = { ...state.user, isLogin: true, userName: 'xiaoming' }
        },
        logout(state) {
            state.user = { isLogin: false }
        }
    },
    getters: {
        getTempalteId: (state) => (id:number) => {
            return state.templates.find(t => t.id === id)
        }
    }
})

export default store

import { Module } from 'vuex'
import { GloabalProps } from './index'
export interface UserProps {
  isLogin: boolean,
  userName?:string
}
export interface UsersPops {
  data:UserProps
}
const user:Module<UsersPops,GloabalProps> = {
    state: {
        data: { isLogin: false }
    },
    mutations: {
        login(state) {
            state.data = { ...state.data, isLogin: true, userName: 'xiaoming' }
        },
        logout(state) {
            state.data = { isLogin: false }
        }
    }
}
export default user
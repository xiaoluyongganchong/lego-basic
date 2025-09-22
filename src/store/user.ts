import { Module } from 'vuex'
import { GloabalProps } from './index'
export interface UserProps {
  isLogin: boolean,
  userName?:string
}
const user:Module<UserProps,GloabalProps> = {
    mutations: {
        login(state) {
            state.isLogin = true
            state.userName = 'xiaoming'
        },
        logout(state) {
            state.isLogin = false
        }
    }
}
export default user
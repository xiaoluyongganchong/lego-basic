import { Module } from 'vuex'
import { GlobalProps } from './index.ts'
export interface UserProps {
  isLogin: boolean,
  userName?:string
}
const user:Module<UserProps,GlobalProps> = {
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

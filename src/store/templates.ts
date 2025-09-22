import { Module } from 'vuex'
import { GloabalProps } from './index'
export interface TemplateProps {
  id: number
  title: string
  coverImg: string
  author: string
  copieCount:number
}

const testData : TemplateProps[] = [
    { id:1, coverImg: '../src/assets/list(1).webp',title:'前端架构师直播海报' , author:'xioaming',copieCount:1},
    { id: 2, coverImg: '../src/assets/list(2).webp', title: '前端架构师直播海报', author:'xioaming',copieCount:1},
    { id: 3, coverImg: '../src/assets/list(3).webp', title: '前端架构师直播海报', author:'xioaming',copieCount:1},
    { id: 4, coverImg: '../src/assets/list(3).webp', title: '前端架构师直播海报', author:'xioaming',copieCount:1},
    { id: 5, coverImg: '../src/assets/list(4).webp', title: '前端架构师直播海报', author:'xioaming',copieCount:1}, 
    { id: 6, coverImg: '../src/assets/list(3).webp', title: '前端架构师直播海报', author:'xioaming',copieCount:1}
]

export interface TemplatesProps {
  data: TemplateProps[]
}

const templates: Module<TemplatesProps,GloabalProps> = {
    state: {
        data:testData
    },
    getters: {
        getTempalteId: (state) => (id:number) => {
            return state.data.find(t => t.id === id)
        }
    }
}
export default templates
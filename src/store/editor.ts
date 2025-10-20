import { GlobalProps } from './index.js'
import { Module } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { TextComponentProps } from '../defaultProps.js'

export interface EditorProps {
  //供之间编辑器渲染的数组
  components:ComponentsData[]
  //当前编辑的是那个元素，uuid
  currentElement: string
  //保存的时候还有其他一些小项目信息，这里没有卸除，到时候在做补充
}


export interface ComponentsData {
  //这个元素的 属性，属性详情见下面
  props: Partial<TextComponentProps> 
  // id uuid v4 生成
  id: string
  //业务组件库名称 l-text l-image 等等
  name:string
}

export const testComponent: ComponentsData[] = [
    { id: uuidv4(), name: 'l-text', props: { text: 'hello1', fontSize: '10px',color:'#000000',fontFamily:'',textAlign:'左'} },
    { id: uuidv4(), name: 'l-text', props: { text: 'hello2', fontSize: '20px',color:'red',lineHeight:'1',fontFamily:'',iconSwitch:'加粗'} },
    { id: uuidv4(), name: 'l-text', props: { text: 'hello3', fontSize: '30px',actionType:'url',url:'wwww.baidu.com',lineHeight:'2'} }  
]

const editor: Module<EditorProps, GlobalProps> = {
    state: {
        components: testComponent,
        currentElement : ""
    },
    mutations: {
        setActive(state, currentId: string) {
            state.currentElement = currentId 
        },
        addComponent(state, props) {
            const newComponent: ComponentsData = {
                props,
                id: uuidv4(),
                name: 'l-text'
            }
            state.components.push(newComponent)
        },
        updateComponent(state, { value, key }) {
            const updatedComponent = state.components.find((component) => component.id === state.currentElement)
            if (updatedComponent) {
                updatedComponent.props[key as keyof TextComponentProps] = value
            }
        },
        removeComponent(state,id) {
            state.components = state.components.filter(component=>component.id !== id)
        },
    },
    getters: {
        getCurrentElement: (state) => {
            return state.components.find((component)=>component.id===state.currentElement)
        }
    }
}

export default editor
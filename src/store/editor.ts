import { GloabalProps } from './index'
import { Module } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export interface EditorProps {
  //供之间编辑器渲染的数组
  components:ComponentsData[]
  //当前编辑的是那个元素，uuid
  currentElement: string
  //保存的时候还有其他一些小项目信息，这里没有卸除，到时候在做补充
}


interface ComponentsData {
  //这个元素的 属性，属性详情见下面
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: { [ key: string ] :any }
  // id uuid v4 生成
  id: string
  //业务组件库名称 l-text l-image 等等
  name:string
}

export const testComponent: ComponentsData[] = [
    { id: uuidv4(), name: 'l-text', props: { text: 'hello1', fontSize: '10px'} },
    { id: uuidv4(), name: 'l-text', props: { text: 'hello2', fontSize: '20px',color:'red'} },
    { id: uuidv4(), name: 'l-text', props: { text: 'hello3', fontSize: '30px',actionType:'url',url:'wwww.baidu.com'} }  
]

const editor: Module<EditorProps, GloabalProps> = {
    state: {
        components: testComponent,
        currentElement : ""
    }
}

export default editor
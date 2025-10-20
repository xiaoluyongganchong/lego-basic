import { VNode  } from 'vue'
import { TextComponentProps } from './defaultProps.js'

export interface PropsToForm {
  component: string,
  value?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraProps?: { [key: string]: any },
  text: string,
  subComponent?: string,
    options?: { text: string | VNode; value: string }[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialTransForm?: (v: any) => any,
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
  alterTransForm?: (v:any) => any,
  valueProps?: string,
  eventName?: string
}
const fontFamilyArr = [
    {text: '无', value:''},
    {text:'宋体',value:'simSun,STSong'},
    {text:'黑体',value:'simHei,STHeiti'},
    {text:'楷体',value:'KaiTi,STKaiti'},
    {text:'仿宋',value:'FangSong,STFangsong'}
]

const fontFamilyOptions = fontFamilyArr.map(font => {
    return {
        value: font.value,
        text: <span style={{ fontFamily: font.value }}>{font.text}</span> as VNode
    }
} )

export type PropsToForms = {
   [ P in keyof TextComponentProps ] ?: PropsToForm
}
 
export const mapPropsToForm: PropsToForms = {
    text: {
        text:'文本',
        component: 'a-input',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        alterTransForm: (e:any) => e.target.value
    },
    fontSize: {
        text:'字号',
        component: 'a-input-number',
        initialTransForm: (v: string) => parseInt(v),
        alterTransForm: (e:number) => e ? `${e}px`:''
    },
    lineHeight: {
        text:'行高',
        component: 'a-slider',
        initialTransForm: (v: string) => parseFloat(v),
        alterTransForm: (e:number) =>  e.toString()   ,
        extraProps:{min:0,max:3,step:0.1}
    },
    textAlign: {
        text:'对齐',
        component: 'a-radio-group',
        subComponent: 'a-radio-button',
        options: [
            { text: '左', value: 'left' },
            { text: '中', value: 'center' },
            { text: '右', value: 'right' } 
        ],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        alterTransForm: (e:any) =>  e.target.value
    },
    fontFamily: {
        text: '字体',
        component: 'a-select',
        subComponent: 'a-select-option',
        options: [
            { text: '无', value: '' },
            ...fontFamilyOptions
        ],
        extraProps:{size:'large'}
    },
    color: {
        component: 'color-picker',
        text:'字体颜色'
    },
    iconSwitch: {
        component: 'icon-switch',
        text:'图标切换'
    }
}
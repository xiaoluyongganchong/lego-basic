
import { without, mapValues } from 'lodash-es'
export interface CommmonComponnetProps  {
         // actions
     actionType: string,
     url:string,
     // size
     height: string,
     width: string,
     paddingLeft: string,
     paddingRight: string,
     paddingTop: string,
     paddingBottom: string,
     // border type
     borderStyle: string,
     borderColor:string,
     borderWidth: string,
     borderRadius:string
     // shadow and opacity
     boxShadow: string,
     opacity: number,
     // position and x,y
     position: string,
     left: string,
     top: string,
     right: string
}
export interface TextComponentProps extends  CommmonComponnetProps{
    text: string,
    fontSize: string,
    fontFamily:string,
    fontWeight: string,
    fontStyle: string,
    textDecoration: string,
    lineHeight: string,
    textAlign: string,
    color: string,
    backgroundColor: string,
    iconSwitch:string
}
export const commonDefaultProps:CommmonComponnetProps = {
    // actions
    actionType: '',
    url: '',
    // size
    height: '',
    width: '318px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    // border type
    borderStyle: 'none',
    borderColor: '#000',
    borderWidth: '0',
    borderRadius: '0',
    // shadow and opacity
    boxShadow: '0 0 0 #000000',
    opacity: 1,
    // position and x,y
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0'
};

export const textDefaultProps = {
    // basic props - font styles
    text: '正文内容',
    fontSize: '14px',
    fontFamily: '',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '1',
    textAlign: 'left',
    color: '#000000',
    backgroundColor: '',
    iconSwitch:'B',
    ...commonDefaultProps
};

export const textStylePropsName = without(Object.keys(textDefaultProps),'actionType','url','text')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformtoComponentProps = (props: TextComponentProps) => {
    return mapValues(props, (item) => {
        return {
            type: item.constructor as StringConstructor,
            default:item
        }
    })
}


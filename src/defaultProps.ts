
import { without, mapValues } from 'lodash-es'
export interface CommmonComponnetProps  {
         // actions
    actionType: string;
     url: string;
     // size
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
     // border type
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
     // shadow and opacity
    boxShadow: string;
    opacity: number;
     // position and x,y
    position: string;
    left: string;
    top: string;
    right: string;
}
export interface TextComponentProps extends  CommmonComponnetProps{
    text: string;
    fontSize: string;
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    textDecoration: string;
    lineHeight: string;
    textAlign: string;
    color: string;
    backgroundColor: string;
    iconSwitch: string;
}
export interface ImageComponentProps extends CommmonComponnetProps {
    src: string;
    alt: string;
    objectFit: string;
}
export interface ShapeComponentProps extends CommmonComponnetProps { 
    backgroundColor: string;
    shapeType: string;
    shapeColor: string;
    shapeSize: string;
    shapeRotate: string;
    shapePosition: string;
    shapeDirection: string;
    shapeRadius: string;
    shapeSides: string;
    shapePoints: string;
}
export const commonDefaultProps: CommmonComponnetProps = {
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
}

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
}
export const imageDefaultProps: ImageComponentProps = {
    src: 'test.url',
    alt: '图片',
    objectFit: 'contain',
    ...commonDefaultProps
}
export const shapeDefultProps: ShapeComponentProps = { 
    backgroundColor: '#ffffff',
    shapeType: 'circle',
    shapeColor: '#000000',
    shapeSize: '100px',
    shapeRotate: '0',
    shapePosition: 'center',
    shapeDirection: 'row',
    shapeRadius: '0',
    shapeSides: '0',
    shapePoints: '',
    ...commonDefaultProps
}
export const isEditingProps = {
    isEditing: {
        type: Boolean,
        default: false
    }
}

export const textStylePropsName = without(Object.keys(textDefaultProps),'actionType','url','text')
export const imageStylePropName = without(Object.keys(imageDefaultProps),'src')
export const shapeStylePropName = without(Object.keys(shapeDefultProps),'shapeType','shapeColor','shapeSize','shapeRotate','shapePosition','shapeDirection','shapeRadius','shapeSides','shapePoints')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformtoComponentProps = (props: any) => {
   const mapProps = mapValues(props, (item) => {
        return {
            type: item.constructor as StringConstructor,
            default:item
        }
    })
    return {...mapProps,...isEditingProps }
}


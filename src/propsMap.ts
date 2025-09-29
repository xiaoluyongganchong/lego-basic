import { TextComponentProps } from './defaultProps'
export interface PropsToForm {
  component: string,
  value?: string
}

export type PropsToForms = {
   [ P in keyof TextComponentProps ] ?: PropsToForm
}
 
export const mapPropsToForm: PropsToForms = {
    text: {
        component : 'a-input'
    }
}
import { defineComponent, PropType, computed, VNode } from 'vue'
import { reduce } from 'lodash-es'
import { mapPropsToForm } from '../propsMap.jsx'
import { TextComponentProps } from '../defaultProps.js'
import { Input, InputNumber, Radio, Select, Slider } from 'ant-design-vue';
interface FormProps {
  component: string,
  value: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraProps?: { [key: string]: any },
  text: string,
  subComponent?: string,
  options?: { text: string | VNode ; value: string }[],
  valueProps?: string,
  eventName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  events:{[ key:string ]:(e:any) => void}
}
const mapToComponent = {
  'a-textarea': Input.TextArea,
  'a-input-number': InputNumber,
  'a-slider': Slider,
  'a-radio-group': Radio.Group,
  'a-radio-button': Radio.Button,
  'a-select': Select,
  'a-select-option':Select.Option
}
function captializeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export default defineComponent({
    name: 'PropsTable',
    props: {
        props: {
            type: Object as PropType<TextComponentProps>,
            required:true
        }
    },
    emits:['change'],
    setup(props,context) {
        const finalProps = computed(() => {
            return reduce(props.props, (result,value, key) => {
                const newKey = key as keyof TextComponentProps
                const item = mapPropsToForm[newKey]
                if (item) {
                    const { valueProps = 'value', eventName = 'change', initialTransForm, alterTransForm } = item
                    const newItem:FormProps = {
                        ...item,
                        value : initialTransForm ? initialTransForm(value) : value,
                        valueProps,
                        eventName,
                        events: {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            ['on' + captializeFirstLetter(eventName)]: (e:any) => { context.emit('change', { key, value: alterTransForm ? alterTransForm(e) : e}) }
                        }
                    }
                    result[newKey as string] = newItem
                }
                return result
            },{} as {[key:string]:FormProps})
        })
      return () => 
        <div   class="props-table" >
          {
            Object.keys(finalProps.value).map(key => {
              const value = finalProps.value[key]
              const componentName = mapToComponent[value.component]
              const subComponent = value.subComponent ? mapToComponent[value.subComponent] : null
              const props = {
                [String(value.valueProps)]: value.value,
                ...value.extraProps,
                ...value.events
              }
              return (
                <div class="prop-item" key={key}>
                  {value.text && <span class="label">{value.text}</span>}
                  <div class="prop-component">
                    <componentName {...props}>
                      {value.options && value.options.map(option => {
                        return (
                          <subComponent value={option.value}>{ option.text }</subComponent>
                        )
                      })}
                    </componentName>
                  </div>
                </div>
              )
            })
          }
        </div>
    }
})
import { defineComponent, PropType, computed, VNode } from 'vue'
import { reduce } from 'lodash-es'
import { mapPropsToForm } from '../propsMap'
import { TextComponentProps } from '../defaultProps'
import { Input, InputNumber, Radio, Select, Slider } from 'ant-design-vue'

interface FormProps {
  component: string,
  value: string,
  extraProps?: { [key: string]: any },
  text: string,
  subComponent?: string,
  options?: { text: string | VNode; value: string }[],
  valueProps?: string,
  eventName: string,
  events: { [key: string]: (e: any) => void }
}

const mapToComponent = {
  'a-textarea': Input.TextArea,
  'a-input-number': InputNumber,
  'a-slider': Slider,
  'a-radio-group': Radio.Group,
  'a-radio-button': Radio.Button,
  'a-select': Select,
  'a-select-option': Select.Option
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default defineComponent({
  name: 'PropsTable',
  props: {
    props: {
      type: Object as PropType<TextComponentProps>,
      required: true
    }
  },
  emits: ['change'],
  setup(props, context) {
    const finalProps = computed(() => {
      return reduce(props.props, (result, value, key) => {
        const newKey = key as keyof TextComponentProps
        const item = mapPropsToForm[newKey]
        if (item) {
          const { valueProps = 'value', eventName = 'change', initialTransForm, alterTransForm } = item
          const newItem: FormProps = {
            ...item,
            value: initialTransForm ? initialTransForm(value) : value,
            valueProps,
            eventName,
            events: {
              ['on' + capitalizeFirstLetter(eventName)]: (e: any) => { context.emit('change', { key, value: alterTransForm ? alterTransForm(e) : e }) }
            }
          }
          result[newKey as string] = newItem
        }
        return result
      }, {} as { [key: string]: FormProps })
    })

    return () => (
      <div class="props-table">
        {Object.keys(finalProps.value).map(key => {
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
                {componentName && (
                  <component is={componentName} {...props}>
                    {value.options && value.options.map(option => {
                      return (
                        <subComponent value={option.value}>{option.text}</subComponent>
                      )
                    })}
                  </component>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
})

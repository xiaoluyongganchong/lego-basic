<template>
  <div 
    class="props-table" 
  >
    <div 
      v-for="(value,key) in finalProps"
      :key="key"
      class="prop-item"
    >
      <span
        v-if="value?.text"
        class="label"
      >{{ value?.text }}</span>
      <div
        v-if="value"
        class="prop-component"
      >
        <component
          :is="value?.component"
          :value="value.value"
          v-bind="{ ...value.extraProps, [value.valueProps ?? 'value']: value.value }"
          v-on="value.events"
        >
          <template v-if="value.options">
            <component 
              :is="value.subComponent"
              v-for="(option,k) in value.options"
              :key="k"
              :value="option.value"
            >
              <renderVue :v-node="option.text" />
            </component>
          </template>
        </component>
      </div>
    </div>RenderVnode.ts
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed, VNode } from 'vue'
import { reduce } from 'lodash-es'
import { mapPropsToForm } from '../propsMap'
import { TextComponentProps } from '../defaultProps'
import renderVue from './RenderVnode'
import ColorPicker from './ColorPicker.vue'
import IconSwitch from './IconSwitch.vue'
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

export default defineComponent({
    name: 'PropsTable',
    components: {
        renderVue,
        ColorPicker,
        IconSwitch
    },
    props: {
        props: {
            type: Object as PropType<TextComponentProps>,
            required:true
        }
    },
    emits:['change'],
    setup(props,context) {
        const finalProps = computed(() => {
            return reduce(props.props, (result: { [x: string]: FormProps },value: string, key: string) => {
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
                            [eventName]: (e:any) => {
                                // special handling for icon switches (B/I/U)
                                if (newKey === 'iconSwitch') {
                                    const icon = e as string
                                    if (icon === 'B') {
                                        const isBold = props.props.fontWeight === 'bold'
                                        context.emit('change', { key: 'fontWeight', value: isBold ? 'normal' : 'bold' })
                                    } else if (icon === 'I') {
                                        const isItalic = props.props.fontStyle === 'italic'
                                        context.emit('change', { key: 'fontStyle', value: isItalic ? 'normal' : 'italic' })
                                    } else if (icon === 'U') {
                                        const isUnderline = props.props.textDecoration === 'underline'
                                        context.emit('change', { key: 'textDecoration', value: isUnderline ? 'none' : 'underline' })
                                    }
                                } else {
                                    context.emit('change', { key, value: alterTransForm ? alterTransForm(e) : e})
                                }
                            }
                        }
                    }
                    result[newKey as string] = newItem
                }
                return result
            },{} as {[key:string]:FormProps})
        })
        return {
            finalProps
        }
    }
})
</script>
<style>
.prop-item{
  display:flex;
  margin-bottom:10px;
  align-items:center;
}
.label {
  flex: 0 0 28%; /* 固定占28% */
}
.prop-component {
  flex: 0 0 70%; /* 固定占70% */
}
</style>
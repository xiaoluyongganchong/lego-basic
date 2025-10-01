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
              <renderVue :Vnode="option.text" />
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
        renderVue
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
                            [eventName]: (e:any) => { context.emit('change', { key, value: alterTransForm ? alterTransForm(e) : e}) }
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
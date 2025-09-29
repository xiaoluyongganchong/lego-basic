<template>
  <div 
    class="props-table" 
  >
    <div 
      v-for="(value,key) in finalProps"
      :key="key"
      class="prop-item"
    >
      <component
        :is="value?.component"
        v-if="value"
        :value="value.value"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { reduce } from 'lodash-es'
import { mapPropsToForm,PropsToForms } from '../propsMap'
import { TextComponentProps } from '../defaultProps'
export default defineComponent({
    name: 'PropsTable',
    props: {
        props: {
            type: Object as PropType<TextComponentProps>,
            required:true
        }
    },
    setup(props) {
        const finalProps = computed(() => {
            return reduce(props.props, (result,value, key) => {
                const newKey = key as keyof TextComponentProps
                const item = mapPropsToForm[newKey]
                if (item) {
                    item.value = String(value)
                    result[newKey] = item
                }
                return result
            },{} as PropsToForms)
        })
        return {
            finalProps
        }
    }
})
</script>
<style>

</style>
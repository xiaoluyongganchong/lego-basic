<template>
  <component
    :is="tag"
    :style="styleProps"
    class="l-text-component"
    @click="clickUrl"
  >
    {{ text }}
  </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { transformtoComponentProps, textDefaultProps, textStylePropsName } from '../defaultProps'
import  useComponentCommon  from '../hooks/useComponentCommon'

const defaultProps = transformtoComponentProps(textDefaultProps)
export default defineComponent({
    name: 'LText',
    props: {
        ...defaultProps,
        tag: {
            type: String,
            default:'div'
        }
    },
    setup(props) {
        const { styleProps, clickUrl } = useComponentCommon(props, textStylePropsName)
        return {
            styleProps,
            clickUrl
        }
    }
})
</script>
<style scoped>
.l-text-component{
  font-size: 16px;
  position:relative !important;
}
</style>
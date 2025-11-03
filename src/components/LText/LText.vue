<template>
  <component
    :is="computedTag"
    :style="styleProps"
    class="l-text-component"
    @click="clickUrl"
  >
    {{ text }}
    <slot />
  </component>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
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
        const computedTag = computed(() => {
            if (props.actionType === 'url' && props.tag === 'div') {
                return 'h2'
            }
            return props.tag
        })
        return {
            styleProps,
            clickUrl,
            computedTag
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
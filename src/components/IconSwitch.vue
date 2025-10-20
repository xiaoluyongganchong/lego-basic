<template>
  <div id="components-a-tooltip-demo-color">
    <div class="button-wrapper">
      <a-tooltip
        v-for="item in icons"
        :key="item"
        :title="item.title"
        :arrow="true"
        arrow-point-at-center
      >
        <a-button 
          class="button"
          shape="circle"
          
          @click="onChange(item.icon)"
        >
          {{ item.icon }}
        </a-button>
      </a-tooltip>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
type IconItem = {
  icon: string
  title: string
}

export default defineComponent({
    name: 'IconSwitach',
    props: {
        icons: {
            type: Array as PropType<IconItem[]>,
            default: () => [
                { icon: 'B', title: '加粗' },
                { icon: 'I', title: '斜体' },
                { icon: 'U', title: '下划线' }
            ],
            
        }
    },
    emits: ['change'],
    setup(props, {emit}) {
        const selectedIcon = ref<string>('')
        const onChange = (icon: string) => {
            selectedIcon.value = icon
            emit('change',icon)
        }
        return {
            onChange
        }
    }
})
</script>
<style scoped>
:deep(#components-a-tooltip-demo-color) .ant-btn {
  margin-right: 16 px;
  margin-bottom: 8px;
}
.button-wrapper {
  display: flex;
  flex-wrap: wrap; /* 自动换行 */
  gap: 12px;       /* 设置按钮间间距 */
}
</style>

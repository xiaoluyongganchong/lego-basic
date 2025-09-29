<template>
  <div class="componentList">
    <div
      v-for="(item,index) in list"
      :key="index"
      class="component-item"
      @click="onItemClick(item)"
    >
      <LText v-bind="item" />
    </div>
  </div>
</template>
<script lang="ts">
import LText from './LText.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'ComponentList',
    components: {
        LText
    },
    props: {
        list: {
            type:Array,
            required: true
        }
    },
    emits:['on-item-click'],
    setup(props, context) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const onItemClick = (data : any) => {
            context.emit('on-item-click',data)
        }
        return {
            onItemClick
        }
    }
})
</script>
<style>

</style>
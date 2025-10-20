<template>
  <div class="lego-color-picker">
    <!-- 大色块 -->
    <input
      type="color"
      :value="value"
      class="color-input"
      @input="onChange"
    >

    <!-- 历史颜色列表 -->
    <ul class="picked-color-list">
      <li
        v-for="(item,key) in colors"
        :key="key"
        :class="{ selected: item === value }"
      >
        <div
          v-if="item.startsWith('#')"
          :style="{ backgroundColor: item }"
          class="color-item"
          @click="() => onChangeItem(item)"
        />
        <div
          v-else
          class="color-item transparent-back"
          @click="() => onChangeItem('')"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

const defaultColors = [
    '#ffffff','#ff0000','#ff7f00','#ffff00','#00ff00',
    '#0000ff','#800080','#808080','#000000',''
]

export default defineComponent({
    name: 'ColorPicker',
    props: {
        value: {
            type: String,
            default: ''
        },
        colors: {
            type: Array as PropType<string[]>,
            default: () => defaultColors
        }
    },
    emits: ['change'],
    setup(props, { emit }) {
        const onChange = (event: Event) => {
            if (event.target instanceof HTMLInputElement) {
                emit('change', event.target.value)
            }
        }

        const onChangeItem = (color: string) => {
            emit('change', color)
        }

        return {
            onChange,
            onChangeItem
        }
    }
})
</script>

<style scoped>
.lego-color-picker {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

/* 大色块 */
.color-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  width: 100px;
  height: 50px;
  padding: 0;
  cursor: pointer;
  border-radius: 4px;
  background-color: transparent;
}
.color-input::-webkit-color-swatch-wrapper {
  padding: 0;
}
.color-input::-webkit-color-swatch {
  border: none;
  border-radius: 4px;
}

/* 小色块列表 */
.picked-color-list {
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(5, 24px);
  gap: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.picked-color-list li {
  width: 24px;
  height: 24px;
  cursor: pointer;
  box-sizing: border-box;
}
.picked-color-list li.selected {
  border: 1px solid #2e2626;
  border-radius: 4px;
}

/* 小色块内部 div 填充 li */
.color-item {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

/* 透明格子 */
.transparent-back {
  background: repeating-conic-gradient(#999 0% 25%, #fff 0% 50%) 50% / 12px 12px;
}
</style>

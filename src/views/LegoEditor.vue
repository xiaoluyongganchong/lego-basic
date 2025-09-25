<template>
  <a-layout style="height: 100vh;">
    <a-layout style="flex: 1;">
      <a-layout-sider
        width="400"
        style="background: yellow; display: flex; align-items: center; justify-content: center;" 
        theme="light"
      >
        组件列表
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item class="center">
            画布区域
          </a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ 
            background: '#fff', 
            padding: '24px', 
            margin:'0 auto', 
            minHeight: 'calc(100vh - 128px)',
            width: '80%',
          }"
        >
          <component
            :is="component.name"
            v-for="component in components"
            :key="component.id"
            v-bind="component.props"
          />
        </a-layout-content>
      </a-layout>
      <a-layout-sider
        width="400"
        style="background: purple; display: flex; align-items: center; justify-content: center;" 
        theme="light"
      >
        组件属性
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { useStore } from 'vuex'
import { computed,defineComponent } from 'vue'
import { GloabalProps } from '../store/index'
import LText from '../components/LText.vue'
export default defineComponent({
    name: 'LegoEditor',
    components: {
        LText
    },
    setup() {
        const store = useStore<GloabalProps>()
        const components = computed(() => store.state.editor.components)
        return {
            components
        }
    }
})
</script>
<style scoped>
.ant-layout {
  margin: 0 !important;
  padding: 0 !important;
}
::v-deep .center {
  text-align: center;
  width: 100%; /* 确保占满整个面包屑区域 */
}
.ant-layout-sider {
  margin-left: 0 !important;
  padding-left: 0 !important;
}
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>

<template>
  <a-layout style="height: 100vh;">
    <a-layout style="flex: 1;">
      <a-layout-sider
        width="400"
        style="background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center;"
        theme="light" 
      >
        组件列表
        <br><br>
        <div style="width: auto;">
          <ComponentList
            :list="defaultTextTemplates "
            @on-item-click="addItem"
          />
        </div>
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
          <EditorWrapper
            v-for="component in components"
            :id="component.id"
            :key="component.id"
            @set-active="setActive"
          >
            <component
              :is="component.name"
              v-bind="component.props"
            >
              <a-button
                type="primary"
                shape="circle"
                size="small"
                @click="removeItem(component.id)"
              >
                X
              </a-button>
            </component>
          </EditorWrapper>
        </a-layout-content>
      </a-layout>
      <a-layout-sider
        width="400"
        style="background: #fff; display: flex; align-items: center; justify-content: center;" 
        theme="light"
      >
        组件属性
        <PropsTable 
          v-if="currentElement && currentElement.props"
          :props="TextComponentProps"
        />
        <pre>{{ currentElement?.props }}</pre>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { useStore } from 'vuex'
import { computed,defineComponent } from 'vue'
import { GloabalProps } from '../store/index'
import LText from '../components/LText.vue'
import  PropsTable from '../components/PropsTable.vue'
import ComponentList from '../components/ComponentList.vue'
import { defaultTextTemplates } from '../defaultTemplates'
import EditorWrapper from '../components/EditorWrapper.vue'
import { ComponentsData } from '../store/editor'
import { TextComponentProps } from '../defaultProps'

export default defineComponent({
    name: 'LegoEditor',
    components: {
        ComponentList,
        LText,
        EditorWrapper,
        PropsTable
    },
    setup() {
        const store = useStore<GloabalProps>()
        const components = computed(() => store.state.editor.components)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const addItem = (props:any) => {
            store.commit('addComponent',props)
        }
        const removeItem = (id:string) => {
            store.commit('removeComponent',id)
        }
        const setActive = (id:string) => {
            store.commit('setActive',id)
        }
        const currentElement = computed<ComponentsData>(() => store.getters.getCurrentElement || null)
        const TextComponentProps = computed(()=>currentElement.value.props as TextComponentProps)
        return {
            components,
            addItem,
            defaultTextTemplates,
            removeItem,
            setActive,
            currentElement,
            TextComponentProps
        }
    }
})
</script>
<style scoped>
.component-list {
  display: inline-block;
}
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

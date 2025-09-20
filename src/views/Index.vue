<template>
  <div
    class="homepage-container"
  >
    <a-layout :style="{background: '#fff'}">
      <a-layout-header class="header">
        <div class="page-title">
          <router-link to="/">
            慕课乐高
          </router-link>
        </div>
      </a-layout-header>
      <a-layout-content class="home-layout">
        <router-view />
      </a-layout-content>
      <a-layout-footer>
        @慕课乐高 (imooc.com) 版权所有 | 秦ICP备238193719号
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { defineComponent} from 'vue'
export default defineComponent({
    name: 'App',
    setup() {
    }
})
</script>
<style scoped>
.page-title {
  color:#fff;
}
</style>

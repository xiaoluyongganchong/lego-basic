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
          <UserProfile :user="user" />
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
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex' 
import UserProfile from '../components/UserProfile.vue'
export default defineComponent({
    name: 'Index',
    components: {
        UserProfile
    },
    setup() {
        const store = useStore()
        const user = computed(()=>store.state.user)
        return {
            user
        }
    }
})
</script>
<style scoped>
.page-title {
  display:flex;
  color:#fff;
  justify-content: space-between; /* 将内容推到两边 */
  align-items: center; /* 垂直居中 */
}
.user-profile-component {
  margin-left: auto; /* 将组件推到最右边 */
}
</style>

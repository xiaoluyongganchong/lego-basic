<template>
  <div
    class="homepage-container"
  >
    <router-view />
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

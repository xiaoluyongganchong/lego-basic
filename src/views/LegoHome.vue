<template>
  <div class="homepage-container">
    <TemplateList :list="testData" />
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import TemplateList from '../components/TemplateList.vue'
const testData =[
    { id:1, src: '../src/assets/list(1).webp',title:'前端架构师直播海报' },
    { id: 2, src: '../src/assets/list(2).webp', title: '前端架构师直播海报' },
    { id: 3, src: '../src/assets/list(3).webp', title: '前端架构师直播海报' },
    { id: 4, src: '../src/assets/list(3).webp', title: '前端架构师直播海报' },
    { id: 5, src: '../src/assets/list(4).webp', title: '前端架构师直播海报' }  , 
    { id: 6, src: '../src/assets/list(3).webp', title: '前端架构师直播海报' }
]
const router = useRouter()
setTimeout(() => {
    router.push({name:'template',params:{id:1}})
},2000)
</script>
<style scoped>
.page-title {
  color:#fff;
}
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>

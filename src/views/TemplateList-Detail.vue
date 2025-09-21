<template>
  <a-layout>
    <a-layout-content :style="{ marginTop: '64px' }">
      <div
        :style="{ 
          background: '#fff', 
          padding: '50px', 
          minHeight: '380px',
          display: 'flex',      
          justifyContent: 'center',
          alignItems: 'center' 
        }"
      >
        <img
          :src="template?.coverImg"
          alt="示例图片"
          :style="{
            maxWidth: '100%', /* 最大宽度不超过容器 */
            maxHeight: '600px' /* 最大高度不超过容器 */
          }"
        >
        <div style=" padding: 30px">
          <a-card
            :bordered="false"
            style="width: 300px"
          >
            <template #title>
              <div class="card-title-container">
                <h3 class="main-title">
                  {{ template?.title }}
                </h3>
                <span class="sub-title">未命名作品</span>
              </div>
            </template>
            <div
              class="description-detail"
              style="display: flex; flex-direction: column; justify-content: center;"
            >
              <div class="center-decription">
                <div class="author-info">
                  <img
                    src="../assets/logo.png"
                    alt="作者头像"
                    class="author-avatar"
                  >
                  <p class="author-text">
                    该模板由 {{ template?.author }} 创作
                  </p>
                </div>
                <p style="margin-top: 10px;">
                  扫一扫，手机浏览
                </p>
                <a-space
                  direction="vertical"
                  text-align="center"
                >
                  <a-qrcode :value="text" />
                </a-space>
                <div
                  class="button"
                  style="display:flex; margin-top:15px;"
                >
                  <router-link to="/editor">
                    <a-button
                      type="primary"
                      style="margin-right:20px;"
                      shape="round"
                    >
                      使用模板
                    </a-button>
                  </router-link>
                  <a-button shape="round">
                    下载海报图片
                  </a-button>
                </div>
              </div>
            </div>
          </a-card>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { GloabalProps } from '../store/index'
const text = ref('https://www.antdv.com/');
const store = useStore<GloabalProps>()
const route = useRoute()
const currentId = route.params.id as string
const template = computed(() => store.getters.getTempalteId(parseInt(currentId)))
</script>
<style scoped>
.page-title {
  color:#fff;
}
.description-detail{
  display:flex;
  font-size: 12px;
}
.author-info {
  display: flex;       /* 启用Flex布局 */
  align-items: center; /* 垂直居中对齐 */
  gap: 8px;            /* 图片和文字之间的间距 */
  font-size: 12px;
}
.card-title-container {
  display: flex;
  flex-direction: column; /* 纵向排列标题和子标题 */
}
.card-title-container .sub-title {
   font-size: 12px;
    color:#757171;
}
/* 头像样式 */
.author-avatar {
  width: 20px;
  height: 20px;
  /* 确保图片底部与文字基线对齐 */
  vertical-align: middle;
}

/* 文字样式 */
.author-text {
  margin: 0; /* 清除默认margin */
  line-height: 1; /* 确保行高与图片高度匹配 */
}

.description-detail img{
  width: 20px;
  height: 20px;
}
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>

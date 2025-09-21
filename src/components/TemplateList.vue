<template>
  <div class="template-list-component">
    <a-row
      :gutter="[24,16]"
      class="list"
      justify="space-evenly"
    >
      <a-col
        v-for="(item,id) in list"
        :key="id"
        :span="6"
      >
        <router-link :to="{name:'template', params:{id:item.id}}">
          <a-card
            hoverable
            class="fixed-card"
          >
            <template #cover>
              <img
                alt="example"
                :src="item.coverImg"
                class="coverImg"
              >
              <a-button
                type="primary"
                class="hover-button"
                size="primary"
              >
                使用该模板创建
              </a-button>
            </template>
            <a-card-meta :title="item.title">
              <template #description>
                <div class="description-detail">
                  <span>作者: {{ item.author }}</span>
                  <span>{{ item.copieCount }}</span>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TemplateProps } from '../store/index'
export default defineComponent({
    name: 'TemplateList',
    props: {
        list: {
            type: Array as PropType<TemplateProps[]>,
            required:true
        }
    },
    setup() {
    }
    
    
    
})
</script>
<style lang="less">
.template-list-component{
  padding:30px 30px 30px 100px;
  .fixed-card {
  width: 100%;
  max-width: 340px;
  height: 430px;
  /* 确保卡片覆盖层能正确显示 */
  overflow: hidden;
  position: relative;
  padding-bottom:50px;

}
.ant-card-cover {
  position: relative;
  height: 350px; /* 固定图片容器高度 */
  width: 100%; /* 固定图片容器宽度 */
  margin: 0;
  padding: 0;
}
.coverImg {
  max-width: 100%; /* 限制图片最大宽度 */
  max-height: 100%; /* 限制图片最大高度 */
  object-fit: cover;
  /* 过渡效果用于遮罩的平滑显示 */
  transition: all 0.3s ease;
}

/* 悬停时显示黑色遮罩 */
.ant-card-cover:hover .coverImg {
  filter: brightness(0.5);
}

.hover-button {
  position: absolute;
   width: auto; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 16px;
  left: 50%;
  max-width: 80%; 
padding: 0 20px;
  transform: translateX(-50%);
  /* 初始状态隐藏按钮 */
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
}

/* 悬停时显示按钮 */
.ant-card-cover:hover .hover-button {
  opacity: 1;
}
.description-detail {
  display: flex;
  justify-content: space-between; /* 关键属性：两端对齐 */
  margin-top: 8px;
  width: 100%; /* 确保占满卡片宽度 */
}
.list.ant-row {
  justify-content: flex-start;
}

/* 清除最后一行可能出现的额外间距 */
.list.ant-row > .ant-col:last-child {
  padding-right: 5px !important; /* 与其他列保持一致 */
}

/* 确保所有列间距统一 */
.list.ant-row > .ant-col {
  padding-left: 5px !important;
  padding-right: 5px !important;
}
}
</style>
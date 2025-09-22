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
        <router-link :to="{ name: 'template', params: { id: item.id } }">
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
import { TemplateProps } from '../store/templates'
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
  padding:30px 30px 50px 100px;
  .fixed-card {
    width: 100%;
    max-width: 340px;
    height: 430px;
    overflow: hidden;
    position: relative;
    margin-bottom:20px;
  }
  .ant-card-cover {
    position: relative;
    height: 350px;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .coverImg {
    max-width: 100%;
    height: 340px;
    object-fit: cover;
    transition: all 0.3s ease;
  }
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
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 10;
  }
  .ant-card-cover:hover .hover-button {
    opacity: 1;
  }
  .description-detail {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    width: 100%;
  }
  .list.ant-row {
    justify-content: flex-start;
  }
  .list.ant-row > .ant-col:last-child {
    padding-right: 5px !important;
  }
  .list.ant-row > .ant-col {
    padding-left: 5px !important;
    padding-right: 5px !important;
  }
}
</style>

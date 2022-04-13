<template>
  <div class="parent-component">
    <h1>使用 emit 让子组件触发事件，通过回调给父组件传值</h1>
    <emit-sub-options @showMsg="handleShowMsg"></emit-sub-options>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { message } from 'ant-design-vue'
import 'ant-design-vue/es/message/style/css'

import EmitSubOptions from './EmitSubOptions.vue'

export default defineComponent({
  components: {
    EmitSubOptions
  },
  methods: {
    handleShowMsg(msg: string) {
      message.info(
        `子组件通过$emit触发事件被父组件接收，这是通过回调传过来的参数 -- ${msg}`
      )
    }
  }
})
</script>

<style scoped lang="scss">
.parent-component {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #456990;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
}
</style>

<template>
  <div>
    <h1 @click="handleClick">
      这是子组件的内容，单击后会 emit 触发事件给父组件传值
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['showMsg'],
  methods: {
    handleClick() {
      this.$emit('showMsg', '这条消息来自子组件')
    }
  }
})
</script>

<style scoped></style>

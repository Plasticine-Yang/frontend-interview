<template>
  <div>
    <h1 @click="handleClick">
      这是子组件的内容，单击后会 emit 触发事件给父组件传值
    </h1>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['showMsg'])

function handleClick() {
  emit('showMsg', '这条消息来自子组件')
}
</script>

<style scoped></style>

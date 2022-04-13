<template>
  <div>
    {{ foo }}
    <br />
    {{ postTitle }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  foo: String,
  postTitle: String // 驼峰命名的 prop 在使用的时候要用 短横线分隔命名
})
</script>

<style scoped></style>

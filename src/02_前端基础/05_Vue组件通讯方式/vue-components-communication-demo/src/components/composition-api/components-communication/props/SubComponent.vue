<template>
  <div>
    {{ foo }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  foo: String
})
</script>

<style scoped></style>

<template>
  <div>
    <span>{{ foo }}</span>
    <br />
    <span>{{ postTitle }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    foo: String,
    postTitle: String
  }
})
</script>

<style scoped lang="scss"></style>

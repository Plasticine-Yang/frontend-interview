<template>
  <div>
    <sub-component :foo="foo"></sub-component>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import SubComponent from './SubComponent.vue'

const foo = ref<string>('foo')
</script>

<style scoped></style>

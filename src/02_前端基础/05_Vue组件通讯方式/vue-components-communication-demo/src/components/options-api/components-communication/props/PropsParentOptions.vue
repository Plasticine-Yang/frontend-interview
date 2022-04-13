<template>
  <div class="parent-component">
    <h1>使用Props从父组件向子组件传值</h1>
    <h2>下面是父组件传给子组件的值</h2>
    <props-sub-options :foo="foo" :post-title="postTitle"></props-sub-options>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PropsSubOptions from './PropsSubOptions.vue'

export default defineComponent({
  components: {
    PropsSubOptions
  },
  data() {
    return {
      foo: 'foo',
      postTitle: 'Hello Options API'
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

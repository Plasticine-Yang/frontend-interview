<template>
  <div class="parent-component">
    <h1>使用Props从父组件向子组件传值</h1>
    <h2>下面是父组件传给子组件的值</h2>
    <sub-component :foo="foo" :post-title="postTitle"></sub-component>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import SubComponent from './SubComponent.vue'

export default defineComponent({
  components: {
    SubComponent
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

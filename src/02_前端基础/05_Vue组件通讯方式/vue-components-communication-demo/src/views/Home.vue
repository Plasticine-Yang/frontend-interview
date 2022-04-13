<template>
  <a-layout class="home" style="min-height: 100vh">
    <!-- sider -->
    <a-layout-sider v-model:collapsed="collapsed" collapsible width="300">
      <div class="logo" @click="goWelcome">
        <img src="@/assets/logo.png" alt="logo" />
        <span v-show="!collapsed">Vue Learning</span>
      </div>
      <a-menu
        v-model:selectedKeys="current"
        @click="handleMenuItemClick"
        theme="dark"
        mode="inline"
      >
        <!-- Options Demo -->
        <a-sub-menu key="Options API Demo">
          <template #icon>
            <rocket-filled />
          </template>
          <template #title> Options API Demo </template>
          <!-- Options API 组件通讯 -->
          <a-sub-menu key="Options API 组件通讯">
            <template #title> 组件通讯 </template>
            <a-menu-item key="optionsProps"> props父传子 </a-menu-item>
            <a-menu-item key="optionsEmit"> emit子传父 </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <!-- Composition Demo -->
        <a-sub-menu key="Composition API Demo">
          <template #icon>
            <robot-filled />
          </template>
          <template #title> Composition API Demo </template>
          <!-- Composition API 组件通讯 -->
          <a-sub-menu>
            <template #title>组件通讯</template>
            <a-menu-item key="compositionProps">props父传子</a-menu-item>
            <a-menu-item key="compositionEmit">emit子传父</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <!-- main -->
    <a-layout style="padding: 0 24px 24px" class="site-layout-bg">
      <!-- 面包屑 -->
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          minHeight: '80%'
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
// vue
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

// ant-design-vue
import { MenuInfo } from 'ant-design-vue/lib/menu/src/interface'
import { RocketFilled, RobotFilled } from '@ant-design/icons-vue'

const route = useRoute()
const router = useRouter()

// data

// layout data
const collapsed = ref<boolean>(false)

// menu data
const current = ref<string[]>(['options'])

// methods
// 菜单跳转
function handleMenuItemClick({ key }: MenuInfo) {
  router.push({
    name: key.toString()
  })
}

// 图标回到欢迎页
function goWelcome() {
  router.push({
    name: '欢迎'
  })
  current.value = []
}
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  cursor: pointer;

  img {
    width: 3rem;
  }

  span {
    color: white;
    font-size: 1.8rem;
    font-weight: 700;
  }
}
.site-layout-bg {
  background-color: #f0f2f5;
}
</style>

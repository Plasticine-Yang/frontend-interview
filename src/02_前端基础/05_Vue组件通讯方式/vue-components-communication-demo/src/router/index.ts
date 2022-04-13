import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: '主页',
    path: '/home',
    component: () => import('@/views/Home.vue'),
    redirect: '/welcome',
    children: [
      {
        name: '欢迎',
        path: '/welcome',
        component: () => import('@/components/Welcome.vue')
      },
      {
        name: 'Options API Demo',
        path: '/options',
        component: () => import('@/views/OptionsDemo.vue'),
        children: [
          {
            name: 'Options API 组件通讯',
            path: '/options/components-communication',
            component: () =>
              import(
                '@/components/options-api/components-communication/ComponentsCommunication.vue'
              ),
            children: [
              {
                name: 'optionsProps',
                path: '/options/components-communication/props',
                component: () =>
                  import(
                    '@/components/options-api/components-communication/props/OptionsPropsDemo.vue'
                  )
              }
            ]
          }
        ]
      },
      {
        name: 'Composition API Demo',
        path: '/composition',
        component: () => import('@/views/CompositionDemo.vue'),
        children: [
          {
            name: 'Composition API 组件通讯',
            path: '/composition/components-communication',
            component: () =>
              import(
                '@/components/composition-api/components-communication/ComponentsCommunication.vue'
              ),
            children: [
              {
                name: 'compositionProps',
                path: '/composition/components-communication/props',
                component: () =>
                  import(
                    '@/components/composition-api/components-communication/props/CompositionPropsDemo.vue'
                  )
              }
            ]
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router

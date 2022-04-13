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
      // Options API Demo
      {
        name: 'Options API Demo',
        path: '/options',
        component: () => import('@/views/OptionsDemo.vue'),
        children: [
          // 组件通讯
          {
            name: 'Options API 组件通讯',
            path: '/options/components-communication',
            component: () =>
              import(
                '@/components/options-api/components-communication/OptionsComponentsCommunication.vue'
              ),
            children: [
              // props
              {
                name: 'optionsProps',
                path: '/options/components-communication/props',
                component: () =>
                  import(
                    '@/components/options-api/components-communication/props/PropsParentOptions.vue'
                  )
              },
              // emit
              {
                name: 'optionsEmit',
                path: '/options/components-communication/emit',
                component: () =>
                  import(
                    '@/components/options-api/components-communication/emit/EmitParentOptions.vue'
                  )
              }
            ]
          }
        ]
      },
      // Composition API Demo
      {
        name: 'Composition API Demo',
        path: '/composition',
        component: () => import('@/views/CompositionDemo.vue'),
        children: [
          // 组件通讯
          {
            name: 'Composition API 组件通讯',
            path: '/composition/components-communication',
            component: () =>
              import(
                '@/components/composition-api/components-communication/ComponentsCommunication.vue'
              ),
            children: [
              // props
              {
                name: 'compositionProps',
                path: '/composition/components-communication/props',
                component: () =>
                  import(
                    '@/components/composition-api/components-communication/props/PropsParentComposition.vue'
                  )
              },
              {
                name: 'compositionEmit',
                path: '/composition/components-communication/emit',
                component: () =>
                  import(
                    '@/components/composition-api/components-communication/emit/EmitParentComposition.vue'
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

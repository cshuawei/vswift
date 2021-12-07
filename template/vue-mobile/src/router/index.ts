import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { Layout } from '@/components'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
    component: Layout,
    children: [
      {
        name: 'Login',
        path: '/login',
        meta: {
          title: '登录'
        },
        component: () => import('@/views/Login/index.vue')
      },
      {
        name: '404',
        path: '/404',
        meta: {
          title: '404'
        },
        component: () => import('@/views/Others/404.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

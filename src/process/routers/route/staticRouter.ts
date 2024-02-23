import type { RouteRecordRaw } from 'vue-router'

export const staticRouter: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/pages/error/404.vue'),
    meta: {
      title: '404',
    },
  },
]

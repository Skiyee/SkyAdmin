import type { RouteRecordRaw } from 'vue-router'

export function genStaticRouter(): RouteRecordRaw[] {
  return [
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
        label: '登录',
      },
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('@/pages/error/404.vue'),
    },
  ]
}

import type { Router } from 'vue-router'

import { whiteList } from '../config'
import { useStore } from '@/process'

export function createLoginGuard(router: Router) {
  router.beforeEach((to, from) => {
    const { userStore } = useStore()
    const isLogin = Boolean(userStore.userToken)

    if (!isLogin) {
      if (whiteList.includes(to.path))
        return true

      return { path: '/login', query: { ...to.query, redirect: to.path } }
    }

    if (to.path === '/login')
      return { path: from.path, replace: true }

    const routes = router.getRoutes()
    if (routes.some(route => route.name === to.name))
      return true

    return { path: '/404', query: { path: to.fullPath }, replace: true }
  })
}

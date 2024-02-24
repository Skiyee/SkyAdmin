import type { Router } from 'vue-router'

import { whiteList } from '../config'
import { useStore } from '@/process'

export function createAuthGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    const { userStore } = useStore()

    const isLogin = Boolean(userStore.userToken)

    if (to.path === '/login') {
      if (isLogin)
        return next(from.fullPath)

      return next()
    }

    if (!isLogin)
      return next({ path: '/login', replace: true })

    const routes = router.getRoutes()
    if (routes.some(route => route.name === to.name))
      return next()
  })
}

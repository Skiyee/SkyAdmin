import type { Router } from 'vue-router'

export default (router: Router) => {
  router.beforeEach((to, form, next) => {
    next()
  })
}

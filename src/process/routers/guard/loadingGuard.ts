import type { Router } from 'vue-router'

export function createLoadingGuard(router: Router) {
  router.beforeEach(() => {
    NLoadingBar.start()
  })

  router.afterEach(() => {
    setTimeout(() => {
      NLoadingBar.finish()
    }, 200)
  })

  router.onError(() => {
    NLoadingBar.error()
  })
}

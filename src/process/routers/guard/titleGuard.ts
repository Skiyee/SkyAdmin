import type { Router } from 'vue-router'

const appTitle = import.meta.env.VITE_APP_TITLE

export function createTitleGuard(router: Router) {
  router.afterEach((to) => {
    const pageTitle = to.meta?.label

    useTitle(pageTitle ? `${pageTitle} | ${appTitle}` : appTitle)
  })
}

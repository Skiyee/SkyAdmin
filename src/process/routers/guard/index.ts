import type { Router } from 'vue-router'

import { createLoginGuard } from './loginGuard'
import { createLoadingGuard } from './loadingGuard'
import { createTitleGuard } from './titleGuard'

export function createRouterGuard(router: Router) {
  createTitleGuard(router)
  createLoadingGuard(router)
  createLoginGuard(router)
}

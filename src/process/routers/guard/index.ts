import type { Router } from 'vue-router'

import { createAuthGuard } from './authGuard'

export function createRouterGuard(router: Router) {
  createAuthGuard(router)
}

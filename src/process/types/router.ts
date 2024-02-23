import type { RouteRecordRaw, Router } from 'vue-router'

export interface extendRouter extends Router {
  append: (data: any) => void
  find: (path: string) => RouteRecordRaw | undefined
  register: (path: string) => void
}

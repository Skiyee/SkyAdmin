import type { App } from 'vue'

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import { baseUrl, mode } from './config'
import { createRouterGuard } from './guard'
import { genStaticRouter } from './route/staticRouter'

// Router创建
const router = createRouter({
  history: mode === 'HASH' ? createWebHashHistory(baseUrl) : createWebHistory(baseUrl),
  routes: genStaticRouter(),
})

let lock = false

router.onError((err: Error) => {
  if (!lock) {
    lock = true

    window.$message.error(`页面存在错误：${err.message}`)
    console.error(err)

    setTimeout(() => {
      lock = false
    }, 0)
  }
})

// Router启用
export function setupRouter(app: App) {
  createRouterGuard(router)
  app.use(router)
}

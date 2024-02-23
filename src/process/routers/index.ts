import type { App } from 'vue'
import type { Router } from 'vue-router'

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { baseUrl, mode } from './config'
import { genDynamicRouter } from './route/dynamicRouter'
import { staticRouter } from './route/staticRouter'

// Router创建
const router = createRouter({
  history: mode === 'HASH' ? createWebHashHistory(baseUrl) : createWebHistory(baseUrl),
  routes: [...staticRouter],
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

// Router初始化
function initRouter(router: Router) {
  genDynamicRouter()
}

// Router启用
export function setupRouter(app: App) {
  app.use(router)
  initRouter(router)
}

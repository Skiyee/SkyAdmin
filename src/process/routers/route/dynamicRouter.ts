import type { RouteRecordRaw } from 'vue-router'

import { useHooks, useStore } from '@/process'

const files = import.meta.glob(['/src/modules/*/views/**/*', '!**/components'])

export async function genDynamicRouter() {
  const { router } = useHooks()
  const { authStore } = useStore()

  authStore.getAuthMenuList()
  authStore.getAuthButtonList()

  if (!authStore.authMenuList.length) {
    window.$message.warning('当前账号无菜单权限，请联系管理员添加！')

    return Promise.reject(new Error('No Permission'))
  }

  authStore.authMenuList.forEach((item) => {
    const view = item.view
    if (view) {
      if (view.includes('http')) {
        item.meta.iframeUrl = view
        item.component = () => import('@/pages/iframe/index.vue')
      }
      else {
        item.component = () => files[`/src/${view}`]
      }
    }
    else {
      item.redirect = '/404'
    }

    /**
     *     if (item.meta.isPage)
      router.addRoute(item as unknown as RouteRecordRaw)
    else
     */

    console.log(router)

    router.addRoute('index', item as unknown as RouteRecordRaw)
  })
}

import type { App } from 'vue'
import { useAuthStore } from './modules/auth'
import { useUserStore } from './modules/user'

// Store安装
export function setupStore(app: App) {
  const pinia = createPinia()
  app.use(pinia)
}

// Store启用
export function useStore() {
  return {
    authStore: useAuthStore(),
    userStore: useUserStore(),
  }
}

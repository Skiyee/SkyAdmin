import type { App } from 'vue'
import { useAuthStore } from './modules/auth'

// Store安装
export function setupStore(app: App) {
  const pinia = createPinia()
  app.use(pinia)
}

// Store启用
export function useStore() {
  return {
    authStore: useAuthStore(),
  }
}

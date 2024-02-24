import type { App } from 'vue'

import { setupRouter, setupStore, setupTool } from '@/process'

export function setupProcess(app: App) {
  setupTool()
  setupStore(app)
  setupRouter(app)
}

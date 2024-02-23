import type { App } from 'vue'

import { setupRouter, setupStore, setupTool, useStore } from '@/process'

function initProcess() {
  const { menuStore } = useStore()
}

export function setupProcess(app: App) {
  setupTool()
  setupStore(app)
  setupRouter(app)

  initProcess()
}

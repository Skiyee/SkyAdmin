import { createDiscreteApi } from 'naive-ui'

export function setupTool() {
  const { message, loadingBar, notification } = createDiscreteApi(['message', 'loadingBar', 'notification'])

  window.NMessage = message
  window.NLoadingBar = loadingBar
  window.NNotification = notification
}

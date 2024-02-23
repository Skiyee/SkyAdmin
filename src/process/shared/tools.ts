import { createDiscreteApi } from 'naive-ui'

export function setupTool() {
  const { message } = createDiscreteApi(['message'])

  window.$message = message
}

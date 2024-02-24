const files = import.meta.glob(['/src/modules/*/views/**/*', '!**/components'])

export async function genDynamicRouter() {
  // 1. 获取授权的菜单
  // 2. 菜单生成路由表
  // 3. 储存路由表和菜单栏
  // 4. 返回路由表
}

import type { RouteComponent } from 'vue-router'

interface MenuMeta {
  label: string
  icon: string
  show: boolean
  isCache?: boolean
}

export enum MenuType {
  MENU,
  DIR,
  BTN,
}

export interface MenuItem extends MenuMeta {
  // 路由类型
  name: string
  path?: string
  component?: RouteComponent
  redirect?: string
  meta?: MenuMeta
  // 定义类型
  parentId?: string
  id: string
  view?: string
  type: MenuType
  sort: number
  // 拓展类型
  children?: MenuItem[]
}

export type MenuList = MenuItem[]

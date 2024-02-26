import type { RouteComponent, RouteRecordRaw } from 'vue-router'

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
  id: string
  // 父级菜单ID
  parentId?: string
  // 路由唯一标识符
  name: string
  // 路由访问路径
  path?: string
  // 视图位置: 有可能组件或者外链
  view?: string
  // 菜单类型
  type: MenuType
  // 菜单排序
  sort: number
  // 菜单子项
  children?: MenuItem[]
  [key: string]: any
}

export type MenuList = MenuItem[]

export interface MenuRouteItem extends MenuItem {
  // 路由组件
  component?: RouteComponent
  // 路由子项
  children: MenuRouteItem[]
  // 拓展类型: 存放渲染所需Props
  meta?: MenuMeta
  // 重定向
  redirect?: string
}

export type MenuRouteList = MenuRouteItem[]

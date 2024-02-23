import { isUndefined, orderBy, pick } from 'lodash-es'

import type { MenuItem, MenuList } from '@/process'

function toPath(path?: string) {
  if (!path)
    return ''

  return path[0] === '/' ? path : `/${path}`
}

function toTree(list: MenuList) {
  const map = new Map<string, MenuItem>()
  const tree: MenuList = []

  orderBy(list, 'sort')
    .map((item) => {
      map.set(item.id, item)
      return item
    })
    .forEach((item) => {
      const parentItem = map.get(item.parentId || '')

      if (!isUndefined(parentItem)) {
        if (!parentItem.children)
          parentItem.children = []

        parentItem.children.push(item)
      }
      else {
        tree.push(item)
      }
    })

  return tree
}

export function formatMenu(menuList: MenuList) {
  // 1. 设定默认配置
  const arrayMenu = menuList
    .filter(item => item.type !== 2)
    .map((item) => {
      item.path = toPath(item.path)
      item.meta = pick(item, ['label', 'show', 'icon', 'isCache'])

      return item
    })

  // 2. 数组转换树形
  return toTree(arrayMenu)
}

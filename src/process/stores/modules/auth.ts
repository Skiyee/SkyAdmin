import type { MenuList } from '@/process'

const menuData = {
  code: 1000,
  message: 'success',
  data: [
    {
      id: '1',
      createTime: '2024-01-25 16:24:54',
      updateTime: '2024-01-25 16:24:54',
      type: 0,
      name: 'Sys',
      path: '/sys',
      sort: 2,
      label: '系统管理',
      icon: 'i-fe:activity',
      show: true,
      isCache: true,
    },
    {
      id: '2',
      createTime: '2024-01-25 16:24:54',
      updateTime: '2024-01-25 16:24:54',
      type: 0,
      name: 'SysAuth',
      sort: 1,
      label: '权限管理',
      icon: 'i-fe:activity',
      show: true,
      isCache: false,
      parentId: '1',
    },
    {
      id: '3',
      createTime: '2024-01-25 16:24:54',
      updateTime: '2024-01-25 16:24:54',
      type: 1,
      name: 'SysAuthMenu',
      path: '/sys/menu',
      sort: 2,
      label: '菜单列表',
      icon: 'fe:app-menu',
      show: true,
      isCache: true,
      parentId: '2',
      view: 'modules/base/views/menu/index.vue',
    },
    {
      id: '4',
      createTime: '2024-01-25 16:24:54',
      updateTime: '2024-01-25 16:24:54',
      type: 2,
      name: 'SysAuthMenuAdd',
      sort: 1,
      show: true,
      isCache: false,
      parentId: '3',
      auth: 'base:sys:menu:add',
    },
    {
      id: '5',
      createTime: '2024-01-25 16:24:54',
      updateTime: '2024-01-25 16:24:54',
      type: 2,
      name: 'SysAuthMenuDelete',
      sort: 2,
      icon: null,
      show: true,
      isCache: false,
      parentId: '3',
      auth: 'base:sys:menu:delete',
    },
    {
      id: '6',
      createTime: '2024-01-25 16:24:54',
      updateTime: '2024-01-25 16:24:54',
      type: 2,
      name: 'SysAuthMenuGet',
      sort: 4,
      icon: null,
      show: true,
      isCache: false,
      parentId: '3',
      auth: 'base:sys:menu:page,base:sys:menu:list,base:sys:menu:info',
    },
    {
      id: '8',
      createTime: '2024-01-25 16:24:54',
      updateTime: '2024-01-25 16:24:54',
      type: 2,
      name: 'SysAuthMenuEdit',
      sort: 0,
      show: true,
      isCache: false,
      parentId: '3',
      auth: 'base:sys:menu:info,base:sys:menu:update',
    },
  ],
}

const buttonData = {
  code: 1000,
  message: 'success',
  data: [
    'base:sys:menu:add',
    'base:sys:menu:delete',
    'base:sys:menu:page',
    'base:sys:menu:list',
    'base:sys:menu:info',
    'base:sys:menu:update',
  ],
}

interface State {
  authMenuList: MenuList
  authButtonList: string[]
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): State => ({
    authMenuList: [],
    authButtonList: [],
  }),
  actions: {
    getAuthMenuList() {
      // const { data } = menuData
      // const menuList = formatMenu(menuData)
      // this.authMenuList = menuList
    },
    getAuthButtonList() {
      const { data } = buttonData
      this.authButtonList = data
    },
  },
})

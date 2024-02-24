interface State {
  userToken: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): State => ({
    userToken: '',
  }),
})

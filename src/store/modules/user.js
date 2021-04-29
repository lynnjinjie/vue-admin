import { getToken, setToken } from '@/utils/auth.js'
const state = {
  token: getToken(),
  name: '',
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}

const actions = {
  login({ commit }, userInfo) {
    const { username } = userInfo
    commit('SET_TOKEN', username)
    setToken(username)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

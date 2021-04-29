import Cookies from 'js-cookie'
const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus')
      ? !!+Cookies.get('sidebarStatus')
      : true,
  },
  lang: 'en',
}

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  SET_LANGUAGE: (state, lang) => {
    state.lang = lang
    Cookies.set('lang', lang)
  },
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  setLanguage({ commit }, lang) {
    commit('SET_LANGUAGE', lang)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

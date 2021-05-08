import Cookies from 'js-cookie'
import { getLanguage } from '@/lang/index'
const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus')
      ? !!+Cookies.get('sidebarStatus')
      : true,
  },
  language: getLanguage(),
  loadedLanguages: ['zh'],
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
    state.language = lang
    Cookies.set('language', lang)
    if (!state.loadedLanguages.includes(lang)) {
      state.loadedLanguages.push(lang)
    }
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

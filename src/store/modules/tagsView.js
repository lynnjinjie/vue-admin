const state = {
  visitedViews: [],
}

const mutations = {
  ADD_VISITED_VIEW: (state, view) => {
    if (state.visitedViews.some((v) => v.path === view.path)) return
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name',
      })
    )
  },
  DEL_VISITED_VIEW: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
  },
  DEL_OTHERS_VISITED_VIEW: (state, view) => {
    state.visitedViews = state.visitedViews.filter((v) => v.path === view.path)
  },
  DEL_ALL_VIEW: (state) => {
    state.visitedViews = []
  },
}

const actions = {
  addView({ dispatch }, view) {
    dispatch('addVisitedView', view)
  },
  addVisitedView({ commit }, view) {
    commit('ADD_VISITED_VIEW', view)
  },
  delView({ dispatch, state }, view) {
    return new Promise((resolve) => {
      dispatch('delVisitedView', view)
      resolve({
        visitedViews: [...state.visitedViews],
      })
    })
  },
  delVisitedView({ commit, state }, view) {
    return new Promise((resolve) => {
      commit('DEL_VISITED_VIEW', view)
      resolve([...state.visitedViews])
    })
  },
  delOthersViews({ dispatch, state }, view) {
    return new Promise((resolve) => {
      dispatch('delOthersVisitedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
      })
    })
  },
  delOthersVisitedViews({ commit, state }, view) {
    return new Promise((resolve) => {
      commit('DEL_OTHERS_VISITED_VIEW', view)
      resolve({
        visitedViews: [...state.visitedViews],
      })
    })
  },
  delAllViews({ commit }) {
    return new Promise((resolve) => {
      commit('DEL_ALL_VIEW')
      resolve({
        visitedViews: [...state.visitedViews],
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

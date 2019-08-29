
const state = () => ({
  isPhone: false
})

const mutations = {
  PCORPHONE: (state, bool) => {
    state.isPhone = bool
  }
}

const actions = {
  pcorPhone: ({ commit }, bool) => {
    commit('PCORPHONE', bool)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


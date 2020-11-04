import { createStore } from 'vuex'
import * as types from './mutation-types'

export default createStore({
  state: {
    events: {},
    isLoggedIn: false,
    users: {}
  },
  mutations: {
    [types.RESET_STATE] (state) {
      state.events = {}
      state.isLoggedIn = false
      state.users = {}
    },
    [types.SET_LOGGEDIN] (state, status) {
      state.isLoggedIn = status
    },
    [types.CREATE_EVENT] (state, { event }) {
      Object.assign(state.events, event)
    }
  },
  actions: {
    resetState ({ commit }) {
      commit(types.RESET_STATE)
    },
    setLoginStatus ({ commit }, status) {
      commit(types.SET_LOGGEDIN, status)
    },
    editEvents ({ commit }, { event }) {
      commit(types.CREATE_EVENT, event)
    }
  },
  getters: {
    getEvents: (state) => {
      return state.events
    },
    getIsLoggedIn: (state) => {
      return state.isLoggedIn
    }
  }
})

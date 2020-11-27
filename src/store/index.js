import { createStore } from 'vuex'
import * as types from './mutation-types'

export default createStore({
  state: {
    types: {
      events: [
        {}
      ],
      users:
        [
          {
            firstName: 'Adam',
            lastName: 'Holland',
            gender: 'male',
            age: '22',
            weight: '180',
            height: '6.1',
            address: 'ballinadee',
            email: 'addamholland12398@gmail.com',
            phoneNumber: '08584012345',
            status: 'student', // student, staff, neither
            membership: 'oneYear', // one year, open ended
            username: 'test',
            password: 'test'
          },
          {
            firstName: 'Tash',
            lastName: 'Hayes',
            gender: 'female',
            age: '22',
            weight: '180',
            height: '5.8',
            address: 'kinsale',
            email: 'qwerty@gmail.com',
            phoneNumber: '08584012345',
            status: 'student', // student, staff, neither
            membership: 'oneYear', // one year, open ended
            username: 'test2',
            password: 'test2'
          },
          {
            firstName: 'Tash2',
            lastName: 'Hayes2',
            gender: 'female2',
            age: '222',
            weight: '1802',
            height: '5.82',
            address: 'kinsale',
            email: 'qwerty@gmail.com',
            phoneNumber: '08584012345',
            status: 'student', // student, staff, neither
            membership: 'oneYear', // one year, open ended
            username: 'test22',
            password: 'test22'
          }
        ]
    },
    isLoggedIn: ''
  },
  mutations: {
    [types.RESET_STATE] (store) {
      store.isLoggedIn = ''
    },
    [types.SET_ISLOGGEDIN] (store, status) {
      store.isLoggedIn = status
    },
    [types.CREATE_EVENT] (store, event) {
      store.types.events.push(event)
    },
    [types.CREATE_USER] (store, newUser) {
      store.types.users.push(newUser)
    },
    [types.UPDATE_USER] (store, { details, index }) {
      store.types.users[index] = details
    }
  },
  actions: {
    resetState ({ commit }) {
      commit(types.RESET_STATE)
    },
    logout ({ commit }, username) {
      commit(types.SET_ISLOGGEDIN, username)
    },
    editEvents ({ commit }, { event }) {
      commit(types.CREATE_EVENT, event)
    },
    updateUser ({ commit, getters }, { details, usernameUpdated }) {
      const userIndex = getters.getUsers({ includeCurrentUser: true }).map(
        e => e.username
      ).indexOf(getters.getLoggedInUserUsername)

      if (userIndex >= 0) {
        commit(types.UPDATE_USER, { details, index: userIndex })
        if (usernameUpdated) {
          commit(types.SET_ISLOGGEDIN, details.username)
        }
      }
    },
    login ({ commit, getters }, { username, password }) {
      const users = getters.getUsers({ includeCurrentUser: true }).some(
        user => user.username === username && user.password === password
      )
      if (users) {
        commit(types.SET_ISLOGGEDIN, username)
        console.log('was getters set, isLoggedIn?', getters.getIsLoggedIn)
      }
    },
    createUser ({ commit, getters }, { details }) {
      const users = getters.getUsers({ includeCurrentUser: true }).some(
        user => user.email === details.email
      )
      if (!users) {
        commit(types.CREATE_USER, details)
        commit(types.SET_ISLOGGEDIN, details.username)
      }
      console.log(getters.getIsLoggedIn)
    }
  },
  getters: {
    getEvents: (state) => {
      return state.types.events
    },
    getUsers: (state, getters) => ({ includeCurrentUser }) => {
      if (includeCurrentUser) {
        return state.types.users
      }
      return state.types.users.filter(
        user => user.username !== getters.getLoggedInUserUsername
      )
    },
    getLoggedInUserUsername: (state) => {
      return state.isLoggedIn
    },
    getLoggedInUser: (state, getters) => {
      return getters.getUserByUsername(state.isLoggedIn)
    },
    getIsLoggedIn: (state) => {
      return state.isLoggedIn.length > 0
    },
    getUserByUsername: (state) => (username) => {
      return state.types.users.filter(
        user => user.username === username
      )[0]
    }
  }
})

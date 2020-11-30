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
            password: 'test',
            clubs: [],
            appointments: []
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
            password: 'test2',
            clubs: [],
            appointments: []
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
            password: 'test22',
            clubs: [],
            appointments: []
          }
        ],
      clubs:
      [
        {
          name: 'club1',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: '18-12-2020'
        },
        {
          name: 'club2',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: '19-12-2020'
        },
        {
          name: 'club3',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: '20-12-2020'
        },
        {
          name: 'club4',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: '16-12-2020'
        },
        {
          name: 'club5',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: '11-12-2020'
        },
        {
          name: 'club6',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: '25-12-2020'
        },
        {
          name: 'club7',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: '29-12-2020'
        },
        {
          name: 'club8',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: '15-12-2020'
        },
        {
          name: 'club9',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: '18-12-2020'
        },
        {
          name: 'club10',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: '8-12-2020'
        },
        {
          name: 'club11',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: '5-12-2020'
        },
        {
          name: 'club12',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: '26-12-2020'
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
      console.log('mutation', details, index)
      Object.assign(store.types.users[index], details)
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
    addUserClub ({ commit, getters }, name) {
      const user = getters.getLoggedInUser
      const userClubs = user.clubs

      const userIndex = getters.getUsers({ includeCurrentUser: true }).map(
        e => e.username
      ).indexOf(user.username)

      if (!userClubs.includes(name)) {
        userClubs.push(name)
        commit(types.UPDATE_USER, {
          details: {
            clubs: userClubs
          },
          index: userIndex
        })
      }
      console.log(getters.getLoggedInUser.clubs)
    },

    addUserAppointment ({ commit, getters }, name) {
      const user = getters.getLoggedInUser
      const userAppointments = user.appointments

      const userIndex = getters.getUsers({ includeCurrentUser: true }).map(
        e => e.username
      ).indexOf(user.username)

      if (!userAppointments.includes(name)) {
        userAppointments.push(name)
        commit(types.UPDATE_USER, {
          details: {
            appointments: userAppointments
          },
          index: userIndex
        })
      }
      console.log(getters.getLoggedInUser.appointments)
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
    },
    getClubs: (state) => {
      return state.types.clubs
    },
    getBookings: (state, getters) => ({ getAppointments }) => {
      if (getAppointments) {
        const userAppointments = getters.getLoggedInUser.appointments
        return getters.getClubs.filter(club => userAppointments.includes(club.name))
      }
      const userBookings = getters.getLoggedInUser.clubs
      return getters.getClubs.filter(club => userBookings.includes(club.name))
    }
  }
})

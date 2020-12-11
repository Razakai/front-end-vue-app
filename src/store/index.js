import { createStore } from 'vuex'
import * as types from './mutation-types'

export default createStore({
  state: {
    types: {
      facilities:
        [
          'CIT Sports ground',
          'CIT Gym',
          'Bishopstown GAA Club',
          'CIT Athletic Track'
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
          date: 'Monday',
          time: '11:55'
        },
        {
          name: 'club2',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Monday',
          time: '11:55'
        },
        {
          name: 'club3',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Monday',
          time: '11:55'
        },
        {
          name: 'club4',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Monday',
          time: '11:55'
        },
        {
          name: 'club5',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Monday',
          time: '11:55'
        },
        {
          name: 'club6',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Tuesday',
          time: '11:55'
        },
        {
          name: 'club7',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Tuesday',
          time: '11:55'
        },
        {
          name: 'club8',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Tuesday',
          time: '11:55'
        },
        {
          name: 'club9',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Tuesday',
          time: '11:55'
        },
        {
          name: 'club10',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Tuesday',
          time: '11:55'
        },
        {
          name: 'club11',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Wednesday',
          time: '11:55'
        },
        {
          name: 'club12',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Wednesday',
          time: '11:55'
        },
        {
          name: 'club13',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Wednesday',
          time: '11:55'
        },
        {
          name: 'club14',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Wednesday',
          time: '11:55'
        },
        {
          name: 'club15',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Wednesday',
          time: '11:55'
        },
        {
          name: 'club16',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '9000',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Thursday',
          time: '11:55'
        },
        {
          name: 'club17',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Thursday',
          time: '11:55'
        },
        {
          name: 'club18',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Thursday',
          time: '11:55'
        },
        {
          name: 'club19',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Thursday',
          time: '11:55'
        },
        {
          name: 'club20',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Thursday',
          time: '11:55'
        },
        {
          name: 'club21',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Thursday',
          time: '11:55'
        },
        {
          name: 'club22',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Thursday',
          time: '11:55'
        },
        {
          name: 'club23',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Friday',
          time: '11:55'
        },
        {
          name: 'club24',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'John',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Friday',
          time: '11:55'
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
    [types.CREATE_CLUB] (store, newClub) {
      store.types.clubs.push(newClub)
    },
    [types.UPDATE_USER] (store, { details, index }) {
      Object.assign(store.types.users[index], details)
    },
    [types.UPDATE_CLUB] (store, { details, index }) {
      Object.assign(store.types.clubs[index], details)
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
    updateClub ({ commit, getters }, { details, clubName }) {
      console.log('store', details)
      const userClub = getters.getClubs.map(
        e => e.name
      ).indexOf(clubName)

      if (userClub >= 0) {
        commit(types.UPDATE_CLUB, { details, index: userClub })
      }
    },
    addUserClub ({ commit, getters }, name) {
      const user = getters.getLoggedInUser
      const userClubs = user.clubs

      const userIndex = getters.getUsers({ includeCurrentUser: true }).map(
        e => e.username
      ).indexOf(user.username)

      if (!userClubs.some(e => e.name === name)) {
        userClubs.push({ name: name, bookingDate: new Date() })

        commit(types.UPDATE_USER, {
          details: {
            clubs: userClubs
          },
          index: userIndex
        })
      }
    },

    cancelBooking ({ commit, getters }, { name, isAppointment }) {
      const user = getters.getLoggedInUser
      const userIndex = getters.getUsers({ includeCurrentUser: true }).map(
        e => e.username
      ).indexOf(user.username)

      if (isAppointment) {
        const currentUserAppointments = getters.getLoggedInUser.appointments
        const index = currentUserAppointments.indexOf(
          currentUserAppointments.find(e => e.name === name)
        )
        if (index > -1) {
          currentUserAppointments.splice(index, 1)
          commit(types.UPDATE_USER, {
            details: {
              appointments: currentUserAppointments
            },
            index: userIndex
          })
        }
      }

      const currentUserClubs = getters.getLoggedInUser.clubs
      const index = currentUserClubs.indexOf(
        currentUserClubs.find(e => e.name === name)
      )
      if (index > -1) {
        currentUserClubs.splice(index, 1)
        commit(types.UPDATE_USER, {
          details: {
            clubs: currentUserClubs
          },
          index: userIndex
        })
      }
    },

    addUserAppointment ({ commit, getters }, name) {
      const user = getters.getLoggedInUser
      const userAppointments = user.appointments

      const userIndex = getters.getUsers({ includeCurrentUser: true }).map(
        e => e.username
      ).indexOf(user.username)

      if (!userAppointments.some(e => e.name === name)) {
        userAppointments.push({ name: name, bookingDate: new Date() })
        commit(types.UPDATE_USER, {
          details: {
            appointments: userAppointments
          },
          index: userIndex
        })
      }
    },

    login ({ commit, getters }, { username, password }) {
      const users = getters.getUsers({ includeCurrentUser: true }).some(
        user => user.username === username && user.password === password
      )
      if (users) {
        commit(types.SET_ISLOGGEDIN, username)
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
    },
    createClub ({ commit, getters }, { details }) {
      const club = getters.getClubs.some(
        club => club.name === details.name
      )
      if (!club) {
        commit(types.CREATE_CLUB, details)
      }
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
    getClubByName: (state, getters) => (name) => {
      return getters.getClubs.find(club => club.name === name)
    },
    getFacilities: (state) => {
      return state.types.facilities
    },
    getBookings: (state, getters) => ({ getAppointments }) => {
      if (getAppointments) {
        const userAppointments = getters.getLoggedInUser.appointments
        return getters.getClubs
          .filter(club => userAppointments.some(item => item.name === club.name))
          .map(club => {
            const date = userAppointments.find(element => element.name === club.name)

            return {
              ...club,
              bookingDate: date.bookingDate.toISOString().split('T')[0]
            }
          })
      }
      const userBookings = getters.getLoggedInUser.clubs
      return getters.getClubs
        .filter(club => userBookings.some(item => item.name === club.name))
        .map(club => {
          const date = userBookings.find(element => element.name === club.name)
          return {
            ...club,
            bookingDate: date.bookingDate.toISOString().split('T')[0]
          }
        })
    }
  }
})

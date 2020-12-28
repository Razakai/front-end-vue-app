import { createStore } from 'vuex'
import router from '../router'
import * as types from './mutation-types'

export default createStore({
  state: {
    types: {
      meals: {
        breakfast:
        [
          {
            name: 'beans',
            calories: 750
          },
          {
            name: 'cereal',
            calories: 500
          }
        ],
        lunch:
        [
          {
            name: 'ham sandwich',
            calories: 900
          },
          {
            name: 'soup',
            calories: 300
          }
        ],
        dinner:
        [
          {
            name: 'stew',
            calories: 1100
          },
          {
            name: 'pasta',
            calories: 600
          }
        ]
      },
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
            height: '185',
            address: 'ballinadee',
            email: 'addamholland12398@gmail.com',
            phoneNumber: '08584012345',
            status: 'student', // student, staff, neither
            membership: 'oneYear', // one year, open ended
            username: 'test',
            password: 'test',
            clubs: [],
            appointments: [],
            passwordLastChangedDate: new Date('Thu Nov 15 2020 09:52:12 GMT+0000 (Greenwich Mean Time)')
          },
          {
            firstName: 'Tash',
            lastName: 'Hayes',
            gender: 'female',
            age: '22',
            weight: '140',
            height: '173',
            address: 'kinsale',
            email: 'qwerty@gmail.com',
            phoneNumber: '08584012345',
            status: 'student', // student, staff, neither
            membership: 'oneYear', // one year, open ended
            username: 'test2',
            password: 'test2',
            clubs: [],
            appointments: [],
            passwordLastChangedDate: new Date('Thu Nov 10 2020 09:52:12 GMT+0000 (Greenwich Mean Time)')
          },
          {
            firstName: 'Jim',
            lastName: 'hue',
            gender: 'male',
            age: '35',
            weight: '180',
            height: '6.5',
            address: 'Cork',
            email: 'trainer@gmail.com',
            phoneNumber: '08584012345',
            status: 'staff', // student, staff, neither
            membership: 'oneYear', // one year, open ended
            username: 'Jim',
            password: 'trainer',
            clubs: [],
            appointments: [],
            passwordLastChangedDate: new Date('Thu Nov 10 2020 09:52:12 GMT+0000 (Greenwich Mean Time)')
          },
          {
            firstName: 'John',
            lastName: 'Adams',
            gender: 'male',
            age: '40',
            weight: '185',
            height: '6.1',
            address: 'Cork',
            email: 'trainer2@gmail.com',
            phoneNumber: '08584012345',
            status: 'staff', // student, staff, neither
            membership: 'oneYear', // one year, open ended
            username: 'trainerJohn',
            password: 'trainerJohn',
            clubs: [],
            appointments: [],
            passwordLastChangedDate: new Date('Thu Nov 10 2020 09:52:12 GMT+0000 (Greenwich Mean Time)')
          },
          {
            firstName: 'Jane',
            lastName: 'Lough',
            gender: 'female',
            age: '40',
            weight: '185',
            height: '6.1',
            address: 'Cork',
            email: 'trainer2@gmail.com',
            phoneNumber: '08584012345',
            status: 'staff', // student, staff, neither
            membership: 'oneYear', // one year, open ended
            username: 'trainerJane',
            password: 'trainerJane',
            clubs: [],
            appointments: [],
            passwordLastChangedDate: new Date('Thu Nov 10 2020 09:52:12 GMT+0000 (Greenwich Mean Time)')
          }
        ],
      clubs:
      [
        {
          name: 'club1',
          maxSize: '20',
          facility: 'CIT Sports ground',
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
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
          trainer: 'Jim',
          duration: '60',
          calories: '500',
          photo: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          date: 'Friday',
          time: '11:55'
        }
      ]
    },
    isLoggedIn: '',
    changePassword: false
  },
  mutations: {
    [types.RESET_STATE] (store) {
      store.isLoggedIn = ''
      store.changePassword = false
    },
    [types.SET_ISLOGGEDIN] (store, status) {
      store.isLoggedIn = status
    },
    [types.SET_CHANGE_PASSWORD] (store, status) {
      store.changePassword = status
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
      commit(types.SET_CHANGE_PASSWORD, false)
    },
    editEvents ({ commit }, { event }) {
      commit(types.CREATE_EVENT, event)
    },
    updateUser ({ commit, getters, dispatch }, { details, usernameUpdated }) {
      const userIndex = getters.getUsers({ includeCurrentUser: true }).map(
        e => e.username
      ).indexOf(getters.getLoggedInUserUsername)

      if (userIndex >= 0) {
        commit(types.UPDATE_USER, { details, index: userIndex })
        if ('passwordLastChangedDate' in details) {
          commit(types.SET_CHANGE_PASSWORD, false)
        }
        if (usernameUpdated) {
          const clubs = getters.getClubs.filter(club => club.trainer === getters.getLoggedInUserUsername)
          if (clubs.length > 0) {
            clubs.forEach(club => {
              club.trainer = details.username
              dispatch('updateClub', { details: club, clubName: club.name })
            })
          }
          commit(types.SET_ISLOGGEDIN, details.username)
        }
      }
    },
    updateClub ({ commit, getters, dispatch }, { details, clubName }) {
      const userClub = getters.getClubs.map(
        e => e.name
      ).indexOf(clubName)

      if (userClub >= 0) {
        commit(types.UPDATE_CLUB, { details, index: userClub })
      }
      if (clubName !== details.name) {
        const allUsers = getters.getUsers({ includeCurrentUser: true })
        allUsers.forEach(user => {
          const clubIndex = user.clubs.map(e => e.name).indexOf(clubName)
          const appointmentIndex = user.appointments.map(e => e.name).indexOf(clubName)

          if (clubIndex !== -1 || appointmentIndex !== -1) {
            if (clubIndex !== -1) {
              user.clubs[clubIndex].name = details.name
            }

            if (appointmentIndex !== -1) {
              user.appointments[appointmentIndex].name = details.name
            }

            dispatch('updateUser', {
              details: user,
              usernameUpdated: false
            })
          }
        })
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
        alert(`Joined ${name}`)
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
      } else {
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
        alert(`Created an appointment with ${name}`)
      }
    },

    login ({ commit, getters }, { username, password }) {
      const users = getters.getUsers({ includeCurrentUser: true }).some(
        user => user.username === username && user.password === password
      )
      if (users) {
        commit(types.SET_ISLOGGEDIN, username)
        const currentUser = getters.getLoggedInUser

        const _MS_PER_DAY = 1000 * 60 * 60 * 24
        const currentDate = new Date()
        const passwordLastChangedDate = currentUser.passwordLastChangedDate

        // Discard the time and time-zone information.
        const utc1 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
        const utc2 = Date.UTC(passwordLastChangedDate.getFullYear(), passwordLastChangedDate.getMonth(), passwordLastChangedDate.getDate())

        const dateDiff = Math.floor((utc1 - utc2) / _MS_PER_DAY)
        if (dateDiff > 20 && dateDiff < 30) { alert(`Password needs to be changed in ${30 - dateDiff} days`) } else if (dateDiff >= 30) { commit(types.SET_CHANGE_PASSWORD, true) }
      }
    },
    createUser ({ commit, getters }, { details }) {
      const users = getters.getUsers({ includeCurrentUser: true }).some(
        user => user.email === details.email
      )
      if (!users) {
        commit(types.CREATE_USER, details)
        commit(types.SET_ISLOGGEDIN, details.username)
        router.push('/clubs')
      }
    },
    setChangePassword ({ commit }, status) {
      commit(types.SET_CHANGE_PASSWORD, status)
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
    getChangePassword: (state) => {
      return state.changePassword
    },
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
    getAvailableTrainers: (state, getters) => ({ includeCurrentUser }) => {
      const clubTrainers = getters.getClubs.map(e => e.trainer)
      if (includeCurrentUser) {
        return getters.getUsers({ includeCurrentUser: true })
          .filter(user => user.status === 'staff' && (!clubTrainers.includes(user.username) || user.username === getters.getLoggedInUserUsername))
          .map(user => {
            return {
              ...user,
              fullName: `${user.firstName} ${user.lastName}`
            }
          })
      }
      return getters.getUsers({ includeCurrentUser: true })
        .filter(user => user.status === 'staff' && !clubTrainers.includes(user.username))
        .map(user => {
          return {
            ...user,
            fullName: `${user.firstName} ${user.lastName}`
          }
        })
    },
    getBreakfast: (state) => {
      return state.types.meals.breakfast
    },
    getLunch: (state) => {
      return state.types.meals.lunch
    },
    getDinner: (state) => {
      return state.types.meals.dinner
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

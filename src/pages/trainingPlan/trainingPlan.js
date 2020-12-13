export default {
  name: 'trainingPlan',

  data: () => {
    return {
      breakfastCalories: 0,
      lunchCalories: 0,
      dinnerCalories: 0
    }
  },

  watch: {
    breakfastCalories () {
      console.log(this.breakfastCalories)
    }
  },

  computed: {
    loggedInUser () {
      return this.$store.getters.getLoggedInUser
    },

    currentBMR () {
      const user = this.loggedInUser
      if (user.gender === 'male') {
        return 66 + (6.3 * user.weight) + (12.9 * user.height) - (6.8 * user.age)
      }
      return 655 + (4.3 * user.weight) + (4.7 * user.height) - (4.7 * user.age)
    },

    currentCalories () {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const currentDay = new Date().getDay()

      const clubs = this.userClubs
        .filter(club => club.date !== days[currentDay] && club.time.split(':')[0] <= new Date().getHours())
        .map(club => club.calories)

      return clubs.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    },

    userClubs () {
      return this.$store.getters.getBookings({ getAppointments: false })
    },

    getBreakfast () {
      return this.$store.getters.getBreakfast
    },

    getLunch () {
      return this.$store.getters.getLunch
    },

    getDinner () {
      return this.$store.getters.getDinner
    },

    totalCalorieIntake () {
      return this.breakfastCalories + this.lunchCalories + this.dinnerCalories
    }

  },

  methods: {

  }

}

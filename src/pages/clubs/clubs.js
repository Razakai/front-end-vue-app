import TextInput from '../../components/sections/TextInput/TextInput.vue'
import GButton from '../../components/sections/GButton/GButton.vue'
import clubCard from '../../components/clubCard/clubCard.vue'
import clubModel from '../../components/clubModel/clubModel.vue'
import Fuse from 'fuse.js'

export default {
  name: 'clubs',

  components: {
    TextInput,
    GButton,
    clubCard,
    clubModel
  },

  data: () => {
    return {
      searchTerm: '',
      multiselect: 'name',
      sortByCalories: false,
      showModel: false,
      clubName: ''
    }
  },

  computed: {
    getClubs () {
      return this.$store.getters.getClubs
    },

    isTrainer () {
      return this.$store.getters.getLoggedInUser.status === 'staff'
    },

    sortedClubs () {
      const clubs = this.$store.getters.getClubs

      if (this.sortByCalories) {
        return clubs.sort((a, b) => {
          if (a.calories < b.calories) return 1
          if (a.calories > b.calories) return -1
          return 0
        })
      }
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const currentDay = new Date().getDay()

      return clubs.sort((a, b) => {
        if (a.date === days[currentDay]) return -1
        if (a.date !== days[currentDay]) return 1
      })
    },

    allSortedAndFilteredClubs () {
      let clubs = this.sortedClubs

      if (this.searchTerm !== '') {
        const fuse = new Fuse(clubs, {
          keys: [this.multiselect],
          threshold: 0.2
        })

        clubs = fuse.search(this.searchTerm)
          .map(e => {
            return {
              ...e.item
            }
          })
      }

      return clubs
    }

  },

  methods: {
    async addUserClub (name) {
      await this.$store.dispatch('addUserClub', name)
    },

    async addUserAppointment (name) {
      await this.$store.dispatch('addUserAppointment', name)
    },

    editClub (name) {
      this.clubName = name
      this.showClubModel(true)
    },

    showClubModel (value) {
      if (value === false) { this.clubName = '' }
      this.showModel = value
    }
  }
}

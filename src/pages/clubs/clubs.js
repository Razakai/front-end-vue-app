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
      showModel: false
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

      console.log(this.sortByCalories)
      if (this.sortByCalories) {
        return clubs.sort((a, b) => {
          if (a.calories < b.calories) return 1
          if (a.calories > b.calories) return -1
          return 0
        })
      }

      return clubs.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)

        if (dateA < dateB) return -1
        if (dateA > dateB) return 1
        return 0
      })
    },

    allSortedAndFilteredClubs () {
      let clubs = this.sortedClubs

      if (this.searchTerm !== '') {
        const fuse = new Fuse(clubs, {
          keys: [this.multiselect],
          threshold: this.multiselect === 'date' ? 0 : 0.2
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
      console.log(name)
      await this.$store.dispatch('addUserClub', name)
    },

    async addUserAppointment (name) {
      console.log('appointment', name)
      await this.$store.dispatch('addUserAppointment', name)
    },

    setShowModel (value) {
      this.showModel = value
    }

  },
  created () {
    console.log('created')
  }
}

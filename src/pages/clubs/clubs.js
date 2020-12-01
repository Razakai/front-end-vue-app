import TextInput from '../../components/sections/TextInput/TextInput.vue'
import GButton from '../../components/sections/GButton/GButton.vue'
import clubCard from '../../components/clubCard/clubCard.vue'
import clubModel from '../../components/clubModel/clubModel.vue'
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

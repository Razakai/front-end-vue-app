import TextInput from '../../components/sections/TextInput/TextInput.vue'
import GButton from '../../components/sections/GButton/GButton.vue'
import clubCard from '../../components/clubCard/clubCard.vue'
export default {
  name: 'clubs',

  components: {
    TextInput,
    GButton,
    clubCard
  },

  data: () => {
    return {
      searchTerm: '',
      multiselect: '',
      sortByCalories: false
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
      await this.$store.dispatch('addUserClub', name)
    }

  },
  created () {
    console.log('created')
  }
}

import TextInput from '@/components/sections/TextInput/TextInput.vue'
import GButton from '@/components/sections/GButton/GButton.vue'

export default {
  name: 'app',

  components: {
    TextInput,
    GButton
  },

  data: () => {
    return {
      username: '',
      password: '',
      shouldFocus: false
    }
  },

  computed: {
    isLoggedIn () {
      return this.$store.getters.getIsLoggedIn
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { username: this.username, password: this.password })
    },
    async logout () {
      this.$store.dispatch('logout', false)
      await this.$router.push('/')
    }
  }
}

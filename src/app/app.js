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
      shouldFocus: false,
      loginAttempts: 0
    }
  },

  computed: {
    isLoggedIn () {
      return this.$store.getters.getIsLoggedIn
    }
  },
  methods: {
    async login () {
      await this.$store.dispatch('login', { username: this.username, password: this.password })
      if (!this.isLoggedIn) {
        this.loginAttempts += 1
      }
    },
    async logout () {
      await this.$router.push('/')
      this.$store.dispatch('logout', false)
    }
  }
}

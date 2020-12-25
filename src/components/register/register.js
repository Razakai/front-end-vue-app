import GButton from '@/components/sections/GButton/GButton.vue'
import TextInput from '@/components/sections/TextInput/TextInput.vue'
export default {
  name: 'register',

  components: {
    GButton,
    TextInput
  },

  data: () => {
    return {
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      weight: '',
      height: '',
      address: '',
      email: '',
      phoneNumber: '',
      status: '', // student, staff, neither
      membership: '', // one year, open ended
      username: '',
      password: ''

    }
  },

  computed: {

  },

  methods: {
    isFormFilled () {
      if (
        this.firstName.length > 0 &&
        this.lastName.length > 0 &&
        this.gender.length > 0 &&
        this.age.length > 0 &&
        this.weight.length > 0 &&
        this.height.length > 0 &&
        this.address.length > 0 &&
        this.email.length > 0 &&
        this.phoneNumber.length > 0 &&
        this.membership.length > 0 &&
        this.username.length > 0 &&
        this.status.length > 0 &&
        this.password.length > 0
      ) { return true }
      return false
    },

    async register () {
      if (this.isFormFilled()) {
        await this.$store.dispatch('createUser', {
          details: {
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            age: this.age,
            weight: this.weight,
            height: this.height,
            address: this.address,
            email: this.email,
            phoneNumber: this.phoneNumber,
            membership: this.membership,
            username: this.username,
            status: this.status,
            clubs: [],
            appointments: [],
            password: this.password,
            passwordLastChangedDate: new Date()
          }
        })
        await this.$router.push('/about')
      }
    },
    getIsLoggedIn () {
      return this.$store.getters.getIsLoggedIn()
    }
  }
}

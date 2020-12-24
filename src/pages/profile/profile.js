import TextInput from '../../components/sections/TextInput/TextInput.vue'
import GButton from '@/components/sections/GButton/GButton.vue'

export default {
  name: 'profile',

  components: {
    TextInput,
    GButton
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
      password: '',
      test: '',
      passwordUpdated: false,
      usernameUpdated: false,
      profileUpdated: false
    }
  },

  computed: {

  },

  methods: {
    getUserDetails () {
      return this.$store.getters.getLoggedInUser
    },

    createNewProfileObject () {
      return {
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
        password: this.password
      }
    },

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

    isUserDataClashing () {
      const newProfile = this.createNewProfileObject()
      const currentProfile = this.getUserDetails()

      const diff = Object.keys(newProfile).reduce((diff, key) => {
        if (currentProfile[key] === newProfile[key]) return diff
        return {
          ...diff,
          [key]: newProfile[key]
        }
      }, {})

      if (Object.keys(diff).length > 0) {
        if ('password' in diff) {
          this.passwordUpdated = true
        }
        if ('username' in diff) {
          this.usernameUpdated = true
        }

        return !this.$store.getters.getUsers({ includeCurrentUser: false }).some(
          user => user.username === this.username
        )
      }
      return false
    },

    async updateProfile () {
      this.resetUpdatedStatus()
      if (this.isFormFilled() && this.isUserDataClashing()) {
        const details = this.createNewProfileObject()
        if (this.passwordUpdated) { Object.assign(details, { passwordLastChangedDate: new Date() }) }

        await this.$store.dispatch('updateUser', {
          details,
          usernameUpdated: this.usernameUpdated
        })
        this.profileUpdated = true
      }
    },

    resetUpdatedStatus () {
      this.passwordUpdated = false
      this.usernameUpdated = false
      this.profileUpdated = false
    }
  },

  created () {
    const user = this.getUserDetails()
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.gender = user.gender
    this.age = user.age
    this.weight = user.weight
    this.height = user.height
    this.address = user.address
    this.email = user.email
    this.phoneNumber = user.phoneNumber
    this.status = user.status
    this.membership = user.membership
    this.username = user.username
    this.password = user.password
    this.passwordUpdated = false
    this.profileUpdated = false
    this.usernameUpdated = false
  }
}

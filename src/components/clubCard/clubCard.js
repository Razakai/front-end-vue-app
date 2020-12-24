import GButton from '../../components/sections/GButton/GButton.vue'
export default {
  name: 'clubCard',

  props: {
    club: {
      type: Object,
      required: true
    }
  },

  components: {
    GButton
  },

  computed: {
    getTrainer () {
      const trainer = this.$store.getters.getUserByUsername(this.club.trainer)
      return `${trainer.firstName} ${trainer.lastName}`
    },

    getLoggedInUser () {
      return this.$store.getters.getLoggedInUser
    },

    isUserClubTrainer () {
      return this.getLoggedInUser.username === this.club.trainer
    }
  },

  methods: {
    joinClub () {
      this.$emit('join-club')
    },

    editClub () {
      this.$emit('edit-club')
    },

    createAppointment () {
      this.$emit('create-appointment')
    }
  }

}

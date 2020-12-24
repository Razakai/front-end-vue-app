import GButton from '../sections/GButton/GButton.vue'
export default {
  name: 'bookingsTable',

  components: {
    GButton
  },

  props: {
    bookings: {
      type: Object,
      required: true
    },
    isAppointments: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data: () => {
    return {

    }
  },

  computed: {

  },

  methods: {
    async cancelBooking (name) {
      await this.$store.dispatch('cancelBooking', { name, isAppointment: this.isAppointments })
    }
  }
}

export default {
  name: 'bookingsTable',

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

  }
}

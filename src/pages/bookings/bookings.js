import TextInput from '../../components/sections/TextInput/TextInput.vue'
import bookingsTable from '../../components/bookingsTable/bookingsTable.vue'

export default {
  name: 'bookings',

  components: {
    TextInput,
    bookingsTable
  },

  data: () => {
    return {
      multiselect: '',
      searchTerm: '',
      showAppointments: false
    }
  },

  computed: {
    getItems () {
      return this.$store.getters.getBookings({ getAppointments: this.showAppointments })
    }

  },

  methods: {

  }
}

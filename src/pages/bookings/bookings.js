import TextInput from '../../components/sections/TextInput/TextInput.vue'
import bookingsTable from '../../components/bookingsTable/bookingsTable.vue'
import Fuse from 'fuse.js'

export default {
  name: 'bookings',

  components: {
    TextInput,
    bookingsTable
  },

  data: () => {
    return {
      multiselect: 'name',
      searchTerm: '',
      showAppointments: false
    }
  },

  computed: {
    getbookings () {
      let bookings = this.$store.getters.getBookings({ getAppointments: this.showAppointments })

      if (this.searchTerm !== '') {
        const fuse = new Fuse(bookings, {
          keys: [this.multiselect],
          threshold: this.multiselect === 'bookingDate' ? 0 : 0.2
        })

        bookings = fuse.search(this.searchTerm)
          .map(e => {
            return {
              ...e.item
            }
          })
      }
      return bookings
    }
  },

  methods: {
  }
}

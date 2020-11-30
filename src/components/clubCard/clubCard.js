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

  },

  methods: {
    joinClub () {
      this.$emit('join-club')
    },

    createAppointment () {
      this.$emit('create-appointment')
    }
  }

}

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
    appDescription () {
      // return this.app.description
    }
  },

  createdBy () {
    return 'Teamwork'
  }

}

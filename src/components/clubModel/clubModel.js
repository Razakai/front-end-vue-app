import TextInput from '../sections/TextInput/TextInput.vue'
import GButton from '../sections/GButton/GButton.vue'

export default {
  name: 'clubModel',

  components: {
    TextInput,
    GButton
  },

  data: () => {
    return {
      maxsize: '',
      facility: '',
      trainer: '',
      duration: '',
      calories: '',
      photoUrl: '',
      date: '',
      time: '',
      name: ''
    }
  },

  computed: {
    modelName () {
      return 'Create Club'
    },

    getFacilities () {
      return this.$store.getters.getFacilities
    }

  },

  watch: {
    time () {
      console.log(this.time)
    },
    date () {
      console.log(this.date)
    }
  },

  methods: {
    closeModel () {
      this.$emit('close-model')
    }

  }
}

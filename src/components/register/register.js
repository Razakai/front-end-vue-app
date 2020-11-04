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
      studentId: '',
      courseNumber: ''
    }
  },

  computed: {

  },

  methods: {

  }
}

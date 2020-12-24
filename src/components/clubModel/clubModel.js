import TextInput from '../sections/TextInput/TextInput.vue'
import GButton from '../sections/GButton/GButton.vue'

export default {
  name: 'clubModel',

  components: {
    TextInput,
    GButton
  },

  props: {
    editClub: {
      type: String,
      required: false,
      default: ''
    }
  },

  data: () => {
    return {
      maxsize: '',
      facility: '',
      trainer: '',
      duration: '',
      calories: '',
      photo: '',
      date: '',
      time: '',
      name: ''
    }
  },

  computed: {
    modelName () {
      if (this.editClub !== '') { return 'Update Club' }
      return 'Create Club'
    },

    getAvailableTrainers () {
      return this.$store.getters.getAvailableTrainers({ includeCurrentUser: true })
    },

    validateForm () {
      if (
        this.maxsize !== '' &&
        this.facility !== '' &&
        this.trainer !== '' &&
        this.duration !== '' &&
        this.calories !== '' &&
        this.photo !== '' &&
        this.date !== '' &&
        this.time !== '' &&
        this.name !== ''
      ) { return true }
      return false
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
    },

    async updateClub () {
      if (this.noClubClash()) {
        await this.$store.dispatch('updateClub', {
          details: {
            maxSize: this.maxsize,
            facility: this.facility,
            trainer: this.trainer,
            duration: this.duration,
            calories: this.calories,
            photo: this.photo,
            date: this.date,
            time: this.time,
            name: this.name
          },
          clubName: this.editClub
        })
        this.closeModel()
      }
    },

    async createClub () {
      await this.$store.dispatch('createClub', {
        details: {
          maxSize: this.maxsize,
          facility: this.facility,
          trainer: this.trainer,
          duration: this.duration,
          calories: this.calories,
          photo: this.photo,
          date: this.date,
          time: this.time,
          name: this.name
        }
      })
      this.closeModel()
    },

    noClubClash () {
      return this.$store.getters.getClubs.filter(e => e.name === this.name && e.name !== this.editClub).length === 0
    }
  },

  created () {
    if (this.editClub !== '') {
      const club = this.$store.getters.getClubByName(this.editClub)
      console.log(club)
      this.maxsize = club.maxSize
      this.facility = club.facility
      this.trainer = club.trainer
      this.duration = club.duration
      this.calories = club.calories
      this.photo = club.photo
      this.date = club.date
      this.time = club.time
      this.name = club.name
    }
  }
}

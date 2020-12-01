
export default {
  name: 'GButton',

  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {
    onClick (event) {
      if (this.disabled) {
        event.stopPropagation()
        event.preventDefault()
      } else {
        // this.$emit('click', event)
      }
    }
  }
}

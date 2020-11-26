
export default {
  name: 'GButton',

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


export default {
  name: 'GButton',

  props: {
    variant: {
      type: String,
      default: 'primary' // [primary|alert|info|cancel|bordered]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    urlToNavigateTo: {
      type: String,
      default: ''
    }
  },

  methods: {
    onClick (event) {
      if (this.disabled) {
        event.stopPropagation()
        event.preventDefault()
      } else {
        if (this.urlToNavigateTo) {
          window.open(this.urlToNavigateTo)
        }

        this.$emit('click', event)
      }
    }
  }
}

export default {
  name: 'TextInput',

  props: {
    placeholder: {
      type: String,
      default: 'Insert value here'
    },
    modelValue: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      required: false,
      default: 'text'
    }
  },

  methods: {
    updateValue (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}

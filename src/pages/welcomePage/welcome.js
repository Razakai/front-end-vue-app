
export default {
  name: 'WelcomePage',

  data: () => {
    return {
      welcome: 'Hello World!',
      cool: 'Wow cool site Man'
    }
  },

  computed: {
    welcomeText () {
      return this.welcome
    },

    coolMan () {
      return this.cool
    }
  }
}

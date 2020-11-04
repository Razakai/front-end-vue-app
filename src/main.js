import { createApp } from 'vue'
import App from './app/app.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAmXVe5GZUTtkaoDkDw7Oy-srY8HTA3u9c',
  authDomain: 'sports-arena-vue.firebaseapp.com',
  databaseURL: 'https://sports-arena-vue.firebaseio.com',
  projectId: 'sports-arena-vue',
  storageBucket: 'sports-arena-vue.appspot.com',
  messagingSenderId: '8938047840',
  appId: '1:8938047840:web:ad4a12dd6a7b156c3b3605',
  measurementId: 'G-F03GBL52D0'
}

firebase.initializeApp(firebaseConfig)

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

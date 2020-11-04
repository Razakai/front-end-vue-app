import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/home.vue'
import welcome from '../pages/welcomePage/welcome.vue'
import about from '../pages/About.vue'
import createStore from '../store/index.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: welcome,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: about
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!createStore.getters.getIsLoggedIn) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

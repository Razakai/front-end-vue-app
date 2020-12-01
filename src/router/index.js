import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/home.vue'
import profile from '../pages/profile/profile.vue'
import clubs from '../pages/clubs/clubs.vue'
import bookings from '../pages/bookings/bookings.vue'
import createStore from '../store/index.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: profile,
    meta: {
      requiresAuth: true
    }

  },
  {
    path: '/clubs',
    name: 'Clubs',
    component: clubs,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/bookings',
    name: 'Bookings',
    component: bookings,
    meta: {
      requiresAuth: true
    }
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

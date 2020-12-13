import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/home.vue'
import profile from '../pages/profile/profile.vue'
import clubs from '../pages/clubs/clubs.vue'
import bookings from '../pages/bookings/bookings.vue'
import trainingPlan from '../pages/trainingPlan/trainingPlan.vue'
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
      requiresAuth: true,
      requiresUpToDatePassword: true
    }
  },
  {
    path: '/bookings',
    name: 'Bookings',
    component: bookings,
    meta: {
      requiresAuth: true,
      requiresUpToDatePassword: true
    }
  },
  {
    path: '/trainingPlan',
    name: 'TrainingPlan',
    component: trainingPlan,
    meta: {
      requiresAuth: true,
      requiresUpToDatePassword: true
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
      if (createStore.getters.getChangePassword && to.matched.some(record => record.meta.requiresUpToDatePassword)) {
        console.log('in router, needs p change', createStore.getters.getChangePassword)
        next({ path: '/profile' })
        alert('Your password is older than 30 days, you need to change it now')
      }
      next()
    }
  } else {
    next()
  }
})

export default router

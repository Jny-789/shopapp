import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../views/Orders.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

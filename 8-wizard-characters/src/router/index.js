import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/detail/:index',
    name: 'detail',
    component: () => import('../views/WizardDetail.vue'),
    props: true
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/AppFavorites.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router

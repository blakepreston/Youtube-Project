import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import StepBar from '../views/StepBar.vue'
import Arrays from '../views/Arrays.vue'
import EmailPhone from '../views/inputEmailPhone.vue'
import JSONData from '../views/jsonData.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/stepbar',
    name: 'StepBar',
    component: StepBar
  },
  {
    path: '/array',
    name: 'Array',
    component: Arrays
  },
  {
    path: '/emailphone',
    name: 'EmailPhone',
    component: EmailPhone
  },
  {
    path: '/jsondata',
    name: 'jsonData',
    component: JSONData
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

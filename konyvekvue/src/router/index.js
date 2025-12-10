import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Motors from '../pages/Motors.vue'
import MotorDetails from '../pages/MotorDetails.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/motors', name: 'motors', component: Motors },
  { path: '/motors/:id', name: 'motor-details', component: MotorDetails }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

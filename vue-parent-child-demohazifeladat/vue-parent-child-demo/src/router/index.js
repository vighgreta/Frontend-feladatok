import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import UserProfile from '../views/UserProfile.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: Home 
  }, // Statikus route
  
 {
  path: '/user',
  name: 'user',
  component: User,
  children: [
    { 
      path: '', 
      name: 'profile', 
      component: UserProfile 
    }
  ]
}
,
  
  { 
    path: '/:pathMatch(.*)*', 
    name: 'not-found', 
    component: NotFound 
  } // Catch-all route
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
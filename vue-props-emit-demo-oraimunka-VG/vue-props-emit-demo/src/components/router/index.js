import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

import User from '../views/User.vue'

import Profile from '../views/Profile.vue'

const routes = [

  { path: '/', name: 'home', component: Home }, // Statikus

  { 

    path: '/user/:id', 

    name: 'user', 

    component: User, // Dinamikus

    children: [

      { path: 'profile', name: 'profile', component: Profile }, // Beágyazott

      { path: '', redirect: 'profile' }

    ]

  }

]

export default createRouter({

  history: createWebHistory(),

  routes

})

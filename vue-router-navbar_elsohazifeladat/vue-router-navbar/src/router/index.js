import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import Contact from '../views/Contact.vue'
import Hello from '../views/Hello.vue'
import HelloWorld from '../views/HelloWorld.vue'
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/konyvek', name: 'Books', component: Books },
  { path: '/kapcsolat', name: 'Contact', component: Contact },
  { path: '/hello', name: 'Hello', component: Hello },
  { path: '/helloworld', name: 'Hello World', component: HelloWorld },
]

const router = createRouter({
history: createWebHistory(),
routes,
})
export default router
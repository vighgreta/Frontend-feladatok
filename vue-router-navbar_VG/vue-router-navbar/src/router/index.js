import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import Contact from '../views/Contact.vue'
import Hello from '../views/Hello.vue'
const routes = [
{ path: '/', name: 'Home', component: Home },
{ path: '/books', name: 'Books', component: Books },
{ path: '/contact', name: 'Contact', component: Contact },
{ path: '/hello', name: 'Hello', component: Hello }
]
const router = createRouter({
history: createWebHistory(),
routes,
})
export default router
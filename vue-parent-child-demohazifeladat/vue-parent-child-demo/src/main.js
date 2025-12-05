// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // ha routert is használsz

createApp(App)
  .use(router)                  // ha router van
  .mount('#app')

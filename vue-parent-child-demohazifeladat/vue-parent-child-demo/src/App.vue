<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <nav style="padding: 20px; background: #42b983; margin-bottom: 20px;">
      <router-link to="/" style="margin-right: 20px; color: white;">
        Kezdőlap
      </router-link>
      <router-link to="/user/123" style="margin-right: 20px; color: white;">
        User (Dinamikus)
      </router-link>
      <router-link to="/user/123/profile" style="color: white;">
        User Profile (Beágyazott)
      </router-link>
    </nav>
    
    <div style="padding: 20px;">
      <RouterView />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

a {
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>

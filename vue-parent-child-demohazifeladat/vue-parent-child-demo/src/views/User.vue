<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const userId = computed(() => route.params.id)
</script>

<template>
  <div>
    <h1>👤 User Oldal (Dinamikus Route)</h1>
    <p><strong>User ID:</strong> {{ userId }}</p>
    <p>Ez egy dinamikus route példa, ahol az URL paraméter: <code>/user/:id</code></p>
    
    <div style="margin-top: 20px; padding: 15px; background: #e8f5e9; border-radius: 4px;">
      <h3>Beágyazott route (nested):</h3>
      <RouterView />
    </div>
  </div>
</template>
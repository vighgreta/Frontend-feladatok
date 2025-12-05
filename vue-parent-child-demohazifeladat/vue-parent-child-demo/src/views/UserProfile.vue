<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const userId = computed(() => route.params.id)
</script>

<template>
  <div style="padding: 15px; background: white; border-radius: 4px;">
    <h4>📋 User Profile (Beágyazott komponens)</h4>
    <p>Ez a profil oldal a User komponensen belül jelenik meg.</p>
    <p><strong>Profile User ID:</strong> {{ userId }}</p>
    <p>URL: <code>/user/{{ userId }}/profile</code></p>
  </div>
</template>
<script setup>
import Parent from '../components/Parent.vue'
</script>

<template>
  <div>
    <h1>🏠 Kezdőlap - Szülő és Gyermek Komponens Demo</h1>
    <p>Ez a példa bemutatja, hogyan történik az adatátadás Vue.js-ben:</p>
    <ul>
      <li><strong>Props:</strong> Szülő → Gyermek (lefelé)</li>
      <li><strong>Emit:</strong> Gyermek → Szülő (felfelé)</li>
    </ul>
    
    <div style="margin-top: 30px;">
      <Parent />
    </div>
  </div>
</template>
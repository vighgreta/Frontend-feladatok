<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="mt-6 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4">
    <h2 class="text-lg font-semibold mb-2">
      Sikeres regisztráció!
    </h2>
    <p class="text-sm mb-3">
      Az alábbi adatokkal regisztráltál:
    </p>
    <ul class="text-sm space-y-1">
      <li><span class="font-medium">Név:</span> {{ user.name }}</li>
      <li><span class="font-medium">Email:</span> {{ user.email }}</li>
      <li><span class="font-medium">Születési év:</span> {{ user.birthYear }}</li>
      <li>
        <span class="font-medium">Hírlevél:</span>
        {{ user.newsletter ? 'Igen' : 'Nem' }}
      </li>
    </ul>
  </div>
</template>
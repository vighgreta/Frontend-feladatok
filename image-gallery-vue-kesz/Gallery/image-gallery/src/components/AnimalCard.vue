<template>
  <div
    @click="$emit('select', animal)"
    class="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
  >
    <div class="relative h-64 overflow-hidden">
      <img
        :src="animal.image"
        :alt="animal.name"
        class="w-full h-full object-cover"
      />
      <div class="absolute top-3 right-3 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
        {{ animal.category }}
      </div>
    </div>
    <div class="p-5">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ animal.name }}</h2>
      <p class="text-gray-600 mb-4">{{ animal.description }}</p>
      <div class="space-y-1 text-sm text-gray-700">
        <p><strong>Megtekintések:</strong> {{ animal.views }}</p>
        <p><strong>Kedvelések:</strong> {{ animal.favorites }}</p>
        <p><strong>Letöltések:</strong> {{ animal.weight }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  animal: {
    type: Object,
    required: true
  }
})

defineEmits(['select'])
</script>
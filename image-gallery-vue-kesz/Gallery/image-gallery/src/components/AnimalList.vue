<template>
  <div
    @click="$emit('select', animal)"
    class="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all hover:shadow-2xl flex"
  >
    <img
      :src="animal.image"
      :alt="animal.name"
      class="w-48 h-48 object-cover"
    />
    <div class="flex-1 p-6">
      <div class="flex items-start justify-between mb-3">
        <h2 class="text-2xl font-bold text-gray-800">{{ animal.name }}</h2>
        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {{ animal.category }}
        </span>
      </div>
      <p class="text-gray-600 mb-4">{{ animal.description }}</p>
      <div class="flex gap-6 text-sm text-gray-700">
        <span><strong>Megtekintések:</strong> {{ animal.views }}</span>
        <span><strong>Kedvelések:</strong> {{ animal.favorites }}</span>
        <span><strong>Letöltések:</strong> {{ animal.weight }}</span>
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
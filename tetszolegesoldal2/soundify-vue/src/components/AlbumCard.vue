<template>
  <div
    class="bg-gray-900 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition-all cursor-pointer group"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="relative mb-4">
      <img
        :src="album.image"
        :alt="album.title"
        class="w-full aspect-square object-cover rounded-md shadow-lg"
      />
      <button
        :class="[
          'absolute bottom-2 right-2 bg-green-500 rounded-full p-3 shadow-lg transition-all',
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        ]"
        @click.stop="$emit('play', album)"
      >
        <Play class="w-5 h-5 text-black" fill="currentColor" />
      </button>
    </div>
    <h3 class="font-bold mb-1 truncate">{{ album.title }}</h3>
    <p class="text-sm text-gray-400">{{ album.artist }}</p>
    <p class="text-xs text-gray-500 mt-1">{{ album.year }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Play } from 'lucide-vue-next'

defineProps({
  album: {
    type: Object,
    required: true
  }
})

defineEmits(['play'])

const isHovered = ref(false)
</script>
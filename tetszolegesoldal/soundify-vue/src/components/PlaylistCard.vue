<template>
  <div
    class="bg-gray-900 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition-all cursor-pointer group"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="relative mb-4">
      <img
        :src="playlist.image"
        :alt="playlist.title"
        class="w-full aspect-square object-cover rounded-md shadow-lg"
      />
      <button
        :class="[
          'absolute bottom-2 right-2 bg-green-500 rounded-full p-3 shadow-lg transition-all',
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        ]"
        @click.stop="$emit('play', playlist)"
      >
        <Play class="w-5 h-5 text-black" fill="currentColor" />
      </button>
    </div>
    <h3 class="font-bold mb-1 truncate">{{ playlist.title }}</h3>
    <p class="text-sm text-gray-400 line-clamp-2">{{ playlist.description }}</p>
    <p v-if="showSongCount" class="text-xs text-gray-500 mt-2">
      {{ playlist.songs }} songs
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Play } from 'lucide-vue-next'

defineProps({
  playlist: {
    type: Object,
    required: true
  },
  showSongCount: {
    type: Boolean,
    default: false
  }
})

defineEmits(['play'])

const isHovered = ref(false)
</script>
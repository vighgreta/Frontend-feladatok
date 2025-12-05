<template>
  <div class="space-y-2">
    <div
      v-for="item in items"
      :key="item.id"
      class="flex items-center p-3 rounded-lg hover:bg-gray-800 cursor-pointer group transition-all"
    >
      <img
        :src="item.image"
        :alt="item.title"
        class="w-16 h-16 rounded object-cover mr-4"
      />
      <div class="flex-1">
        <h3 class="font-semibold">{{ item.title }}</h3>
        <p class="text-sm text-gray-400">
          {{ item.artist || item.description }}
        </p>
      </div>
      <div class="text-sm text-gray-400 mr-4">
        {{ item.songs ? `${item.songs} songs` : item.year }}
      </div>
      <button 
        class="opacity-0 group-hover:opacity-100 transition-opacity"
        @click="$emit('play', item)"
      >
        <Play class="w-10 h-10 text-green-500" fill="currentColor" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { Play } from 'lucide-vue-next'

defineProps({
  items: {
    type: Array,
    required: true
  }
})

defineEmits(['play'])
</script>
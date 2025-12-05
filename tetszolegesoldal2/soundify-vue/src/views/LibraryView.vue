<template>
  <div>
    <header class="bg-gradient-to-b from-gray-800 to-transparent p-6 pb-4">
      <h1 class="text-3xl font-bold">Your Library</h1>
    </header>

    <div class="px-6 pb-6">
      <div class="space-y-2">
        <div
          v-for="playlist in playlists"
          :key="playlist.id"
          class="flex items-center p-3 rounded-lg hover:bg-gray-800 cursor-pointer group"
        >
          <img
            :src="playlist.image"
            :alt="playlist.title"
            class="w-14 h-14 rounded object-cover mr-4"
          />
          <div class="flex-1">
            <h3 class="font-semibold">{{ playlist.title }}</h3>
            <p class="text-sm text-gray-400">Playlist • {{ playlist.songs }} songs</p>
          </div>
          <button 
            class="opacity-0 group-hover:opacity-100 transition-opacity"
            @click="playPlaylist(playlist)"
          >
            <Play class="w-10 h-10 text-green-500" fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Play } from 'lucide-vue-next'
import { mockData } from '../data/mockData'

const playlists = computed(() => mockData.playlists)

const playPlaylist = (playlist) => {
  console.log('Playing playlist:', playlist.title)
}
</script>
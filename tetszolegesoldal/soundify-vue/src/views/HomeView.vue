<template>
  <div>
    <header class="bg-gradient-to-b from-gray-800 to-transparent p-6 pb-4">
      <h1 class="text-3xl font-bold">Good evening</h1>
    </header>

    <div class="px-6 pb-6">
      <!-- Recently Played -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <Clock class="w-6 h-6 mr-2" />
          Recently Played
        </h2>
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="item in recentlyPlayed"
            :key="item.id"
            class="flex items-center bg-gray-800 bg-opacity-40 hover:bg-opacity-60 rounded transition-all cursor-pointer group"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="w-20 h-20 rounded-l object-cover"
            />
            <div class="flex-1 px-4 py-2">
              <p class="font-semibold text-sm truncate">{{ item.title }}</p>
              <p class="text-xs text-gray-400 truncate">{{ item.artist }}</p>
            </div>
            <button 
              class="opacity-0 group-hover:opacity-100 mr-4 transition-opacity"
              @click="playTrack(item)"
            >
              <Play class="w-10 h-10 text-green-500 hover:scale-110 transition-transform" fill="currentColor" />
            </button>
          </div>
        </div>
      </section>

      <!-- Trending Now -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <TrendingUp class="w-6 h-6 mr-2" />
          Trending Now
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <PlaylistCard
            v-for="playlist in trendingPlaylists"
            :key="playlist.id"
            :playlist="playlist"
            @play="playPlaylist"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Clock, TrendingUp, Play } from 'lucide-vue-next'
import PlaylistCard from '../components/PlaylistCard.vue'
import { mockData } from '../data/mockData'

const recentlyPlayed = computed(() => mockData.recentlyPlayed)
const trendingPlaylists = computed(() => 
  mockData.playlists.filter(p => 
    p.category === 'trending' || p.category === 'hip-hop'
  )
)

const playTrack = (track) => {
  console.log('Playing track:', track.title)
}

const playPlaylist = (playlist) => {
  console.log('Playing playlist:', playlist.title)
}
</script>
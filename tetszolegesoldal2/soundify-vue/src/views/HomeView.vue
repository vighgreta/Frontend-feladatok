<template>
  <div>
    <header class="bg-gradient-to-b from-gray-800 to-transparent p-6 pb-4">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold">Good evening</h1>
        <div class="flex items-center space-x-2">
          <button
            @click="viewMode = 'grid'"
            :class="[
              'p-2 rounded transition-colors',
              viewMode === 'grid' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
            ]"
          >
            <Grid class="w-5 h-5" />
          </button>
          <button
            @click="viewMode = 'list'"
            :class="[
              'p-2 rounded transition-colors',
              viewMode === 'list' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
            ]"
          >
            <List class="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>

    <div class="px-6 pb-6">
      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="bg-red-900 bg-opacity-20 border border-red-500 rounded-lg p-4 mb-6">
        <p class="text-red-400">❌ Error loading data: {{ error }}</p>
        <button 
          @click="loadData"
          class="mt-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
        >
          Retry
        </button>
      </div>

      <!-- Recently Played -->
      <section v-else class="mb-8">
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

      <!-- API-ból betöltött Playlistek -->
      <section v-if="!loading && !error" class="mb-8">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <TrendingUp class="w-6 h-6 mr-2" />
          Trending Playlists (from API)
        </h2>

        <!-- Grid nézet -->
        <div v-if="viewMode === 'grid'" class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <PlaylistCard
            v-for="playlist in apiPlaylists"
            :key="playlist.id"
            :playlist="playlist"
            @play="playPlaylist"
          />
        </div>

        <!-- Lista nézet -->
        <ListView
          v-else
          :items="apiPlaylists"
          @play="playPlaylist"
        />
      </section>

      <!-- API-ból betöltött Albumok -->
      <section v-if="!loading && !error" class="mb-8">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <Music class="w-6 h-6 mr-2" />
          New Albums (from API)
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <AlbumCard
            v-for="album in apiAlbums"
            :key="album.id"
            :album="album"
            @play="playAlbum"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Clock, TrendingUp, Music, Play, Grid, List } from 'lucide-vue-next'
import PlaylistCard from '../components/PlaylistCard.vue'
import AlbumCard from '../components/AlbumCard.vue'
import ListView from '../views/ListView.vue'
import { mockData } from '../data/mockData'
import { useAPI } from '../composables/useAPI'

const { loading, error, fetchPlaylists, fetchAlbums } = useAPI()

const recentlyPlayed = ref(mockData.recentlyPlayed)
const apiPlaylists = ref([])
const apiAlbums = ref([])
const viewMode = ref('grid')

const loadData = async () => {
  apiPlaylists.value = await fetchPlaylists()
  apiAlbums.value = await fetchAlbums()
}

onMounted(() => {
  loadData()
})

const playTrack = (track) => {
  console.log('Playing track:', track.title)
}

const playPlaylist = (playlist) => {
  console.log('Playing playlist:', playlist.title)
}

const playAlbum = (album) => {
  console.log('Playing album:', album.title)
}
</script>
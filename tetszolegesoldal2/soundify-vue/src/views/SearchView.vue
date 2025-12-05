<template>
  <div>
    <header class="bg-gradient-to-b from-gray-800 to-transparent p-6 pb-4">
      <div class="flex items-center space-x-4">
        <div class="flex-1 max-w-md relative">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            :value="searchQuery"
            @input="$emit('update:search', $event.target.value)"
            class="w-full pl-10 pr-4 py-3 rounded-full bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          @click="searchAPI"
          class="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition-colors"
        >
          Search API
        </button>
      </div>
    </header>

    <div class="px-6 pb-6">
      <!-- Loading -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>

      <!-- Results -->
      <div v-else>
        <h2 class="text-2xl font-bold mb-6">
          {{ searchQuery ? `Results for "${searchQuery}"` : 'Browse All' }}
          <span v-if="apiResults.length > 0" class="text-gray-400 text-lg ml-2">
            ({{ apiResults.length }} from API)
          </span>
        </h2>

        <!-- API Results -->
        <div v-if="apiResults.length > 0" class="mb-8">
          <h3 class="text-xl font-bold mb-4 text-green-400">🌐 API Results</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <PlaylistCard
              v-for="item in apiResults"
              :key="'api-' + item.id"
              :playlist="item"
              :show-song-count="true"
              @play="playPlaylist"
            />
          </div>
        </div>

        <!-- Local Results -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-blue-400">💾 Local Results</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <PlaylistCard
              v-for="playlist in filteredPlaylists"
              :key="'local-' + playlist.id"
              :playlist="playlist"
              :show-song-count="true"
              @play="playPlaylist"
            />
          </div>
        </div>

        <p v-if="filteredPlaylists.length === 0 && apiResults.length === 0" class="text-gray-400 text-center mt-8">
          No results found for "{{ searchQuery }}"
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search } from 'lucide-vue-next'
import PlaylistCard from '../components/PlaylistCard.vue'
import { mockData } from '../data/mockData'
import { useAPI } from '../composables/useAPI'

const props = defineProps({
  searchQuery: String
})

const emit = defineEmits(['update:search'])

const { loading, fetchPlaylists } = useAPI()
const apiResults = ref([])

// Lokális szűrés
const filteredPlaylists = computed(() => {
  if (!props.searchQuery) return mockData.playlists
  
  const query = props.searchQuery.toLowerCase()
  return mockData.playlists.filter(playlist =>
    playlist.title.toLowerCase().includes(query) ||
    playlist.description.toLowerCase().includes(query)
  )
})

// API keresés
const searchAPI = async () => {
  const allPlaylists = await fetchPlaylists()
  if (allPlaylists && props.searchQuery) {
    const query = props.searchQuery.toLowerCase()
    apiResults.value = allPlaylists.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    )
  } else {
    apiResults.value = allPlaylists || []
  }
}

const playPlaylist = (playlist) => {
  console.log('Playing playlist:', playlist.title)
}
</script>
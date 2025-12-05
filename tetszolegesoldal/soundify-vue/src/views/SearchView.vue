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
      </div>
    </header>

    <div class="px-6 pb-6">
      <h2 class="text-2xl font-bold mb-6">
        {{ searchQuery ? `Results for "${searchQuery}"` : 'Browse All' }}
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <PlaylistCard
          v-for="playlist in filteredPlaylists"
          :key="playlist.id"
          :playlist="playlist"
          :show-song-count="true"
          @play="playPlaylist"
        />
      </div>
      <p v-if="filteredPlaylists.length === 0" class="text-gray-400 text-center mt-8">
        No results found for "{{ searchQuery }}"
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Search } from 'lucide-vue-next'
import PlaylistCard from '../components/PlaylistCard.vue'
import { mockData } from '../data/mockData'

const props = defineProps({
  searchQuery: String
})

const emit = defineEmits(['update:search'])

const filteredPlaylists = computed(() => {
  if (!props.searchQuery) return mockData.playlists
  
  const query = props.searchQuery.toLowerCase()
  return mockData.playlists.filter(playlist =>
    playlist.title.toLowerCase().includes(query) ||
    playlist.description.toLowerCase().includes(query)
  )
})

const playPlaylist = (playlist) => {
  console.log('Playing playlist:', playlist.title)
}
</script>
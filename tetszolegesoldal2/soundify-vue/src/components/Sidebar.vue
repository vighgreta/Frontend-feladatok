<template>
  <aside class="w-64 bg-black flex flex-col p-6 space-y-6">
    <!-- Logo -->
    <div class="flex items-center space-x-2 mb-4">
      <Music class="w-8 h-8 text-green-500" />
      <span class="text-2xl font-bold">Soundify</span>
    </div>

    <!-- Fő navigáció -->
    <nav class="space-y-4">
      <button
        v-for="item in navItems"
        :key="item.id"
        @click="$emit('change-view', item.id)"
        :class="[
          'flex items-center space-x-3 w-full p-2 rounded transition-colors',
          activeView === item.id 
            ? 'text-white bg-gray-800' 
            : 'text-gray-400 hover:text-white'
        ]"
      >
        <component :is="item.icon" class="w-6 h-6" />
        <span class="font-semibold">{{ item.label }}</span>
      </button>
    </nav>

    <!-- Akciók -->
    <div class="border-t border-gray-800 pt-4 space-y-4">
      <button 
        v-for="action in actions"
        :key="action.label"
        class="flex items-center space-x-3 w-full p-2 text-gray-400 hover:text-white transition-colors"
      >
        <component :is="action.icon" class="w-6 h-6" />
        <span class="font-semibold">{{ action.label }}</span>
      </button>
    </div>

    <!-- Mentett playlistek -->
    <div class="flex-1 overflow-y-auto space-y-2">
      <div class="text-xs text-gray-400 uppercase tracking-wider mb-2">
        Playlists
      </div>
      <button
        v-for="(name, idx) in savedPlaylists"
        :key="idx"
        class="w-full text-left text-sm text-gray-400 hover:text-white transition-colors p-1"
      >
        {{ name }}
      </button>
    </div>
  </aside>
</template>

<script setup>
import { Home, Search, Library, Plus, Heart, Music } from 'lucide-vue-next'
import { savedPlaylists } from '../data/mockData'

defineProps({
  activeView: String
})

defineEmits(['change-view'])

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'search', label: 'Search', icon: Search },
  { id: 'library', label: 'Your Library', icon: Library }
]

const actions = [
  { label: 'Create Playlist', icon: Plus },
  { label: 'Liked Songs', icon: Heart }
]
</script>
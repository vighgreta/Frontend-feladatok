<template>
  <div class="flex h-screen bg-black text-white overflow-hidden">
    <!-- Sidebar komponens -->
    <Sidebar 
      :active-view="activeView"
      @change-view="handleViewChange"
    />

    <!-- Fő tartalom terület -->
    <main class="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black pb-24">
      <!-- Dinamikus nézet renderelés -->
      <component 
        :is="currentViewComponent"
        :search-query="searchQuery"
        @update:search="searchQuery = $event"
      />
    </main>

    <!-- Lejátszó sáv -->
    <PlayerBar />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Sidebar from './components/Sidebar.vue'
import PlayerBar from './components/PlayerBar.vue'
import HomeView from './views/HomeView.vue'
import SearchView from './views/SearchView.vue'
import LibraryView from './views/LibraryView.vue'

const activeView = ref('home')
const searchQuery = ref('')

const currentViewComponent = computed(() => {
  const views = {
    home: HomeView,
    search: SearchView,
    library: LibraryView
  }
  return views[activeView.value]
})

const handleViewChange = (view) => {
  activeView.value = view
  if (view !== 'search') {
    searchQuery.value = ''
  }
}
</script>
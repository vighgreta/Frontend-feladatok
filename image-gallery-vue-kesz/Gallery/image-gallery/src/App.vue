<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
    <!-- Header -->
    <header class="bg-white shadow-lg sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-6 py-6">
        <h1 class="text-4xl font-bold text-gray-800 mb-6">📸 Képtár Lapozással</h1>
        
        <!-- Keresés és szűrők -->
        <div class="flex flex-col md:flex-row gap-4 mb-4">
          <SearchBar v-model="searchQuery" />
          <ViewToggle v-model="viewMode" />
        </div>

        <!-- Kategória szűrő -->
        <CategoryFilter 
          :categories="categories" 
          v-model="selectedCategory"
        />

        <!-- Találatok száma -->
        <div class="mt-4 text-gray-600">
          <span class="font-semibold">{{ filteredAnimals.length }}</span> találat
          <span v-if="searchQuery"> a(z) "<span class="font-semibold">{{ searchQuery }}</span>" keresésre</span>
        </div>
      </div>
    </header>

    <!-- Főtartalom -->
    <main class="max-w-7xl mx-auto px-6 py-8">
      <!-- Grid nézet -->
      <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimalCard
          v-for="animal in currentAnimals"
          :key="animal.id"
          :animal="animal"
          @select="selectedAnimal = animal"
        />
      </div>

      <!-- Lista nézet -->
      <div v-else class="space-y-4">
        <AnimalList
          v-for="animal in currentAnimals"
          :key="animal.id"
          :animal="animal"
          @select="selectedAnimal = animal"
        />
      </div>

      <!-- Nincs találat -->
      <div v-if="filteredAnimals.length === 0" class="text-center py-12">
        <p class="text-2xl text-gray-500 mb-4">😕 Nincs találat a keresésre</p>
        <button
          @click="clearFilters"
          class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          Szűrők törlése
        </button>
      </div>

      <!-- Lapozás -->
      <Pagination
        v-if="filteredAnimals.length > 0"
        :current-page="currentPage"
        :total-pages="totalPages"
        :items-per-page="itemsPerPage"
        :start-index="startIndex"
        :end-index="endIndex"
        :total-items="filteredAnimals.length"
        @go-to-page="goToPage"
        @update:items-per-page="setItemsPerPage"
      />
    </main>

    <!-- Modal -->
    <AnimalModal
      :animal="selectedAnimal"
      @close="selectedAnimal = null"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'
import CategoryFilter from './components/CategoryFilter.vue'
import ViewToggle from './components/ViewToggle.vue'
import AnimalCard from './components/AnimalCard.vue'
import AnimalList from './components/AnimalList.vue'
import AnimalModal from './components/AnimalModal.vue'
import Pagination from './components/Pagination.vue'
import { useGallery } from './composables/useGallery'

const {
  searchQuery,
  currentPage,
  itemsPerPage,
  selectedCategory,
  categories,
  filteredAnimals,
  totalPages,
  startIndex,
  endIndex,
  currentAnimals,
  setSearchQuery,
  setCategory,
  setItemsPerPage,
  goToPage,
  clearFilters
} = useGallery()

const viewMode = ref('grid')
const selectedAnimal = ref(null)
</script>
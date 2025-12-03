import { ref, computed } from 'vue'
import { animals } from '../data/animals'

export function useGallery() {
  // State
  const searchQuery = ref('')
  const currentPage = ref(1)
  const itemsPerPage = ref(6)
  const selectedCategory = ref('all')

  // Kategóriák
  const categories = computed(() => {
    return ['all', ...new Set(animals.map(a => a.category))]
  })

  // Szűrt állatok
  const filteredAnimals = computed(() => {
    let filtered = animals

    // Kategória szűrés
    if (selectedCategory.value !== 'all') {
      filtered = filtered.filter(animal => animal.category === selectedCategory.value)
    }

    // Keresés
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(animal =>
        animal.name.toLowerCase().includes(query) ||
        animal.description.toLowerCase().includes(query) ||
        animal.continent.toLowerCase().includes(query)
      )
    }

    return filtered
  })

  // Lapozás számítások
  const totalPages = computed(() => 
    Math.ceil(filteredAnimals.value.length / itemsPerPage.value)
  )

  const startIndex = computed(() => 
    (currentPage.value - 1) * itemsPerPage.value
  )

  const endIndex = computed(() => 
    startIndex.value + itemsPerPage.value
  )

  const currentAnimals = computed(() => 
    filteredAnimals.value.slice(startIndex.value, endIndex.value)
  )

  // Metódusok
  const setSearchQuery = (query) => {
    searchQuery.value = query
    currentPage.value = 1 // Reset to first page
  }

  const setCategory = (category) => {
    selectedCategory.value = category
    currentPage.value = 1
  }

  const setItemsPerPage = (count) => {
    itemsPerPage.value = count
    currentPage.value = 1
  }

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const clearFilters = () => {
    searchQuery.value = ''
    selectedCategory.value = 'all'
    currentPage.value = 1
  }

  return {
    // State
    searchQuery,
    currentPage,
    itemsPerPage,
    selectedCategory,
    
    // Computed
    categories,
    filteredAnimals,
    totalPages,
    startIndex,
    endIndex,
    currentAnimals,
    
    // Methods
    setSearchQuery,
    setCategory,
    setItemsPerPage,
    goToPage,
    clearFilters
  }
}
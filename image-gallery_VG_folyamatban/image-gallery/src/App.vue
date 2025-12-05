<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-3xl mb-6 text-center font-bold">Képtár lapozással</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 justify-center">
      <!-- Megjelenített képek kártyái -->
      <ImageCard
  v-for="image in pagedImages"
  :key="image.id"
  :src="image.src"
  :alt="image.title"
  :title="image.title"
  :description="image.description"
  :views="image.views"
  :likes="image.likes"
  :downloads="image.downloads"
  :tags="image.tags"
/>

    </div>

    <!-- Lapozó gombok -->
    <div class="flex justify-center space-x-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-blue-200"
      >
        Előző
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-blue-200"
      >
        Következő
      </button>
    </div>

    <p class="mt-4 text-center">Oldal: {{ currentPage }} / {{ totalPages }}</p>
  </div>
</template>

<script>
import ImageCard from './components/ImageCard.vue'

export default {
  name: 'App',
  components: { ImageCard },
  data() {
    return {
      currentPage: 1,             // Az aktuális lap száma
      pageSize: 6,                // Egy oldalon megjelenő képek száma
      images: [
  {
    id: 1,
    src: '/images/photo1.jpg',
    title: 'Elefánt',
    description: 'Egy afrikai elefánt a szavannán.',
    views: 516650,
    likes: 1222,
    downloads: 332904,
    tags: ['elephant', 'wildlife', 'africa']
  },
  {
    id: 2,
    src: '/images/photo2.jpg',
    title: 'Zsiráf',
    description: 'Magas zsiráf étkezés közben.',
    views: 96206,
    likes: 259,
    downloads: 68417,
    tags: ['giraffe', 'animal', 'nature']
  },
  {
    id: 3,
    src: '/images/photo3.jpg',
    title: 'Fehér róka',
    description: 'A szavanna királya pihen.',
    views: 204122,
    likes: 983,
    downloads: 120432,
    tags: ['lion', 'predator', 'savanna']
  },
  {
    id: 4,
    src: '/images/photo4.jpg',
    title: 'Róka',
    description: 'A szavanna királya pihen.',
    Views: 522553,
    Downloads: 307441,
    Likes: 1659,
    tags: ['fox', 'nature', 'animals']
  },
  {
    id: 5,
    src: '/images/photo5.jpg',
    title: 'Kutya',
    description: 'A szavanna királya pihen.',
    Views: 72763,
    Downloads: 65548,
    Likes: 108,
    tags: ['lion', 'predator', 'savanna']
  },
  {
    id: 6,
    src: '/images/photo6.jpg',
    title: 'Mezeinyúl',
    description: 'A szavanna királya pihen.',
    Views: 8047,
    Downloads: 7158,
    Likes: 95,
    tags: ['lion', 'predator', 'savanna']
  },
  {
    id: 7,
    src: '/images/photo7.jpg',
    title: 'Mosómedve',
    description: 'A szavanna királya pihen.',
    Views: 59776,
    Downloads: 48899,
    Likes: 195,
    tags: ['lion', 'predator', 'savanna']
  },
  {
    id: 8,
    src: '/images/photo8.jpg',
    title: 'Alpaka',
    description: 'A szavanna királya pihen.',
    Views: 51578,
    Downloads: 38498,
    Likes: 157,
    tags: ['lion', 'predator', 'savanna']
  },
  {
    id: 9,
    src: '/images/photo9.jpg',
    title: 'Macska',
    description: 'A szavanna királya pihen.',
    Views: 143102,
    Downloads: 107293,
    Likes: 507,
    tags: ['lion', 'predator', 'savanna']
  },
  {
    id: 10,
    src: '/images/photo10.jpg',
    title: 'Sas',
    description: 'A szavanna királya pihen.',
    Views: 59724,
    Downloads: 49789,
    Likes: 240,
    tags: ['lion', 'predator', 'savanna']
  },
  {
    id: 11,
    src: '/images/photo11.jpg',
    title: 'Tengerimalac',
    description: 'A szavanna királya pihen.',
    Views: 78768,
    Downloads: 61816,
    Likes: 161,
    tags: ['lion', 'predator', 'savanna']
  },
  {
    id: 12,
    src: '/images/photo12.jpg',
    title: 'Hal',
    description: 'A szavanna királya pihen.',
    Views: 510685,
    Downloads: 321488,
    Likes: 1139,
    tags: ['lion', 'predator', 'savanna']
  },
   {
    id: 13,
    src: '/images/photo13.jpg',
    title: 'Csiga',
    description: 'A szavanna királya pihen.',
    Views: 133284,
    Downloads: 119466,
    Likes: 257,
    tags: ['lion', 'predator', 'savanna']
  },
  {
    id: 14,
    src: '/images/photo14.jpg',
    title: 'Macska',
    description: 'A szavanna királya pihen.',
    Views: 936398,
    Downloads: 602444,
    Likes: 2129,
    tags: ['lion', 'predator', 'savanna']
  },
  {
    id: 15,
    src: '/images/photo15.jpg',
    title: 'Bárány',
    description: 'A szavanna királya pihen.',
    Views: 83762,
    Downloads: 72652,
    Likes: 198,
    tags: ['lion', 'predator', 'savanna']
  },
   {
    id: 16,
    src: '/images/photo16.jpg',
    title: 'Macska',
    description: 'A szavanna királya pihen.',
    Views: 120681,
    Downloads: 31590,
    Likes: 223,
    tags: ['lion', 'predator', 'savanna']
  },
  {
    id: 17,
    src: '/images/photo17.jpg',
    title: 'Róka',
    description: 'A szavanna királya pihen.',
    Views: 130906,
    Downloads: 115619,
    Likes: 376,
    tags: ['lion', 'predator', 'savanna']
  },
   {
    id: 18,
    src: '/images/photo18.jpg',
    title: 'Kacsa',
    description: 'A szavanna királya pihen.',
    Views: 94140,
    Downloads: 81114,
    Likes: 194,
    tags: ['lion', 'predator', 'savanna']
  },
  {
    id: 19,
    src: '/images/photo19.jpg',
    title: 'Zsiráf',
    description: 'A szavanna királya pihen.',
    Views: 61907,
    Downloads: 43934,
    Likes: 114,
    tags: ['lion', 'predator', 'savanna']
  },
   {
    id: 20,
    src: '/images/photo20.jpg',
    title: 'Oroszlán',
    description: 'A szavanna királya pihen.',
    views: 204122,
    likes: 983,
    downloads: 120432,
    tags: ['lion', 'predator', 'savanna']
  }
]

    }
  },
  computed: {
    // Kiszámolja a teljes oldalak számát az összes kép és oldalméret alapján
    totalPages() {
      return Math.ceil(this.images.length / this.pageSize)
    },

    // A jelenlegi oldalon megjelenítendő képek szelete
    pagedImages() {
      const start = (this.currentPage - 1) * this.pageSize
      return this.images.slice(start, start + this.pageSize)
    },
  },
  methods: {
    // Visszalép az előző oldalra, ha nem az első oldalon vagyunk
    prevPage() {
      if (this.currentPage > 1) this.currentPage--
    },

    // Továbblép a következő oldalra, ha nem az utolsó oldalon vagyunk
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++
    },
  },
}
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

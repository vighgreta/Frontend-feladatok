<template>
  <div class="mt-12 flex flex-col items-center gap-6">
    <!-- Elem per oldal választó -->
    <div class="flex items-center gap-3">
      <label class="text-gray-700 font-semibold">Elemek per oldal:</label>
      <select
        :value="itemsPerPage"
        @change="$emit('update:itemsPerPage', Number($event.target.value))"
        class="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      >
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
        <option value="12">12</option>
        <option value="15">15</option>
      </select>
    </div>

    <!-- Lapozó gombok -->
    <div class="flex items-center gap-2">
      <button
        @click="$emit('goToPage', currentPage - 1)"
        :disabled="currentPage === 1"
        class="p-3 rounded-lg bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft class="w-5 h-5" />
      </button>

      <!-- Oldalszámok -->
      <div class="flex gap-2">
        <button
          v-for="page in visiblePages"
          :key="page"
          @click="$emit('goToPage', page)"
          :class="[
            'px-4 py-2 rounded-lg font-semibold transition-colors',
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-lg'
          ]"
        >
          {{ page }}
        </button>
      </div>

      <button
        @click="$emit('goToPage', currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="p-3 rounded-lg bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
      >
        <ChevronRight class="w-5 h-5" />
      </button>
    </div>

    <!-- Oldal info -->
    <p class="text-gray-600">
      <span class="font-semibold">{{ currentPage }}</span> / 
      <span class="font-semibold">{{ totalPages }}</span> oldal
      <span class="mx-2">•</span>
      <span>Megjelenítve: {{ startIndex + 1 }}-{{ Math.min(endIndex, totalItems) }} / {{ totalItems }}</span>
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  currentPage: Number,
  totalPages: Number,
  itemsPerPage: Number,
  startIndex: Number,
  endIndex: Number,
  totalItems: Number
})

defineEmits(['goToPage', 'update:itemsPerPage'])

// Látható oldalszámok (max 5 oldal gomb)
const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, props.currentPage - Math.floor(maxVisible / 2))
  let end = Math.min(props.totalPages, start + maxVisible - 1)

  if (end - start < maxVisible - 1) {
    start = Math.max(1, end - maxVisible + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})
</script>
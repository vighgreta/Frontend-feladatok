<template>
  <div class="flex-1 relative">
    <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    <input
      type="text"
      placeholder="Keresés név, leírás vagy kontinens alapján..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full pl-10 pr-10 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
    />
    <button
      v-if="modelValue"
      @click="$emit('update:modelValue', '')"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
    >
      <X class="w-5 h-5" />
    </button>
  </div>
</template>

<script setup>
import { Search, X } from 'lucide-vue-next'

defineProps({
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>
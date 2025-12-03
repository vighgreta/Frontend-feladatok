<template>
  <div class="flex gap-2">
    <button
      @click="$emit('update:modelValue', 'grid')"
      :class="[
        'p-3 rounded-lg transition-colors',
        modelValue === 'grid'
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      ]"
      title="Grid nézet"
    >
      <Grid class="w-5 h-5" />
    </button>
    <button
      @click="$emit('update:modelValue', 'list')"
      :class="[
        'p-3 rounded-lg transition-colors',
        modelValue === 'list'
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      ]"
      title="Lista nézet"
    >
      <List class="w-5 h-5" />
    </button>
  </div>
</template>

<script setup>
import { Grid, List } from 'lucide-vue-next'

defineProps({
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>
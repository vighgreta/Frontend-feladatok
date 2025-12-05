<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="category in categories"
      :key="category"
      @click="$emit('update:modelValue', category)"
      :class="[
        'px-4 py-2 rounded-full transition-colors font-medium',
        modelValue === category
          ? 'bg-blue-500 text-white shadow-lg'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      ]"
    >
      {{ category === 'all' ? '🌍 Összes' : category }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: Array,
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>
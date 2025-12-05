<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="animal"
        class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
        @click="$emit('close')"
      >
        <div
          class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <div class="relative">
            <img
              :src="animal.image"
              :alt="animal.name"
              class="w-full h-96 object-cover rounded-t-2xl"
            />
            <button
              @click="$emit('close')"
              class="absolute top-4 right-4 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
            >
              <X class="w-6 h-6" />
            </button>
          </div>
          <div class="p-8">
            <div class="flex items-start justify-between mb-4">
              <h2 class="text-4xl font-bold text-gray-800">{{ animal.name }}</h2>
              <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                {{ animal.category }}
              </span>
            </div>
            <p class="text-xl text-gray-600 mb-6">{{ animal.description }}</p>
            <div class="grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-xl">
              <div>
                <p class="text-gray-500 text-sm mb-1">Kontinens</p>
                <p class="text-xl font-semibold text-gray-800">{{ animal.continent }}</p>
              </div>
              <div>
                <p class="text-gray-500 text-sm mb-1">Megtekintések</p>
                <p class="text-xl font-semibold text-gray-800">{{ animal.views }}</p>
              </div>
              <div>
                <p class="text-gray-500 text-sm mb-1">Kedvelések</p>
                <p class="text-xl font-semibold text-gray-800">{{ animal.favorites }}</p>
              </div>
              <div>
                <p class="text-gray-500 text-sm mb-1">Letöltések</p>
                <p class="text-xl font-semibold text-gray-800">{{ animal.weight }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { X } from 'lucide-vue-next'

defineProps({
  animal: Object
})

defineEmits(['close'])
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
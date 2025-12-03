<template>
  <div class="border rounded shadow p-3 bg-white">
    <img :src="src" :alt="alt" class="w-full h-48 object-cover rounded" />

    <h2 class="mt-2 text-lg font-bold text-center">{{ title }}</h2>

    <p class="text-sm text-gray-600 mt-1">{{ description }}</p>

    <div class="mt-3 text-sm">
      <p><strong>Megtekintések:</strong> {{ views.toLocaleString() }}</p>
      <p><strong>Kedvelések:</strong> {{ likes.toLocaleString() }}</p>
      <p><strong>Letöltések:</strong> {{ downloads.toLocaleString() }}</p>
    </div>

    <div class="mt-3 flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="text-xs bg-gray-200 px-2 py-1 rounded-full"
      >
        #{{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: "Kép" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 },
    tags: { type: Array, default: () => [] }
  }
}
</script>

<style scoped>
</style>

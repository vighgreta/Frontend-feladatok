<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="text-4xl font-bold text-blue-600 mb-4">{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">count is {{ count }}</button>
    <p class="text-gray-700 text-lg mb-6">
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p class="text-gray-700 text-lg mb-6">
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p class="text-gray-700 text-lg mb-6">
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
</template>
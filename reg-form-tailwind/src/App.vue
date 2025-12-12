<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="w-full max-w-md mx-4">
      <h1 class="text-2xl font-bold text-center mb-6">
        Regisztrációs űrlap
      </h1>
      <RegisterForm />
    </div>
  </div>
</template>

<script setup>
import RegisterForm from './components/RegisterForm.vue'
</script>
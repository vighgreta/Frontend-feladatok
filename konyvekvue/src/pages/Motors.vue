<template>
  <div class="container mt-4">
    <h2>Motorok</h2>

    <div class="row">
      <MotorCard
        v-for="motor in motorsStore.motors"
        :key="motor.id"
        :motor="motor"
        @show-details="goToDetails"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMotorsStore } from '../stores/motors'
import MotorCard from '../components/MotorCard.vue'

const motorsStore = useMotorsStore()

onMounted(() => motorsStore.fetchMotors())

function goToDetails(id) {
  console.log("Motor ID:", id)
  window.location.href = `/motors/${id}`
}
</script>

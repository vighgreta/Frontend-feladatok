<template>
  <div v-if="motor" class="container">
    <div class="row">
      <div class="col-lg-4 text-center">
        <img :src="motor.kep" class="img-fluid mb-3" :alt="motor.tipus" />
      </div>

      <div class="col-lg-8">
        <h2>{{ motor.gyarto }} {{ motor.tipus }}</h2>
        <h5>Évjárat: {{ motor.evjarat }}</h5>

        <div class="card mb-3">
          <div class="card-body">
            <strong>Motor adatai</strong>
            <div>Azonosító: {{ motor.id }}</div>
            <div>Motor ID: {{ motor.motorAzonosito }}</div>
          </div>
        </div>

        <div class="mb-3">
          <strong>Leírás</strong>
          <p>{{ motor.leiras }}</p>
        </div>

        <div class="mb-3">
          <strong>Értékelések</strong>
          <div class="progress">
            <div class="progress-bar bg-success" :style="`width:${motor.rating * 20}%`">
              {{ motor.rating }}/5
            </div>
          </div>
          <small>Több mint 10 000 motoros értékelése alapján</small>
        </div>

        <button class="btn btn-secondary me-2" @click="$router.push('/motors')">
          Vissza a motorokhoz
        </button>
        <button class="btn btn-primary">Kosárba teszem</button>
      </div>
    </div>
  </div>

  <div v-else class="container mt-5">
    <p>Nincs ilyen motor ezzel az azonosítóval.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useMotorsStore } from '../stores/motors'
import { computed, onMounted } from 'vue'

const route = useRoute()
const motorsStore = useMotorsStore()

onMounted(() => motorsStore.fetchMotors())

const motor = computed(() =>
  motorsStore.motors.find(m => m.id == route.params.id)
)
</script>

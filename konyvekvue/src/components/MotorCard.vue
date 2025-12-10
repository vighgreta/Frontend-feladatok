<template>
  <div class="col-md-6 col-lg-5 mb-5">
    <div class="card h-100 w-100">
      <img 
        :src="motor.kep" 
        class="card-img-top" 
        :alt="motor.tipus" 
        style="height:280px; object-fit:cover;"
      >
      <div class="card-body">
        <h5 class="card-title">{{ motor.gyarto }} {{ motor.tipus }}</h5>

        <button @click="goToDetails" class="btn btn-primary w-100 mt-2">
          Részletek
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  motor: Object
})

const router = useRouter()

function goToDetails() {
  router.push(`/motors/${props.motor.id}`)
}
</script>

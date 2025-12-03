<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const message = ref('Hello from parent!')
const receivedData = ref([])

const handleChildEvent = (payload) => {
  console.log('Gyermek esemény:', payload)
  receivedData.value.push({
    time: new Date().toLocaleTimeString(),
    data: payload
  })
  message.value = 'Updated from child!'
}
</script>

<template>
  <div style="border: 2px solid #42b983; padding: 20px; border-radius: 8px;">
    <h2>👨‍👩‍👧 Szülő Komponens</h2>
    <p><strong>Szülő üzenet:</strong> {{ message }}</p>
    
    <div v-if="receivedData.length > 0" 
         style="background: #f0f0f0; padding: 10px; margin: 10px 0; border-radius: 4px;">
      <h4>Gyermektől kapott adatok:</h4>
      <ul>
        <li v-for="(item, index) in receivedData" :key="index">
          {{ item.time }} - {{ item.data }}
        </li>
      </ul>
    </div>
    
    <hr style="margin: 20px 0;" />
    
    <!-- Props átadása a gyermeknek -->
    <Child 
      :message="message" 
      @custom-event="handleChildEvent" 
    />
  </div>
</template>
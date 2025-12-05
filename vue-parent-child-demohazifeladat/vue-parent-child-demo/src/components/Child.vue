<script setup>
import { ref } from 'vue'

// Props fogadása
const props = defineProps(['message'])

// Emit definiálása
const emit = defineEmits(['custom-event'])

const counter = ref(0)

const sendToParent = () => {
  counter.value++
  // Esemény kibocsátása a szülő felé
  emit('custom-event','Data from child! (Click #\${counter.value})\'')
}
</script>

<template>
  <div style="border: 2px solid #f39c12; padding: 20px; border-radius: 8px; background: #fff9e6;">
    <h3>👶 Gyermek Komponens</h3>
    <p><strong>Kapott üzenet (props):</strong> {{ props.message }}</p>
    <button 
      @click="sendToParent"
      style="background: #42b983; color: white; border: none; padding: 10px 20px; 
             border-radius: 4px; cursor: pointer; font-size: 16px;">
      📤 Küldés szülőnek (emit)
    </button>
    <p style="color: #666; font-size: 14px; margin-top: 10px;">
      Kattintások száma: {{ counter }}
    </p>
  </div>
</template>
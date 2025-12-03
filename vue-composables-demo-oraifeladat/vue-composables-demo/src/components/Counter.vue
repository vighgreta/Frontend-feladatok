<template>
  <div class="counter-card" :class="{ even: isEven }">
    <h3>{{ title }}</h3>
    <p>Érték: <strong>{{ count }}</strong></p>
    <p>Kétszerese: {{ double }}</p>
    <div class="buttons">
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
import counterMixin from '../mixins/counterMixin.js'

export default {
  name: 'Counter',
  mixins: [counterMixin],

  props: {
    title: String,
    counterKey: String
  }
}
</script>

<style scoped>
.counter-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  background: white;
}
.even {
  background: #e8f5e8;
}
.buttons button {
  margin: 0 5px;
  padding: 8px 12px;
}
</style>



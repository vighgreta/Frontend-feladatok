<template>

  <div class="glitch" :data-text="text">{{ text }}</div>

</template>

<script lang="ts" setup>

defineProps<{ text: string }>()

</script>

<style scoped>

.glitch {

  position: relative;

  font-size: 3em;

  color: white;

  font-weight: bold;

  text-transform: uppercase;

  letter-spacing: 0.1em;

  animation: glitch 2s infinite;

}

.glitch::before,

.glitch::after {

  content: attr(data-text);

  position: absolute;

  left: 0;

  top: 0;

  width: 100%;

  overflow: hidden;

  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);

}

.glitch::before {

  left: 2px;

  text-shadow: -2px 0 red;

  animation: glitchTop 2s infinite;

}

.glitch::after {

  left: -2px;

  top: 2px;

  text-shadow: -2px 0 cyan;

  animation: glitchBottom 2s infinite;

}

@keyframes glitch { }

@keyframes glitchTop { }

@keyframes glitchBottom { }

</style>

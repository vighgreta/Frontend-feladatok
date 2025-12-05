<template>
  <div class="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-4 py-3 z-50">
    <div class="flex items-center justify-between">
      <!-- Bal oldal - Currently playing -->
      <div class="flex items-center space-x-4 flex-1">
        <div class="w-14 h-14 bg-gray-700 rounded flex items-center justify-center">
          <Music class="w-6 h-6 text-gray-400" />
        </div>
        <div>
          <p class="font-semibold text-sm">No song playing</p>
          <p class="text-xs text-gray-400">Select a track to play</p>
        </div>
        <button class="text-gray-400 hover:text-white">
          <Heart class="w-5 h-5" />
        </button>
      </div>

      <!-- Közép - Player controls -->
      <div class="flex-1 flex flex-col items-center">
        <div class="flex items-center space-x-4 mb-2">
          <button class="text-gray-400 hover:text-white">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"/>
            </svg>
          </button>
          <button class="bg-white text-black rounded-full p-2 hover:scale-105 transition-transform">
            <Play class="w-5 h-5" fill="currentColor" />
          </button>
          <button class="text-gray-400 hover:text-white">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"/>
            </svg>
          </button>
        </div>
        <!-- Progress bar -->
        <div class="w-full max-w-md flex items-center space-x-2">
          <span class="text-xs text-gray-400">0:00</span>
          <div class="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div class="h-full bg-gray-500 w-0"></div>
          </div>
          <span class="text-xs text-gray-400">0:00</span>
        </div>
      </div>

      <!-- Jobb oldal - Volume controls -->
      <div class="flex-1 flex items-center justify-end space-x-3">
        <button class="text-gray-400 hover:text-white">
          <Radio class="w-5 h-5" />
        </button>
        <div class="flex items-center space-x-2">
          <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 16 16">
            <path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"/>
          </svg>
          <div class="w-24 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div class="h-full bg-white w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Play, Heart, Music, Radio } from 'lucide-vue-next'
</script>
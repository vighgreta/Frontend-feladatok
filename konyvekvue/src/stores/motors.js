// stores/motors.js
import { defineStore } from 'pinia'

export const useMotorsStore = defineStore('motors', {
  state: () => ({
    motors: []
  }),
  actions: {
    async fetchMotors() {
      try {
        // Eredeti fetch helyett ideiglenes mock adat
        this.motors = [
          { id: 1, name: 'Yamaha R1', price: 20000 },
          { id: 2, name: 'Kawasaki Ninja', price: 18000 },
          { id: 3, name: 'Honda CBR', price: 15000 }
        ]
      } catch (error) {
        console.error('Hiba a motorok betöltésénél:', error)
        this.motors = []
      }
    }
  }
})
